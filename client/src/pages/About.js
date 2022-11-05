import React from "react";
import per from "../files/per.png";
import "swiper/css/pagination";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

function About() {
  const pagination = {
    clickable: true,
  };

  return (
    <div className="bg-yellow-400 grid grid-cols-12 h-screen content-start">
      <div className="col-span-12 self-start">
        <h1 className="p-2 ml-4 text-4xl font-thin">Sobre</h1>
        <h3 className="col-span-12 text-6xl font-medium">Suleimane Ducure</h3>
      </div>

      <div className="mt-4 col-span-3 bg-gray-100 justify-self-start drop-shadow-xl">
        <img className="h-44  object-cover rounded-lg " src={per} alt="" />
      </div>
      <div className="mt-4 rounded-lg bg-gray-100 col-span-7 p-3 grid content-center text-justify font-medium">
        <Swiper modules={[Pagination]} pagination={pagination}>
          <SwiperSlide>
            <p>
              {" "}
              Graduando em computação pela universidade federal de Ouro Preto,
              estudante pesquisador, entusiasta de tecnologias
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <p>
              {" "}
              Graduando em computação pela universidade federal de Ouro Preto,
              estudante pesquisador, entusiasta de tecnologias
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default About;
