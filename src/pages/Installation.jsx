import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Download, Star, Trash2, ChevronDown } from "lucide-react";
import toast from "react-hot-toast";

const formatNum = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
};

const Installation = () => {
  const [apps, setApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setApps(saved);
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const handleUninstall = (id) => {
    const updated = apps.filter((a) => a.id !== id);
    setApps(updated);
    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("App uninstalled successfully!");
  };

  const getSorted = () => {
    const copy = [...apps];
    if (sortOrder === "high-low") return copy.sort((a, b) => b.downloads - a.downloads);
    if (sortOrder === "low-high") return copy.sort((a, b) => a.downloads - b.downloads);
    return copy;
  };

  const sorted = getSorted();

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Your Installed Apps</h1>
          <p className="text-gray-500 text-sm">Explore All Trending Apps on the Market developed by us</p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : apps.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-xl font-bold text-gray-400 mb-2">No Apps Installed Yet</p>
            <p className="text-gray-400 text-sm mb-6">Browse our collection and install your favorite apps.</p>
            <Link
              to="/apps"
              className="bg-[#7c3aed] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6d28d9] transition-all inline-block"
            >
              Browse Apps
            </Link>
          </div>
        ) : (
          <>
            {/* Count & Sort */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600 font-semibold text-sm">{sorted.length} Apps Found</p>
              <div className="relative">
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="appearance-none border border-gray-200 bg-white text-sm px-4 py-2 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
                >
                  <option value="default">Sort By Size</option>
                  <option value="high-low">High - Low</option>
                  <option value="low-high">Low - High</option>
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* App List */}
            <div className="space-y-3">
              {sorted.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0 bg-gray-100"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 text-sm truncate">{app.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="flex items-center gap-1 text-green-600 text-xs font-bold">
                        <Download size={11} /> {formatNum(app.downloads)}
                      </span>
                      <span className="flex items-center gap-1 text-orange-500 text-xs font-bold">
                        <Star size={11} fill="currentColor" /> {app.ratingAvg}
                      </span>
                      <span className="text-gray-400 text-xs">{app.size} MB</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleUninstall(app.id)}
                    className="flex items-center gap-1 bg-green-500 hover:bg-red-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors flex-shrink-0"
                  >
                    <Trash2 size={13} />
                    Uninstall
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Installation;
