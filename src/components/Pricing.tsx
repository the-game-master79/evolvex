import React from "react";

const plans = [
  {
    name: "Pro",
    price: "$5999",
    period: "monthly",
    features: [
      "Unlimited requests",
      "2-3 week MVP launch",
      "Full-stack team",
      "Async communication",
      "Pause/cancel anytime",
      "All IP & code ownership",
    ],
    highlight: false,
  },
  {
    name: "Ultimate",
    price: "$9999",
    period: "monthly",
    features: [
      "Everything in Pro",
      "Priority delivery",
      "Dedicated senior lead",
      "Weekly progress reports",
      "Advanced integrations",
      "White-glove onboarding",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-br from-white via-indigo-50 to-purple-50 font-sans">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900 drop-shadow-lg">
          Simple, Transparent <span className="text-indigo-600">Pricing</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center border-4 ${
                plan.highlight
                  ? "border-indigo-400 scale-105 z-10"
                  : "border-indigo-100"
              } transition-transform duration-200`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{plan.name}</h3>
              <div className="flex items-end mb-4">
                <span className="text-4xl font-extrabold text-indigo-600">{plan.price}</span>
                <span className="ml-2 text-lg text-gray-500 font-semibold">/{plan.period}</span>
              </div>
              <ul className="mb-8 text-gray-700 text-left space-y-2">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#get-started"
                className={`inline-block bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition text-lg ${
                  plan.highlight ? "" : "opacity-90"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <p className="mt-10 text-gray-600 text-base max-w-xl mx-auto">
          No hidden fees. Cancel or pause anytime. Need something custom? <a href="#get-started" className="text-indigo-600 font-semibold underline">Contact us</a>.
        </p>
      </div>
    </section>
  );
}
