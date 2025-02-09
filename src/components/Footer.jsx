import logo from "../assets/logo.png";
import { MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp } from "./Icons/MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp";
import MailIcon from "./Icons/MailIcon";

function Footer() {
  return (
    <footer className="pt-10 pb-5 sm:py-20">
      <ul
        className="flex items-center justify-center align-middle flex-wrap sm:flex-nowrap px-5 py-5 sm:px-10 h-full sm:h-[162px] space-y-6.5"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,180,194,1) 0%, rgba(255,74,109,1) 100%)",
        }}
      >
        <li className="relative w-[152px] sm:w-[260px] h-[152px] sm:h-[260px]">
          <div className="relative sm:absolute top-auto sm:top-1/2 left-auto sm:left-8 translate-auto sm:-transalte-1/2">
            <a href="#" className="block relative">
              <figure className="w-[150px] sm:w-[258px] h-[150px] sm:h-[258px] relative sm:absolute left-auto sm:-left-10 top-auto sm:top-1/2 translate-auto sm:-translate-y-1/2 p-1.5 bg-white rounded-full overflow-hidden">
                <img
                  src={logo}
                  alt="Natural Beauty"
                  className="w-full h-full object-contain"
                />
              </figure>
            </a>
          </div>
        </li>
        <li className="flex gap-2.5 sm:gap-[36.16px]">
          <div className="border border-white rounded-full w-16 sm:w-[84.38px] h-1w-16 sm:h-[84.38px] flex items-center justify-center">
            <MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp />
          </div>
          <div>
            <h3 className="chicavenue-text capitalize text-2xl font-medium text-white">
              contact number
            </h3>
            <p>
              <a
                href="tel:+91 9876543210"
                className="text-xl sm:text-[32px] font-bold text-white"
              >
                +91 9876543210
              </a>
            </p>
          </div>
        </li>
        <li className="flex gap-2.5 sm:gap-[36.16px]">
          <div className="border border-white rounded-full w-16 sm:w-[84.38px] h-1w-16 sm:h-[84.38px] flex items-center justify-center">
            <MailIcon />
          </div>
          <div>
            <h3 className="chicavenue-text capitalize text-2xl font-medium text-white">
              contact number
            </h3>
            <p>
              <a
                href="mailto:naturalbeauty@gmail.com"
                className="text-xl sm:text-[32px] font-bold text-white"
              >
                naturalbeauty@gmail.com
              </a>
            </p>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
