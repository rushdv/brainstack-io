import React from "react";
import { Link } from "react-router-dom";
import { Star, Download } from "lucide-react";

const formatNum = (num) => {
  if (num >= 1000000) return (num / 1000000).toFixed(0) + "M";
  if (num >= 1000) return (num / 1000).toFixed(0) + "K";
  return num;
};

const AppCard = ({ app }) => {
  return (
    <Link to={`/apps/${app.id}`} className="group block">
      <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] rounded-xl mb-4 overflow-hidden bg-gray-100">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="font-bold text-gray-800 text-sm md:text-base mb-3 line-clamp-2 flex-1">
          {app.title}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded-md text-xs font-bold border border-green-100">
            <Download size={11} strokeWidth={3} />
            {formatNum(app.downloads)}
          </div>
          <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md text-xs font-bold border border-orange-100">
            <Star size={11} fill="currentColor" />
            {app.ratingAvg}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
