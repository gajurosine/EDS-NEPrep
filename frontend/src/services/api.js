import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const signup = (formData) => API.post('/users/signup', formData);
export const login = (formData) => API.post('/users/login', formData);
export const addEmployee = (employeeData) => API.post('/employees', employeeData);
export const getEmployees = () => API.get('/employees');
