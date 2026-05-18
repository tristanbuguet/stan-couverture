"use client";

import { motion } from "framer-motion";
import {
  Home,
  Droplets,
  Layers,
  Sparkles,
  TreePine,
  Shield,
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
    image: "/Couverture_01.jpg",
    title: "Couverture",
    desc: "Pose et rénovation en tuiles, ardoise, bac acier ou zinc. Garantie décennale.",
  },
  {
    icon: Droplets,
    tag: "Urgence 7j/7",
    image: "/Étanchéité_07.jpg",
    title: "Étanchéité & fuite",
    desc: "Détection et traitement de fuites, pose de membranes d'étanchéité. Intervention rapide.",
  },
  {
    icon: Layers,
    tag: "Zinc · Cuivre · Plomb",
    image: "/Zinguerie_08.jpg",
    title: "Zinguerie",
    desc: "Faîtages, noues, chéneaux, solins et arêtiers. Pose et réfection soignée.",
  },
  {
    icon: Sparkles,
    tag: "Anti-mousse",
    image: "/Nettoyage_06.jpg",
    title: "Nettoyage de toiture",
    desc: "Nettoyage haute pression, démoussage et traitement fongicide. Toiture propre et durable.",
  },
  {
    icon: Shield,
    tag: "Hydrofuge",
    image: "/Peinture.jpg",
    title: "Peinture & Hydrofugation",
    desc: "Application d'hydrofuge et peinture de toiture. Protection renforcée contre les intempéries.",
  },
  {
    icon: TreePine,
    tag: "Garanti 10 ans",
    image: "/Charpente_03.jpg",
    title: "Charpente",
    desc: "Traitement, réparation et remplacement de charpentes bois. Travaux structurels garantis.",
  },
  {
    icon: Square,
    tag: "Pose & SAV",
    image: "/Velux_04.jpg",
    title: "Fenêtres de toit & Velux",
    desc: "Pose, remplacement et réparation de fenêtres de toit. Conseil sur les modèles adaptés.",
  },
  {
    icon: Filter,
    tag: "Zinc · Alu · PVC",
    image: "/Gouttières_05.jpg",
    title: "Gouttières",
    desc: "Pose, nettoyage et réparation en zinc, aluminium ou PVC. Évacuation des eaux pluviales.",
  },
  {
    icon: Paintbrush2,
    tag: "Hydrofuge",
    image: "/Ravalement_02.jpg",
    title: "Ravalement de façades",
    desc: "Ravalement, enduit, peinture et traitement hydrofuge. Résultat durable et esthétique.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-shell bg-[var(--color-site-bg)]">
      <div className="page-container">

        {/* ── Header — left-aligned like About / WhyUs ── */}
        <motion.div
          className="grid lg:grid-cols-2 gap-6 lg:gap-24 items-end mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
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
            couvrent l&apos;ensemble des besoins de votre toiture, avec le même
            soin du détail, quelle que soit l&apos;intervention.
          </p>
        </motion.div>

        {/* ── Services grid ── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={{ hidden: {}, visible: {} }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.05 }}
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
                  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                }}
                whileHover={{ y: -3, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="group relative cursor-pointer overflow-hidden rounded-[28px] min-h-[260px] sm:min-h-[340px] flex flex-col justify-end shadow-[inset_0_0_0_1px_rgba(0,0,0,0.18),inset_0_0_0_1px_rgba(255,255,255,0.07)]"
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
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-10">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                {/* Icon — top left */}
                <div className="absolute top-5 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/10">
                  <Icon className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>

                {/* Content anchored at bottom */}
                <div className="relative z-10 p-5 sm:p-7">
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
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── CTA band ── */}
        <motion.div
          className="dark-panel mt-8 flex flex-col items-start justify-between gap-5 p-6 md:flex-row md:items-center md:p-10"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="mb-1.5 text-xl font-bold text-white">
              Besoin d&apos;une intervention d&apos;urgence ?
            </p>
            <p className="max-w-xl text-sm leading-relaxed text-white/65">
              Disponibles 7j/7 et 24h/24 pour toutes vos urgences toiture
              en Yvelines et Île-de-France.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+33616395647"
              className="btn-secondary whitespace-nowrap px-6 py-3 text-sm w-full sm:w-auto justify-center"
            >
              <Phone className="w-4 h-4" />
              06 16 39 56 47
            </a>
            <a
              href="#contact"
              className="btn-secondary-dark whitespace-nowrap px-6 py-3 text-sm w-full sm:w-auto justify-center"
            >
              Devis gratuit
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
