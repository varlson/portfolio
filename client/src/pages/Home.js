import React, { useRef } from "react";
import per from "../files/per.png";
function Home() {
  return (
    <div className=" grid grid-cols-12">
      <div className="col-span-12  h-screen relative ">
        <div className="text-white  absolute z-20 w-8/12 text-center h-24 top-0 bottom-0 my-auto border-gray-400 border border-dashed">
          <p className="my-1 text-xl">hello, i'm</p>
          <p className=" my-1 text-4xl font-bold">MANITO</p>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 transparente z-10"></div>
        <div className=" absolute my-auto top-0 bottom-0 grid right-0 w-6/12 h-4/6 z-0">
          <img
            className="rounded-lg drop-shadow-lg h-96 object-cover justify-self-end"
            src={per}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
