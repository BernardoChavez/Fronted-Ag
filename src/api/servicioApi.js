import api from "./axios";

export const gettallservicios = () => api.get('/Servicios/');
export const getserviciosById = (id) => api.get(`/Servicios/${id}/`);
export const createServicio = (servicioData) => api.post('/Servicios/', servicioData);
export const updateServicio = (id, servicioData) => api.put(`/Servicios/${id}/`, servicioData);
export const deleteServicio = (id) => api.delete(`/Servicios/${id}/`);
