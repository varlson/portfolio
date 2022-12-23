import React from "react";
import axios from "axios";

function Test() {
  const login = async () => {
    const resp = await axios.post("http://localhost:9000/auth/login", {
      email: "ducure@email.com",
      password: "GreenProject@gmail.com",
    });

    console.log(resp);
  };

  const dash = async () => {
    const resp = await axios.get("http://localhost:9000/auth/dados", {});

    console.log(resp);
  };
  return (
    <div className="gap-3 h-screen grid bg-indigo-400 ">
      <div className="gap-4 flex place-self-center ">
        <button
          onClick={login}
          className="place-self-center bg-red-300 px-4 py-2 rounded-md"
        >
          Login
        </button>
        <button
          onClick={dash}
          className="place-self-center bg-green-300 px-4 py-2 rounded-md"
        >
          Login
        </button>
      </div>

      <div className="place-self-center"></div>
    </div>
  );
}

export default Test;
