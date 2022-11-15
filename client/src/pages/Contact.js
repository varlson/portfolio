import React from "react";
import per from "../files/per.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { CiFacebook } from "react-icons/ci";

function Contact() {
  return (
    <div className=" gap-2 grid grid-cols-12 h-screen content-start relative bg-gray-300">
      <div className="col-span-12 self-start mb-2">
        <h1 className="p-2 ml-4 text-4xl font-thin">Contato</h1>
      </div>

      <div className="hidden md:block col-span-12 md:col-span-2 lg:col-span-2 nd:bg-gray-100  drop-shadow-xl p-2 ">
        <img
          className="h-24 md:h-44 object-cover rounded-lg "
          src={per}
          alt=""
        />
      </div>

      <div className="mt-10 md:mt-1 drop-shadow-lg py-2 rounded-lg grid grid-cols-12 md:col-span-7 lg:col-span-7 lg:col-start-4 col-span-12 bg-white">
        <div className="grid-cols-12 grid justify-items-center col-span-12 md:w-8/12 m-auto lg:border-gray-500">
          <div className="p-1 col-span-12 md:col-span-6 flex">
            <AiOutlineMail className="mr-1 flex self-center" />
            <p className="">contato@varlson.com</p>
          </div>

          <div className="p-1 col-span-12 md:col-span-6 flex">
            <BsTelephoneForward className="mr-1 flex self-center" />
            <p className="">+55 (31) 99420-4345</p>
          </div>

          <div className="p-1 col-span-12 md:col-span-6 flex">
            <FiInstagram className="mr-1 flex self-center" />
            <p className="">@avrlson</p>
          </div>

          <div className="p-1 col-span-12 md:col-span-6 flex">
            <CiFacebook className="mr-1 flex self-center" />
            <p className="">facebook.com/varlson</p>
          </div>
        </div>
      </div>

      <div className="mt-4 drop-shadow-lg rounded-lg border p-2 grid grid-cols-12 col-span-12 md:col-span-7 md:col-start-4 ">
        <div className="col-span-12 p-2 w-10/12 m-auto ">
          <form className="grid grid-cols-12">
            <input
              required
              name="name"
              className="my-2 m-auto col-span-12 focus:outline focus:rounded-md bg-transparent border-b border-gray-500 w-full p-2  focus:"
              type="text"
              placeholder="Nome"
            />

            <input
              placeholder="Email"
              className="m-auto my-2 col-span-12 focus:outline focus:rounded-md bg-transparent border-b border-gray-500 w-full p-2  focus:"
              type="email"
              required
            />
            <input
              placeholder="Assunto"
              className="m-auto my-2 col-span-12 focus:outline focus:rounded-md bg-transparent border-b border-gray-500 w-full p-2  focus:"
              type="email"
              required
            />

            <textarea
              placeholder="Mensagem"
              required
              rows={3}
              className="my-2 col-span-12 focus:outline focus:rounded-md bg-transparent border-b border-gray-500 p-2 "
            ></textarea>

            <button
              className=" justify-self-end col-span-12 w-3/12 md:w-2/12 text-white mt-1 md:px-2 px-4 py-1 rounded-md bg-emerald-700"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
