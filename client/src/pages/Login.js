import React, { useContext, useEffect, useState } from "react";
import { HiOutlineIdentification } from "react-icons/hi";
import { AiOutlineLock } from "react-icons/ai";
import Axios from "../setup/cconfig";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Requisitons from "../backend/Req";

function Login() {
  const { User, isAuth, setUser, setisAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    Requisitons.isLoged()
      .then((isauth) => {
        console.log(isauth);
        setisAuth(isauth);
        Requisitons.getMe()
          .then((user) => {
            setUser(user);
          })
          .catch((error) => {});
        if (isauth) {
          navigate("/admin");
        }
      })
      .catch((error) => {});
  }, []);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const setValues = (e) => {
    const { value, name } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submintHandle = async (e) => {
    e.preventDefault();
    Requisitons.login(credentials)
      .then((isAuth) => {
        console.log(isAuth);
        Requisitons.getMe()
          .then((user) => {
            console.log(user);
            setisAuth(isAuth);
            setUser(user);
            navigate("/admin");
          })
          .catch((error) => {
            console.log("ocorreu erro no login");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="h-screen grid bg-light">
      <div className="place-self-center w-5/12 grid">
        <form
          onSubmit={submintHandle}
          className="w-11/12 bg-cost-cinza py-10 px-4 drop-shadow-lg"
        >
          <div className="my-2 bg-white rounded-md flex">
            <HiOutlineIdentification className="self-center text-3xl m-1" />
            <input
              placeholder="Email"
              className="transition duration-300 focus:placeholder-transparent w-full px-x py-2 rounded-md text-center focus:outline-none"
              required
              type="email"
              name="email"
              value={credentials.email}
              onChange={setValues}
            />
          </div>

          <div className="bg-white rounded-md flex">
            <AiOutlineLock className="self-center text-3xl m-1" />
            <input
              placeholder="Password"
              className="transition duration-300 focus:placeholder-transparent w-full px-x py-2 rounded-md text-center focus:outline-none"
              required
              type="password"
              name="password"
              value={credentials.password}
              onChange={setValues}
            />
          </div>
          <div className="flex bg-blue-30 flex-col">
            <button
              type="submit"
              className="self-end bg-emerald-500 my-2 px-4 py-1 rounded-md text-white"
            >
              Entrar
            </button>
            <p className="font-thin text-red-600 italic">{errorMsg}</p>
          </div>
        </form>
        <p>{String(isAuth)}</p>
      </div>
    </div>
  );
}

export default Login;
