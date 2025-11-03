import React from 'react';
import { Layers, Rocket } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Diagnostic & cadrage',
    text:
      "Analyse de vos processus, audit technique et définition des cas d'usage prioritaires avec indicateurs de succès.",
  },
  {
    step: '02',
    title: 'Prototype guidé par la valeur',
    text:
      "Construction rapide d'une preuve de valeur avec jeux de données réels, garde-fous et parcours utilisateurs.",
  },
  {
    step: '03',
    title: 'Intégration & déploiement',
    text:
      "Connexion à vos outils (CRM, ERP, ITSM), monitoring en production et transfert de compétences à vos équipes.",
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.15),transparent_55%)]" />
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

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white/60">Étape {s.step}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs text-emerald-300 ring-1 ring-emerald-400/30">
                  <Rocket className="h-3.5 w-3.5" />
                  Impact d'abord
                </span>
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
