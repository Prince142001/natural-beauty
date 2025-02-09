import { useState } from "react";
import AboutRadhikaModel from "../assets/AboutRadhika-model.png";
import { MaterialSymbolsStarRoundedDark } from "./Icons/MaterialSymbolsStarRoundedDark";
import { MaterialSymbolsStarRoundedLight } from "./Icons/MaterialSymbolsStarRoundedLight";
function Testimonial() {
  const [testimonialData] = useState([
    {
      img: AboutRadhikaModel,
      name: "Shivani Jha",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci et id convallis condimentum scelerisque venenatis quis. In viverra nisi sollicitudin.",
      rating: [
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedLight,
      ],
    },
    {
      img: AboutRadhikaModel,
      name: "Shivani Jha",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci et id convallis condimentum scelerisque venenatis quis. In viverra nisi sollicitudin.",
      rating: [
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedLight,
      ],
    },
    {
      img: AboutRadhikaModel,
      name: "Shivani Jha",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci et id convallis condimentum scelerisque venenatis quis. In viverra nisi sollicitudin.",
      rating: [
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedLight,
      ],
    },
    {
      img: AboutRadhikaModel,
      name: "Shivani Jha",
      description:
        "Lorem ipsum dolor sit amet consectetur. Orci et id convallis condimentum scelerisque venenatis quis. In viverra nisi sollicitudin.",
      rating: [
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedDark,
        MaterialSymbolsStarRoundedLight,
      ],
    },
  ]);

  return (
    <section class="px-5 sm:px-14 py-14 testimonial-section">
      <div
        className="py-5 sm:py-[110px] px-5 sm:px-[72px] rounded-[63px] overflow-hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(253,220,220,0.2) 0%, rgba(246,147,147,0.2) 50%, rgba(255,202,212,0.2) 100%)",
        }}
      >
        <header class="w-4/5 mx-auto mb-24">
          <h2 class="chicavenue-text font-normal text-[40px] text-[#FF2D55] capitalize text-center">
            Testimonial
          </h2>
          <article class="mt-1.5">
            <p class="text-[#8E8E93] text-[22px] leading-7 font-normal text-center">
              Lorem ipsum dolor sit amet consectetur. Orci et id convallis
              condimentum scelerisque venenatis quis. Dui ullamcorper donec
              vitae semper in viverra nisi sollicitudin.
            </p>
          </article>
        </header>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-y-[80px] justify-between w-full testimonial-container">
          {testimonialData.length > 0 ? (
            testimonialData.map((element, index) => (
              <li
                key={index}
                className="w-full p-[19px] flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[30px] bg-white shrink sm:shrink-0 rounded-[48px] overflow-hidden shadow-[0_0_6px_0_#ffb2b2]"
              >
                {/* Profile Image */}
                <figure className="w-[125.77px] h-[167.01px] rounded-[41px] overflow-hidden shrink-0">
                  <img
                    src={element.img}
                    alt={element.name}
                    className="w-full h-full object-cover"
                  />
                </figure>

                {/* Testimonial Content */}
                <div className="shrink">
                  <h2 className="text-2xl font-bold philosopher">
                    {element.name}
                  </h2>
                  <p className="text-base font-normal mt-3">
                    {element.description}
                  </p>

                  {/* Ratings */}
                  <ul className="flex gap-2.5 items-center justify-center testimonial-rating mt-4">
                    {element.rating.map((StarIcon, starIndex) => (
                      <li key={starIndex} className="w-[22.28px] h-[22.28px]">
                        <StarIcon className="text-yellow-500 text-xl" />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))
          ) : (
            <li className="text-base font-normal">No testimonial found</li>
          )}
        </ul>
      </div>
    </section>
  );
}

export default Testimonial;
