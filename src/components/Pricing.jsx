export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      period: "/mo",
      features: ["1 project", "Basic analytics", "Community support"],
      cta: "Start free",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      period: "/mo",
      features: ["Unlimited projects", "Advanced analytics", "Priority support"],
      cta: "Get Pro",
      highlighted: true,
    },
    {
      name: "Business",
      price: "$99",
      period: "/mo",
      features: ["SSO", "Audit logs", "Dedicated manager"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Simple pricing</h2>
          <p className="mt-4 text-slate-300">Choose the plan that fits your stage.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "rounded-2xl border bg-slate-900/60 p-6 shadow-lg ring-1 backdrop-blur " +
                (t.highlighted
                  ? "border-blue-400/30 ring-white/10"
                  : "border-white/10 ring-white/10")
              }
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-semibold">{t.name}</h3>
                {t.highlighted && (
                  <span className="rounded-full bg-blue-500/10 px-2 py-1 text-xs text-blue-300 ring-1 ring-inset ring-white/10">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-white">{t.price}</span>
                <span className="text-slate-400">{t.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-slate-300">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={
                  "mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition " +
                  (t.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:opacity-90"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10")
                }
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
