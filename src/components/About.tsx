"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Équipe professionnelle, passionnée et réactive",
  "Sélection rigoureuse des fournisseurs et matériaux",
  "Devis clairs, détaillés et offerts · déplacement inclus",
  "Pas de surprises ni de coûts cachés",
];

const numbers = [
  { value: "84", unit: "avis", label: "Google 5 étoiles" },
  { value: "10", unit: "ans", label: "Garantie décennale" },
  { value: "7j/7", unit: "", label: "Disponible pour urgences" },
  { value: "48h", unit: "max", label: "Délai de réponse devis" },
];

export default function About() {
  return (
    <section id="about" className="section-shell bg-white">
      <div className="page-container">
        {/* Section label */}
        <motion.div
          className="section-kicker"
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>À propos</span>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h2 className="section-title mb-6 max-w-2xl">
              Des artisans couvreurs
              <br />
              <span className="text-[#1C1B1F]">au service des Yvelines</span>
            </h2>

            <p className="section-copy mb-5">
              Chez Stanislas Couverture 78, nous intervenons sur tous types de
              toitures en Yvelines. Qu&apos;il s&apos;agisse de manipuler des tuiles en
              ardoise, de poser une gouttière en zinc, de traiter une charpente
              en bois ou d&apos;installer une fenêtre de toit, nos experts du
              bâtiment ont à cœur de protéger votre logement des intempéries,
              jour après jour.
            </p>

            <p className="text-[15px] leading-7 text-slate-500 mb-8 max-w-2xl">
              Tous nos projets débutent par une découverte approfondie de vos
              besoins afin de vous proposer des solutions de qualité, adaptées
              à vos objectifs et votre budget.
            </p>

            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[15px] leading-6 text-slate-600"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#6B705C] mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-primary mt-8 px-6 py-3 text-sm tracking-wide">
              Nous contacter
            </a>
          </motion.div>

          {/* Right — Stats grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-5">
            {numbers.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className={`min-h-[180px] rounded-[28px] border p-6 md:p-8 flex flex-col justify-between ${
                  i === 0
                    ? "bg-[#6B705C] text-white border-[#6B705C] shadow-[0_20px_48px_rgba(17,17,17,0.18)]"
                    : i === 1
                    ? "bg-[#5F6F52] text-white border-[#5F6F52] shadow-[0_20px_48px_rgba(17,17,17,0.14)]"
                    : "surface-card surface-card-muted text-[#1C1B1F]"
                }`}
              >
                <div className="mb-4">
                  <span className="text-3xl md:text-5xl font-bold leading-none" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {n.value}
                  </span>
                  {n.unit && (
                    <span
                      className={`text-base md:text-xl font-medium ml-1 ${
                        i < 2 ? "text-white/60" : "text-[#6B6B6B]"
                      }`}
                    >
                      {n.unit}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm font-medium ${
                    i < 2 ? "text-white/70" : "text-[#8A8A8A]"
                  }`}
                >
                  {n.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
