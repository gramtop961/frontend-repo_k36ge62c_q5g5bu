import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Brain, Shield, Zap, Database, LineChart } from 'lucide-react';

const stats = [
  { icon: Rocket, k: '150+', v: 'Prototypes IA livrés' },
  { icon: Brain, k: '35%', v: 'Gain moyen de productivité' },
  { icon: Shield, k: '100%', v: 'Conformité & sécurité' },
  { icon: Zap, k: '24/7', v: 'Agents opérationnels' },
  { icon: Database, k: '10To', v: 'Données orchestrées' },
  { icon: LineChart, k: 'x4', v: 'ROI sur 12 mois' },
];

export default function Stats() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl font-semibold sm:text-3xl"
        >
          Nos chiffres clés
        </motion.h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map(({ icon: Icon, k, v }, i) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md"
            >
              <div className="mx-auto mb-2 inline-flex rounded-xl bg-white/10 p-2 text-indigo-300 ring-1 ring-inset ring-white/20">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-xl font-semibold text-white">{k}</div>
              <div className="text-xs text-white/70">{v}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
