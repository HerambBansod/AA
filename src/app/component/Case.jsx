import React from 'react';

export default function Case() {
    return (
        <section className="bg-[#0f0f0f] py-20 px-4 md:px-10 font-sans text-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Case Study
                </h2>
                <p className="text-sm text-gray-400 mb-10 max-w-xl">
                    Exploring real-world brand transformations that blended smart strategy, visual identity, and marketing excellence.
                </p>

                <div className="bg-[#1a1a1a] rounded-3xl shadow-lg p-6 md:p-10 transition-all hover:shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-pink-400 text-xl font-bold">01</span>
                        <span className="text-sm font-semibold text-gray-400">PMI Worldwide</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                        Stanley: Scaling Legacy into Lifestyle
                    </h3>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        Stanley partnered with its parent company, <strong>PMI Worldwide</strong>, and collaborated with a network of <strong>influencer marketing</strong> and <strong>creative agencies</strong> to reposition the brand as a modern lifestyle icon. The project involved launching viral campaigns, leveraging TikTok creators, and embracing a fresh, youth-driven narrative.
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                        From being known as a rugged outdoor gear brand, Stanley transformed into a stylish, everyday essential — especially popularized through limited edition drops and trend-focused aesthetics. The results were game-changing: massive growth in brand equity, Gen Z resonance, and sell-out product releases.
                    </p>

                    <a href="#" className="inline-block text-pink-400 text-sm font-medium mt-2 hover:underline">
                        Read More →
                    </a>
                </div>
            </div>
        </section>
    );
}
