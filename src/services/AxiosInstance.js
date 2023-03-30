/* eslint-disable */
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://cerebro-2023-backend.onrender.com/',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const newconfig = config;
  if (token) {
    newconfig.headers.Authorization = `Token ${token}`;
  }
  return newconfig;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // TODO: Refresh token
    return Promise.reject(error);
  },
);

export default axiosInstance;