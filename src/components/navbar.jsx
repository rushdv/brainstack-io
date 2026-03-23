import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";  

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/apps", label: "Apps" },
    { to: "/installation", label: "Installation" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive ? "text-indigo-600 font-bold" : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="flex items-center justify-between px-6 md:px-10 py-4 bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <div className="w-8 h-8">
          {/* <span className="text-white font-black text-lg">B</span> */}
          <img src={logo} alt="logo" />
        </div>
        <span className="text-indigo-600 font-black text-xl tracking-tight">
          Brain<span className="text-gray-800">Stack</span>.io
        </span>
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} className={linkClass} end={link.to === "/"}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Contribute Button */}
      <div className="hidden md:block">
        <a
          href="https://github.com/rushdv/brainstack-io"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors shadow-sm"
        >
          <Github size={16} />
          Contribute
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-md md:hidden z-40">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={linkClass}
                  end={link.to === "/"}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#7C3AED] text-white px-4 py-2 rounded-md text-sm font-semibold w-fit"
              >
                <Github size={16} />
                Contribute
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
