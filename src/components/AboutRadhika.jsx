import AboutRadhikaModel from "../assets/AboutRadhika-model.png";
import AboutRadhikaBg from "../assets/AboutRadhika-bg.png";
function AboutRadhika() {
  return (
    <section className="px-5 sm:px-14 py-14">
      <div className="px-5 sm:px-14 py-5 sm:py-18 bg-[#FFF4F6] rounded-[63px] overflow-hidden">
        <div className="mt-0 sm:mt-20 flex flex-wrap sm:flex-nowrap gap-8 sm:gap-[140px] items-end">
          <div className="w-full sm:w-2/5 relative">
            <figure className="w-[280px] sm:w-[384.9px] h-full sm:h-[511.11px] absolute bottom-0 left-1/2 -translate-x-1/2 block">
              <img
                src={AboutRadhikaModel}
                alt=""
                className="w-full h-full object-cover"
              />
            </figure>
            <figure>
              <img
                src={AboutRadhikaBg}
                alt=""
                className="w-full h-full object-cover"
              />
            </figure>
          </div>
          <div className="w-full sm:w-3/5">
            <h4 className="capitalize text-xs text-center font-medium text-[#606060]">
              meet
            </h4>
            <h2 class="chicavenue-text font-normal text-center text-[40px] text-[#FF2D55] capitalize">
              mrs radhika jadhav
            </h2>
            <h3 className="capitalize text-[22px] font-medium">
              Your Beauty Expert
            </h3>
            <article class="mt-8">
              <p class="text-[#8E8E93] text-[16px] leading-7 font-normal text-left">
                With over 14 years of experience in the salon industry, Radhika
                Jadhav is a name synonymous with excellence and trust. Having
                served 100+ satisfied clients, she has built her reputation on
                delivering top-notch, budget-friendly services tailored to meet
                every client’s unique needs.
              </p>
            </article>

            <div className="mt-11">
              <ul className="flex flex-wrap sm:flex-nowrap gap-10">
                <li className="flex gap-1.5 items-center justify-start">
                  <div className="chicavenue-text font-normal text-[56.32px] text-[#FF2D55]">
                    14+
                  </div>
                  <div className="text-[19.71px] italic text-[#696969]">
                    Years of Experience
                  </div>
                </li>
                <li className="flex gap-1.5 items-center justify-start">
                  <div className="chicavenue-text font-normal text-[56.32px] text-[#FF2D55]">
                    100+
                  </div>
                  <div className="text-[19.71px] italic text-[#696969]">
                    Satisfied Customers
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRadhika;
