export default function CTA({ onBookCall }: { onBookCall?: () => void }) {
  return (
    <section
      id="get-started"
      className="py-24 px-4 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white text-center font-sans rounded-t-3xl shadow-2xl"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-lg">
        Ready to{" "}
        <span className="text-yellow-300" aria-hidden="true">
          Evolve?
        </span>
      </h2>
      <p className="mb-8 text-indigo-100 text-lg max-w-xl mx-auto">
        Let’s talk about building your next product at{" "}
        <span className="font-bold text-white">10x speed</span>.
      </p>
      <button
        type="button"
        onClick={onBookCall}
        className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-indigo-50 transition text-lg"
      >
        Book a Free Call
      </button>
    </section>
  );
}
