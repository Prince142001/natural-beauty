import Image22 from "../assets/image-22.png";
import Image21 from "../assets/image-21.png";
import Image23 from "../assets/image-23.png";

function Packages() {
  return (
    <section className="px-5 sm:px-14 py-18">
      <div>
        <ul className="flex flex-wrap sm:flex-nowrap gap-[46px] items-center justify-baseline w-full">
          <li className="relative w-full sm:w-[32%]">
            <div className="rounded-[30px] overflow-hidden border-4 border-[#A5A5A5] transition-shadow duration-300 shadow-[0px_0px_33.7px_0_#BBBABC]">
              <header
                className="px-[51px] py-[24px]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(192,192,192,1) 0%, rgba(172,172,172,1) 100%)",
                }}
              >
                <h2 className="chicavenue-text font-normal text-[36px] text-[#484848] capitalize text-center xl:text-left">
                  silver package
                </h2>
              </header>
              <ul className="px-[50px] py-[26px] text-left list-disc space-y-1 text-[#606060]">
                <li className="text-xs font-medium">HD Makeup for the Bride</li>
                <li className="text-xs font-medium">
                  Customized Hairstyling (Classic or modern styles)
                </li>
                <li className="text-xs font-medium">
                  Pre-wedding Skin Glow Mask
                </li>
                <li className="text-xs font-medium">
                  Nail Polish Application or Basic Manicure
                </li>
                <li className="text-xs font-medium">Saree/Lehenga Draping</li>
                <li className="text-xs font-medium">
                  Complimentary Makeup for 1 Family Member
                </li>
              </ul>
            </div>
            <figure className="absolute right-6 -top-8">
              <img src={Image22} alt="Image 22" />
            </figure>
          </li>
          <li className="relative w-full sm:w-[36%]">
            <div className="rounded-[30px] overflow-hidden border-4 border-[#F4B400] transition-shadow duration-300 shadow-[0px_0px_33.7px_0_#FFE098]">
              <header
                className="px-[51px] py-[24px]"
                style={{
                  background: "rgb(255,226,144)",
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,226,144,1) 0%, rgba(255,205,63,1) 46%, rgba(255,210,92,1) 100%)",
                }}
              >
                <h2 className="chicavenue-text font-normal text-[36px] text-[#484848] capitalize text-center xl:text-left">
                  gold package
                </h2>
              </header>
              <ul className="px-[50px] py-[26px] text-left list-disc space-y-1 text-[#606060]">
                <li className="text-xs font-medium">
                  Airbrush/HD Makeup for the Bride
                </li>
                <li className="text-xs font-medium">
                  Advanced Hair Styling (With hair extensions or accessories)
                </li>
                <li className="text-xs font-medium">
                  Complete Skin Care & Prep (Hydration mask, face massage,
                  detanning)
                </li>
                <li className="text-xs font-medium">Saree/Lehenga Draping</li>
                <li className="text-xs font-medium">
                  Complimentary Makeup for 2 Family Members
                </li>
                <li className="text-xs font-medium">
                  Post-event Touch-Up Session
                </li>
                <li className="text-xs font-medium">
                  Bridal Touch-Up Kit (Lipstick, compact, blotting papers)
                </li>
                <li className="text-xs font-medium">
                  On-location Services (Travel included up to a certain radius)
                </li>
              </ul>
            </div>
            <figure className="absolute right-6 -top-14">
              <img src={Image21} alt="Image 21" />
            </figure>
          </li>
          <li className="relative w-full sm:w-[32%]">
            <div className="rounded-[30px] overflow-hidden border-4 border-[#FFB668] transition-shadow duration-300 shadow-[0px_0px_33.7px_0_#F5C697]">
              <header
                className="px-[51px] py-[24px]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,211,171,1) 0%, rgba(255,200,139,1) 46%, rgba(255,199,148,1) 100%)",
                }}
              >
                <h2 className="chicavenue-text font-normal text-[36px] text-[#484848] capitalize text-center xl:text-left">
                  silver package
                </h2>
              </header>
              <ul className="px-[50px] py-[26px] text-left list-disc space-y-1 text-[#606060]">
                <li className="text-xs font-medium">HD Makeup for the Bride</li>
                <li className="text-xs font-medium">
                  Customized Hairstyling (Classic or modern styles)
                </li>
                <li className="text-xs font-medium">
                  Pre-wedding Skin Glow Mask
                </li>
                <li className="text-xs font-medium">
                  Nail Polish Application or Basic Manicure
                </li>
                <li className="text-xs font-medium">Saree/Lehenga Draping</li>
                <li className="text-xs font-medium">
                  Complimentary Makeup for 1 Family Member
                </li>
              </ul>
            </div>
            <figure className="absolute right-6 -top-8">
              <img src={Image23} alt="Image 23" />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Packages;
