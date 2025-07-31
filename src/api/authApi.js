import api from "./axios";

export const login = (credentials) => api.post('/login/', credentials);
export const logout = () => api.post('/logout/');
export const register = (userData) => api.post('/register/', userData);
export const getCurrentUser = () => api.get('/usuarios/me/');
export const checkBackendHealth = () => api.get('/');
export const getBackendInfo = () => api.get('/');