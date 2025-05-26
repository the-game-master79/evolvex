import React, { useState } from "react";

const testimonials = [
  { name: "Alex (FintechX)", quote: "EvolveX helped us launch our payment app in just two weeks. Their team worked late nights to meet our deadline and handled compliance with ease." },
  { name: "Maya (EduCore)", quote: "We’ve worked with several dev teams, but EvolveX was by far the fastest and most responsive. They delivered our LMS features ahead of schedule." },
  { name: "Jordan (RetailPro)", quote: "Our dashboard redesign was a huge success. Customers love the new look, and our NPS score jumped by 18 points after launch." },
  { name: "Priya (HealthSync)", quote: "The EvolveX team was creative, reliable, and always available for quick calls. They even suggested improvements we hadn’t thought of." },
  { name: "Sam (Travelly)", quote: "We needed to scale our MVP fast. EvolveX migrated us to a SaaS platform with zero downtime and clear documentation." },
  { name: "Liam (ShopEase)", quote: "Communication was seamless, and every sprint ended with a working demo. EvolveX truly felt like an extension of our own team." },
  { name: "Olivia (Medico)", quote: "Their cloud expertise saved us weeks. Our deployment pipeline is now automated, and rollbacks are effortless." },
  { name: "Noah (Foodly)", quote: "After EvolveX’s optimizations, our app loads twice as fast and looks much better. Our users noticed the difference immediately." },
  { name: "Emma (BookNest)", quote: "We were nervous about modernizing our legacy system, but EvolveX handled it with zero downtime and clear migration steps." },
  { name: "William (AutoSync)", quote: "API integrations were completed ahead of schedule and worked flawlessly with our existing backend." },
  { name: "Ava (GreenTech)", quote: "The team brought fresh ideas to our project and paid close attention to every detail. The final product exceeded our expectations." },
  { name: "James (EduSpark)", quote: "Our MVP launch was not only smooth but also came with thorough onboarding materials for our staff." },
  { name: "Sophia (FitTrack)", quote: "The chatbot EvolveX built for us increased user engagement by 40%. They even helped us fine-tune the conversation flows post-launch." },
  { name: "Benjamin (BizFlow)", quote: "DevOps automation from EvolveX cut our deployment times in half. We now release updates with confidence." },
  { name: "Isabella (Artify)", quote: "Our dashboards are both beautiful and intuitive. EvolveX’s UX team really understood our users." },
  { name: "Lucas (QuickPay)", quote: "Payment integration was seamless and secure. EvolveX guided us through PCI compliance and testing." },
  { name: "Mason (TravelGenie)", quote: "Realtime chat and notifications work perfectly. Our users love the instant updates." },
  { name: "Mia (PetCare)", quote: "Support is always prompt and helpful. EvolveX even provided us with a maintenance checklist for our app." },
  { name: "Elijah (SmartHome)", quote: "Their consulting helped us scale our IoT platform without breaking the bank. We’re ready for 10x more users now." },
  { name: "Charlotte (Evently)", quote: "Prototyping sessions with EvolveX were invaluable. They helped us clarify our product strategy and avoid costly mistakes." },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const visibleCount = 3;

  function prev() {
    setStart((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  }
  function next() {
    setStart((prev) =>
      prev === testimonials.length - visibleCount ? 0 : prev + 1
    );
  }

  // Compute visible testimonials with infinite scroll effect
  const visibleTestimonials = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleTestimonials.push(
      testimonials[(start + i) % testimonials.length]
    );
  }

  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-br from-purple-50 via-white to-indigo-100 font-sans relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900 drop-shadow-lg text-center">
        What Our <span className="text-indigo-600">Clients Say</span>
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-0 z-10 bg-white/80 hover:bg-indigo-100 text-indigo-600 rounded-full shadow-md w-10 h-10 flex items-center justify-center transition-all duration-200 -translate-x-1/2 top-1/2 -mt-5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="w-full">
              <div className="grid md:grid-cols-3 gap-8">
                {visibleTestimonials.map((t, idx) => (
                  <div
                    key={t.name + idx}
                    className="relative bg-white p-8 rounded-3xl shadow-2xl flex flex-col items-center border-t-4 border-indigo-200 animate-fade-in transition-all duration-300 hover:shadow-indigo-200 hover:-translate-y-2 group"
                  >
                    {/* Funky mesh gradient blob */}
                    <div className="absolute -top-8 -left-8 w-20 h-20 bg-gradient-to-tr from-pink-200 via-indigo-200 to-purple-200 rounded-full opacity-20 blur-2xl pointer-events-none z-0" />
                    <svg className="w-12 h-12 mb-4 text-indigo-400 drop-shadow-lg z-10" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.17 15C6.52 15 6 14.48 6 13.83V13.5C6 10.46 8.46 8 11.5 8c.83 0 1.5.67 1.5 1.5S12.33 11 11.5 11c-1.38 0-2.5 1.12-2.5 2.5v.33c0 .65-.52 1.17-1.17 1.17zm9 0c-.65 0-1.17-.52-1.17-1.17V13.5c0-3.04 2.46-5.5 5.5-5.5.83 0 1.5.67 1.5 1.5S22.33 11 21.5 11c-1.38 0-2.5 1.12-2.5 2.5v.33c0 .65-.52 1.17-1.17 1.17z"/>
                    </svg>
                    <p className="italic text-lg text-gray-800 mb-4 text-center leading-relaxed z-10">
                      <span className="inline-block relative before:absolute before:-left-2 before:-top-2 before:w-3 before:h-3 before:bg-indigo-100 before:rounded-full before:blur before:opacity-60">
                        "{t.quote}"
                      </span>
                    </p>
                    <p className="mt-2 font-semibold text-indigo-600 z-10">{t.name}</p>
                    {/* Funky bottom right accent */}
                    <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-200 rounded-full opacity-20 blur-2xl pointer-events-none z-0" />
                  </div>
                ))}
              </div>
            </div>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-0 z-10 bg-white/80 hover:bg-indigo-100 text-indigo-600 rounded-full shadow-md w-10 h-10 flex items-center justify-center transition-all duration-200 translate-x-1/2 top-1/2 -mt-5"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonial set ${idx + 1}`}
                onClick={() => setStart(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  start === idx ? "bg-indigo-500 scale-125 shadow" : "bg-indigo-200"
                }`}
              />
            ))}
          </div>
        </div>
        {/* Funky mesh gradient background shape */}
        <div className="absolute -top-20 -left-32 w-72 h-72 bg-gradient-to-tr from-pink-200 via-indigo-200 to-purple-200 rounded-full opacity-30 blur-3xl pointer-events-none animate-float" />
        <div className="absolute -bottom-24 -right-32 w-80 h-80 bg-gradient-to-br from-yellow-200 via-pink-100 to-blue-200 rounded-full opacity-20 blur-3xl pointer-events-none animate-float2" />
      </div>
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px) scale(0.98);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
        .animate-fade-in {
          animation: fade-in 0.5s cubic-bezier(.4,2,.6,1);
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1);}
          50% { transform: translateY(-16px) scale(1.08);}
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) scale(1);}
          50% { transform: translateY(12px) scale(1.04);}
        }
      `}</style>
    </section>
  );
}
