import axios from "axios";
const Axios = axios.create({
  baseURL: "http://localhost:9000/auth",
});
Axios.defaults.headers.post["Content-Type"] = "application/json";
export default Axios;
