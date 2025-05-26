export default function Hero({ onGetStarted }: { onGetStarted?: () => void }) {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Textual content */}
        <div className="text-center md:text-left">
          <span className="inline-block mb-4 px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full font-semibold text-sm tracking-wide shadow-sm animate-pulse">
            🚀 Launch Faster Than Ever
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 drop-shadow-lg">
            Build Software{" "}
            <span className="text-indigo-600">10x Faster</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8 mx-auto md:mx-0">
            EvolveX empowers startups and enterprises to launch scalable apps,
            platforms, and tools in{" "}
            <span className="font-semibold text-indigo-600">weeks</span> – not
            months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              type="button"
              onClick={onGetStarted}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-indigo-700 transition text-lg"
            >
              Get Started
            </button>
            <a
              href="#features"
              className="bg-white border border-indigo-200 text-indigo-700 px-8 py-3 rounded-xl font-semibold shadow hover:bg-indigo-50 transition text-lg"
            >
              See Features
            </a>
          </div>
        </div>
        {/* Right: Illustration/mockup */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-md aspect-[16/10] rounded-3xl shadow-2xl bg-gradient-to-tr from-indigo-200 via-white to-purple-200 flex items-center justify-center overflow-hidden">
            {/* Replace below with an actual image or SVG for real use */}
            <svg
              className="w-3/4 h-3/4"
              viewBox="0 0 200 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="20"
                width="180"
                height="80"
                rx="16"
                fill="#fff"
                stroke="#6366f1"
                strokeWidth="4"
              />
              <rect x="30" y="40" width="60" height="12" rx="6" fill="#c7d2fe" />
              <rect x="30" y="60" width="100" height="12" rx="6" fill="#a5b4fc" />
              <rect x="30" y="80" width="40" height="12" rx="6" fill="#818cf8" />
              <circle cx="160" cy="60" r="18" fill="#6366f1" opacity="0.15" />
              <circle cx="160" cy="60" r="10" fill="#6366f1" opacity="0.3" />
              <circle cx="160" cy="60" r="5" fill="#6366f1" />
            </svg>
          </div>
        </div>
      </div>
      {/* Decorative blurred background shapes */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-100 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-40 pointer-events-none" />
    </section>
  );
}
