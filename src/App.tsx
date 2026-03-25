import { useState } from "react";
import { motion } from "framer-motion";
import "./index.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request received. We'll reach out shortly.");
    setForm({ name: "", email: "", business: "", message: "" });
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-orange-500 blur-[200px] rounded-full opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold relative"
        >
          <span className="text-orange-500 drop-shadow-[0_0_30px_rgba(255,115,0,1)]">
            High Ridge
          </span>
          <br />
          Web Design
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 max-w-2xl text-lg text-gray-300 relative"
        >
          A beast in the industry. Precision engineered. Relentlessly
          optimized. And one you just happened to tame.
        </motion.p>
      </section>

      {/* Process */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Audit", "Strategy", "Build", "Optimize"].map((step) => (
            <motion.div
              key={step}
              whileHover={{ y: -8 }}
              className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-orange-500"
            >
              <h3 className="text-lg text-orange-400 font-semibold mb-2">
                {step}
              </h3>
              <p className="text-gray-400 text-sm">
                We refine every stage until performance is maximized.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold mb-12 text-center">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Starter",
              price: "$800",
              features: ["1–3 Pages", "Mobile Optimized", "Fast Load"],
            },
            {
              title: "Growth",
              price: "$1,600",
              features: ["5–8 Pages", "SEO Ready", "Conversion Focused"],
            },
            {
              title: "Elite",
              price: "$2,700+",
              features: ["Unlimited", "Full Strategy", "Conversion Systems"],
            },
          ].map((plan) => (
            <motion.div
              key={plan.title}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-black border border-orange-500/40 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-orange-400">
                {plan.title}
              </h3>
              <p className="text-3xl mt-4 mb-6">{plan.price}</p>
              <ul className="space-y-2 text-gray-400">
                {plan.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">
          Start Your Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 bg-zinc-900 rounded border border-zinc-800 focus:border-orange-500 outline-none"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 bg-zinc-900 rounded border border-zinc-800 focus:border-orange-500 outline-none"
            required
          />
          <input
            name="business"
            value={form.business}
            onChange={handleChange}
            placeholder="Business Name"
            className="w-full p-3 bg-zinc-900 rounded border border-zinc-800 focus:border-orange-500 outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project"
            className="w-full p-3 bg-zinc-900 rounded border border-zinc-800 focus:border-orange-500 outline-none"
            rows={4}
          />
          <button
            type="submit"
            className="w-full p-3 bg-orange-500 hover:bg-orange-600 rounded text-black font-bold transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500">
        <p>
          Serving Sylva, NC and Western North Carolina •
          HighRidgeWebDesign.com • (828) 598-9262
        </p>
        <p className="mt-4 text-sm">Founded by Jeremy Black</p>
      </footer>
    </div>
  );
}

export default App;
