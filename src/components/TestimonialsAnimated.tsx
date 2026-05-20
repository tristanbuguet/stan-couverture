"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, PenLine } from "lucide-react";
import type { ReviewsData, GoogleReview } from "@/lib/google-reviews";

// ─── Static fallback (shown when Google API is not yet configured) ───────────

const STATIC_REVIEWS: GoogleReview[] = [
  {
    authorName: "Bénédicte Ollivier",
    rating: 5,
    text: "Nous sommes satisfaits des travaux réalisés. Entreprise sérieuse, réactive et facilement joignable. Je recommande sans hésiter.",
    relativeTime: "Travaux de couverture",
  },
  {
    authorName: "Aurelie B.",
    rating: 5,
    text: "Très bonne expérience ! Une équipe expérimentée, à l'écoute, de bons conseils, un travail de qualité sur des périmètres variés : changement Velux, rénovation faîtage, joints et tuiles. Je recommande leurs services.",
    relativeTime: "Rénovation de toiture",
  },
  {
    authorName: "Christophe Flament",
    rating: 5,
    text: "Je recommande Stanislas Couverture : ils ont réalisé un travail de grande qualité, sérieux et des finitions au top ! Un grand merci à toute l'équipe.",
    relativeTime: "Travaux de couverture",
  },
  {
    authorName: "Denis Kuzzay",
    rating: 5,
    text: "L'équipe a fait preuve de professionnalisme, d'honnêteté et a su nous conseiller comme il fallait. Nettoyage des tuiles et reprise du faîtage : résultat nickel. Nous la recommandons.",
    relativeTime: "Rénovation de toiture",
  },
  {
    authorName: "Frédéric Guian",
    rating: 5,
    text: "Travail parfait bien que le toit partiellement en zinc était quelque peu complexe. Travaux réalisés en temps et en heure. Bravo !",
    relativeTime: "Rénovation de toiture zinc",
  },
  {
    authorName: "Jo T.",
    rating: 5,
    text: "Très bon professionnel, ponctualité irréprochable et travail rigoureux. Rien à redire, je suis pleinement satisfait.",
    relativeTime: "Travaux de couverture",
  },
];

// Pastel avatar colours cycling through reviews
const AVATAR_COLORS = [
  "bg-[#E8E8E6] text-[#3A3A3A]",
  "bg-[#DCDFE6] text-[#3A3A3A]",
  "bg-[#D8E4E2] text-[#3A3A3A]",
  "bg-[#E0DDE6] text-[#3A3A3A]",
  "bg-[#EBEBEB] text-[#3A3A3A]",
  "bg-[#E8DEDE] text-[#3A3A3A]",
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

/** Shows the real Google profile photo with automatic fallback to initials */
function ReviewAvatar({
  name,
  photoUrl,
  color,
}: {
  name: string;
  photoUrl?: string;
  color: string;
}) {
  const [imgError, setImgError] = useState(false);

  if (photoUrl && !imgError) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photoUrl}
        alt={`Photo de ${name}`}
        width={40}
        height={40}
        className="w-10 h-10 rounded-xl object-cover shrink-0"
        referrerPolicy="no-referrer"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${color}`}
    >
      {getInitials(name)}
    </div>
  );
}

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#6B705C] text-[#6B705C]" />
      ))}
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  data: ReviewsData;
}

export default function TestimonialsAnimated({ data }: Props) {
  // Use live Google reviews when available, otherwise fall back to static data
  const reviews = data.reviews.length > 0 ? data.reviews : STATIC_REVIEWS;
  const rating = data.reviews.length > 0 ? data.rating : 5.0;
  const totalRatings = data.totalRatings;

  return (
    <section id="avis" className="section-shell bg-white">
      <div className="page-container">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-10 lg:mb-16"
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
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
          <div className="surface-card mt-2 inline-flex items-center gap-4 px-6 py-3.5 pointer-events-none">
            <div className="text-3xl font-bold text-slate-900">
              {rating.toFixed(1)}
            </div>
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
                {totalRatings > 0
                  ? `${totalRatings} avis Google vérifiés`
                  : "Avis Google vérifiés"}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((t, i) => (
            <motion.a
              key={i}
              href={t.reviewUrl ?? "https://maps.app.goo.gl/UqxYGCAiuauWQauU7"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.07,
              }}
              className="surface-card flex flex-col p-5 sm:p-7 cursor-pointer"
            >
              {/* Quote icon */}
              <div className="w-11 h-11 rounded-2xl bg-[#6B705C]/10 backdrop-blur-sm border border-[#6B705C]/10 flex items-center justify-center mb-5 shrink-0">
                <Quote className="w-5 h-5 text-[#6B705C]" />
              </div>

              {/* Text — clamped to 5 lines for uniform card height */}
              <p className="mb-6 text-[15px] leading-7 text-slate-600 line-clamp-5">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author — mt-auto pins it to the bottom regardless of text length */}
              <div className="flex items-center gap-3 pt-5 border-t border-[#E7E7E7] mt-auto">
                <ReviewAvatar
                  name={t.authorName}
                  photoUrl={t.profilePhotoUrl}
                  color={AVATAR_COLORS[i % AVATAR_COLORS.length]}
                />
                <div className="flex-1 min-w-0">
                  <div className="text-slate-900 font-semibold text-sm truncate">
                    {t.authorName}
                  </div>
                  <div className="text-slate-400 text-xs truncate">
                    {t.relativeTime}
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </motion.a>
          ))}

          {/* CTA card — leave a review on Google */}
          <motion.a
            href="https://search.google.com/local/writereview?placeid=ChIJ8w3TRPuH5kcRF80igwfmKuo"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: reviews.length * 0.07,
            }}
            className="surface-card surface-card-muted group relative flex flex-col p-5 sm:p-7 overflow-hidden cursor-pointer"
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-2xl bg-[#6B705C]/10 border border-[#6B705C]/10 flex items-center justify-center mb-5 shrink-0">
              <Star className="w-5 h-5 text-[#6B705C] fill-[#6B705C]/30" />
            </div>

            {/* Title */}
            <h3
              className="text-slate-900 font-bold text-xl mb-3"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Votre avis compte
            </h3>

            {/* Description — same size as review cards */}
            <p className="text-[15px] leading-7 text-slate-600 flex-1">
              Vous avez fait appel à nos services&nbsp;? Partagez votre
              expérience et aidez d&rsquo;autres clients à nous faire
              confiance.
            </p>

            {/* CTA Button */}
            <div className="mt-6">
              <span className="btn-primary px-5 py-2.5 text-sm">
                Laisser un avis sur Google
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
