import { Shield, Rocket, Zap, Sparkles } from "lucide-react";

const features = [
  {
    title: "Blazing-fast performance",
    description:
      "Built with modern tooling and best practices to load instantly and rank higher.",
    icon: Rocket,
  },
  {
    title: "Enterprise-grade security",
    description:
      "Hardened defaults, secure components, and privacy-first analytics.",
    icon: Shield,
  },
  {
    title: "Automation-ready",
    description:
      "Hook into your stack with webhooks and AI-powered workflows.",
    icon: Zap,
  },
  {
    title: "Polished by design",
    description:
      "Thoughtful micro-interactions, gradients, and glass effects out of the box.",
    icon: Sparkles,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Everything you need</h2>
          <p className="mt-4 text-slate-300">
            Launch confidently with a clean foundation and conversion-focused sections.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-lg ring-1 ring-white/10 backdrop-blur hover:border-white/20 transition"
            >
              <Icon className="h-6 w-6 text-blue-400" />
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
