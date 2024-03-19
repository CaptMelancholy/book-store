import axios from 'axios';
import store from '../store';
import EAPIs from './api-client';
import { setAuth, setTokens } from '../store/slices/user/user.slice';

const API = axios.create({
  baseURL: '/',
});

API.interceptors.request.use(
  async (config) => {
    const tokens = store.getState().user.tokens;
    if (tokens) {
      const { access } = tokens;
      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise(async (resolve) => {
      const originalRequest = error.config;
      const tokens = store.getState().user.tokens;
      if (tokens) {
        const { refresh } = tokens;

        if (error.response && error.response.status === 401) {
          originalRequest._retry = true;
          const access = await axios
            .post(`${EAPIs}/jwt/refresh`, refresh)
            .then(({ data }) => data.access);
          store.dispatch(setTokens({ refresh, access }));
          axios(originalRequest);
          resolve(access);
        } else {
          store.dispatch(setAuth(false));
        }
      }
    });
  }
);

export default API;
