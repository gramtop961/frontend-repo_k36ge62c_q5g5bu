import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function CTA() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-24 text-white">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute left-[-10%] top-1/3 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10%] top-0 h-56 w-56 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Prêt à activer l'IA dans votre organisation ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-3 max-w-2xl text-white/70"
          >
            Parlez-nous de vos objectifs. Atelier de cadrage de 60 minutes pour identifier rapidement les leviers
            prioritaires et un plan d'action concret.
          </motion.p>
        </div>

        {/* Split layout: form + 3D */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_10px_40px_rgba(2,6,23,0.6)] backdrop-blur"
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Nom et prénom"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-indigo-400/0 transition focus:ring-2"
              />
              <input
                type="email"
                required
                placeholder="Email professionnel"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-indigo-400/0 transition focus:ring-2"
              />
              <input
                type="text"
                placeholder="Entreprise"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-indigo-400/0 transition focus:ring-2 sm:col-span-2"
              />
              <textarea
                rows={5}
                placeholder="Décrivez brièvement votre besoin"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-indigo-400/0 transition focus:ring-2 sm:col-span-2"
              />
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-white/70">
              <input id="consent" type="checkbox" className="h-4 w-4 rounded border-white/20 bg-white/5" />
              <label htmlFor="consent">J'accepte d'être contacté.e et la politique de confidentialité.</label>
            </div>

            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-orange-400 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.01] sm:w-auto"
              >
                Demander une consultation
              </button>
              <span className="text-xs text-white/60">Réponse sous 24h ouvrées</span>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative min-h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]"
          >
            <Spline
              scene="https://prod.spline.design/8BzqSg7iDL7x3X6D/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* subtle overlay to improve contrast without blocking interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
