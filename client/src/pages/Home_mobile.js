import React, { useState } from "react";
import per from "../files/per.png";
import { RiMenu5Fill, RiMenu4Line, RiWhatsappLine } from "react-icons/ri";
import { VscHome } from "react-icons/vsc";
import { CiCircleQuestion, CiFacebook } from "react-icons/ci";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";

import { FiFacebook, FiInstagram } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

function Home_mobile() {
  const [clicked, setClicked] = useState(false);
  const hamburgerClickHandler = (e) => {
    var menu = document.getElementById("menu");
    menu.classList.toggle("-left-24");
    menu.classList.toggle("left-0");
    setClicked(!clicked);
  };
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="relative grid h-screen col-span-12">
          <img
            className="object-cover h-64 place-self-center"
            src={per}
            alt=""
          />
          <div className="transparente absolute left-0 top-0 right-0 bottom-0"></div>
          <div className="text-white z-10 text-center">
            <p className="my-1 text-xl">hello, i'm</p>
            <p className="my-1 text-4xl font-bold">MANITO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_mobile;
