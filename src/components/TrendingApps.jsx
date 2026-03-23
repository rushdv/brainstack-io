import React from 'react';
import { Star, Download } from 'lucide-react'; // আইকনের জন্য

const TrendingApps = ({ apps }) => {
  // ডাটা থেকে প্রথম ৮টি অ্যাপ আলাদা করা
  const trendingApps = apps.slice(0, 8);

  // ডাউনলোড সংখ্যাকে সুন্দর করে দেখানোর ফাংশন (যেমন: 9000000 -> 9M)
  const formatDownloads = (num) => {
    return num >= 1000000 ? (num / 1000000).toFixed(0) + 'M' : num;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* টাইটেল সেকশন */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Trending Apps
          </h2>
          <p className="text-gray-500 text-lg">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* অ্যাপস গ্রিড */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingApps.map((app) => (
            <div 
              key={app.id} 
              className="group bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* অ্যাপ ইমেজ */}
              <div className="relative aspect-[4/3] rounded-2xl mb-5 overflow-hidden bg-gray-50">
                <img 
                  src={app.image} 
                  alt={app.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* অ্যাপ ডিটেইলস */}
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 text-lg leading-snug mb-2 line-clamp-2 h-12">
                  {app.title}
                </h3>
              </div>

              {/* ব্যাজ সেকশন (ডাউনলোড এবং রেটিং) */}
              <div className="flex items-center justify-between mt-4">
                {/* ডাউনলোড ব্যাজ */}
                <div className="flex items-center gap-1.5 bg-green-50 text-green-600 px-3 py-1.5 rounded-lg text-xs font-bold border border-green-100">
                  <Download size={14} />
                  {formatDownloads(app.downloads)}
                </div>

                {/* রেটিং ব্যাজ */}
                <div className="flex items-center gap-1.5 bg-orange-50 text-orange-500 px-3 py-1.5 rounded-lg text-xs font-bold border border-orange-100">
                  <Star size={14} fill="currentColor" />
                  {app.ratingAvg}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* বাটন */}
        <div className="mt-16 text-center">
          <button className="bg-[#7c3aed] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#6d28d9] transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-200">
            Show All Applications
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrendingApps;