"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const stats = [
  { value: "5.0★", label: "84 avis Google", sub: "Note parfaite" },
  { value: "48h", label: "Devis gratuit", sub: "Sans engagement" },
  { value: "10 ans", label: "Garantie décennale", sub: "Assurance incluse" },
  { value: "7j/7", label: "Urgence toiture", sub: "24h/24" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/hero-bg.jpg"
        alt="Couvreur professionnel sur toiture"
        fill
        priority
        className="object-cover object-center sm:object-[80%_center]"
        sizes="100vw"
      />

      {/* Dark overlay — left-heavy so text is readable, right side reveals the person */}
      <div className="absolute inset-0 bg-black/70 sm:bg-transparent sm:[background:linear-gradient(to_right,rgba(0,0,0,0.80),rgba(0,0,0,0.55),rgba(0,0,0,0.20))]" />
      {/* Bottom darkening so stats remain readable */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        {/* Left-aligned hero content */}
        <div className="max-w-3xl">
          {/* Eyebrow badge */}
          <motion.div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">
              Artisan Couvreur · Yvelines (78)
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-8 sm:mb-14 md:mb-24 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Votre toiture
            <br />
            entre de
            <br />
            <span className="text-white/75 italic font-light">bonnes mains</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Rénovation, réparation, zinguerie, isolation. Des artisans couvreurs
            qualifiés, disponibles 7j/7, pour protéger votre maison durablement.
          </motion.p>

        </div>

        {/* Bottom bar — CTAs + stats on same row */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white hover:bg-white/90 text-[#1C1B1F] font-semibold text-base tracking-wide transition-all active:scale-[0.99] w-full sm:w-auto"
            >
              Demander un devis gratuit
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+33187202727"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-white/30 hover:border-white/60 text-white font-semibold text-base transition-all hover:bg-white/10 hover:backdrop-blur-sm w-full sm:w-auto"
            >
              <Phone className="w-4 h-4" />
              01 87 20 27 27
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:flex sm:flex-wrap sm:items-start sm:gap-y-0 sm:divide-x sm:divide-white/15">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-start gap-3 sm:px-6 first:pl-0 last:pr-0">
                <div>
                  <div className="text-white font-bold text-lg leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm font-medium leading-none mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-white/45 text-xs">{stat.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div
          className="w-5 h-8 rounded-full border border-white/25 flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div
            className="w-1 h-2 rounded-full bg-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
