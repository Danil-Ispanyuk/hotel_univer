import axios from "axios";

const url = process.env.REACT_APP_API_URL;

export const instance = axios.create({
    baseURL: url,
    headers: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
    }
  });

instance.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });