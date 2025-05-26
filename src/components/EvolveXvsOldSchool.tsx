import React from "react";

const comparison = [
  {
    label: "Speed",
    icon: (
      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    evolveX: "🚀 2–3 weeks to launch MVP",
    agency: "2–4 months (slow onboarding & process)",
    freelancer: "Varies, often delayed",
    corporate: "3–6+ months (bureaucracy)",
  },
  {
    label: "Communication",
    icon: (
      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
      </svg>
    ),
    evolveX: "Direct, async, always available",
    agency: "Account managers, slow feedback",
    freelancer: "Inconsistent, timezone issues",
    corporate: "Formal, slow, many layers",
  },
  {
    label: "Flexibility",
    icon: (
      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
      </svg>
    ),
    evolveX: "Pause/cancel anytime, no contracts",
    agency: "Long contracts, rigid scope",
    freelancer: "Depends on individual",
    corporate: "Locked-in SOWs, little flexibility",
  },
  {
    label: "Quality",
    icon: (
      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.44 4.73L5.8 21z" />
      </svg>
    ),
    evolveX: "Senior team, proven results",
    agency: "Mixed teams, variable quality",
    freelancer: "Hit or miss",
    corporate: "Stable, but not always innovative",
  },
  {
    label: "Pricing",
    icon: (
      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 10v4m8-8a8 8 0 11-16 0 8 8 0 0116 0z" />
      </svg>
    ),
    evolveX: "Transparent, fixed monthly",
    agency: "High, hidden fees",
    freelancer: "Low upfront, but risky",
    corporate: "Very high (overhead)",
  },
  {
    label: "Ownership",
    icon: (
      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    evolveX: "You own all IP & code",
    agency: "Often shared or unclear",
    freelancer: "Sometimes unclear",
    corporate: "Usually owned by them",
  },
];

export default function EvolveXvsOldSchool() {
  return (
    <section id="vs" className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-10 drop-shadow">
          EvolveX <span className="text-indigo-600">vs</span> Old School
        </h2>

        <div className="overflow-x-auto rounded-2xl bg-white/80 backdrop-blur shadow-2xl border border-indigo-100">
          <table className="min-w-full table-auto text-left text-sm md:text-base">
            <thead>
              <tr className="text-indigo-900 bg-indigo-100 font-semibold uppercase tracking-wide">
                <th className="p-4">Feature</th>
                <th className="p-4">EvolveX</th>
                <th className="p-4">Agency</th>
                <th className="p-4">Freelancer</th>
                <th className="p-4">Corporate</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, idx) => (
                <tr
                  key={row.label}
                  className={`transition hover:bg-indigo-50 ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="p-4 font-semibold text-gray-900 flex items-center">
                    {row.icon}
                    {row.label}
                  </td>
                  <td className="p-4 text-indigo-900 font-medium">{row.evolveX}</td>
                  <td className="p-4 text-gray-700">{row.agency}</td>
                  <td className="p-4 text-gray-700">{row.freelancer}</td>
                  <td className="p-4 text-gray-700">{row.corporate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-gray-700 mt-10 max-w-2xl mx-auto text-lg font-medium bg-white/70 rounded-xl py-4 px-6 shadow border border-indigo-100">
          Choose <span className="text-indigo-600 font-bold">EvolveX</span> for speed, flexibility, and results—without the headaches of old-school models.
        </p>
      </div>
    </section>
  );
}
