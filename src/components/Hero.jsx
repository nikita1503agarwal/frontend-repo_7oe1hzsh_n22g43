import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36" id="home">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-[-10%] top-1/3 h-[30rem] w-[30rem] rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200 ring-1 ring-inset ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              New: AI-powered automations
            </div>
            <h1 className="mt-6 text-5xl/tight font-bold tracking-tight text-white sm:text-6xl/tight">
              Launch your SaaS faster with a stunning landing page
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Convert more visitors with a modern, responsive design. Built with Tailwind, accessible, and optimized for speed.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:opacity-90 transition">
                Get started for free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-medium hover:bg-white/10 transition">
                See features
              </a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              {[
                "No credit card required",
                "Cancel anytime",
                "24/7 support",
                "Free migration",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur">
              <img src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop" alt="App preview" className="rounded-xl" />
              <div className="pointer-events-none absolute inset-0 rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
