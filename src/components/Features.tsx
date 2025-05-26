const features = [
  { title: "MVP in 2 Weeks", desc: "We launch core products blazingly fast." },
  { title: "Scalable Infra", desc: "Built with cloud-native architecture." },
  { title: "Full-Stack Team", desc: "Frontend, backend, devops, and QA." },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100 font-sans"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-10 text-gray-900 drop-shadow-lg">
          Why Choose{" "}
          <span className="text-indigo-600" >EvolveX?</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-200"
            >
              <div
                className={`w-12 h-12 mb-4 rounded-full flex items-center justify-center text-2xl font-bold
                ${
                  i === 0
                    ? "bg-indigo-100 text-indigo-600"
                    : i === 1
                    ? "bg-purple-100 text-purple-600"
                    : "bg-pink-100 text-pink-600"
                }`}
              >
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
