import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { appsData } from "../data/apps";
import AppCard from "../components/AppCard";

const Apps = () => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(appsData);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  // Initial page load animation
  useEffect(() => {
    const t = setTimeout(() => setPageLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  // Live search with loading
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      const q = query.toLowerCase().trim();
      setFiltered(
        q ? appsData.filter((app) => app.title.toLowerCase().includes(q)) : appsData
      );
      setLoading(false);
    }, 400);
    return () => clearTimeout(t);
  }, [query]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our All Applications</h1>
          <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
        </div>

        {/* Search & Count Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <p className="text-gray-600 font-semibold text-sm">
            ({filtered.length}) Apps Found
          </p>
          <div className="relative w-full sm:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search Apps..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-white"
            />
          </div>
        </div>

        {/* Content */}
        {pageLoading || loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-2xl font-bold text-gray-400">No App Found</p>
            <p className="text-gray-400 mt-2 text-sm">Try searching with a different keyword</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {filtered.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Apps;
