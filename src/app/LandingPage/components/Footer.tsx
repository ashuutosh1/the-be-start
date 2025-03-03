import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../public/Landing-assets/playstore-logo.png";
import AppleStore from "../../../../public/Landing-assets/applestore-logo.png";

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="max-w-4xl mx-auto text-white py-10">
        <div className="text-center">
          <div className="flex max-sm:flex-col max-sm:gap-10 items-center justify-center my-10">
            <Link href="https://play.google.com/store" target="_blank">
              <div className="flex items-center border border-black rounded-lg px-4 py-2 min-w-52 mx-2 cursor-pointer hover:bg-gray-400">
                <Image src={PlayStore} className="w-7 md:w-8" alt="Google Play" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-700">Download on</p>
                  <p className="text-sm md:text-base text-gray-700">Google Play Store</p>
                </div>
              </div>
            </Link>

            <Link href="https://www.apple.com/app-store/" target="_blank">
              <div className="flex items-center border border-black rounded-lg px-4 py-2 min-w-52 mx-2 cursor-pointer hover:bg-gray-400">
                <Image src={AppleStore} className="w-7 md:w-8" alt="Apple Store" />
                <div className="text-left ml-3">
                  <p className="text-xs text-gray-700">Download on</p>
                  <p className="text-sm md:text-base text-gray-700">Apple Store</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Bemaxo.com , {new Date().getFullYear()}.
          </p>

          <div className="max-md:flex flex-wrap items-center justify-center text-center max-md:mx-10 order-1 md:order-2">
            <Link href="/company-terms?section=terms">
              <span className="px-2 hover:text-gray-900">Terms of Services</span>
            </Link>
            <Link href="/company-terms?section=privacy">
              <span className="px-2 border-l hover:text-gray-900">Privacy Policies</span>
            </Link>
            <Link href="/company-terms?section=bugs">
              <span className="px-2 border-l hover:text-gray-900">Report Bugs</span>
            </Link>
            <Link href="/company-terms?section=marketing">
              <span className="px-2 border-l hover:text-gray-900">Marketing</span>
            </Link>
            <Link href="/company-terms?section=copyright">
              <span className="px-2 border-l hover:text-gray-900">Copyright Issues</span>
            </Link>
            <Link href="/company-terms?section=help">
              <span className="px-2 border-l hover:text-gray-900">Help Center</span>
            </Link>
            <Link href="/company-terms?section=about">
              <span className="px-2 border-l hover:text-gray-900">About Us</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
