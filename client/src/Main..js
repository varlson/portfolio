import React, { useState } from "react";
import Home from "./pages/Home";
import { VscHome } from "react-icons/vsc";
import { CiCircleQuestion, CiFacebook } from "react-icons/ci";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { RiMenu4Line, RiMenu5Fill, RiWhatsappLine } from "react-icons/ri";
import { AiFillGithub } from "react-icons/ai";

import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import per from "./files/per.png";
import Home_mobile from "./pages/Home_mobile";
import Mobile_fixed from "./pages/Mobile_fixed";
import Contact_mobile from "./pages/Contact_mobile";

function Main() {
  const moveEnterHandler = (e) => {
    var element = document.getElementsByClassName(e.target.id)[2];
    if (element.classList.contains("fadeout") == true) {
      element.classList.remove("fadeout");
      element.classList.add("fadein");
    }
  };

  const moveLeaveHandler = (e) => {
    var element = document.getElementsByClassName(e.target.id)[2];
    if (element.classList.contains("fadein") == true) {
      element.classList.remove("fadein");
      element.classList.add("fadeout");
    }
  };

  const menuHidde = () => {
    var menuSide = document.getElementById("menu_side");
    menuSide.classList.toggle("lock");
    menuSide.classList.toggle("unlock");
    setShow(!show);
  };

  const [show, setShow] = useState(false);
  return (
    <div className="">
      {/* MOBILE */}
      <div className="md:hidden lg:hidden grid grid-cols-12 relative">
        <div
          onClick={menuHidde}
          className="text-white text-4xl fixed right-6 top-8 z-10"
        >
          {show ? <RiMenu4Line /> : <RiMenu5Fill />}
        </div>
        <div className="absolute left-0 z-10">
          <div id="menu_side" className="lock fixed">
            <Mobile_fixed />
          </div>
        </div>
        <div className="col-span-12 scroll-smooth overflow-hidden h-screen">
          <div id="home_mobile" className="w-full">
            <Home_mobile />
          </div>
          <div id="about_mobile" className="w-full">
            <About />
          </div>
          <div id="contact_mobile" className="w-full">
            <Contact />
          </div>

          <div id="services_mobile" className="w-full">
            <Services />
          </div>
        </div>
      </div>

      {/* DESKKTOP */}
      <div className="hidden md:block lg:block font-Jura">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <div className="fixed bg-emerald-800 text-white text-3xl w-2/12 h-screen flex flex-col">
              <div className="p-2 ">
                <div className="bg-white h-32 mb-10 w-28 rounded-full m-auto">
                  <img className="h-32 w-28 rounded-full" src={per} alt="" />
                </div>
                <div
                  id="home-page"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="home-page menu-item"
                >
                  <a id="home-page" className="flex home-page" href="#home">
                    <VscHome />
                    <p
                      id="home-page"
                      className="home-page fadeout ml-2 text-2xl"
                    >
                      Home
                    </p>
                  </a>
                </div>

                <div
                  id="sobre"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="sobre menu-item"
                >
                  <a id="sobre" className="flex sobre" href="#about">
                    <CiCircleQuestion />
                    <p id="sobre" className=" sobre fadeout ml-2 text-2xl">
                      Sobre
                    </p>
                  </a>
                </div>

                <div
                  id="contact-page"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="contact-page menu-item"
                >
                  <a
                    id="contact-page"
                    className="flex contact-page"
                    href="#contact"
                  >
                    <MdContactPhone />
                    <p
                      id="contact-page"
                      className=" contact-page fadeout ml-2 text-2xl"
                    >
                      Contato
                    </p>
                  </a>
                </div>

                <div
                  id="services-page"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="services-page menu-item "
                >
                  <a
                    id="services-page"
                    className="flex services-page"
                    href="#services"
                  >
                    <MdMiscellaneousServices />
                    <p
                      id="services-page"
                      className="services-page fadeout ml-2 text-2xl"
                    >
                      Serviços
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="text-xl flex justify-center  absolute left-0 px-1 bottom-1 w-2/12  text-white">
              <FiInstagram className="m-1" />
              <CiFacebook className="m-1" />
              <RiWhatsappLine className="m-1" />
              <AiFillGithub className="m-1" />
            </div>
          </div>
          <div className="scroll-smooth col-span-10 h-screen overflow-hidden">
            <div id="home">
              <Home />
            </div>

            <div id="about">
              <About />
            </div>
            <div id="contact">
              <Contact />
            </div>

            <div id="services">
              <Services />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
