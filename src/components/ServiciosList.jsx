import React from 'react';
import { useFetchServicios } from '../hooks/userFecthServicios';
import { useApiError } from '../hooks/useApiError';

const ServiciosList = () => {
    const { servicios, loading } = useFetchServicios();
    const { error, handleError } = useApiError();

    if (loading) {
        return <div>Cargando servicios...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="servicios-list">
            <h2>Servicios Disponibles</h2>
            {servicios.length === 0 ? (
                <p>No hay servicios disponibles</p>
            ) : (
                <div className="servicios-grid">
                    {servicios.map((servicio) => (
                        <div key={servicio.id} className="servicio-card">
                            <h3>{servicio.nombre}</h3>
                            <p>{servicio.descripcion}</p>
                            <p>Precio: ${servicio.precio}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ServiciosList; 