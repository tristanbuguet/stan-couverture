"use client";

import { Phone, MapPin } from "lucide-react";

const services = [
  "Couverture & Rénovation",
  "Réparation de fuite",
  "Zinguerie",
  "Charpente",
  "Isolation des combles",
  "Velux & Fenêtres de toit",
  "Gouttières",
  "Nettoyage & Hydrofugation",
  "Ravalement de façades",
];

const zones = [
  "Versailles",
  "Saint-Germain-en-Laye",
  "Rambouillet",
  "Poissy",
  "Mantes-la-Jolie",
  "Les Mureaux",
  "Sartrouville",
  "Chatou",
  "Conflans-Sainte-Honorine",
  "Toute l'Île-de-France",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-site-bg)] text-slate-500">
      {/* Main footer */}
      <div className="page-container py-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11.9927 1C12.3328 1.14713 12.7931 1.40923 13.1386 1.58849L15.2845 2.70078L21.9938 6.18657C21.9782 7.49782 22.0315 8.89616 21.968 10.2016C21.9319 10.9417 21.1978 11.4831 20.6647 11.541C20.2517 11.5862 19.7764 11.5721 19.3437 11.5721L16.8293 11.5708L9.54385 11.5711C8.32966 11.5708 7.11861 11.5656 5.90117 11.5728C5.07305 11.5777 5.23034 12.1561 5.21393 12.9901C5.20632 13.3758 5.21137 13.8048 5.23457 14.1889C5.34623 14.3956 5.47133 14.57 5.67497 14.605C6.02087 14.6642 6.43588 14.642 6.78956 14.64L8.54269 14.6358L16.8101 14.6384L18.9775 14.6351C19.9009 14.6332 20.8257 14.5039 21.5404 15.423C22.0317 16.0551 21.9956 16.7107 21.9872 17.5365C21.9838 17.8634 21.9872 18.2089 21.9872 18.538L21.9869 22.9993L2 23L2.0002 19.0762L5.21994 19.0746C5.2172 19.28 5.21572 19.4858 5.21549 19.6913C5.21592 20.2063 5.31819 20.5282 5.76446 20.5841C6.09172 20.625 6.43337 20.6048 6.76339 20.6044L8.59979 20.6005L17.791 20.6077C18.1313 20.6077 18.6984 20.5936 18.7202 19.9995C18.7427 19.3883 18.7125 18.7729 18.731 18.1552C18.7435 17.7345 18.4772 17.5718 18.1851 17.5414C17.7649 17.5215 17.3373 17.5378 16.9163 17.5417C16.1917 17.547 15.4671 17.547 14.7425 17.5414L6.97015 17.5408L4.96092 17.5444C4.52356 17.546 4.04162 17.58 3.61077 17.4904C2.78795 17.3252 2.00638 16.4882 2.01649 15.333C2.02986 13.8087 1.96177 12.0243 2.05231 10.5006C2.08944 9.87539 2.81923 9.23773 3.29895 9.19945C3.82503 9.1579 4.46211 9.16313 5.02232 9.16281H8.18397L18.7724 9.16215L18.7794 7.98531L12.0122 4.17107C10.4075 5.04345 8.79721 6.04117 7.19136 6.92412C6.62269 7.23673 5.89454 7.73273 5.30828 7.96437C5.1736 8.01737 4.36548 8.00068 4.18033 8.00068L2.01367 7.99741L2.00154 6.22086L11.9927 1Z"
                  fill="#1C1B1F"
                />
              </svg>
              <div className="flex flex-col justify-center h-8">
                <span className="text-[#1C1B1F] font-bold text-lg leading-none block">
                  Stanislas Couverture
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-500 mb-5">
              Artisan couvreur professionnel en Yvelines. Rénovation,
              zinguerie, isolation, urgences toiture. Devis gratuit sous 48h,
              garantie décennale 10 ans.
            </p>

            <div className="space-y-2.5">
              <a
                href="tel:+33187202727"
                className="flex items-center gap-2 text-slate-500 hover:text-[#6B705C] text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                01 87 20 27 27
              </a>
              <a
                href="tel:+33616395647"
                className="flex items-center gap-2 text-slate-500 hover:text-[#6B705C] text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                06 16 39 56 47 (urgences)
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Yvelines (78) · Île-de-France
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1C1B1F] font-semibold text-sm mb-5">
              Nos services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-slate-500 hover:text-[#6B705C] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 group-hover:bg-[#6B705C] transition-colors" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="text-[#1C1B1F] font-semibold text-sm mb-5">
              Zones d&apos;intervention
            </h4>
            <ul className="space-y-2.5">
              {zones.map((z) => (
                <li
                  key={z}
                  className="flex items-center gap-1.5 text-sm text-slate-500"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-300" />
                  {z}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation + trust */}
          <div>
            <h4 className="text-[#1C1B1F] font-semibold text-sm mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5 mb-8">
              {[
                ["#hero", "Accueil"],
                ["#about", "À propos"],
                ["#services", "Services"],
                ["#realisations", "Réalisations"],
                ["#avis", "Avis clients"],
                ["#faq", "FAQ"],
                ["#contact", "Contact & devis"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-sm text-slate-500 hover:text-[#6B705C] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Google rating badge */}
            <div className="surface-card p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-[#4A4A4A]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[#1C1B1F] text-xs font-bold">
                  5.0 / 84 avis
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed">
                Note parfaite sur Google My Business
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-border)]">
        <div className="page-container py-5">
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row sm:items-center">
            <p>
              &copy; {year} Stanislas Couverture 78 · Tous droits réservés
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
              <a
                href="/mentions-legales"
                className="hover:text-[#6B705C] transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="/politique-confidentialite"
                className="hover:text-[#6B705C] transition-colors"
              >
                Confidentialité
              </a>
              <span>SIRET : à renseigner</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

