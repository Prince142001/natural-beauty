import React, { useState } from "react";
import logo from "../assets/logo.png";
import { MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp } from "./Icons/MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp";
import { MaterialSymbolsStarRoundedDark } from "./Icons/MaterialSymbolsStarRoundedDark";
import { MaterialSymbolsStarRoundedLight } from "./Icons/MaterialSymbolsStarRoundedLight";
import HeroSectionSI1 from "../assets/HeroSectionSI1.png";
import HeroSectionSI2 from "../assets/HeroSectionSI2.png";
import HeroSectionSI3 from "../assets/HeroSectionSI3.png";
import HeroModel from "../assets/HeroModel.png";
// import Ellipse1 from "../assets/Ellipse1.png";
import MakeupBrush from "../assets/mekeup-brush.png";
import RotateArrow from "../assets/rotate-arrow.png";

function HeroSection() {
  const [HeroSectionSI] = useState([
    {
      img: HeroSectionSI1,
    },
    {
      img: HeroSectionSI2,
    },
    {
      img: HeroSectionSI3,
    },
  ]);
  return (
    <section
      className="overflow-hidden hero-section"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,242,242,1) 0%, rgba(254,238,239,1) 100%)",
      }}
    >
      <header className="flex gap-2 sm:gap-0 justify-normal sm:justify-between items-center mt-4 xl:mt-14 mx-auto bg-[#FFA9A970] rounded-full px-2 sm:px-5 md:px-6 lg:px-7 xl:px-8 2xl:px-9 py-1.5 sm:py-3.5 main-header">
        <div className="logo">
          <a href="#" className="flex justify-center items-center relative">
            <figure className="w-[58px] h-[58px] sm:w-[98px] sm:h-[98px] absolute -left-4 sm:-left-10 top-1/2 -translate-y-1/2">
              <img
                src={logo}
                alt="Natural Beauty"
                className="w-full h-full object-contain"
              />
            </figure>
            <span className="text-xl sm:text-2xl rochester-regular pl-11 sm:pl-16">
              Natural Beauty
            </span>
          </a>
        </div>

        <nav>
          <div className="flex justify-center items-center gap-0 sm:gap-1.5">
            <span>
              <MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp />
            </span>
            <a
              href="tel:+91 9876543210"
              className="text-[#F34A4A] text-xs sm:text-base font-semibold"
            >
              +91 9876543210
            </a>
          </div>
        </nav>
      </header>
      <div className="mt-10 sm:mt-20 pl-5 sm:pl-8 md:px-10 lg:pl-15 xl:pl-28 pr-5 sm:pr-8 md:pr-4 lg:pr-10 xl:pr-16 flex items-end flex-col sm:flex-row gap-12">
        <div className="w-full md:w-1/2 xl:w-3/5 pb-20">
          <ul className="flex -ml-0.5 gap-1.5">
            <li>
              <MaterialSymbolsStarRoundedDark />
            </li>
            <li>
              <MaterialSymbolsStarRoundedDark />
            </li>
            <li>
              <MaterialSymbolsStarRoundedDark />
            </li>
            <li>
              <MaterialSymbolsStarRoundedDark />
            </li>
            <li>
              <MaterialSymbolsStarRoundedLight />
            </li>
          </ul>
          <h1 className="chicavenue-text font-normal text-3xl leading-10 sm:text-4xl sm:leading-11 lg:text-5xl lg:leading-14 2xl:text-[56px] 2xl:leading-16 mt-4 sm:mt-5.5 text-left">
            Where Beauty <span className="text-[#FF2D55]">Meets Expertise</span>
          </h1>
          <article className="mt-6">
            <p className="text-[#8E8E93] text-base md:text-xl xl:text-[22px] text-left font-medium">
              Experience unmatched elegance with services designed to inspire
              confidence and radiance
            </p>
          </article>

          <div className="flex items-center justify-start gap-3.5 mt-7.5">
            <ul className="flex items-center justify-start">
              {HeroSectionSI.length > 0 ? (
                HeroSectionSI.map((element, index) => (
                  <li key={index}>
                    <figure
                      className={`bg-white w-[33px] h-[33px] border-2 border-white rounded-full overflow-hidden ${
                        index !== 0 ? "-ml-2" : ""
                      }`}
                      style={{
                        boxShadow:
                          "0px 1px 3px 1px #00000026, 0px 1px 2px 0px #0000004D",
                      }}
                    >
                      <img
                        src={element.img}
                        alt="HeroSectionSI"
                        className="w-full h-full object-contain"
                      />
                    </figure>
                  </li>
                ))
              ) : (
                <li className="text-base font-normal">No image available</li>
              )}
            </ul>
            <div>
              <p className="text-base font-bold">100+ Satisfied Customers</p>
            </div>
          </div>
          <div className="mt-10 xl:mt-12 w-fit block">
            <a
              href=""
              className="call-now-btn py-[16px] px-8 flex gap-2 items-center relative rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,29,72,1) 0%, rgba(255,45,85,1) 45%, rgba(255,25,69,1) 100%)",
              }}
            >
              <span>
                <MaterialSymbolsPhoneInTalkWatchfaceIndicatorSharp />
              </span>
              <span className="font-bold capitalize text-base text-white">
                call now
              </span>
              <div className="cnb-border rounded-[2em] relative"></div>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-2/5 relative block">
          <figure className="relative block after:absolute after:top-18 after:-left-12 after:bg-[#ffa2a28f] after:w-[525px] after:h-[507px] after:blur-2xl after:rounded-full after:z-0">
            {/* className="relative absolute after:top-0 after:-left-12 after:bg-[#ffa2a28f] after:w-[525px] after:h-[507px] after:blur-2xl after:rounded-full after:z-0 */}
            <img
              src={HeroModel}
              alt="HeroModel"
              className="-scale-x-[1] w-full md:w-full h-full object-contain relative z-10"
            />
            {/* <img
              src={Ellipse1}
              alt="Ellipse 1"
              className="w-full h-full object-contain absolute bottom-0 left-0 z-0"
            /> */}
          </figure>

          <figure className="absolute -right-3 md:-left-5 lg:right-0 left-aut0 sm:-left-10 top-5 sm:-top-5 w-[34.95px] h-[104px]">
            <img
              src={MakeupBrush}
              alt="MakeupBrush"
              className="-rotate-[46.27deg] w-full h-full object-contain drop-shadow-lg"
              style={{
                filter: "drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5))",
              }}
            />
          </figure>
          <figure className="absolute -left-10 sm:-left-24 md:-left-40 lg:-left-55 xl:-left-100 bottom-50 sm:bottom-10 md:bottom-7 w-30 lg:w-[180.95px] h-[154px] rotate-[294deg] sm:rotate-[244deg]">
            <img
              src={RotateArrow}
              alt="RotateArrow"
              className="-rotate-[46.27deg] w-full h-full object-cover drop-shadow-lg opacity-30"
              style={{
                filter: "drop-shadow(5px 5px 15px rgba(0, 0, 0, 0.5))",
              }}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
