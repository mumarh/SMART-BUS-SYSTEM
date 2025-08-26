import React, { useState } from "react";
import { Link } from "react-router-dom";
import buses from "../api/Buses.json";

const Tickets = () => {
  const [search, setSearch] = useState("");

  const IsFilter =
    buses?.buses?.filter((bus) => {
      const searchTerm = search.toLowerCase();
      return (
        bus.busName.toLowerCase().includes(searchTerm) ||
        bus.route.from.toLowerCase().includes(searchTerm) ||
        bus.route.to.toLowerCase().includes(searchTerm)
      );
    }) || [];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Available Buses 🚌
      </h1>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Ticket"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="block mx-auto w-64 p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {IsFilter.length > 0 ? (
          IsFilter.map((bus, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {bus.busName}
              </h2>
              <p className="text-gray-600 mb-3">
                <span className="font-medium">{bus.route.from}</span> →{" "}
                <span className="font-medium">{bus.route.to}</span>
              </p>

              <div className="space-y-1 text-sm text-gray-700">
                <p>🛠 Type: {bus.busType}</p>
                <p>⏰ Departure: {bus.departureTime}</p>
                <p>⏳ Arrival: {bus.arrivalTime}</p>
                <p>🕒 Duration: {bus.duration}</p>
                <p>
                  💰 Fare: <span className="font-semibold">Rs. {bus.fare}</span>
                </p>
                <p>🎟 Seats Available: {bus.seatsAvailable}</p>
                <p>🛑 Stops: {bus.stops}</p>
                <p>📞 Contact: {bus.contact}</p>
              </div>

              <Link
                to={`/busdetails/${bus.busId}`} 
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="block text-center mt-5 bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
              >
                Book Now
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No buses found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Tickets;
