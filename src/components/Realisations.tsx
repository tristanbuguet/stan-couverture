"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function Realisations() {
  return (
    <section id="realisations" className="section-shell section-fade-edges bg-[var(--color-site-bg)]">
      <div className="page-container">
        {/* Header */}
        <motion.div
          className="grid items-end gap-6 mb-10 lg:mb-14 lg:grid-cols-2 lg:gap-24"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="section-kicker">
              <span>Réalisations</span>
            </div>

            <h2 className="section-title max-w-2xl">
              Nos derniers
              <br />
              <span className="text-[#1C1B1F]">chantiers en Yvelines</span>
            </h2>
          </div>

          <p className="section-copy lg:justify-self-end lg:text-right">
            Chaque projet est unique. Découvrez quelques-unes de nos
            interventions récentes.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="rounded-[28px]"
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
                e.currentTarget.style.transition = "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "";
              }}
            >
            <div
              className="surface-card group block overflow-hidden"
            >
              {/* Photo */}
              <div className="relative h-52 sm:h-60 overflow-hidden bg-slate-100">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold">
                    {project.type}
                  </span>
                </div>

                {/* Arrow hover icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5 sm:p-6 md:p-7">
                <div className="mb-3 flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.date}
                  </span>
                </div>
                <h3 className="text-slate-900 font-bold text-base mb-2 leading-snug group-hover:text-[#6B705C] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[15px] leading-7 text-slate-500">
                  {project.description}
                </p>
              </div>
            </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="#contact"
            className="btn-primary px-6 sm:px-8 py-3.5 sm:py-4 tracking-wide w-full sm:w-auto"
          >
            Demander un devis pour votre projet
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
