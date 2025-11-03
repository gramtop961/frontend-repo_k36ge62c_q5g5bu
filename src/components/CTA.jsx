import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl">Prêt à activer l'IA dans votre organisation ?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          Parlez-nous de vos objectifs. Nous proposons un atelier de cadrage de 60 minutes pour identifier rapidement
          les leviers prioritaires et un plan d'action concret.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mx-auto mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:grid-cols-2"
        >
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
            rows={4}
            placeholder="Décrivez brièvement votre besoin"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 outline-none ring-indigo-400/0 transition focus:ring-2 sm:col-span-2"
          />
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-orange-400 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:scale-[1.01]"
            >
              Demander une consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
