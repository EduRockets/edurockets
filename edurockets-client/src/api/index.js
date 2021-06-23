import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// Funciones de autenticación
export const login = (credentials) => API.post('/auth/login', credentials);
export const signUp = (credentials) => API.post('/auth/signup', credentials);
export const logout = () => API.get('/auth/logout');

// Funciones para CRUD del usuario
export const updateSignInUser = (body) => API.put('/user/updateSignUpUser', body);
export const updateEditProfileUser = (body) => API.put('/user/updateEditProfileUser', body);
export const getUser = (data) => API.get('/user/getUser', data);

// Funciones CRUD para las becas
export const getSchoolarship = (id) => API.get(`/schoolarship/getSchoolarship/${id}`);
