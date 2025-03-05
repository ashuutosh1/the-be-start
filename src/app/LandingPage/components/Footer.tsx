import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../public/Landing-assets/playstore-logo.png";
import AppleStore from "../../../../public/Landing-assets/applestore-logo.png";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="max-w-4xl mx-auto text-white py-10">

        {/* App Links for Play store and App store */}
        <div className="text-center">
          <div className="flex max-sm:flex-col max-sm:gap-10 items-center justify-center my-10">
            <Link href="https://play.google.com/store" target="_blank">
              <div className="flex items-center border border-black rounded-lg px-4 py-2 min-w-52 mx-2 cursor-pointer hover:bg-gray-50">
                <Image src={PlayStore} className="w-7 md:w-8" alt="Google Play" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-700">Download on</p>
                  <p className="text-sm md:text-base text-gray-700">Google Play Store</p>
                </div>
              </div>
            </Link>

            <Link href="https://www.apple.com/app-store/" target="_blank">
              <div className="flex items-center border border-black rounded-lg px-4 py-2 min-w-52 mx-2 cursor-pointer hover:bg-gray-50">
                <Image src={AppleStore} className="w-7 md:w-8" alt="Apple Store" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-700">Download on</p>
                  <p className="text-sm md:text-base text-gray-700">Apple Store</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mx-10 mt-20 text-center text-wrap gap-2">
          <span className="text-gray-500 font-semibold">Bemaxo – All About Trends </span>
          <span className="text-gray-400 hover:text-gray-600">{"At Bemaxo, we bring you the latest and most exciting trends from around the world. Whether it’s fashion, technology, entertainment, or lifestyle, we create a dynamic space where users can explore, share, and engage with the hottest topics. Our platform is designed to keep you ahead of the curve by curating viral content, fostering discussions, and connecting like-minded individuals. More than just a social media platform, Bemaxo is a community-driven hub where trends are born and evolve. We empower users to express their creativity, stay informed, and be part of the next big thing. If it's trending, it's on Bemaxo!"} </span>
          <span className="text-gray-400 font-bold hover:text-gray-600 hover:text-xl">Join us and be part of the trend revolution! 🚀</span>
        </div>

        {/* Footer Navigation */}
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Bemaxo.com , {new Date().getFullYear()}.
          </p>

          <div className="max-md:flex flex-wrap items-center justify-center text-center max-md:mx-10 order-1 md:order-2">
            <Link href="/company-terms">
              <span className="px-2 hover:text-gray-900">Terms of Services</span>
            </Link>
            <Link href="/company-terms">
              <span className="px-2 border-l hover:text-gray-900">Privacy Policies</span>
            </Link>
            <Link href="/company-terms">
              <span className="px-2 border-l hover:text-gray-900">Report Bugs</span>
            </Link>
            <Link href="/company-terms">
              <span className="px-2 border-l hover:text-gray-900">Marketing</span>
            </Link>
            <Link href="/company-terms">
              <span className="px-2 border-l hover:text-gray-900">Copyright Issues</span>
            </Link>
            <Link href="/company-terms">
              <span className="px-2 border-l hover:text-gray-900">Help Center</span>
            </Link>
            <Link href="/company-terms">
              <span className="px-2 border-l hover:text-gray-900">About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
