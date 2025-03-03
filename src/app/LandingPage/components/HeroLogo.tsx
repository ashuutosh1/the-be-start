import Image from "next/image";
import HeroImage from "../../../../public/Landing-assets/the-hero-black-logo.png"; // Renamed the import
import { MdOutlineExplore } from "react-icons/md";
import React from "react";

function HeroLogo() {
  return (
    <div className="md:flex-1 p-10">
      <div className="flex sm:gap-6 max-lg:gap-4 lg:gap-0  md: flex-col">
        <div className="flex items-center justify-center max-lg:hidden">
          <Image
            src={HeroImage}
            alt="bemaxo-logo"
            className="lg:w-80 max-lg:w-40 "
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex  text-center font-bold text-gray-500 text-2xl py-3 max-lg:hidden  ">
            {"Bemaxo.com - Bringing People and Worlds Together."}
          </div>
          <div className="flex  text-center font-semibold text-gray-400 text-lg pb-6 max-lg:hidden  ">
            {"Be Maximum Original"}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="flex lg:px-6 max-lg:px-6 max-sm:px-4 py-4 max-lg:py-2 text-white bg-purple-500 hover:bg-purple-700 rounded-full font-bold gap-2 ">
            <MdOutlineExplore className="text-2xl" />
            <span>Explore</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroLogo; 
