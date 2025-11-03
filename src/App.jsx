import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-400 to-orange-300" />
            </div>
            <span className="text-lg font-semibold tracking-tight">Quantum Soul</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Expertises</a>
            <a href="#process" className="hover:text-white">Méthodologie</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#contact" className="rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/15">Commencer</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <div id="process">
          <Process />
        </div>
        <CTA />
      </main>

      {/* Footer (inline) */}
      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/60 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Quantum Soul — Intelligence artificielle au service de votre croissance.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-white">Expertises</a>
            <a href="#process" className="hover:text-white">Méthodologie</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
