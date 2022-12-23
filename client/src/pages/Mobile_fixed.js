import Reac, { useState } from "react";
import per from "../files/per.png";
import { VscHome } from "react-icons/vsc";
import { CiCircleQuestion } from "react-icons/ci";
import { MdMiscellaneousServices, MdContactPhone } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { RiMenu4Line, RiWhatsappLine, RiMenu5Fill } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";

function Mobile_fixed() {
  const [clicked, setClicked] = useState(false);
  const hamburgerClickHandler = (e) => {
    var menu = document.getElementById("menu");
    menu.classList.toggle("-left-24");
    menu.classList.toggle("left-0");
    setClicked(!clicked);
  };
  return (
    <div className="h-screen bg-green-900 text-white text-2xl">
      <div className="pl-5 pt-10 flex flex-col">
        <a className="p-2" href="#home_mobile">
          <VscHome />
        </a>

        <a className="p-2" href="#about_mobile">
          <CiCircleQuestion />
        </a>

        <a className="p-2" href="#contact_mobile">
          <MdContactPhone />
        </a>

        <a className="p-2" href="#services_mobile">
          <MdMiscellaneousServices />
        </a>
      </div>
    </div>
  );
}

export default Mobile_fixed;
