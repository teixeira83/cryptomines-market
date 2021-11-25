import axios from 'axios';

const api = axios.create({
  baseURL:
    'https://api.cryptomines.app/api/spaceships?level=4&cursor=0&limit=100&isSold=false',
});

export default api;
