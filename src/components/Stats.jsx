import React from "react";

const Stats = () => {
    return (
        < section className = "bg-[#7c3aed] text-white pt-10 pb-10 relative  z-0" >
            <div className="max-w-7xl mx-auto px-6"> 

                <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 tracking-tight">
                    Trusted By Millions, Built For You
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 text-center   pt-10">

                    {/* Total Downloads */}
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-medium text-purple-200 mb-2 uppercase tracking-widest">Total Downloads</p>
                        <h3 className="text-2xl md:text-4xl font-black mb-3">29.6M</h3>
                        <p className="text-sm text-purple-200">21% More Than Last Month</p>
                    </div>

                    {/* Total Reviews */}
                    <div className="flex flex-col items-center  md:border-y-0 md:border-x border-white/20 py-10 md:py-0">
                        <p className="text-sm font-medium text-purple-200 mb-2 uppercase tracking-widest">Total Reviews</p>
                        <h3 className="text-2xl md:text-4xl font-black mb-3">906K</h3>
                        <p className="text-sm text-purple-200">46% More Than Last Month</p>
                    </div>

                    {/* Active Apps */}
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-medium text-purple-200 mb-2 uppercase tracking-widest">Active Apps</p>
                        <h3 className="text-2xl md:text-4xl font-black mb-3">132+</h3>
                        <p className="text-sm text-purple-200">31 More Will Launch</p>
                    </div>

                </div>
            </div>
</section >
    )
}

export default Stats;