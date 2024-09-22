import axios from 'axios';
const apiClient = axios.create({
  baseURL: 'https://be-lb-pd-7.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
