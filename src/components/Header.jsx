import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-700 shadow-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for brand, slogan, logo, and navigation */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6">
          
          {/* Left - Brand Name */}
          <div className="text-white font-bold text-3xl text-center md:text-left mb-2 md:mb-0">
            SmartBus
          </div>

          {/* Center - Slogan */}
          <div className="text-white text-lg md:text-xl font-semibold italic text-center mb-2 md:mb-0">
            "Travel Smart, Travel Safe with SmartBus!"
          </div>

          {/* Right - Navigation */}
          <nav className="hidden md:flex space-x-8 items-center text-white font-medium text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-yellow-400 pb-1"
                  : "hover:border-b-2 hover:border-yellow-400 pb-1 transition"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-yellow-400 pb-1"
                  : "hover:border-b-2 hover:border-yellow-400 pb-1 transition"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/tickets"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-yellow-400 pb-1"
                  : "hover:border-b-2 hover:border-yellow-400 pb-1 transition"
              }
            >
              Tickets
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-yellow-400 pb-1"
                  : "hover:border-b-2 hover:border-yellow-400 pb-1 transition"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/login"
              className="text-2xl hover:text-yellow-400 transition"
            >
              <FaUser />
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-white text-l ml-auto " onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-700 text-white px-4 pb-5">
          <NavLink
            to="/"
            className="block py-1.5 text-sm border-b border-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-1.5 text-sm border-b border-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/tickets"
            className="block py-1.5 text-sm border-b border-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Tickets
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-1.5 text-sm border-b border-gray-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/login"
            className="block py-1.5 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            <FaUser />
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
