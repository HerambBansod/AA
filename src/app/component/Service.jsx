"use client";
import React from "react";
import Image from "next/image";


// const services = [
//     {
//         title: "Social Media Management",
//         image: "/services/smm.webp", 
//     },
//     {
//         title: "Content Writing",
//         image: "/services/content-writing.webp",
//     },
//     {
//         title: "Content Scripting",
//         image: "/services/content-scripting.webp",
//     },
//     {
//         title: "Video Creation",
//         image: "/services/video-creation.webp",
//     },
//     {
//         title: "UX/UI + SEO + Site Development",
//         image: "/services/ux-ui.webp",
//     },
//     {
//         title: "Event Management",
//         image: "/services/event.webp",
//     },
// ];

export default function Services() {
    return (
        // <section className="bg-white py-12 px-6 text-center">
        //     <h2 className="text-3xl font-semibold mb-10 text-pink-600">Services / Skills</h2>
        //     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        //         {services.map((service, index) => (
        //             <div key={index} className="bg-[#FFF1F7] p-4 rounded-xl shadow hover:shadow-lg transition">
        //                 <div className="relative w-full h-52 mb-4">
        //                     <Image
        //                         src={service.image}
        //                         alt={service.title}
        //                         fill
        //                         className="object-cover rounded-lg"
        //                     />
        //                 </div>
        //                 <h3 className="text-lg font-medium text-gray-800">{service.title}</h3>
        //             </div>
        //         ))}
        //     </div>
        // </section>

        <section className="bg-[#0f0f0f] text-white py-20 px-4 md:px-10 font-sans">
            <div className="max-w-6xl mx-auto text-start">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">                                
                    BRINGING BRANDS <br className="hidden sm:block" />
                    <span className="relative inline-block">
                        TO LIFE WITH STRATEGY ,
                        <span className="absolute left-0 -bottom-2 w-full h-2 bg-pink-400 -z-10 rounded-lg rotate-[2deg]" />
                    </span>
                    <br /> STYLE AND STORYTELLING
                </h2>
                <p className="text-gray-400 mt-4 max-w-xl text-sm text-start">
                    Bold ideas. Smarter strategies. Game-changing results. Let’s elevate your brand and unlock its full potential.
                </p>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">

                 
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left shadow hover:shadow-lg transition-all">
                        <div className="inline-block bg-pink-300 text-black px-4 py-1 font-bold text-sm rounded-md -rotate-2 mb-4">SMM</div>
                        <p className="text-sm text-gray-300 mb-4">
                            Managing and growing your brand across platforms with audience-driven strategies and content calendars.
                        </p>
                        <ul className="space-y-2 text-sm text-white font-semibold">
                            <li>SOCIAL MEDIA STRATEGY</li>
                            <li>CALENDAR MANAGEMENT</li>
                            <li>PLATFORM OPTIMIZATION</li>
                            <li>INFLUENCER COLLABS</li>
                        </ul>
                    </div>

                   
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left shadow hover:shadow-lg transition-all">
                        <div className="inline-block bg-purple-200 text-black px-4 py-1 font-bold text-sm rounded-md -rotate-2 mb-4">CONTENT WRITING</div>
                        <p className="text-sm text-gray-300 mb-4">
                            Crafting compelling, value-driven copy and scripts for brands that speak directly to their target audience.
                        </p>
                        <ul className="space-y-2 text-sm text-white font-semibold">
                            <li>BLOGS & CAPTIONS</li>
                            <li>AD COPYWRITING</li>
                            <li>SCRIPT WRITING (REELS/YOUTUBE)</li>
                            <li>WEBSITE CONTENT</li>
                        </ul>
                    </div>

                  
                    <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left shadow hover:shadow-lg transition-all">
                        <div className="inline-block bg-blue-300 text-black px-4 py-1 font-bold text-sm rounded-md -rotate-2 mb-4">VIDEO CREATION</div>
                        <p className="text-sm text-gray-300 mb-4">
                            Producing aesthetic, impactful videos for social media, brand campaigns, and storytelling.
                        </p>
                        <ul className="space-y-2 text-sm text-white font-semibold">
                            <li>REELS & SHORTS</li>
                            <li>EDITING & TRANSITIONS</li>
                            <li>BRAND VIDEO CAMPAIGNS</li>
                            <li>STORYBOARDING</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}