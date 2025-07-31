import axios from 'axios';
import { config } from '../config/env.js';

const api = axios.create({
    baseURL: config.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log('Request a:', config.baseURL + config.url);
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        console.log('Response de:', response.config.url, 'Status:', response.status);
        return response;
    },
    (error) => {
        console.log('Error en:', error.config?.url, 'Status:', error.response?.status);
        if (error.response?.status === 401) {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            localStorage.removeItem('user_id');
            localStorage.removeItem('username');
            localStorage.removeItem('email');
            localStorage.removeItem('telefono');
            localStorage.removeItem('direccion');
            
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
        }

        if (!error.response) {
            console.error('Error de conexión con el servidor');
        }

        return Promise.reject(error);
    }
);

export default api;
