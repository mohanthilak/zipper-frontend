import axios from "axios";
let baseURL =process.env.NODE_ENV === "production"? process.env.NEXT_PUBLIC_BasePath_prod :"http://localhost:4000";

export default axios.create({
  // baseURL,
});

export const axiosPrivate = axios.create({
  // baseURL,
  Headers: { "Content-Type": "application/json" },
  withCredentials: true,
});