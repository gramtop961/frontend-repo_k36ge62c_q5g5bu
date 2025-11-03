import React from 'react';
import { Layers, Rocket, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'Diagnostic & cadrage',
    points: [
      "Atelier métier et audit technique",
      "Cartographie des processus et quick wins",
      "Définition des KPIs et contraintes",
    ],
  },
  {
    step: '02',
    title: 'Prototype guidé par la valeur',
    points: [
      "POC avec données réelles",
      "Boucles de validation humaine",
      "Mesure de la qualité et itérations",
    ],
  },
  {
    step: '03',
    title: 'Intégration & déploiement',
    points: [
      "Connexion CRM/ERP/ITSM et APIs",
      "Observabilité, sécurité et gouvernance",
      "Transfert de compétences",
    ],
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.14),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Notre méthodologie</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Un cadre éprouvé pour livrer des projets IA utiles, responsables et adoptés par les équipes métier.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80">
            <Layers className="h-4 w-4" />
            Approche itérative
          </div>
        </div>

        {/* Timeline cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6"
            >
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="pointer-events-none absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-gradient-to-r from-white/20 to-transparent md:block" />
              )}

              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white/60">Étape {s.step}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/30">
                  <Rocket className="h-3.5 w-3.5" />
                  Impact d'abord
                </span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-indigo-300" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
