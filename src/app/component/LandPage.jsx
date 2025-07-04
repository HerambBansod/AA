"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-pink-50 px-4 md:px-6 py-10 font-sans"
            style={{
                backgroundImage: 'url("/Background.webp")',
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
            }}
        >
            <section className="max-w-4xl w-full text-center relative p-6 ">

                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-sm bg-white/80 px-4 py-1 rounded-full shadow border w-fit backdrop-blur-sm">
                    <span className="text-gray-700">👋 Hola</span>
                </div>

                <div className="relative mt-10 px-6 md:px-10 max-w-3xl mx-auto">
                    {/* <Image
                        src="/marketing.svg"
                        alt="Quote Doodle"
                        width={80}
                        height={80}
                        className="absolute -bottom-6 -left-6 opacity-100"
                    /> */}

                    <blockquote className="relative z-10 text-sm italic text-gray-700 rounded-xl p-6 ">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-14 leading-tight text-black">
                            I'm <span className="text-pink-600 bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">Arpita Arjunwadkar</span> <span>👋</span>,<br />
                            <span className="text-gray-800">A Brand & Marketing Specialist</span>
                        </h1>
                    </blockquote>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mt-6 text-sm font-medium">
                    {[
                        ["🚀", "Ads"],
                        ["📊", "Marketing"],
                        ["✨", "Brand"],
                        ["📱", "Social Media"]
                    ].map(([icon, label], i) => (
                        <span key={i} className="flex items-center gap-1 bg-gray-900 text-white px-4 py-1 rounded-full shadow hover:scale-105 transition-transform">
                            {icon} {label}
                        </span>
                    ))}
                </div>


                <div className="relative flex justify-center mt-10">
                    <div className="absolute w-64 h-64 bg-orange-100 rounded-full blur-2xl z-0 top-2" />
                    <Image
                        src="/Image.webp"
                        alt="Arpita"
                        width={260}
                        height={260}
                        className="relative z-10 rounded-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="relative mt-10 px-6 md:px-10 max-w-3xl mx-auto">
                    <Image
                        src="/quote.svg"
                        alt="Quote Doodle"
                        width={80}
                        height={80}
                        className="absolute -top-6 -left-6 opacity-40"
                    />

                    <blockquote className="relative z-10 text-sm italic text-gray-700 rounded-xl p-6 ">
                        <p>
                            I'm Arpita Arjunwadkar, a brand and marketing specialist with a passion for building bold, meaningful identities.
                            With every project, I focus on crafting clear strategies, compelling visuals, and stories that connect with people.
                            My work blends creativity with insight to help brands not just look good, but truly resonate and grow.
                        </p>
                    </blockquote>
                </div>



                <div className="mt-6 text-md font-semibold text-gray-800">
                    <p>
                        <strong className="text-lg text-pink-600">Well Skilled</strong><br />
                        in Brand & Marketing Experience
                    </p>
                </div>


                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    <button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-6 py-2 rounded-full font-medium shadow-lg transition">
                        Resume ↗
                    </button>
                    <button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white px-6 py-2 rounded-full font-medium shadow-lg transition">
                        Hire me
                    </button>
                </div>
            </section>
        </main >
    );
}
