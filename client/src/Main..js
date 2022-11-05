import React from "react";
import Home from "./pages/Home";
import { VscHome } from "react-icons/vsc";
import { CiCircleQuestion } from "react-icons/ci";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdContactPhone } from "react-icons/md";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import per from "./files/per.png";
import Util from "./util/util";
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

  return (
    <div className="">
      {/* MOBILE */}
      <div className="md:hidden lg:hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsa
        vitae porro nulla, deleniti dignissimos accusamus alias, asperiores
        omnis error recusandae nihil quasi obcaecati. Saepe, necessitatibus
        ducimus? Qui, voluptatem quos.
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
                  <a id="home-page" className="home-page" href="#home">
                    <VscHome />
                  </a>
                  <p id="home-page" className="home-page fadeout ml-2 text-2xl">
                    Home
                  </p>
                </div>

                <div
                  id="sobre"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="sobre menu-item"
                >
                  <a id="sobre" className="sobre" href="#about">
                    <CiCircleQuestion />
                  </a>
                  <p id="sobre" className="sobre fadeout ml-2 text-2xl">
                    Sobre
                  </p>
                </div>

                <div
                  id="contact-page"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="contact-page menu-item"
                >
                  <a id="contact-page" className="contact-page" href="#contact">
                    <MdContactPhone />
                  </a>
                  <p
                    id="contact-page"
                    className="contact-page fadeout ml-2 text-2xl"
                  >
                    Contato
                  </p>
                </div>

                <div
                  id="services-page"
                  onMouseLeave={(e) => moveLeaveHandler(e)}
                  onMouseEnter={(e) => moveEnterHandler(e)}
                  className="services-page menu-item"
                >
                  <a
                    id="services-page"
                    className="services-page"
                    href="#services"
                  >
                    <MdMiscellaneousServices />
                  </a>
                  <p
                    id="services-page"
                    className="services-page fadeout ml-2 text-2xl"
                  >
                    Contato
                  </p>
                </div>
              </div>
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
