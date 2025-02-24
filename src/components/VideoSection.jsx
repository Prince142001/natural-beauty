import HomeIcon from "../assets/home-icon.png";
import VideoPlayer from "./VideoPlayer";
function VideoSection() {
  return (
    <section className="py-20 relative">
      <div className="w-full bg-[#FFE9E9] my-0 xl:my-16">
        <header className="w-full xl:w-[45%] p-5 pb-3.5 sm:px-12 2xl:px-14 py-14">
          <figure className="w-8 h-8">
            <img
              src={HomeIcon}
              alt="Home Icon"
              className="w-full h-full object-contain"
            />
          </figure>
          <h2 class="chicavenue-text font-normal text-[40px] text-[#FF2D55] text-left capitalize mt-2">
            your journey <span className="lowercase">to</span> radiance starts
            here
          </h2>
          <article class="mt-2.5 xl:mt-0.5">
            <p class="text-[#8E8E93] text-[22px] leading-7 font-medium text-left">
              See How We Turn Every Visit into a Beautiful Experience
            </p>
          </article>
        </header>
      </div>
      <div className="relative bg-[#FFE9E9] xl:bg-transparent p-5 sm:px-12 2xl:px-14 xl:mt-0 xl:absolute top-0 xl:top-1/2 right-auto xl:right-2.5 translate-auto xl:-translate-y-1/2 w-full xl:w-[775px] h-full xl:h-[441px]">
        <VideoPlayer className="" />
      </div>
    </section>
  );
}

export default VideoSection;
