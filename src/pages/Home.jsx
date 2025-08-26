import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBus, FaMapMarkerAlt, FaClock, FaTicketAlt } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start p-4">
      {/* Hero Section */}
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full flex flex-col md:flex-row overflow-hidden mb-16">
        {/* Left - Text */}
        <div className="p-8 flex flex-col justify-center md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to SmartBus
          </h1>
          <p className="italic text-gray-600 mb-6">
            Travel Smart, Travel Safe with SmartBus!
          </p>
          <Link
            to="/tickets"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition w-max"
          >
            Book Your Ticket
          </Link>
        </div>

        {/* Right - Bus Image */}
        <div className="md:w-1/2">
          <img
            src="/image4.png"
            alt="City Bus"
            className="w-full h-full object-cover bg-blur"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl w-full grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaBus className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Comfortable Buses</h3>
          <p className="text-gray-600 text-sm">
            Air-conditioned buses with comfy seats and free Wi-Fi.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaMapMarkerAlt className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Multiple Routes</h3>
          <p className="text-gray-600 text-sm">
            Reliable routes covering major cities across Pakistan.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaClock className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">On-Time Service</h3>
          <p className="text-gray-600 text-sm">
            Punctual buses so you can plan your travel stress-free.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaTicketAlt className="text-4xl text-yellow-400 mx-auto mb-4" />
          <h3 className="font-bold text-xl mb-2">Easy Booking</h3>
          <p className="text-gray-600 text-sm">
            Online booking in just a few clicks with instant confirmation.
          </p>
        </div>
      </div>

      {/* Travel Highlights Section */}
      <div className="max-w-6xl w-full mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Travel Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            alt="Highway travel"
            className="w-full h-64 object-cover rounded-xl shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            alt="Scenic travel"
            className="w-full h-64 object-cover rounded-xl shadow"
          />
          <img
            src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80"
            alt="Travel journey"
            className="w-full h-64 object-cover rounded-xl shadow"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-white rounded-xl shadow-xl max-w-6xl w-full p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey Today!</h2>
        <p className="text-gray-600 mb-6">
          Book your tickets online and travel safely with SmartBus.
        </p>
        <Link
          to="/tickets"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Home;
