import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center md:pt-32">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Quantum Soul • IA appliquée pour votre croissance
        </span>
        <h1 className="text-balance bg-gradient-to-r from-indigo-300 via-violet-200 to-orange-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          Implémentation, automatisation et intégration d'intelligence artificielle
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
          Nous aidons les entreprises à accélérer l'innovation avec des agents IA, des workflows automatisés et des
          intégrations sur mesure. Résultats mesurables, adoption fluide, sécurité garantie.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.02] hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Planifier une consultation
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white backdrop-blur transition hover:scale-[1.02] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Découvrir nos expertises
          </a>
        </div>
      </div>
    </section>
  );
}
