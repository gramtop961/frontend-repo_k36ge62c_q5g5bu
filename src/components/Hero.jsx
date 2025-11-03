import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Cover - full width */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlays for contrast and depth (won't block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-slate-950/90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Quantum Soul • IA appliquée pour votre croissance
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance bg-gradient-to-r from-indigo-300 via-violet-200 to-orange-200 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Implémentation, automatisation et intégration d'intelligence artificielle
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Agents IA, workflows autonomes et intégrations sur mesure. Nous transformons vos processus en avantages
          compétitifs mesurables.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
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
        </motion.div>

        {/* Glass stats */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { k: '+35%', v: "Gain de productivité" },
            { k: '90j', v: "Du cadrage au déploiement" },
            { k: '24/7', v: "Agents opérationnels" },
            { k: 'ISO', v: "Sécurité & conformité" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="text-lg font-semibold text-white">{s.k}</div>
              <div className="text-xs text-white/70">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
