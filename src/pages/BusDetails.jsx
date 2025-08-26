import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import buses from "../api/Buses.json";

const BusDetails = () => {
  const { id } = useParams();
  const [busDetails, setBusDetails] = useState(null);

  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const found = buses.buses.find((bus) => bus.busId === id);
    setBusDetails(found);
  }, [id]);

  if (!busDetails) return <p className="text-center mt-10">Loading...</p>;

  const handleSeatToggle = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      if (selectedSeats.length < quantity) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        alert(`You can select only ${quantity} seat(s).`);
      }
    }
  };

  const handleBuyNow = (e) => {
    e.preventDefault();
    if (!customerName) {
      alert("Please enter your name!");
      return;
    }
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }
    if (selectedSeats.length !== quantity) {
      alert("Please select your seats!");
      return;
    }

    const total = busDetails.fare * quantity;
    setPaymentSummary({
      customerName,
      busName: busDetails.busName,
      quantity,
      selectedSeats,
      paymentMethod,
      total,
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Bus Info */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <h1 className="text-3xl font-bold mb-4">{busDetails.busName}</h1>
        <p className="mb-2">
          <span className="font-semibold">Route:</span> {busDetails.route.from}{" "}
          → {busDetails.route.to}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Type:</span> {busDetails.busType}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Departure:</span>{" "}
          {busDetails.departureTime}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Arrival:</span>{" "}
          {busDetails.arrivalTime}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Duration:</span> {busDetails.duration}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Fare per seat:</span> Rs.{" "}
          {busDetails.fare}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Seats Available:</span>{" "}
          {busDetails.seatsAvailable}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Stops:</span> {busDetails.stops}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Contact:</span> {busDetails.contact}
        </p>
      </div>

      {/* Buy Form */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">Buy Tickets</h2>
        <form onSubmit={handleBuyNow} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Customer Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full max-w-md p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Number of Tickets:</label>
            <input
              type="number"
              min="1"
              max={busDetails.seatsAvailable}
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setQuantity(val);
                setSelectedSeats([]);
              }}
              className="w-32 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Seat Selection */}
          <div>
            <label className="block font-medium mb-1">Select Seats:</label>
            <div className="flex flex-wrap gap-2">
              {Array.from(
                { length: busDetails.seatsAvailable },
                (_, i) => i + 1
              ).map((seat) => (
                <button
                  type="button"
                  key={seat}
                  onClick={() => handleSeatToggle(seat)}
                  className={`w-12 h-12 rounded-md border flex items-center justify-center font-semibold transition ${
                    selectedSeats.includes(seat)
                      ? "bg-yellow-400 text-gray-900"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Payment Method:</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-48 p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>
              <option value="E-Wallet">E-Wallet</option>
              <option value="Cash on Arrival">Cash on Arrival</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
          >
            Buy Now
          </button>
        </form>
      </div>

      {/* Payment Summary */}
      {paymentSummary && (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Payment Summary</h2>
          <p>
            <span className="font-semibold">Customer Name:</span>{" "}
            {paymentSummary.customerName}
          </p>
          <p>
            <span className="font-semibold">Bus Name:</span>{" "}
            {paymentSummary.busName}
          </p>
          <p>
            <span className="font-semibold">Tickets:</span>{" "}
            {paymentSummary.quantity}
          </p>
          <p>
            <span className="font-semibold">Seats Selected:</span>{" "}
            {paymentSummary.selectedSeats.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Payment Method:</span>{" "}
            {paymentSummary.paymentMethod}
          </p>
          <p>
            <span className="font-semibold">Total Amount:</span> Rs.{" "}
            {paymentSummary.total}
          </p>
        </div>
      )}
    </div>
  );
};

export default BusDetails;
