// Configuración de endpoints de la API
export const API_ENDPOINTS = {
    // Autenticación
    AUTH: {
        LOGIN: '/login/',
        LOGOUT: '/logout/',
        REGISTER: '/register/',
        PROFILE: '/user/profile/',
        REFRESH_TOKEN: '/token/refresh/'
    },
    
    // Servicios
    SERVICIOS: {
        LIST: '/servicios/',
        DETAIL: (id) => `/servicios/${id}/`,
        CREATE: '/servicios/',
        UPDATE: (id) => `/servicios/${id}/`,
        DELETE: (id) => `/servicios/${id}/`
    },
    
    // Usuarios
    USUARIOS: {
        LIST: '/usuarios/',
        DETAIL: (id) => `/usuarios/${id}/`,
        CREATE: '/usuarios/',
        UPDATE: (id) => `/usuarios/${id}/`,
        DELETE: (id) => `/usuarios/${id}/`
    },
    
    // Otros endpoints que puedas necesitar
    ORDENES: {
        LIST: '/ordenes/',
        DETAIL: (id) => `/ordenes/${id}/`,
        CREATE: '/ordenes/',
        UPDATE: (id) => `/ordenes/${id}/`,
        DELETE: (id) => `/ordenes/${id}/`
    },
    
    CLIENTES: {
        LIST: '/clientes/',
        DETAIL: (id) => `/clientes/${id}/`,
        CREATE: '/clientes/',
        UPDATE: (id) => `/clientes/${id}/`,
        DELETE: (id) => `/clientes/${id}/`
    }
};

// Configuración de headers por defecto
export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

// Configuración de timeout
export const API_TIMEOUT = 10000; // 10 segundos

// Configuración de reintentos
export const RETRY_CONFIG = {
    retries: 3,
    retryDelay: 1000
}; 