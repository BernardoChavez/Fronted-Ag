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

    useEffect(() => {
        // Verificar si hay un token al cargar la app
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            // Reconstruir el usuario desde los datos del token
            const userData = {
                id: localStorage.getItem('user_id'),
                username: localStorage.getItem('username'),
                email: localStorage.getItem('email'),
                telefono: localStorage.getItem('telefono'),
                direccion: localStorage.getItem('direccion')
            };
            setUser(userData);
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        try {
            setError(null);
            const response = await loginApi(credentials);
            const { access, refresh, user_id, username, email, telefono, direccion } = response.data;
            
            // Guardar tokens
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);
            
            // Guardar datos del usuario
            localStorage.setItem('user_id', user_id);
            localStorage.setItem('username', username);
            localStorage.setItem('email', email);
            localStorage.setItem('telefono', telefono || '');
            localStorage.setItem('direccion', direccion || '');
            
            // Establecer usuario en estado
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
            setError(err.response?.data?.detail || 'Error al iniciar sesión');
            throw err;
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
            // Limpiar todos los datos
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
        isAuthenticated: !!user
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}; 