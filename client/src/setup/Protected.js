import React, { useEffect } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Requisitons from "../backend/Req";
import AuthContext from "../Context/AuthContext";
function Protected({ children }) {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const route_to_go = useLocation().pathname;
  // useEffect(() => {
  //   Requisitons.isLoged().then((_isAuth) => {
  //     console.log("from efect");
  //     console.log(_isAuth);
  //     setIsAuth(_isAuth);
  //   });
  // }, []);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  if (route_to_go == "/login") {
    console.log("entrou");
    return <Navigate to="/admin" />;
  } else {
    // console.log(`from com ${route_to_go == "/login"}`);
  }

  return children;
}

export default Protected;
