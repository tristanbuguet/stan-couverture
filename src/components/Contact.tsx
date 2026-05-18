"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const serviceTypes = [
  "Rénovation de toiture",
  "Réparation / fuite",
  "Zinguerie",
  "Nettoyage & hydrofugation",
  "Charpente",
  "Isolation des combles",
  "Velux & fenêtres de toit",
  "Gouttières",
  "Ravalement de façades",
  "Urgence toiture",
  "Autre",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  city: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission delay — replace with real API call or email service
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-shell bg-white">
      <div className="page-container">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="section-kicker justify-center">
            <span>Contact & devis</span>
          </div>

          <h2 className="section-title mb-4">
            Demandez votre devis
            <br />
            <span className="text-[#1C1B1F]">gratuit en 48h</span>
          </h2>

          <p className="section-copy mx-auto">
            Réponse personnalisée sous 48 heures. Déplacement inclus.
            Sans engagement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-stretch">
          {/* Left info panel */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {/* Contact card */}
            <div className="surface-card surface-card-muted p-7">
              <h3 className="font-bold text-[#1C1B1F] text-lg mb-5">Contactez-nous</h3>
              <div className="space-y-4">
                <a
                  href="tel:+33187202727"
                  className="flex items-center gap-3 text-slate-500 hover:text-[#6B705C] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1C1B1F]" />
                  </div>
                  <div>
                    <div className="text-[#1C1B1F] font-semibold text-sm">
                      01 87 20 27 27
                    </div>
                    <div className="text-slate-400 text-xs">
                      Ligne principale
                    </div>
                  </div>
                </a>
                <a
                  href="tel:+33616395647"
                  className="flex items-center gap-3 text-slate-500 hover:text-[#6B705C] transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-[#1C1B1F]" />
                  </div>
                  <div>
                    <div className="text-[#1C1B1F] font-semibold text-sm">
                      06 16 39 56 47
                    </div>
                    <div className="text-slate-400 text-xs">
                      Urgences & mobile
                    </div>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-[#1C1B1F]" />
                  </div>
                  <div>
                    <div className="text-[#1C1B1F] font-semibold text-sm">
                      7j/7 · 24h/24
                    </div>
                    <div className="text-slate-400 text-xs">
                      Urgences toiture
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#E7E7E7] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-[#1C1B1F]" />
                  </div>
                  <div>
                    <div className="text-[#1C1B1F] font-semibold text-sm">
                      Yvelines (78)
                    </div>
                    <div className="text-slate-400 text-xs">
                      Et toute l&apos;Île-de-France
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="surface-card flex-1 p-7">
              <h3 className="font-bold text-[#1C1B1F] text-base mb-4">
                Pourquoi demander un devis ?
              </h3>
              <ul className="space-y-3">
                {[
                  "Gratuit & sans engagement",
                  "Déplacement offert",
                  "Réponse sous 48h",
                  "Devis clair et détaillé",
                  "Artisan certifié",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#6B705C] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="lg:col-span-3 flex flex-col"
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            {/* Wrapper maintains form height at all times */}
            <div className="relative">
              {/* Success overlay — same size as form */}
              {submitted && (
                <div className="surface-card absolute inset-0 z-10 flex flex-col items-center justify-center rounded-[28px] bg-white px-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-xl mb-2">
                    Demande reçue !
                  </h3>
                  <p className="text-slate-500 text-base max-w-sm">
                    Merci pour votre demande. Nous vous recontacterons dans les
                    48 heures avec votre devis personnalisé.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(initialForm);
                    }}
                    className="mt-6 text-[#1C1B1F] hover:text-[#2D2C30] text-sm font-medium transition-colors"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              )}

              {/* Form — always rendered to maintain height */}
              <form
                onSubmit={handleSubmit}
                className={`surface-card space-y-5 p-8 ${submitted ? "invisible" : ""}`}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Nom complet <span className="text-[#1C1B1F]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Téléphone <span className="text-[#1C1B1F]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 XX XX XX XX"
                      className="input-field text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Email <span className="text-[#1C1B1F]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      className="input-field text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 text-sm font-medium mb-1.5">
                      Ville
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Versailles, Saint-Germain…"
                      className="input-field text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">
                    Type de prestation
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-field text-sm"
                  >
                    <option value="">Sélectionnez un service</option>
                    {serviceTypes.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 text-sm font-medium mb-1.5">
                    Décrivez votre projet{" "}
                    <span className="text-[#1C1B1F]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre toiture, les travaux souhaités, l'urgence éventuelle…"
                    className="input-field resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full px-6 py-4 text-sm tracking-wide disabled:pointer-events-none disabled:translate-y-0 disabled:bg-slate-300 disabled:shadow-none"
                >
                  {loading ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Envoi en cours…
                    </>
                  ) : (
                    <>
                      Demander mon devis gratuit
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  En soumettant ce formulaire, vous acceptez d&apos;être recontacté
                  par Stanislas Couverture 78 concernant votre demande.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
