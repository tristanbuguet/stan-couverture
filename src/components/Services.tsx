"use client";

import { motion } from "framer-motion";
import {
  Home,
  Droplets,
  Layers,
  Sparkles,
  TreePine,
  Thermometer,
  Square,
  Filter,
  Paintbrush2,
  Phone,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Home,
    tag: "Tous matériaux",
    image: "/chantier-1.jpg",
    title: "Rénovation de toiture",
    desc: "Remise à neuf complète ou partielle de votre toiture. Tuiles, ardoise, bac acier, zinc — tous matériaux.",
  },
  {
    icon: Droplets,
    tag: "Urgence 7j/7",
    image: "/chantier-2.jpg",
    title: "Réparation & fuite",
    desc: "Détection et réparation rapide de fuites. Interventions d'urgence disponibles 7j/7 en Yvelines.",
  },
  {
    icon: Layers,
    tag: "Zinc · Cuivre",
    image: "/chantier-3.jpg",
    title: "Zinguerie",
    desc: "Pose et réfection de tous les ouvrages en zinc : faîtages, noues, chéneaux, solins, arêtiers.",
  },
  {
    icon: Sparkles,
    tag: "Anti-mousse",
    image: "/chantier-4.png",
    title: "Nettoyage & hydrofugation",
    desc: "Nettoyage haute pression, traitement fongicide, application d'hydrofuge et peinture de toit.",
  },
  {
    icon: TreePine,
    tag: "Garanti 10 ans",
    image: "/chantier-5.jpg",
    title: "Charpente",
    desc: "Traitement, réparation et remplacement de charpentes bois. Travaux structurels garantis.",
  },
  {
    icon: Thermometer,
    tag: "Aide CEE",
    image: "/chantier-6.jpg",
    title: "Isolation des combles",
    desc: "Isolation thermique et acoustique des combles. Éligible aux aides à la rénovation énergétique.",
  },
  {
    icon: Square,
    tag: "Pose & SAV",
    image: "/hero-bg.jpg",
    title: "Velux & fenêtres de toit",
    desc: "Pose, remplacement et réparation de fenêtres de toit et Velux. Conseils personnalisés.",
  },
  {
    icon: Filter,
    tag: "Zinc · Alu · PVC",
    image: "/chantier-1.jpg",
    title: "Gouttières",
    desc: "Nettoyage, pose et réparation de gouttières en zinc, aluminium ou PVC. Évacuation optimisée.",
  },
  {
    icon: Paintbrush2,
    tag: "Hydrofuge",
    image: "/chantier-2.jpg",
    title: "Ravalement de façades",
    desc: "Ravalement, enduit, peinture et traitement hydrofuge de façades. Résultat durable et esthétique.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell section-fade-edges bg-[var(--color-site-bg)]">
      <div className="page-container">

        {/* ── Header — left-aligned like About / WhyUs ── */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="section-kicker">
              <span>Nos services</span>
            </div>

            <h2 className="section-title max-w-2xl">
              Tout pour votre
              <br />
              toiture en Yvelines
            </h2>
          </div>

          <p className="section-copy">
            De la rénovation complète à la réparation d&apos;urgence, nos artisans
            couvrent l&apos;ensemble des besoins de votre toiture — avec le même
            soin du détail, quelle que soit l&apos;intervention.
          </p>
        </motion.div>

        {/* ── Services grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                className="rounded-[28px]"
                style={{ boxShadow: "0 1px 0 rgba(28, 27, 31, 0.04), 0 18px 48px rgba(28, 27, 31, 0.06)" }}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  visible: {
                    opacity: 1, y: 0, filter: "blur(0px)",
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                onMouseEnter={e => {
                  e.currentTarget.style.transition = "transform 200ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 200ms cubic-bezier(0.22, 1, 0.36, 1)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 2px 0 rgba(28, 27, 31, 0.03), 0 20px 48px rgba(28, 27, 31, 0.07)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "0 1px 0 rgba(28, 27, 31, 0.04), 0 18px 48px rgba(28, 27, 31, 0.06)";
                }}
              >
                <div
                  className="group relative cursor-pointer overflow-hidden rounded-[28px] min-h-[340px] flex flex-col justify-end bg-zinc-900"
                >
                {/* Image zoom on hover */}
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Gradient overlay — heavier at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                {/* Arrow — top right */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Icon — top left */}
                <div className="absolute top-5 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/10">
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>

                {/* Content anchored at bottom */}
                <div className="relative z-10 p-7">
                  <span className="inline-block mb-2.5 text-[11px] font-medium text-white/60 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 select-none">
                    {service.tag}
                  </span>
                  <h3 className="mb-2 text-base font-bold text-white tracking-[-0.01em]">
                    {service.title}
                  </h3>
                  <p className="text-[14px] leading-6 text-white/65 max-w-xs">
                    {service.desc}
                  </p>
                </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── CTA band ── */}
        <div className="dark-panel mt-8 flex flex-col items-start justify-between gap-6 p-8 md:flex-row md:items-center md:p-10">
          <div>
            <p className="mb-1.5 text-xl font-bold text-white">
              Besoin d&apos;une intervention d&apos;urgence ?
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-white/65">
              Disponibles 7j/7 et 24h/24 pour toutes vos urgences toiture
              en Yvelines et Île-de-France.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="tel:+33616395647"
              className="btn-secondary whitespace-nowrap px-6 py-3 text-sm"
            >
              <Phone className="w-4 h-4" />
              06 16 39 56 47
            </a>
            <a
              href="#contact"
              className="btn-secondary-dark whitespace-nowrap px-6 py-3 text-sm"
            >
              Devis gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
