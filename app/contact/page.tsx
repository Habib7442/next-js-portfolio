"use client"
import React, { useState } from "react";

const ContactPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    window.location.href = `mailto:habibtanwir1906@gmail.com?subject=Contact&body=My email: ${email}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black-100">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-white w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-medium text-gray-400">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={handleChange}
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>
          <button
            onClick={handleSendEmail}
            className="w-full p-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-300"
          >
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
