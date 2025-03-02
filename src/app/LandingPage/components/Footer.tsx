import React from "react";
import Image from "next/image";
import Link from "next/link";
import BemaxoLogo from "../../../../public/Landing-assets/light-theme-logo.png";
import footerData from "../components/footer.json"; // Adjust path if needed
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="m-4">
      <div className="max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://bemaxo.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image src={BemaxoLogo} className="w-16 h-auto" alt="Bemaxo Logo" />
           
          </a>

          {/* Dynamic Footer Links from JSON */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {footerData.links.map((link, index) => (
              <li key={index}>
                <Link href={link.url} className="hover:underline me-4 md:me-6">
                {" | "}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center lg:justify-end text-sm text-gray-500 my-5 pr-5 gap-6 max-lg:gap-2 font-medium"> 
            <a href="https://x.com" className="flex underline gap-2">
                <FaXTwitter className="text-xl"/>
                {"Follow us on X | Twitter"}
            </a>
            <a href="mailto:hello@bemaxo.com" className="flex underline gap-2"> 
                <IoMailUnreadOutline className="text-xl" />
                hello@bemaxo.com
            </a>
            
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()} Bemaxo. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
