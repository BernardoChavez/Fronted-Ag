import React from 'react';
import { useAuth } from '../hooks/useAuth.jsx';
import { useFetchServicios } from '../hooks/userFecthServicios';
import { useFetchUsers } from '../hooks/userFecthUsuarios';
import { useApiError } from '../hooks/useApiError';
import LoadingSpinner from './LoadingSpinner';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const { servicios, loading: serviciosLoading } = useFetchServicios();
    const { Users, loading: usersLoading } = useFetchUsers();
    const { error, handleError } = useApiError();

    const handleLogout = async () => {
        try {
            await logout();
        } catch (err) {
            handleError(err);
        }
    };

    if (serviciosLoading || usersLoading) {
        return <LoadingSpinner text="Cargando dashboard..." />;
    }

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard - AG Mantenimiento</h1>
                <div className="user-info">
                    <span>Bienvenido, {user?.username || 'Usuario'}</span>
                    <button onClick={handleLogout} className="logout-btn">
                        Cerrar Sesión
                    </button>
                </div>
            </header>

            {error && (
                <div className="error-message">
                    Error: {error}
                </div>
            )}

            <div className="dashboard-content">
                <section className="servicios-section">
                    <h2>Servicios ({servicios.length})</h2>
                    <div className="servicios-grid">
                                                 {servicios.map((servicio) => (
                             <div key={servicio.id} className="servicio-card">
                                 <h3>{servicio.nombre}</h3>
                                 <p>ID: {servicio.id}</p>
                             </div>
                         ))}
                    </div>
                </section>

                <section className="usuarios-section">
                    <h2>Usuarios ({Users.length})</h2>
                    <div className="usuarios-grid">
                                                 {Users.map((usuario) => (
                             <div key={usuario.id} className="usuario-card">
                                 <h3>{usuario.user?.username || 'Usuario'}</h3>
                                 <p>Email: {usuario.user?.email || 'N/A'}</p>
                                 <p>Teléfono: {usuario.telefono || 'N/A'}</p>
                                 <p>Dirección: {usuario.direccion || 'N/A'}</p>
                             </div>
                         ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Dashboard; 