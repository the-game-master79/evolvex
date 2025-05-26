import React from "react";

const whyUsPoints = [
  {
    title: "Unlimited Requests",
    desc: "Get an unlimited software request backlog, prioritize as you will.",
    icon: (
      <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "Wicked Fast",
    desc: "Functions and changes are delivered for review within 3 business days, on average.",
    icon: (
      <svg className="w-8 h-8 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m4 4v-4a4 4 0 10-8 0v4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h.01" />
      </svg>
    ),
  },
  {
    title: "Flexible & Scalable",
    desc: "Stack or cancel your subscription anytime—no harm, no foul.",
    icon: (
      <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Expert Designers",
    desc: "Powered by small, tight-knit team of senior level developers.",
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="8" r="4" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 20v-2a4 4 0 018 0v2" />
      </svg>
    ),
  },
  {
    title: "Affordable Pricing",
    desc: "Get top tier talent at the cost of a mid-tier designer.",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8m0 0c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    ),
  },
  {
    title: "Thoughtfully Async",
    desc: "No regularly scheduled meetings or calls, more design time.",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3v4M8 3v4" />
      </svg>
    ),
  },
  {
    title: "Laser-Focused",
    desc: "We hone in on a single task at a time, resulting in stellar quality.",
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "No Scoping or Contracts",
    desc: "There are no contracts, SOWs, or obscure agreements. Just results.",
    icon: (
      <svg className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <rect x="6" y="6" width="12" height="12" rx="2" strokeWidth="2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9h6v6H9z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section
      id="whyus"
      className="py-24 px-4 bg-gradient-to-br from-white via-indigo-50 to-purple-50 font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-start md:gap-16 mb-14">
        <div className="md:w-1/3 text-left mb-10 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow-lg">
            <span className="text-indigo-600">Why</span> Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-md">
            Discover what makes our service unique, flexible, and perfect for your design needs.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {whyUsPoints.map((point, i) => (
              <div
                key={point.title}
                className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-row items-start border-b-4 border-indigo-100 hover:border-indigo-400 hover:scale-105 transition-all duration-200 group"
              >
                <div className="mr-5 mt-1">{point.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
