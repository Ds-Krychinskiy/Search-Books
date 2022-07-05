import axios from "axios";

const key = "AIzaSyD5hYhwEPy2xDRtBURpIWuIcLthiadU_4k";
const apiUrl = `https://www.googleapis.com/books/v1/volumes`;
const _axios = axios.create({ baseURL: apiUrl });
_axios.defaults.params = {};
_axios.interceptors.request.use(
  (config) => {
    config.params["key"] = key;
    return config;
  },
  (error) => {
    console.error(error);
  }
);

export default _axios;
