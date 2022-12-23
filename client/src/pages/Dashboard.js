import React from "react";
import perfil from "../files/perfil.png";
import info from "../files/info.png";
import contact from "../files/contacts.png";
import image from "../files/image.png";
import greet from "../files/greet.png";
import service from "../files/Service.png";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
function Dashboard() {
  const { User } = useContext(AuthContext);

  return (
    <div className="bg-cost-cinza h-screen font-Jura">
      <div className="grid-cols-2 bg-costom-green grid h-16 text-white">
        <div className="self-center px-3 text-xl">
          {User.email || "admin@varlson.com"}
        </div>
        <select className="mr-6 px-6 py-2  bg-transparent self-center justify-self-end rounded-lg border border-gray-100">
          <option className="text-black" value="">
            Sites
          </option>
          <option className="text-black" value="">
            Sites1
          </option>
          <option className="text-black" value="">
            Sites2
          </option>
          <option className="text-black" value="">
            Sites3
          </option>
        </select>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-2  grid p-2">
          <div className="bg-costom-green h-24 rounded-full w-24 justify-self-center">
            <img className="w-10/12 object-cover" src={perfil} alt="" />
            <p className="mt-4 p-1 text-center font-semibold text-2xl text-costom-red">
              Admin
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 col-span-8 m-auto my-4 p-2 bg-white drop-shadow-lg rounded-lg">
          <div className="p-2 justify-items-center grid grid-cols-4 col-span-12 ">
            <div className="font-bold col-span-4 text-center py-1 my-1 text-xl text-costom-red">
              Admin Settings
            </div>
            <a className=" m-1 px-4 py-2 grid " href="">
              <img
                className="w-8/12 object-cover justify-self-center"
                src={info}
                alt=""
              />
              <p className="text-costom-red  self-start text-center">
                Personal Info
              </p>
            </a>

            <a className=" m-1 px-4 py-2 grid " href="">
              <img
                className="w-8/12 object-cover justify-self-center"
                src={contact}
                alt=""
              />
              <p className="text-costom-red  self-start text-center">
                Contacts
              </p>
            </a>

            <a className=" m-1 px-4 py-2 grid " href="">
              <img
                className="w-8/12 object-cover justify-self-center"
                src={service}
                alt=""
              />
              <p className="text-costom-red  self-start text-center">
                Services
              </p>
            </a>

            <a className=" m-1 px-4 py-2 grid " href="">
              <img
                className="w-8/12 object-cover justify-self-center"
                src={greet}
                alt=""
              />
              <p className="text-costom-red  self-start text-center">
                Greetings
              </p>
            </a>

            <a className=" m-1 px-4 py-2 grid " href="">
              <img
                className="w-8/12 object-cover justify-self-center"
                src={image}
                alt=""
              />
              <p className="text-costom-red  self-start text-center">Images</p>
            </a>
          </div>
        </div>
        <div className="col-span-2  grid p-2 content-start">
          <div className="grid text-center  bg-costom-green h-24 rounded-full w-24 justify-self-center text-white text-2xl">
            <div className="self-center">27</div>
          </div>
          <p className="self-start p-1 text-center font-semibold text-2xl text-costom-red">
            Counter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
