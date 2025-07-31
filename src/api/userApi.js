// userapi.js (ejemplo, si lo tienes)
import api from "./axios";

export const gettalluser = () => api.get('/usuarios/');
export const getuserById = (id) => api.get(`/usuarios/${id}/`);
export const createUser = (userData) => api.post('/usuarios/', userData);
export const updateUser = (id, userData) => api.put(`/usuarios/${id}/`, userData);
export const deleteUser = (id) => api.delete(`/usuarios/${id}/`);