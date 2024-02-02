import axios from "axios";

const BASE_URL = "https://webideasolution.in/eisakutms/public/api/";
export const BASE_URL_IMAGE = "https://webideasolution.in/eisakutms/public/";

const client = axios.create({
   baseURL: BASE_URL,
});

client.interceptors.request.use(async (config) => {
   // config.headers['Content-Type'] = 'application/json';
   // config.headers['Accept'] = 'application/json';

   // if (response) {
   //    const { token } = response;
   //    // config.headers['Authorization'] = `Bearer ${token}`;
   // }
   // console.log(config);
   return config;
});

export default client;
