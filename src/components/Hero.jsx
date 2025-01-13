import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <div
      className="p-2 relative mt-8 overflow-hidden"
      crosses
      customPaddings
      id="hero"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-300/20 to-white" />

      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mt-16 mb-8 text-blue-900 font-bold text-5xl md:text-6xl lg:text-7xl drop-shadow-md">
            Celebrate life-changing possibilities with{" "}
            <span className="inline-block relative">
              MahzoozEuroMillion{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>

          <Button
            href="/ticket"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-12 py-3 text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Play Now
          </Button>
          <div className="space-y-4">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;