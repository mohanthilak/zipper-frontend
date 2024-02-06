import axios from "axios";
let baseURL = "http://localhost:4000";
console.log("\n!@!!!@!@!@", {env: process.env.NODE_ENV})
if(process.env.NODE_ENV === "production"){
  baseURL = process.env.BasePath_prod;
}
export default axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  Headers: { "Content-Type": "application/json" },
  withCredentials: true,
});