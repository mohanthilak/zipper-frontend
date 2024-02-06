import axios from "axios";
let baseURL = "http://localhost:4000";
if(process.env.NODE_ENV === "production"){
  baseURL = process.env.BasePath_prod;
}
export default axios.create({
  baseURL: "http://localhost:4000",
});

export const axiosPrivate = axios.create({
  baseURL: "http://localhost:4000",
  Headers: { "Content-Type": "application/json" },
  withCredentials: true,
});