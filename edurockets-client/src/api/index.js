import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const signUp = (credentials) => API.post('/auth/signup', credentials);
export const login = (credentials) => API.post('/auth/login', credentials);
export const logout = () => API.get('/auth/logout');

export const createProfile = (profile) => API.post('/profile/createProfile', profile);
export const getProfile = (userType, id) => API.get(`/profile/getProfile/${userType}/${id}`);
export const updateProfile = (body) => API.put('/profile/updateProfile', body);

export const getUser = (data) => API.get('/user/getUser', data);
export const updateUser = (data) => API.put('/user/updateUser', data);

// Funciones para CRUD de las imágenes
export const uploadImage = (body) => API.post('/image/uploadImage', body);
export const updateImage = (body) => API.put('/image/updateImage', body);

// Funciones CRUD para las becas
export const getSchoolarship = (id) => API.get(`/schoolarship/getSchoolarship/${id}`);
