"use client";

import { motion } from "framer-motion";

import {
  Clock,
  FileText,
  ShieldCheck,
  Users,
  HelpCircle,
  Heart,
} from "lucide-react";

const engagements = [
  {
    icon: Clock,
    title: "Urgence 7j/7",
    desc: "Disponibles 24h/24 et 7j/7 pour répondre à toutes vos urgences toiture, quelle qu'en soit la nature.",
    iconBg: "bg-[#FEF3C7]",
    iconColor: "text-[#B45309]",
  },
  {
    icon: FileText,
    title: "Devis gratuit en 48h",
    desc: "Devis personnalisé, détaillé et offert, déplacement inclus. Réponse sous 48 heures, sans engagement.",
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#1D4ED8]",
  },
  {
    icon: ShieldCheck,
    title: "Garantie décennale",
    desc: "Toutes nos réalisations sont couvertes par une assurance décennale de 10 ans. Votre tranquillité d'esprit.",
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#15803D]",
  },
  {
    icon: Users,
    title: "Artisans certifiés",
    desc: "Equipes professionnelles et passionnées. Maîtrise de tous les matériaux : tuiles, ardoise, zinc, bac acier.",
    iconBg: "bg-[#FEF9C3]",
    iconColor: "text-[#854D0E]",
  },
  {
    icon: HelpCircle,
    title: "Accompagnement complet",
    desc: "Aide aux démarches : prêt à taux zéro, permis de construire, aides à la transition énergétique. Vous n'êtes pas seuls.",
    iconBg: "bg-[#EDE9FE]",
    iconColor: "text-[#6D28D9]",
  },
  {
    icon: Heart,
    title: "À votre écoute",
    desc: "Nous privilégions le dialogue pour comprendre vos besoins. Solutions sur-mesure, adaptées à votre budget.",
    iconBg: "bg-[#FCE7F3]",
    iconColor: "text-[#9D174D]",
  },
];

export default function WhyUs() {
  return (
    <section id="engagements" className="section-shell bg-white">
      <div className="page-container">
        {/* Header */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="section-kicker">
              <span>Pourquoi nous choisir</span>
            </div>

            <h2 className="section-title max-w-2xl">
              Nos engagements
              <br />
              envers vous
            </h2>
          </div>

          <p className="section-copy">
            Depuis plusieurs années, Stanislas Couverture 78 s&apos;est construit
            une réputation de sérieux et de professionnalisme en Yvelines.
            Voici pourquoi nos clients nous font confiance et nous recommandent.
          </p>
        </motion.div>

        {/* Engagement cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {engagements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className="surface-card group p-8 md:p-9"
              >
                <div
                  className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-subtle)] backdrop-blur-sm border border-[#6B705C]/10 transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon
                    className="w-5 h-5 text-[#6B705C]"
                    strokeWidth={1.75}
                  />
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-3">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-7 text-slate-500">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
