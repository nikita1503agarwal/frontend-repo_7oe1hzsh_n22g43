import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-500 ring-1 ring-white/20" />
              <span className="text-white font-semibold text-lg tracking-tight">SaaSly</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm">
              <a className="text-slate-300 hover:text-white transition" href="#features">Features</a>
              <a className="text-slate-300 hover:text-white transition" href="#pricing">Pricing</a>
              <a className="text-slate-300 hover:text-white transition" href="#testimonials">Customers</a>
              <a className="text-slate-300 hover:text-white transition" href="#faq">FAQ</a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a className="text-slate-300 hover:text-white text-sm" href="#">Sign in</a>
              <a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20 hover:opacity-90 transition" href="#cta">Get started</a>
            </div>

            <button className="md:hidden text-white" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
              {open ? <X /> : <Menu />}
            </button>
          </nav>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 sm:px-6 pb-4">
              <div className="flex flex-col gap-2 pt-2">
                <a onClick={() => setOpen(false)} className="text-slate-200 py-2" href="#features">Features</a>
                <a onClick={() => setOpen(false)} className="text-slate-200 py-2" href="#pricing">Pricing</a>
                <a onClick={() => setOpen(false)} className="text-slate-200 py-2" href="#testimonials">Customers</a>
                <a onClick={() => setOpen(false)} className="text-slate-200 py-2" href="#faq">FAQ</a>
                <div className="pt-2 flex items-center gap-3">
                  <a className="text-slate-300" href="#">Sign in</a>
                  <a className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-600/20" href="#cta">Get started</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
