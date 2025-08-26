import React from "react";
import { FaBus, FaUsers, FaRoute, FaClock } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SmartBus</h1>
          <p className="text-xl md:text-2xl italic">
            "Travel Smart, Travel Safe with SmartBus!"
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 md:text-lg">
            SmartBus was founded with the mission to provide safe, reliable, and comfortable bus travel 
            across Pakistan. We combine modern technology with excellent customer service to ensure 
            that every journey is smooth and enjoyable. 
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
            <FaBus className="text-yellow-400 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Fleet</h3>
            <p className="text-gray-600">Comfortable buses equipped with AC and modern facilities for a smooth ride.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
            <FaRoute className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multiple Routes</h3>
            <p className="text-gray-600">Extensive network covering major cities and towns in Pakistan.</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition">
            <FaClock className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">On-Time Service</h3>
            <p className="text-gray-600">We value your time and ensure buses depart and arrive on schedule.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">M.Umar Hassan</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Kashif Ali</h3>
              <p className="text-gray-600">Operations Manager</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <FaUsers className="text-purple-500 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sara Khan</h3>
              <p className="text-gray-600">Customer Support Lead</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
