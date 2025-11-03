import React from 'react';
import { Bot, Cog, Shield, Zap, Brain, Database, LineChart } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Bot,
    title: "Agents IA sur mesure",
    desc:
      "Assistants autonomes (support, vente, RPA) connectés à vos données et outils métiers, avec garde-fous.",
    tag: 'Agents & chatbots',
  },
  {
    icon: Cog,
    title: "Automatisation de bout en bout",
    desc:
      "Pipelines robustes: extraction, décision, génération, validation humaine (HITL) et orchestrations.",
    tag: 'Workflows',
  },
  {
    icon: Shield,
    title: "Sécurité & conformité",
    desc:
      "Gouvernance des données, RBAC, traçabilité, anonymisation et déploiements on‑premise ou cloud privé.",
    tag: 'Trust & Safety',
  },
  {
    icon: Brain,
    title: "RAG & connaissance",
    desc:
      "Recherche augmentée (RAG), vectorisation, synthèse multi‑documents et contrôle de qualité.",
    tag: 'Data & LLM',
  },
  {
    icon: Database,
    title: "Intégrations data",
    desc:
      "Connexion à vos CRM/ERP, entrepôts (BigQuery, Snowflake), APIs et systèmes internes.",
    tag: 'Connecteurs',
  },
  {
    icon: LineChart,
    title: "Mesure du ROI",
    desc:
      "Tableaux de bord, A/B testing, métriques de qualité et optimisation continue.",
    tag: 'Analytics',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Nos expertises principales
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70"
          >
            Des blocs technologiques fiables qui accélèrent votre feuille de route IA sans compromettre la qualité.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, tag }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_0_rgba(0,0,0,0)] transition"
            >
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{
                background:
                  'radial-gradient(600px 200px at 0% 0%, rgba(99,102,241,0.25), transparent 60%), radial-gradient(400px 150px at 100% 100%, rgba(249,115,22,0.18), transparent 60%)',
              }} />

              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-indigo-500/15 p-3 text-indigo-300 ring-1 ring-inset ring-indigo-500/30 transition group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                  {tag}
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>

                <div className="mt-4 inline-flex items-center text-sm text-indigo-300 group-hover:text-indigo-200">
                  En savoir plus
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
