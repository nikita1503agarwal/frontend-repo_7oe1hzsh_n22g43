export default function FAQ() {
  const faqs = [
    {
      q: "Can I use this for any product?",
      a: "Yes. It's flexible and works for SaaS, apps, APIs, and more.",
    },
    {
      q: "Is it responsive?",
      a: "Absolutely. It looks great on phones, tablets, and desktops.",
    },
    {
      q: "Do I need to know CSS?",
      a: "Nope. Everything is pre-styled with sensible defaults.",
    },
    {
      q: "Can I customize the colors?",
      a: "Yes. Tailwind makes it easy to adjust the theme.",
    },
  ];

  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-white sm:text-4xl text-center">FAQ</h2>
          <dl className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 ring-1 ring-white/10 backdrop-blur">
                <dt className="text-white font-medium">{f.q}</dt>
                <dd className="mt-2 text-slate-300">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
