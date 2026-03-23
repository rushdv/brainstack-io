import React from "react";
import { appsData } from "../data/apps";

const Stats = () => {
  const totalDownloads = appsData.reduce((sum, a) => sum + a.downloads, 0);
  const totalReviews = appsData.reduce((sum, a) => sum + a.reviews, 0);
  const totalApps = appsData.length;

  const fmt = (n) => {
    if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n;
  };

  return (
    <section className="bg-[#7c3aed] text-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 tracking-tight">
          Trusted By Millions, Built For You
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-8 md:gap-0">
          <div className="flex flex-col items-center">
            <p className="text-xs font-bold text-purple-200 mb-2 uppercase tracking-widest">Total Downloads</p>
            <h3 className="text-3xl md:text-5xl font-black mb-2">{fmt(totalDownloads)}</h3>
            <p className="text-xs text-purple-200">21% More Than Last Month</p>
          </div>
          <div className="flex flex-col items-center md:border-x border-white/20 py-6 md:py-0">
            <p className="text-xs font-bold text-purple-200 mb-2 uppercase tracking-widest">Total Reviews</p>
            <h3 className="text-3xl md:text-5xl font-black mb-2">{fmt(totalReviews)}</h3>
            <p className="text-xs text-purple-200">46% More Than Last Month</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs font-bold text-purple-200 mb-2 uppercase tracking-widest">Active Apps</p>
            <h3 className="text-3xl md:text-5xl font-black mb-2">{totalApps}+</h3>
            <p className="text-xs text-purple-200">31 More Will Launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
