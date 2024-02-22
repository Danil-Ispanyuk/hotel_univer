import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const instance = axios.create({
    baseURL: url
  });

instance.interceptors.request.use(function (config) {
    config.headers.setAccept("application/json");
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });