"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bénédicte Ollivier",
    type: "Travaux de couverture",
    rating: 5,
    text: "Nous sommes satisfaits des travaux réalisés. Entreprise sérieuse, réactive et facilement joignable. Je recommande sans hésiter.",
    initial: "BO",
    color: "bg-[#E8E8E6] text-[#3A3A3A]",
  },
  {
    name: "Aurelie B.",
    type: "Rénovation de toiture",
    rating: 5,
    text: "Très bonne expérience ! Une équipe expérimentée, à l'écoute, de bons conseils, un travail de qualité sur des périmètres variés : changement Velux, rénovation faîtage, joints et tuiles. Je recommande leurs services.",
    initial: "AB",
    color: "bg-[#DCDFE6] text-[#3A3A3A]",
  },
  {
    name: "Christophe Flament",
    type: "Travaux de couverture",
    rating: 5,
    text: "Je recommande Stanislas Couverture : ils ont réalisé un travail de grande qualité, sérieux et des finitions au top ! Un grand merci à toute l'équipe.",
    initial: "CF",
    color: "bg-[#D8E4E2] text-[#3A3A3A]",
  },
  {
    name: "Denis Kuzzay",
    type: "Rénovation de toiture",
    rating: 5,
    text: "L'équipe a fait preuve de professionnalisme, d'honnêteté et a su nous conseiller comme il fallait. Nettoyage des tuiles et reprise du faîtage : résultat nickel. Nous la recommandons.",
    initial: "DK",
    color: "bg-[#E0DDE6] text-[#3A3A3A]",
  },
  {
    name: "Frédéric Guian",
    type: "Rénovation de toiture zinc",
    rating: 5,
    text: "Travail parfait bien que le toit partiellement en zinc était quelque peu complexe. Travaux réalisés en temps et en heure. Bravo !",
    initial: "FG",
    color: "bg-[#EBEBEB] text-[#3A3A3A]",
  },
  {
    name: "Jo T.",
    type: "Travaux de couverture",
    rating: 5,
    text: "Très bon professionnel, ponctualité irréprochable et travail rigoureux. Rien à redire, je suis pleinement satisfait.",
    initial: "JT",
    color: "bg-[#E8DEDE] text-[#3A3A3A]",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#6B705C] text-[#6B705C]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="avis" className="section-shell bg-white">
      <div className="page-container">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-kicker justify-center">
            <span>Avis clients</span>
          </div>

          <h2 className="section-title mb-4">
            Ce que disent
            <br />
            <span className="text-[#1C1B1F]">nos clients</span>
          </h2>

          {/* Google aggregate */}
          <div className="surface-card mt-2 inline-flex items-center gap-4 px-6 py-3.5">
            <div className="text-3xl font-bold text-slate-900">5.0</div>
            <div>
              <div className="flex gap-0.5 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#6B705C] text-[#6B705C]"
                  />
                ))}
              </div>
              <div className="text-slate-500 text-sm">
                84 avis Google vérifiés
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="surface-card flex flex-col p-5 sm:p-7"
            >
              {/* Quote icon */}
              <div className="w-11 h-11 rounded-2xl bg-[#6B705C]/10 backdrop-blur-sm border border-[#6B705C]/10 flex items-center justify-center mb-5 shrink-0">
                <Quote className="w-5 h-5 text-[#6B705C]" />
              </div>

              {/* Text */}
              <p className="mb-6 flex-1 text-[15px] leading-7 text-slate-600">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#E7E7E7]">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${t.color}`}
                >
                  {t.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900 font-semibold text-sm truncate">
                    {t.name}
                  </div>
                  <div className="text-slate-400 text-xs truncate">
                    {t.type}
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Google Reviews */}
        <div className="text-center mt-12">
          <a
            href="https://maps.app.goo.gl/kcSsPyinp1nLH4mf7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#6B705C] text-sm font-medium transition-colors"
          >
            Voir tous les avis sur Google
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
