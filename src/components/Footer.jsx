import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";
import Logo from "../assets/logo.png" 
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 ">
                <img src={Logo} alt="logo" />
              </div>
              <span className="text-white font-black text-xl">
                Brain<span className="text-indigo-400">Stack</span>.io
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              We craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/apps" className="hover:text-indigo-400 transition-colors">All Apps</Link></li>
              <li><Link to="/installation" className="hover:text-indigo-400 transition-colors">Installation</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Social Links</h4>
            <div className="flex items-center gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <Github size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} BrainStack.io &mdash; All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
