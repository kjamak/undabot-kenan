import axios from "axios";
import { BASE_URL } from "./baseUrl";
import Cookies from "js-cookie";

const _axios = axios.create({
  baseURL: BASE_URL,
});

const onRequestSuccess = async (config) => {
  const token = Cookies.get("auth_token");

  config.headers["Accept"] = "application/json";
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
  }

  return config;
};
const onResponseSuccess = (response) => response;
const onResponseError = async (err) => {
  const status = err.response.status;
  const originalRequest = err.config;

  if (status === 500) {
    console.log("Something is wrong with backend");
  } else if (status === 401) {
    const name = err.response.data.detail;

    if (!originalRequest._retry) {
      originalRequest._retry = true;

      const refresh_token = Cookies.get("refresh_token");
      const access_token = Cookies.get("auth_token");

      const options = {
        refresh_token,
        access_token,
        token_type: "bearer",
      };

      try {
        const res = await _axios.post("/refresh", options);
        const { data } = res;

        if (data) {
          Cookies.set("auth_token", data.access_token, { path: "/" });
          Cookies.set("refresh_token", data.refresh_token, { path: "/" });
          originalRequest.headers["Authorization"] =
            "bearer " + data.access_token;
          return axios(originalRequest);
        }
        console.log("was here");
      } catch {
        localStorage.removeItem("state");
      }
    } else {
      console.log(err.response.data.detail);
      localStorage.removeItem("state");
    }
  }

  return Promise.reject(err);
};

_axios.interceptors.request.use(onRequestSuccess);
_axios.interceptors.response.use(onResponseSuccess, onResponseError);

export default _axios;
