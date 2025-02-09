import BrideMakeoverPackagesModel from "../assets/BrideMakeoverPackages-model.png";
import Group4 from "../assets/Group4.png";
import download from "../assets/download.png";
function BrideMakeoverPackages() {
  return (
    <section className=" mt-0 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-14 p-5 sm:px-16 relative">
      <header class="w-4/5 mx-auto mb-0 sm:mb-24">
        <h2 class="chicavenue-text font-normal text-3xl sm:text-3xl lg:text-[40px] text-[#FF2D55] capitalize text-center">
          Bride Makeover Packages
        </h2>
        <article class="mt-1.5">
          <p class="text-[#8E8E93] text-base md:text-xl xl:text-[22px] font-normal text-center">
            Lorem ipsum dolor sit amet consectetur. Orci et id convallis
            condimentum scelerisque venenatis quis. Dui ullamcorper donec vitae
            semper in viverra nisi sollicitudin.
          </p>
        </article>
      </header>
      <div className="py-0 sm:py-16 w-full">
        <div className="relative">
          {/* w-[743px] */}
          <figure className="w-full sm:w-[682px] h-full sm:h-[613px] mx-auto">
            <img
              src={BrideMakeoverPackagesModel}
              alt="Bride Makeover Packages Model"
              className="w-full h-full object-contain"
            />
          </figure>
          <figure className="w-full sm:w-[859.64px] h-full sm:h-[629.26px] absolute top-1/2 left-1/2 -translate-1/2 -z-10 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:bg-[#ffa2a254] after:w-[310.64px] sm:after:w-[800.64px] after:h-[310.64px] sm:after:h-[800.64px] after:blur-2xl after:rounded-full after:z-0">
            {/* className="relative absolute after:top-0 after:-left-12 after:bg-[#ffa2a28f] after:w-[525px] after:h-[507px] after:blur-2xl after:rounded-full after:z-0 */}
            <img
              src={download}
              alt="Bride Makeover Packages Model"
              className="w-full h-full object-contain"
            />
          </figure>
        </div>
        <ul className="flex justify-between items-center flex-wrap sm:flex-nowrap space-y-3.5 sm:space-y-0 mt-3.5 sm:mt-0 relative sm:absolute w-full sm:w-[85%] top-auto sm:top-60 left-auto sm:left-1/2 translate-auto sm:-translate-x-1/2 z-20">
          <li
            className="px-[20px] py-[15px] w-full sm:w-[264px] bg-white border-2 border-[#EEEEEE] rounded-xl"
            style={{
              boxShadow: "0 0 4px 0 #ff2a2a75",
            }}
          >
            <h2 class="chicavenue-text font-normal text-[26px] text-[#FF2D55] capitalize text-center">
              makeup services
            </h2>
            <article class="mt-0.5">
              <p class="text-[#8E8E93] text-[12px] leading-4 font-normal text-left">
                Lorem ipsum dolor sit amet consectetur Orci et id convallis
              </p>
            </article>
          </li>
          <li
            className="px-[20px] py-[15px] w-full sm:w-[264px] bg-white border-2 border-[#EEEEEE] rounded-xl"
            style={{
              boxShadow: "0 0 4px 0 #ff2a2a75",
            }}
          >
            <h2 class="chicavenue-text font-normal text-[26px] text-[#FF2D55] capitalize text-center">
              eyebrow services
            </h2>
            <article class="mt-0.5">
              <p class="text-[#8E8E93] text-[12px] leading-4 font-normal text-left">
                Lorem ipsum dolor sit amet consectetur Orci et id convallis
              </p>
            </article>
          </li>
        </ul>
        <ul className="flex justify-between items-center flex-wrap sm:flex-nowrap space-y-3.5 sm:space-y-0 mt-3.5 sm:mt-0 relative sm:absolute w-full sm:w-[85%] bottom-auto sm:bottom-40 left-auto sm:left-1/2 translate-auto sm:-translate-x-1/2 z-20">
          <li
            className="px-[20px] py-[15px] w-full sm:w-[264px] bg-white border-2 border-[#EEEEEE] rounded-xl"
            style={{
              boxShadow: "0 0 4px 0 #ff2a2a75",
            }}
          >
            <h2 class="chicavenue-text font-normal text-[26px] text-[#FF2D55] capitalize text-center">
              upper lips
            </h2>
            <article class="mt-0.5">
              <p class="text-[#8E8E93] text-[12px] leading-4 font-normal text-left">
                Lorem ipsum dolor sit amet consectetur Orci et id convallis
              </p>
            </article>
          </li>
          <li
            className="px-[20px] py-[15px] w-full sm:w-[264px] bg-white border-2 border-[#EEEEEE] rounded-xl"
            style={{
              boxShadow: "0 0 4px 0 #ff2a2a75",
            }}
          >
            <h2 class="chicavenue-text font-normal text-[22.5px] text-[#FF2D55] capitalize text-center">
              haircuts and styling
            </h2>
            <article class="mt-0.5">
              <p class="text-[#8E8E93] text-[12px] leading-4 font-normal text-left">
                Lorem ipsum dolor sit amet consectetur Orci et id convallis
              </p>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BrideMakeoverPackages;
