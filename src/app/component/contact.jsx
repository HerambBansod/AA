"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-pink-500 to-orange-400  flex items-center justify-center px-4 py-16 font-sans">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">

        
        <div className="bg-white p-8 flex flex-col gap-6 justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-sm text-gray-600">
            Feel free to drop a message. I’d love to hear about your project.
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-800">
            📞 <span>+91 8459136275</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-800">
            📧 <span>arpitaarjunwadkar8@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-800">
            📍 <span>Pune, Maharashtra, India</span>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            &copy; 2025 All rights reserved. Built with 💖 by Hejtech.
          </div>
        </div>

        
        <form className="bg-[#f8fcfb] p-10 flex flex-col gap-4 justify-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Have Any Project? Say Hello 👋
          </h3>

          <input
            type="text"
            placeholder="Full Name"
            required
            className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-black"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-black "
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-black"
          />
          <textarea
            placeholder="Write your message here..."
            rows="4"
            required
            className="p-3 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none placeholder-black "
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
