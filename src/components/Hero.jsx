import React from "react";

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
                    <img src="/google-play.svg" alt="Play Store" />
                    Google Play</button>
                <button className="flex items-center gap-2 border-2 border-gray-200 px-6 py-3 rounded-md hover:bg-gray-50 transition-all font-semibold text-gray-800">
                    <img src="/app-store.svg" alt="App Store" />
                    App Store</button>
            </div>
        </section>
    )
}

export default Hero;