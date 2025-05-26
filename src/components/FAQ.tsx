import React, { useState, useRef, useEffect } from "react";

const faqs = [
  {
    q: "How fast can you launch my MVP?",
    a: "Most MVPs are launched within 2-3 weeks, depending on complexity. We prioritize speed without sacrificing quality.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, scalable stacks: React, Node.js, TypeScript, cloud-native infra (AWS/GCP/Azure), and more.",
  },
  {
    q: "Is there a minimum contract duration?",
    a: "No long-term lock-ins. You can pause or cancel anytime with a 2-week notice.",
  },
  {
    q: "Can you handle both frontend and backend?",
    a: "Absolutely! Our full-stack team covers frontend, backend, devops, and QA.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes, we offer ongoing support and maintenance to ensure your product runs smoothly after launch.",
  },
  {
    q: "Can you help with product design and UX?",
    a: "Definitely! Our team includes experienced designers who can craft intuitive and beautiful user experiences.",
  },
  {
    q: "How do you ensure code quality?",
    a: "We follow best practices, code reviews, automated testing, and continuous integration to maintain high code quality.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer flexible pricing: fixed-price for well-defined projects or monthly retainers for ongoing work.",
  },
  {
    q: "Can you scale my MVP as my user base grows?",
    a: "Yes, we build with scalability in mind and can help you scale infrastructure and features as your needs evolve.",
  },
  {
    q: "How do we communicate during the project?",
    a: "We use Slack, email, and regular video calls to keep you updated and involved throughout the project.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Fix height glitch by resetting maxHeight after mount
  useEffect(() => {
    if (openIdx !== null) {
      const ref = answerRefs.current[openIdx];
      if (ref) {
        ref.style.maxHeight = ref.scrollHeight + 24 + "px";
      }
    }
  }, [openIdx]);

  return (
    <section
      id="faq"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-indigo-100 font-sans"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-gray-900 drop-shadow-lg text-center">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h2>
        <div>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={faq.q}
                className={`relative group rounded-2xl shadow-xl border-l-8 mb-7 transition-all duration-300 ${
                  isOpen
                    ? "border-indigo-500 bg-white"
                    : "border-indigo-100 bg-white/90 hover:shadow-2xl"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${idx}`}
                  className="w-full flex justify-between items-center px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-indigo-200 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, #ede9fe 0%, #f0f5ff 100%)",
                  }}
                >
                  <span className="text-lg md:text-xl font-semibold text-gray-900 flex-1">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-7 h-7 ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-indigo-600" : "text-indigo-400"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  ref={(el) => (answerRefs.current[idx] = el)}
                  className="overflow-hidden transition-all duration-500 ease-in-out px-8 text-gray-700 text-base"
                  style={{
                    maxHeight: isOpen ? `${answerRefs.current[idx]?.scrollHeight ?? 0 + 24}px` : "0",
                    opacity: isOpen ? 1 : 0,
                    paddingBottom: isOpen ? "1.5rem" : "0",
                    marginTop: isOpen ? "0.25rem" : "0",
                  }}
                  aria-hidden={!isOpen}
                >
                  <div>{faq.a}</div>
                </div>

                <div
                  className={`absolute left-0 top-0 h-full w-2 rounded-l-2xl transition-all duration-300 ${
                    isOpen ? "bg-indigo-500" : "bg-indigo-100 group-hover:bg-indigo-200"
                  }`}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
