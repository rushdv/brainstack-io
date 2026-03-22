import React from "react";
import playstoreIcon from '../assets/google-play-store-icon.png';
import appstoreIcon from '../assets/apple-app-store-icon.png';
import heroImg from '../assets/hero.png';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-0 bg-white overflow-hidden text-center">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-[#1f2937]">We Build <br />
                    <span className="text-[#7C3AED]">Productive </span>Apps</h1>

                <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 mt-10 leading-relaxed">At BRANISTACK.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>

            {/* store buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
                <button className="flex items-center gap-2 border-2 border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 transition-all font-semibold text-gray-800">
                    <img src={playstoreIcon} alt="Play Store" className="w-6" />
                    Google Play</button>
                <button className="flex items-center gap-2 border-2 border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 transition-all font-semibold text-gray-800">
                    <img src={appstoreIcon} alt="App Store" className="w-6" />
                    App Store</button>
            </div>

            <div className="relative max-w-lg mx-auto">
                <div className="relative z-10">
                    <img src={heroImg} alt="Hero Image" className="mx-auto" />
                </div>
            </div>
        </section>
    )
}

export default Hero;