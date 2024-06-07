// import React, { useState } from 'react';
// import { signup } from '../services/api';

// const SignupPage = ({ history }) => {
//   const [formData, setFormData] = useState({ email: '', password: '', role: 'STANDARD' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(formData);
//       history.push('/login');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <
