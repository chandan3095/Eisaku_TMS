import axios from "axios";


const BASE_URL = 'https://webideasolution.in/eisakutms/public/api/'


const client = axios.create({
   baseURL: BASE_URL,
});

client.interceptors.request.use(async config => {
   if (config.data instanceof FormData) {
      config.headers['Content-Type'] = 'multipart/form-data';
      config.headers['Accept'] = 'multipart/form-data';
   } else {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json';
   }
   return config;
});

export default client;