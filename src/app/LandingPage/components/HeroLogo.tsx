import Image from "next/image";
import HeroImage from "../../../../public/Landing-assets/hero-sec-img.png"; // Renamed the import
import { MdOutlineExplore } from "react-icons/md";
import React from "react";

function HeroLogo() { 
  return (
    <div className="md:flex-1 p-10">
        <div className="flex sm:gap-6 max-lg:gap-4 lg:gap-0  md: flex-col">
            <div className="flex items-center justify-center">
                 <Image
                     src={HeroImage} 
                     alt="bemaxo-logo"
                     className="lg:w-80 max-lg:w-40 "
                 />
            </div>
            <div className="flex  text-center font-bold text-gray-400 text-3xl p-6 max-lg:hidden  ">
                    Bringing People and Worlds Together.
            </div>
            <div className="flex items-center justify-center">
                <button className="flex lg:px-10 max-lg:px-6 max-sm:px-4 py-6 max-sm:py-4 bg-purple-600 hover:bg-gray-200 hover:text-black hover:border-2 border-purple-600 rounded-full font-bold gap-2 ">
                      <MdOutlineExplore className="text-2xl" />
                    <span>Explore</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default HeroLogo; 
