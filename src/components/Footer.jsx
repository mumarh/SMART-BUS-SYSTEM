import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLink, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaBus } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState(""); // Keep state as string

  const handleButton = () => {
    if (email.includes("@gmail")) {
      alert("Subscribed successfully!!!");
      setEmail(""); // Reset input
    } else {
      alert("Email must contain '@gmail'");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Slogan */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-2 gap-2">
              <FaBus className="text-yellow-400 text-2xl animate-bounce" />
              <h2 className="text-2xl font-bold">SmartBus</h2>
            </div>
            <p className="text-gray-400 italic">
              "Travel Smart, Travel Safe with SmartBus!"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400 transition">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition">About</a></li>
              <li><a href="/tickets" className="hover:text-yellow-400 transition">Tickets</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> 123 SmartBus Street, Islamabad, Pakistan</li>
              <li className="flex items-center gap-2"><FaPhoneAlt /> +92 300 1234567</li>
              <li className="flex items-center gap-2"><FaEnvelope /> info@smartbus.com</li>
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Follow & Subscribe</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://www.instagram.com/m_umar_hassan?igsh=MTgxd293bWdubXcycA==" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400 transition transform hover:scale-110 text-xl"><FaInstagram /></a>
              <a href="https://x.com/mumarh135?t=GSp7G8bDG09vKRBR3RVIzw&s=09" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition transform hover:scale-110 text-xl"><FaTwitter /></a>
              <a href="https://www.facebook.com/share/1GdRWY6dQV/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-500 transition transform hover:scale-110 text-xl"><FaFacebook /></a>
              <a href="https://www.threads.com/@m_umar_hassan" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-gray-300 transition transform hover:scale-110 text-xl"><FaLink /></a>
            </div>

            {/* Newsletter */}
            <div className="mt-4">
              <p className="text-gray-400 mb-2">Subscribe to our newsletter:</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
                />
                <button onClick={handleButton} className="bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-500 transition font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} SmartBus. All rights reserved. Built with ❤️ by M.Umar Hassan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
