import Image7 from "../assets/image7.png";
import Image9 from "../assets/image9.png";
import MakeupServices from "../assets/MakeupServices.png";
import HairServices from "../assets/HairServices.png";
import BrideServices from "../assets/BrideServices.png";
import SkincareServices from "../assets/SkincareServices.png";
function ServicesSection() {
  return (
    <section className="py-10">
      <header>
        <ul className="flex justify-center items-center gap-6">
          <li className="hidden sm:block -ml-1.5">
            <figure className="h-[76px]">
              <img
                src={Image9}
                alt="Image"
                className="w-full h-full object-contain"
              />
            </figure>
          </li>
          <li>
            <div>
              <h2 class="chicavenue-text font-normal text-3xl sm:text-3xl lg:text-[40px] text-[#FF2D55] capitalize mt-2 text-center">
                our services
              </h2>
              <article class="mt-0.5">
                <p class="text-[#8E8E93] text-base md:text-xl xl:text-[22px] text-center font-medium">
                  See How We Turn Every Visit into a Beautiful Experience
                </p>
              </article>
            </div>
          </li>
          <li className="hidden sm:block -mr-1.5">
            <figure className="h-[76px]">
              <img
                src={Image7}
                alt="Image"
                className="w-full h-full object-contain"
              />
            </figure>
          </li>
        </ul>
      </header>

      <div className="p-5 sm:px-7 md:px-9 xl:px-12 2xl:px-14 mt-4 sm:mt-5 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-14">
        <ul className="flex justify-between sm:gap-x-4 gap-y-10 flex-wrap">
          <li className="grow w-[58%]">
            <figure className="rounded-[58px] overflow-hidden p-1.5 bg-white w-fit h-full transition-shadow duration-300 shadow-[0_0_34.5px_0_#FFB2B2] hover:shadow-none">
              <img
                src={MakeupServices}
                alt="Makeup Services"
                className="rounded-[58px] overflow-hidden w-full h-full object-cover"
              />
            </figure>
          </li>
          <li className="grow-0 w-[47%] sm:w-[40%]">
            <figure className="rounded-[58px] overflow-hidden p-1.5 bg-white w-fit h-full transition-shadow duration-300 shadow-[0_0_34.5px_0_#FFB2B2] hover:shadow-none">
              <img
                src={HairServices}
                alt="Hair Services"
                className="rounded-[58px] overflow-hidden w-full h-full object-cover"
              />
            </figure>
          </li>
          <li className="grow-0 w-[47%] sm:w-[40%]">
            <figure className="rounded-[58px] overflow-hidden p-1.5 bg-white w-fit h-full transition-shadow duration-300 shadow-[0_0_34.5px_0_#FFB2B2] hover:shadow-none">
              <img
                src={BrideServices}
                alt="Bride Services"
                className="rounded-[58px] overflow-hidden w-full h-full object-cover"
              />
            </figure>
          </li>
          <li className="grow w-[58%]">
            <figure className="rounded-[58px] overflow-hidden p-1.5 bg-white w-fit h-full transition-shadow duration-300 shadow-[0_0_34.5px_0_#FFB2B2] hover:shadow-none">
              <img
                src={SkincareServices}
                alt="Skincare Services"
                className="rounded-[58px] overflow-hidden w-full h-full object-cover"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ServicesSection;
