import axios from "axios";

//https://varlson-api.onrender.com
const Axios = axios.create({
  baseURL: "https://varlson-api.onrender.com",
});
Axios.defaults.headers.post["Content-Type"] = "application/json";
export default Axios;
