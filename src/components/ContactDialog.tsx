import React, { useState } from "react";

const plans = [
  { label: "$5999 monthly (Pro)", value: "pro" },
  { label: "$9999 monthly (Ultimate)", value: "ultimate" },
];

export default function ContactDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "",
    requirement: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Optionally send data to backend here
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-lg relative font-sans">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {!submitted ? (
          <>
            <h2 className="text-2xl font-extrabold mb-2 text-gray-900 text-center">
              Book a Free Call
            </h2>
            <p className="mb-6 text-gray-600 text-center">
              Our team will reach out to discuss your project.
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="phone">
                  Phone (with country code)
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 234 567 8901"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="plan">
                  Plan
                </label>
                <select
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none"
                  id="plan"
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select a plan
                  </option>
                  {plans.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="requirement">
                  Your Requirement
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-200 outline-none resize-none"
                  id="requirement"
                  name="requirement"
                  rows={2}
                  required
                  value={form.requirement}
                  onChange={handleChange}
                  placeholder="Ink your ideas, we'll make it real."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition text-lg mt-2"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center py-12">
            <svg className="w-16 h-16 mb-4 text-green-500" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.1"/>
              <path d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Thank you!</h3>
            <p className="text-gray-700 text-center">
              Our sales team will reach out to you soon.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl font-semibold shadow hover:bg-indigo-700 transition"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
