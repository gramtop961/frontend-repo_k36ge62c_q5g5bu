import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-400 to-orange-300" />
              <span className="text-lg font-semibold tracking-tight">Quantum Soul</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              Des solutions IA responsables et mesurables pour accélérer votre croissance. Automatisation, agents et
              intégrations sur mesure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Produit</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Expertises</a></li>
              <li><a href="#process" className="hover:text-white">Méthodologie</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Ressources</h4>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Études de cas</a></li>
              <li><a href="#" className="hover:text-white">Guides & webinaires</a></li>
              <li><a href="#" className="hover:text-white">Sécurité</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Newsletter</h4>
            <p className="mt-3 text-sm text-white/70">Recevez des insights IA et des cas d'usage tous les mois.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                <input
                  type="email"
                  required
                  placeholder="Email professionnel"
                  className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5 pl-10 pr-3 text-sm text-white placeholder-white/50 outline-none ring-indigo-400/0 transition focus:ring-2"
                />
              </div>
              <button className="rounded-xl bg-indigo-500 px-4 text-sm font-medium text-white transition hover:bg-indigo-600">S'abonner</button>
            </form>
            <div className="mt-4 flex items-center gap-4 text-white/60">
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-white"><Github className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {year} Quantum Soul. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">Conditions</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
