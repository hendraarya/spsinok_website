import React from "react";
import { Link } from "react-router-dom";
import Spsilogo from "../assets/images/logospsi.png";
import Pukspsi from "../assets/images/puknok.png";
// import LogoNOK from "../assets/images/logonok.png"
const NavigationBar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-semibold"
      role="navigation"
    >
      <div className="flex items-center space-x-1">
        <img src={Spsilogo} className="w-12" alt="Logo SPSI" />
        <img src={Pukspsi} className="w-12" alt="Logo PUK SPSI" />
        <Link to="./" className="font-bold">
          PUK SPSI NOK
        </Link>
      </div>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 mt-2 ml-4 block sm:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 sm:block hidden">
        <Link className="p-4" to="/">
          Home
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link>
        <Link className="p-4" to="/datamember">
          Data Anggota
        </Link>
        <Link className="p-4" to="/document">
          Document
        </Link>
      </div>
    </nav>
  );
};
export default NavigationBar;
