import React from "react";
import Builders from "../../assests/5.png";
import Hub from "../../assests/1.png";
import Nexus from "../../assests/NEXUS.png";
import Header from "./Header";
import Footer from "./Footer";

export default function OurCompany() {
  const companies = [
    {
      name: "Poeage Builders",
      img: Builders,
      link: "https://poeagebuilders.in",
      desc: "Construction & infrastructure built on innovation, safety, and reliability.",
      color: "from-amber-400 to-red-500",
    },
    {
      name: "Poeage Hub",
      img: Hub,
      link: "https://poeagehub.in",
      desc: "A digital marketplace connecting services, ideas, and opportunities.",
      color: "from-blue-500 to-cyan-400",
    },
    {
      name: "Poeage Nexus",
      img: Nexus,
      link: "https://poeagenexus.com",
      desc: "Poeage Manpower Supply & Consultancy",
      color: "from-fuchsia-500 to-indigo-500",
    },
  ];

  return (
    <>
      <Header />

      <section className="relative min-h-screen px-6 py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_60%)]" />

        <h2 className="text-center text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-indigo-700">
          Our Companies
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 mb-16">
          A journey of innovation — each brand strengthens the ecosystem while driving its own mission.
        </p>

        {/* JOURNEY PATH */}
        <div className="relative max-w-6xl mx-auto">
          {/* curved path */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 400"
            fill="none"
          >
            <path
              d="M50 200 C300 50, 600 350, 1150 180"
              stroke="url(#grad)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="grad" x1="0" y1="0" x2="1200" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* companies on the path */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 relative">
            {companies.map((c, i) => (
              <div
                key={i}
                className="relative group flex flex-col gap-4 bg-white/90 border rounded-2xl p-6 shadow-sm hover:shadow-2xl backdrop-blur-xl transition-all duration-300"
              >
                {/* glow */}
                <div
                  className={`absolute inset-0 -z-10 opacity-30 blur-xl rounded-2xl bg-gradient-to-r ${c.color}`}
                />

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-white border flex items-center justify-center shadow-inner">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>

                  <h3 className="font-bold text-lg text-gray-900">
                    {c.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {c.desc}
                </p>

                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full text-white bg-gradient-to-r ${c.color} shadow hover:opacity-90 transition`}
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
