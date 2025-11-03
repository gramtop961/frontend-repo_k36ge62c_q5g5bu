import React from 'react';
import { Bot, Cog, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: "Agents IA sur mesure",
    desc:
      "Concevez des agents conversationnels et assistants autonomes adaptés à vos cas d'usage: support, vente, RPA, knowledge ops.",
  },
  {
    icon: Cog,
    title: "Automatisation de bout en bout",
    desc:
      "Orchestrez vos processus métiers avec des pipelines robustes: extraction, décision, génération, validation humaine.",
  },
  {
    icon: Shield,
    title: "Sécurité & conformité",
    desc:
      "Gouvernance des données, contrôle des prompts, traçabilité, RBAC et déploiements sur votre cloud ou on-premise.",
  },
  {
    icon: Zap,
    title: "ROI mesurable",
    desc:
      "Tableaux de bord, A/B testing, monitoring de qualité et optimisation continue pour maximiser l'impact business.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Nos expertises principales</h2>
          <p className="mt-3 text-white/70">
            Des blocs technologiques fiables qui accélèrent votre feuille de route IA sans compromettre la qualité.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:translate-y-[-2px] hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-500/15 p-3 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
