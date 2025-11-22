export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-10 ring-1 ring-white/10 backdrop-blur">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to grow faster?
            </h2>
            <p className="mt-4 text-slate-200">
              Create your account in minutes and start converting more visitors today.
            </p>
            <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder:text-slate-300/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-600/30 hover:opacity-90 transition">
                Get started free
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-300">No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
