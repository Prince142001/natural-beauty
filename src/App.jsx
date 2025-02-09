import "./App.css";
import AnimatedCursor from "./components/AnimatedCursor";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import VideoSection from "./components/VideoSection";
import BrideMakeoverPackages from "./components/BrideMakeoverPackages";
import Packages from "./components/Packages";
import ImageSection from "./components/ImageSection";
import Testimonial from "./components/Testimonial";
import AboutRadhika from "./components/AboutRadhika";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <main className="overflow-hidden">
        <AnimatedCursor />
        <HeroSection />
        <ServicesSection />
        <VideoSection />
        <BrideMakeoverPackages />
        <Packages />
        <ImageSection />
        <Testimonial />
        <AboutRadhika />
        <Footer />
        {/* <AboutSection />
        <WorkSamples /> */}
      </main>
    </>
  );
}
