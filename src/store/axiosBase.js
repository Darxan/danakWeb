/* eslint-disable camelcase */
import axios from "axios";
import store from "../store";
// const APIUrl = "http://127.0.0.1:3000";
const APIUrl = "http://185.206.212.179"

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
const getAPI = axios.create({
  baseURL: APIUrl,
});

export {
  axiosBase,
  axiosGet,
  axiosPost
};
/* eslint-enable camelcase */