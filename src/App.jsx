import React from "react";
import ParticlesBackground from "./ParticlesBackground";

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <ParticlesBackground />
      <div className="z-10 bg-white bg-opacity-5 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/10">
        <h1 className="text-2xl font-semibold mb-6 text-center">Contact Us</h1>
        <form className="space-y-4">
          <input
            type="text"
            required={true}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            required={true}
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input 
            required={true}
            type="text"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            maxLength={19}
            onChange={(e) => {
              let input = e.target.value.replace(/\D/g, "").slice(0, 16);
              const formatted = input.match(/.{1,4}/g)?.join("-") || "";
              e.target.value = formatted;
            }}
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            required={true}
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
