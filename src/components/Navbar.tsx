import React from "react";

export default function Navbar({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <nav className="w-full bg-white/80 backdrop-blur shadow-lg fixed top-0 left-0 z-50 font-sans">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center gap-1">
          Evolve<span className="text-indigo-600">X</span>
        </a>
        <ul className="hidden md:flex gap-8 text-gray-700 font-semibold">
          <li>
            <a href="#whatwedo" className="hover:text-indigo-600 transition-colors duration-200">What we do?</a>
          </li>
          <li>
            <a href="#whyus" className="hover:text-indigo-600 transition-colors duration-200">Why choose us?</a>
          </li>
          <li>
            <a href="#vs" className="hover:text-indigo-600 transition-colors duration-200">What sets us apart</a>
          </li>
        </ul>
        <button
          type="button"
          onClick={onGetStarted}
          className="hidden md:inline-block bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition"
        >
          Get Started
        </button>
        {/* Mobile menu button */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here if needed */}
        </div>
      </div>
    </nav>
  );
}
