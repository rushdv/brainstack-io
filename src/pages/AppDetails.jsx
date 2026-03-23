import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Download, ArrowLeft, MessageSquare } from "lucide-react";
import toast from "react-hot-toast";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import { appsData } from "../data/apps";
import notFoundImg from "../assets/App-Error.png";

const formatNum = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
};

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  const app = appsData.find((a) => a.id === Number(id));

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(t);
  }, [id]);

  useEffect(() => {
    if (app) {
      const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
      setInstalled(saved.some((a) => a.id === app.id));
    }
  }, [app]);

  const handleInstall = () => {
    const saved = JSON.parse(localStorage.getItem("installedApps") || "[]");
    if (!saved.some((a) => a.id === app.id)) {
      saved.push(app);
      localStorage.setItem("installedApps", JSON.stringify(saved));
    }
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 bg-[#f5f5f5]">
        <img src={notFoundImg} alt="App Not Found" className="w-56 md:w-72 mb-8" />
        <h2 className="text-xl md:text-2xl font-black text-gray-800 uppercase mb-3 tracking-wide">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-gray-500 mb-8 text-sm max-w-sm">
          The App you are requesting is not found on our system. Please try another apps.
        </p>
        <button
          onClick={() => navigate("/apps")}
          className="bg-[#7c3aed] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6d28d9] transition-all"
        >
          Go Back!
        </button>
      </div>
    );
  }

  // Chart data - reverse so 5 star is on top
  const chartData = [...app.ratings].reverse();

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10 bg-white min-h-screen">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-indigo-600 mb-8 transition-colors text-sm font-medium"
      >
        <ArrowLeft size={16} /> Back
      </button>

      {/* App Info Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-10 p-6 border border-gray-100 rounded-2xl shadow-sm">
        {/* Image */}
        <div className="w-full md:w-48 flex-shrink-0">
          <img
            src={app.image}
            alt={app.title}
            className="w-full md:w-48 h-48 object-cover rounded-2xl shadow-md"
          />
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-1">{app.title}</h1>
          <p className="text-indigo-600 font-semibold text-sm mb-5">
            Developed by <span className="font-bold">{app.companyName}</span>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex flex-col items-center">
              <Download size={22} className="text-green-500 mb-1" />
              <span className="text-xs text-gray-400 uppercase tracking-wide">Downloads</span>
              <span className="font-black text-gray-900 text-lg">{formatNum(app.downloads)}</span>
            </div>
            <div className="flex flex-col items-center">
              <Star size={22} className="text-orange-400 mb-1" fill="currentColor" />
              <span className="text-xs text-gray-400 uppercase tracking-wide">Average Ratings</span>
              <span className="font-black text-gray-900 text-lg">{app.ratingAvg}</span>
            </div>
            <div className="flex flex-col items-center">
              <MessageSquare size={22} className="text-purple-500 mb-1" />
              <span className="text-xs text-gray-400 uppercase tracking-wide">Total Reviews</span>
              <span className="font-black text-gray-900 text-lg">{formatNum(app.reviews)}</span>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              installed
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-lg shadow-purple-200"
            }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mb-10 p-6 border border-gray-100 rounded-2xl shadow-sm">
        <h2 className="text-xl font-black text-gray-900 mb-6">Ratings</h2>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 20 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" tick={{ fontSize: 11 }} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={45} />
            <Tooltip />
            <Bar dataKey="count" fill="#f97316" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="p-6 border border-gray-100 rounded-2xl shadow-sm">
        <h2 className="text-xl font-black text-gray-900 mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
