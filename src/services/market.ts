import api from './api';

export const market = {
  getAll: () => api.get('/'),
};
