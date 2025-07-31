import { useState, useCallback } from 'react';

export const useApiError = () => {
    const [error, setError] = useState(null);

    const handleError = useCallback((err) => {
        console.error('API Error:', err);
        
        let errorMessage = 'Ha ocurrido un error inesperado';
        
        if (err.response) {
            // El servidor respondió con un código de estado de error
            const status = err.response.status;
            const data = err.response.data;
            
            switch (status) {
                case 400:
                    errorMessage = data?.detail || data?.message || 'Datos inválidos';
                    break;
                case 401:
                    errorMessage = 'Credenciales inválidas';
                    break;
                case 403:
                    errorMessage = 'No tienes permisos para realizar esta acción';
                    break;
                case 404:
                    errorMessage = 'Recurso no encontrado';
                    break;
                case 422:
                    errorMessage = data?.detail || 'Datos de entrada inválidos';
                    break;
                case 500:
                    errorMessage = 'Error interno del servidor';
                    break;
                default:
                    errorMessage = data?.detail || data?.message || `Error ${status}`;
            }
        } else if (err.request) {
            // La petición fue hecha pero no se recibió respuesta
            errorMessage = 'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
        } else {
            // Algo pasó al configurar la petición
            errorMessage = err.message || 'Error de configuración';
        }
        
        setError(errorMessage);
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    return {
        error,
        handleError,
        clearError
    };
}; 