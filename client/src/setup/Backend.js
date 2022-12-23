import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import Axios from "./cconfig";

export async function GetMe() {
  // const { setUser } = useContext(AuthContext);
  Axios.get("me", { withCredentials: true })
    .then((response) => {
      const { user } = response.data;

      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
