import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://soyummy-back.onrender.com',
});
export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
