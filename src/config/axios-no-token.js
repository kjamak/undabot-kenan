import axios from "axios";
import { BASE_URL } from "./baseUrl";

const _axios = axios.create({
  baseURL: BASE_URL,
});

export default _axios;
