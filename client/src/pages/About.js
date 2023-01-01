import React from "react";
import per from "../files/per.png";
import Slider from "react-slick";
import Datas from "../test/Datas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [about, setAbout] = useState(null);

  const loadAbout = async () => {
    return new Promise((resolve, reject) => {
      axios
        .get("https://varlson-api.onrender.com/about")
        .then((res) => {
          resolve(res.data.succ[0]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  useEffect(() => {
    loadAbout()
      .then((data) => {
        setAbout(data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className=" gap-2 grid grid-cols-12 h-screen content-start relative bg-gray-300">
      <div className="col-span-12 self-start mb-1">
        <h1 className="p-2 ml-4 text-4xl font-thin">Sobre</h1>
        <h3 className="pl-3 col-span-12 text-4xl md:text-4xl font-medium">
          Suleimane Ducure
        </h3>
      </div>

      <div className="mt-4 hidden md:block md:col-span-3 drop-shadow-xl p-2 ">
        <img
          className="h-52 m-auto object-cover rounded-lg "
          src={per}
          alt=""
        />
      </div>

      {
        <div className=" px-2 col-span-10 col-start-2 md:col-span-7 mt-2 md:col-start-5 rounded-lg bg-gray-100  drop-shadow-xl">
          {about ? (
            <Slider {...settings}>
              {about.about.map((data, index) => (
                <div
                  key={index}
                  className=" my-2 text-emerald-900 p-3 rounded-md h-48"
                >
                  <p className="mt-8 text-justify md:text-xl">{data}</p>
                </div>
              ))}
            </Slider>
          ) : (
            <p>processing</p>
          )}
        </div>
      }

      <div className="bg-white col-span-10 col-start-2 md:col-span-7 md:col-start-5 mt-5 mb-2 rounded-md p-2">
        <p className="font-bold md:text-xl">Área de Interesse</p>
        <div className="text-justify p-1 w-11/12 m-auto md:text-xl">
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <div className="bg-white col-span-10 col-start-2 md:col-span-7 md:col-start-5 md:mt-5 mb-2 rounded-md p-2">
        <p className="font-bold md:text-xl">Pesquisa</p>
        <div className="p-1 w-11/12 m-auto md:text-xl text=justify">
          {about ? about.search : <p>Processing</p>}
        </div>
      </div>
    </div>
  );
}

export default About;
