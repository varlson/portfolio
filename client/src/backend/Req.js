import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Axios from "../setup/cconfig";
const Requisitons = {
  login: async (user) => {
    return new Promise((resolve, rej) => {
      Axios.post("/login", user, { withCredentials: true })
        .then((res) => {
          const { isAuth } = res.data;
          resolve(isAuth);
        })
        .catch((error) => {
          //   console.log(error.response.data.isAuth);
          rej(error.response.data.isAuth);
        });
    });
  },

  getMe: () => {
    return new Promise(async (res, rej) => {
      Axios.get("/me", { withCredentials: true })
        .then((user) => {
          //   console.log(user.data.user);
          res(user.data.user);
        })
        .catch((error) => {
          //   console.log(error.response.data.isAuth);
          rej(error.response.data.isAuth);
        });
    });
  },

  isLoged: () => {
    return new Promise((resolve, rej) => {
      Axios.get("/loged", { withCredentials: true })
        .then((res) => {
          //   console.log(res.data.isAuth);
          resolve(res.data.isAuth);
        })
        .catch((error) => {
          //   console.log(error.response.data.isAuth);
          rej(error.response.data.isAuth);
        });
    });
  },

  checkIsAuth: () => {},
};

export default Requisitons;
