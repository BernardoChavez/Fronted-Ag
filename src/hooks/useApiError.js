import { useState } from 'react';

export const useApiError = () => {
    const [error, setError] = useState(null);

    const handleError = (err) => {
        let message = 'Ha ocurrido un error inesperado';
        
        if (err.response) {
            // Error de respuesta del servidor
            const { status, data } = err.response;
            
            switch (status) {
                case 400:
                    message = data?.message || 'Datos inválidos';
                    break;
                case 401:
                    message = 'No autorizado. Por favor inicia sesión';
                    break;
                case 403:
                    message = 'No tienes permisos para realizar esta acción';
                    break;
                case 404:
                    message = 'Recurso no encontrado';
                    break;
                case 500:
                    message = 'Error interno del servidor';
                    break;
                default:
                    message = data?.message || `Error ${status}`;
            }
        } else if (err.request) {
            // Error de red
            message = 'Error de conexión. Verifica tu internet';
        }
        
        setError(message);
        return message;
    };

    const clearError = () => {
        setError(null);
    };

    return { error, handleError, clearError };
}; 