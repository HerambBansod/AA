"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-6 py-10 font-sans"
      style={{
        backgroundImage: 'url("/Background.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="max-w-4xl w-full text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 text-sm bg-white px-3 py-1 rounded-full shadow border w-fit">
          <span className="text-gray-600">👋 Hola</span>
        </div>

        <div className="mt-20 mb-10 pb-4"
          style={{
            backgroundImage: 'url("/TextBg.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl text-black md:text-5xl font-semibold mt-10">
            I'm <span className="text-[#FF5FA2] font-bold">Arpita Arjunwadkar</span>{" "}
            <span role="img">👋</span>,<br />
            <span className="text-black">A Brand & Marketing Specialist</span>
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm font-medium">
          <span className="bg-black text-white px-4 py-1 rounded-full">🚀 Ads</span>
          <span className="bg-black text-white px-4 py-1 rounded-full">📊 Marketing</span>
          <span className="bg-black text-white px-4 py-1 rounded-full">✨ Brand</span>
          <span className="bg-black text-white px-4 py-1 rounded-full">📱 Social Media</span>
        </div>

        <div className="relative flex justify-center mt-8">
          <div className="absolute w-64 h-64 bg-orange-200 rounded-full z-0 top-2" />
          <Image
            src="/Image.jpg"
            alt="Arpita_Image"
            width={250}
            height={250}
            className="relative z-10 rounded-xl object-cover"
          />
        </div>

        <div className="mt-6 italic text-gray-600 text-sm px-4 md:px-0">
          <q>I'm Arpita Arjunwadkar a brand and marketing specialist with a passion for building bold, meaningful identities. With every project, I focus on crafting clear strategies, compelling visuals, and stories that connect with people. My work blends creativity with insight to help brands not just look good, but truly resonate and grow</q>
        </div>

        <div className="mt-4 text-lg font-semibold text-gray-800">
          <p>
            <strong>Well Skilled</strong> <br /> in Brand & Marketing Experience
          </p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-[#FF5FA2] text-white px-5 py-2 rounded-full transition">
            Resume ↗
          </button>
          <button className="border border-gray-400 text-gray-700 px-5 py-2 rounded-full hover:bg-[#FF5FA2]  hover:border-[#FF5FA2] hover:text-white transition">
            Hire me
          </button>
        </div>

      </section>
    </main>
  );
}
