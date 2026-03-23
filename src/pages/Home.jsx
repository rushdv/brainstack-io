import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AppCard from "../components/AppCard";
import { appsData } from "../data/apps";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const trendingApps = appsData.slice(0, 8);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      <Hero />
      <Stats />

      {/* Trending Apps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Trending Apps</h2>
            <p className="text-gray-500">Explore All Trending Apps on the Market developed by us</p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {trendingApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
              <div className="mt-12 text-center">
                <Link
                  to="/apps"
                  className="bg-[#7c3aed] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#6d28d9] transition-all inline-block shadow-lg shadow-purple-200"
                >
                  Show All
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
