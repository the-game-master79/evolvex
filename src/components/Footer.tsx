export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-500 py-8 bg-white/80 font-sans rounded-b-3xl shadow-inner">
      © {new Date().getFullYear()}{" "}
      <span className="font-bold text-indigo-600">EvolveX</span>. All rights
      reserved.
    </footer>
  );
}
