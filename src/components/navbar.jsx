import React from "react";

import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">

            {/* logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
                    <span className="text-white font-bold text-xl">B</span>
                </div>
                <div className="text-indigo-600 font-bold text-xl">
                    Brain<span className="text-gray-800">Stack<span className="text-indigo-600">.io</span></span>
                </div>
                {/* <span className="text-lg font-semibold text-gray-800">BRAINSTACK<span className="text-indigo-600">.IO</span>
                </span> */}
            </div>

            {/* nav links */}
            <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <li><a href="#" className="hover:text-indigo-600">Home</a></li>
                <li><a href="#" className="hover:text-indigo-600">Apps</a></li>
                <li><a href="#" className="hover:text-indigo-600">Installation</a></li>
            </ul>

            {/* github contribute link */}
            <div>
                <button className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 shadow-sm">
                    <Github size={18} />
                    Contribute
                </button>
            </div>
        </nav>
    )
}

export default Navbar;