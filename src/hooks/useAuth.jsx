import { useState, useEffect, createContext, useContext } from 'react';
import { login as loginApi, logout as logoutApi } from '../api/authApi';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const refreshToken = async () => {
        try {
            const refresh = localStorage.getItem('refresh_token');
            if (!refresh) {
                throw new Error('No hay refresh token');
            }
            return true;
        } catch (err) {
            return false;
        }
    };

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        
        if (accessToken) {
            const userData = {
                id: localStorage.getItem('user_id'),
                username: localStorage.getItem('username'),
                email: localStorage.getItem('email'),
                telefono: localStorage.getItem('telefono'),
                direccion: localStorage.getItem('direccion')
            };
            
            if (userData.username) {
                setUser(userData);
                console.log('Usuario autenticado:', userData.username);
            } else {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                localStorage.removeItem('user_id');
                localStorage.removeItem('username');
                localStorage.removeItem('email');
                localStorage.removeItem('telefono');
                localStorage.removeItem('direccion');
                console.log('Token inválido, limpiando datos');
            }
            
            try {
                const tokenData = JSON.parse(atob(accessToken.split('.')[1]));
                const expirationTime = tokenData.exp * 1000;
                const currentTime = Date.now();
                const timeUntilExpiry = expirationTime - currentTime;
                
                if (timeUntilExpiry < 5 * 60 * 1000) {
                    refreshToken();
                }
            } catch (err) {
                console.error('Error al verificar token:', err);
            }
        } else {
            console.log('No hay usuario autenticado');
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            setError(null);
            setLoading(true);
            
            const response = await loginApi(credentials);
            const { access, refresh, user_id, username, email, telefono, direccion } = response.data;
            
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('telefono', telefono || '');
            localStorage.setItem('direccion', direccion || '');
            
            const userData = {
                id: user_id,
                username,
                email,
                telefono: telefono || '',
                direccion: direccion || ''
            };
            setUser(userData);
            
            return response;
        } catch (err) {
            const errorMessage = err.response?.data?.detail || 
                               err.response?.data?.message || 
                               'Error al iniciar sesión';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
                await logoutApi({ refresh: refreshToken });
            }
        } catch (err) {
            console.error('Error en logout:', err);
        } finally {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('telefono');
            localStorage.removeItem('direccion');
            setUser(null);
        }
    };

    const value = {
        user,
        loading,
        error,
        login,
        logout,
        refreshToken,
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}; 