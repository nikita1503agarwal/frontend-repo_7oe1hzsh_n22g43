export default function Testimonials() {
  const items = [
    {
      quote:
        "We switched and our conversion rate jumped 42% in a week. The design feels premium without extra work.",
      name: "Avery Park",
      role: "Founder, Vela",
    },
    {
      quote:
        "SEO scores went from 68 to 98. Best part: we didn't touch a single line of custom CSS.",
      name: "Jordan Lee",
      role: "Growth, ArcJet",
    },
    {
      quote:
        "It looks like we hired a brand studio. Launch took one afternoon instead of two sprints.",
      name: "Samir Patel",
      role: "PM, Northstar",
    },
  ];

  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Loved by teams like yours</h2>
          <p className="mt-4 text-slate-300">Real results from real customers.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur"
            >
              <blockquote className="text-slate-200">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-400">
                <span className="text-white font-medium">{t.name}</span> · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
