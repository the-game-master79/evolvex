import React, { useRef } from "react";

const workItems = [
  "Web Apps",
  "Mobile Apps",
  "UI/UX Design",
  "API Development",
  "Cloud Deployment",
  "DevOps Automation",
  "E-commerce",
  "SaaS Platforms",
  "AI Integrations",
  "Data Analytics",
  "MVP Launch",
  "Product Strategy",
  "QA & Testing",
  "Performance Tuning",
  "Security Audits",
  "Legacy Modernization",
  "Microservices",
  "Realtime Apps",
  "API Integrations",
  "Custom Dashboards",
  "CMS Solutions",
  "Chatbots",
  "Payment Systems",
  "Third-party Integrations",
  "Code Reviews",
  "CI/CD Pipelines",
  "Serverless Apps",
  "Support & Maintenance",
  "Consulting",
  "Prototyping",
];

const randomColors = [
  "text-pink-600",
  "text-indigo-600",
  "text-purple-600",
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-rose-600",
  "text-fuchsia-600",
  "text-cyan-600",
  "text-orange-600",
];

export default function WhatWeDo() {
  // Store refs for each item to avoid unnecessary re-renders
  const colorRefs = useRef<{ [key: number]: string }>({});

  function handleMouseEnter(idx: number) {
    const color = randomColors[Math.floor(Math.random() * randomColors.length)];
    colorRefs.current[idx] = color;
    // Force update by using a dummy state (not ideal, but works for this case)
    // In a real app, consider using useState for each item or a reducer
    document.getElementById(`workitem-${idx}`)?.classList.add(color);
  }

  function handleMouseLeave(idx: number) {
    randomColors.forEach((color) => {
      document.getElementById(`workitem-${idx}`)?.classList.remove(color);
    });
  }

  return (
    <section
      id="whatwedo"
      className="py-24 px-4 bg-gradient-to-br from-pink-50 via-white to-indigo-50 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-gray-900 drop-shadow-lg text-left">
          <span className="text-indigo-600">This is what</span> we do
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 text-left max-w-2xl">
          From web and mobile apps to AI integrations and cloud deployments, our team covers the full spectrum of modern digital product development. If you see it below, we can build it for you—fast, secure, and pixel-perfect.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {workItems.map((item, idx) => (
            <div
              key={item}
              id={`workitem-${idx}`}
              className="flex items-center justify-center text-center font-semibold text-gray-800 text-base md:text-lg py-2 px-1 transition-transform duration-200 hover:scale-105 cursor-pointer"
              style={{ minHeight: "60px" }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <span className="relative inline-block px-6 py-2 rounded-full text-white font-semibold text-base shadow-md overflow-hidden">
            <span
              className="absolute inset-0 rounded-full z-0 animate-mesh-gradient"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, #6366f1 0%, #ec4899 40%, #a21caf 70%, #818cf8 100%)",
                filter: "blur(0px)",
                opacity: 0.95,
              }}
            ></span>
            <span className="relative z-10">If it's there, then we can make it.</span>
          </span>
        </div>
      </div>
      <style>{`
        @keyframes mesh-gradient {
          0% {
            background-position: 0% 50%, 100% 50%;
          }
          50% {
            background-position: 100% 50%, 0% 50%;
          }
          100% {
            background-position: 0% 50%, 100% 50%;
          }
        }
        .animate-mesh-gradient {
          background-size: 200% 200%;
          animation: mesh-gradient 6s ease-in-out infinite;
          transition: background 0.5s;
        }
      `}</style>
    </section>
  );
}
