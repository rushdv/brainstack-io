import React from "react";
import playstoreIcon from "../assets/google-play-store-icon.png";
import appstoreIcon from "../assets/apple-app-store-icon.png";
import heroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative pt-16 pb-0 bg-white overflow-hidden text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1f2937] leading-tight">
          We Build <br />
          <span className="text-[#7C3AED]">Productive </span>Apps
        </h1>
        <p className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto mb-10 mt-8 leading-relaxed">
          At BrainStack.io, we craft innovative apps designed to make everyday life simpler, smarter,
          and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>

      {/* Store Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 px-4">
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 transition-all font-semibold text-gray-800 w-full sm:w-auto justify-center"
        >
          <img src={playstoreIcon} alt="Play Store" className="w-6" />
          Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border-2 border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 transition-all font-semibold text-gray-800 w-full sm:w-auto justify-center"
        >
          <img src={appstoreIcon} alt="App Store" className="w-6" />
          App Store
        </a>
      </div>

      <div className="relative max-w-lg mx-auto">
        <img src={heroImg} alt="Hero App Preview" className="mx-auto w-full max-w-sm md:max-w-lg" />
      </div>
    </section>
  );
};

export default Hero;
