"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Quels types de travaux de toiture réalisez-vous ?",
    a: "Nous intervenons sur tous les travaux de toiture : rénovation complète, remplacement de tuiles, réparation de fuites, zinguerie (faîtage, solins, chéneaux), charpente, isolation des combles, pose de fenêtres de toit (Velux), nettoyage et hydrofugation, gouttières et ravalement de façades. Nous travaillons sur tous les matériaux : tuiles, ardoise, zinc, bac acier, EPDM.",
  },
  {
    q: "Combien coûte une rénovation de toiture ?",
    a: "Le coût dépend de nombreux facteurs : surface de la toiture, type de matériaux, accessibilité, état de la charpente, etc. C'est pourquoi nous proposons un devis gratuit, personnalisé et détaillé sous 48 heures, déplacement inclus et sans engagement. Nous sommes transparents : pas de coûts cachés, pas de surprises.",
  },
  {
    q: "Proposez-vous des garanties pour vos travaux ?",
    a: "Oui, toutes nos réalisations sont couvertes par une assurance décennale (garantie 10 ans). Cela couvre les dommages compromettant la solidité de l'ouvrage ou le rendant impropre à sa destination. Vous bénéficiez également d'une garantie biennale (2 ans) sur les éléments d'équipement.",
  },
  {
    q: "Intervenez-vous en urgence ?",
    a: "Absolument. Stanislas Couverture est disponible 7j/7 et 24h/24 pour toutes vos urgences toiture : fuite importante, toiture endommagée par une tempête, bâche d'urgence, etc. Appelez-nous directement au 06 16 39 56 47 pour une intervention rapide.",
  },
  {
    q: "Quelle zone géographique couvrez-vous ?",
    a: "Nous intervenons principalement dans tout le département des Yvelines (78) : Versailles, Saint-Germain-en-Laye, Rambouillet, Mantes-la-Jolie, Poissy, Les Mureaux, et toutes les communes du département. Nous intervenons également dans les départements limitrophes de l'Île-de-France.",
  },
  {
    q: "Peut-on bénéficier d'aides pour des travaux de toiture ?",
    a: "Oui, plusieurs dispositifs d'aides peuvent financer vos travaux : MaPrimeRénov' pour l'isolation, les Certificats d'Économies d'Énergie (CEE), l'éco-prêt à taux zéro, et TVA réduite à 5,5% ou 10% selon les travaux. Nous vous accompagnons dans toutes ces démarches administratives.",
  },
  {
    q: "Comment se déroule un chantier de rénovation toiture ?",
    a: "Après votre demande de devis, nous effectuons une visite sur site, puis vous transmettrons un devis détaillé sous 48h. Une fois accepté, nous planifions l'intervention selon vos disponibilités. Le chantier suit les étapes : protection du site, dépose de l'ancienne couverture, vérification/traitement charpente, pose du nouveau revêtement, finitions zinguerie. Nos équipes laissent le chantier propre à la fin.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section-shell bg-[var(--color-site-bg)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-kicker justify-center">
            <span>FAQ</span>
          </div>

          <h2 className="section-title mb-4">
            Questions fréquentes
          </h2>

          <p className="section-copy mx-auto">
            Retrouvez ici les réponses aux questions les plus posées sur nos
            services, nos tarifs et nos interventions.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className="surface-card overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-3 px-5 py-4 sm:px-7 sm:py-5 text-left hover:bg-[rgba(107,112,92,0.04)] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-slate-900 font-semibold text-[15px] leading-snug">
                  {faq.q}
                </span>
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                    open === i
                      ? "bg-[#6B705C] text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {open === i ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 sm:px-7 sm:pb-6 text-slate-500 text-sm leading-relaxed border-t border-[#E7E7E7] pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm mb-4">
            Vous ne trouvez pas votre réponse ?
          </p>
          <a
            href="#contact"
            className="btn-primary px-6 py-3 text-sm"
          >
            Posez-nous votre question
          </a>
        </div>
      </div>
    </section>
  );
}
