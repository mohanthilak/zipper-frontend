import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4000",
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:4000",
  Headers: { "Content-Type": "application/json" },
  withCredentials: true,
});