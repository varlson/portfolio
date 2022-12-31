import React from "react";
import per from "../files/per.png";
import Slider from "react-slick";
import Datas from "../test/Datas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className=" gap-2 grid grid-cols-12 h-screen content-start relative bg-gray-300">
      <div className="col-span-12 self-start mb-2">
        <h1 className="p-2 ml-4 text-4xl font-thin">Sobre</h1>
        <h3 className="pl-3 col-span-12 text-4xl md:text-6xl font-medium">
          Suleimane Ducure
        </h3>
      </div>

      <div className="mt-4 hidden md:block md:col-span-3   drop-shadow-xl p-2 ">
        <img
          className="h-52 m-auto object-cover rounded-lg "
          src={per}
          alt=""
        />
      </div>

      {
        <div className=" px-2 col-span-10 col-start-2 md:col-span-7 mt-2 md:col-start-5 rounded-lg bg-gray-100  drop-shadow-xl">
          <Slider {...settings}>
            {Datas.map((data, index) => (
              <div
                key={index}
                className=" my-2 text-emerald-900 p-3 rounded-md h-48"
              >
                <p className="mt-8 text-justify text-2xl">{data.dado}</p>
              </div>
            ))}
          </Slider>
        </div>
      }

      <div className="bg-white col-span-10 col-start-2 md:col-span-7 md:col-start-5 mt-5 mb-2 rounded-md p-2">
        <p className="font-bold md:text-xl">Área de Interesse</p>
        <div className="text-justify p-1 w-11/12 m-auto md:text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          expedita voluptas mollitia, molestias cum voluptate, magni numquam
          obcaecati ut itaque velit debitis officiis unde perferendis doloremque
          sed reprehenderit hic perspiciatis!{" "}
        </div>
      </div>

      <div className="bg-white col-span-10 col-start-2 md:col-span-7 md:col-start-5 md:mt-5 mb-2 rounded-md p-2">
        <p className="font-bold md:text-xl">Pesquisa</p>
        <div className="p-1 w-11/12 m-auto md:text-2xl text=justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nemo
          aliquid officiis obcaecati dolore saepe? Beatae ea accusamus.
        </div>
      </div>
    </div>
  );
}

export default About;
