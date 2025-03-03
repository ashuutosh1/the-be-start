import Link from "next/link";
import Image from "next/image";
import PlayStore from "../../../../public/Landing-assets/playstore-logo.png"
import AppleStore from "../../../../public/Landing-assets/applestore-logo.png"

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="max-w-4xl mx-auto text-white py-10">
        <div className="text-center">
          <div className="flex max-sm:flex-col max-sm:gap-10 items-center justify-center my-10">
            <div className="flex items-center border rounded-lg px-4 py-2 min-w-52 mx-2">
              <Image
                src={PlayStore}
                className="w-7 md:w-8"
                alt="Google Play"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg px-4 py-2 min-w-52 mx-2">
              <Image
                src={AppleStore}
                className="w-7 md:w-8"
                alt="Apple Store"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple Store</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">
            &copy; Bemaxo, {new Date().getFullYear()}.
          </p>
          <div className="max-md:flex flex-wrap items-center justify-center text-center  max-md:mx-10 order-1 md:order-2">
            <Link href={"/legal/terms-condition"}><span className="px-2">Terms and Condition</span></Link>
            <Link href={"/legal/privacy-policies"}><span className="px-2 border-l">Privacy Policies</span></Link>
            <Link href={"/legal/report-bugs"}><span className="px-2 border-l">Report Bugs</span></Link>
            <Link href={"/legal/marketing"}><span className="px-2 border-l">Marketing</span></Link>
            <Link href={"/legal/copyright-issue"}><span className="px-2 border-l">Copyright Issues</span></Link>
            <Link href={"/legal/help-center"}><span className="px-2 border-l">Help Center</span></Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
