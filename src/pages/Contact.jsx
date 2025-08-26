import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaUser, FaEnvelope, FaComment, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage("");

    emailjs
      .sendForm("service_nsnff3m", "template_rl254ll", form.current, {
        publicKey: "XuQZ-3n8qWD3K1rdk",
      })
      .then(
        () => {
          setStatusMessage("Message sent successfully!");
          setSending(false);
          form.current.reset();

          setTimeout(() => setStatusMessage(""), 5000); // disappear after 5 sec
        },
        (error) => {
          setStatusMessage("Failed to send message. Please try again.");
          setSending(false);
          console.error(error.text);

          setTimeout(() => setStatusMessage(""), 5000);
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden">

        {/* Left Side - Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">

            {/* Name */}
            <div className="relative">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                className="w-full px-10 py-2 border rounded-md focus:outline-none border-gray-300"
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="from_email"
                placeholder="Email"
                className="w-full px-10 py-2 border rounded-md focus:outline-none border-gray-300"
                required
              />
            </div>

            {/* Message */}
            <div className="relative">
              <FaComment className="absolute top-3 left-3 text-gray-400" />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full px-10 py-2 border rounded-md focus:outline-none border-gray-300 resize-none h-32"
                required
              />
            </div>

            {/* Status Message */}
            {statusMessage && (
              <p className="text-center text-green-600 font-semibold">{statusMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 py-2 rounded-md hover:bg-yellow-500 transition font-semibold"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right Side - Address Details */}
        <div className="bg-gray-800 flex flex-col justify-center items-center p-8 text-white space-y-2">
          <h2 className="text-3xl font-bold mb-4">Our Address</h2>

          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <p>123 Main Street, Islamabad, Pakistan</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <p>+92 300 1234567</p>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <p>support@smartbus.com</p>
          </div>

          <p className="italic mt-4 text-center">"Travel Smart, Travel Safe with SmartBus!"</p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
