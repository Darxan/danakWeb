import axios from "axios";
import store from "../store";
const APIUrl = "https://api.danak.uz";

const token = localStorage.getItem("_uidt");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
}
const POST = axios.create({
  baseURL: APIUrl,
  headers: {
    Authorization: `token ${token}`,
  },
});
const axiosGet = axios.create({
  baseURL: APIUrl,
  headers: {
    Authorization: `token ${token}`,
  },
});
const axiosPost = axios.create({
  baseURL: APIUrl,
  headers: {
    Authorization: `token ${token}`,
  },
});
const axiosBase = axios.create({
  baseURL: APIUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export {
  axiosBase,
  axiosGet,
  axiosPost
};