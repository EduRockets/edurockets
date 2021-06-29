import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Funciones de autenticación
export const signUp = (credentials) => API.post('/auth/signup', credentials);
export const login = (credentials) => API.post('/auth/login', credentials);

export const logout = () => API.get('/auth/logout');

// Funciones para CRUD del usuario
export const updateStudentUser = (body) => API.put('/user/updateStudentUser', body);
export const updateUser = (body) => API.put('/user/updateUser', body);
export const getUser = (data) => API.get('/user/getUser', data);

// Funciones para CRUD de las imágenes
export const uploadImage = (body) => API.put('/image/uploadImage', body);
export const updateImage = (body) => API.put('/image/updateImage', body);
// Funciones CRUD para las becas
export const getSchoolarship = (id) => API.get(`/schoolarship/getSchoolarship/${id}`);
