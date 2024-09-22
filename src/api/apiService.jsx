import apiClient from './apiConfig';

const apiService = (resource) => ({
  getAll: () => apiClient.get(`/api/${resource}`),
  getById: (id) => apiClient.get(`/api/${resource}/${id}`),
  create: (data) => apiClient.post(`/api/${resource}`, data),
  update: (id, data) => apiClient.put(`/api/${resource}/${id}`, data),
  delete: (id) => apiClient.delete(`/api/${resource}/${id}`),
});

export default apiService;
