export type Project = {
  slug: string;
  title: string;
  location: string;
  date: string;
  type: string;
  img: string;
  description: string;
  // Detail page fields
  longDescription: string;
  details: { label: string; value: string }[];
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "renovation-complete-toiture-vaucresson",
    title: "Rénovation complète de toiture",
    location: "Vaucresson",
    date: "Mai 2024",
    type: "Rénovation",
    img: "/chantier-1.jpg",
    description:
      "Dépose et repose complète de la couverture en tuiles, traitement de la charpente, pose d'écran sous-toiture.",
    longDescription:
      "Nous avons procédé à la rénovation complète de la toiture de cette maison avec des tuiles phalempin. Le chantier a inclus la dépose totale de l'ancienne couverture, le traitement et la consolidation de la charpente, la pose d'un écran sous-toiture haute performance, puis la repose d'une couverture neuve en tuiles. Les solins et le faîtage ont été entièrement repris en zinc.",
    details: [
      { label: "Type de travaux", value: "Rénovation complète" },
      { label: "Ville", value: "Vaucresson" },
      { label: "Date", value: "Mai 2024" },
      { label: "Matériaux", value: "Tuiles phalempin, zinc" },
      { label: "Surface", value: "À renseigner" },
      { label: "Durée", value: "À renseigner" },
    ],
    gallery: ["/chantier-1.jpg"],
  },
  {
    slug: "isolation-thermique-combles-clamart",
    title: "Isolation thermique des combles",
    location: "Clamart",
    date: "Septembre 2023",
    type: "Isolation",
    img: "/chantier-2.jpg",
    description:
      "Isolation des combles par pose de panneaux fibre de bois, amélioration du DPE et du confort thermique.",
    longDescription:
      "Chantier d'isolation des combles par l'intérieur avec pose de panneaux en fibre de bois. Cette solution naturelle et performante a permis d'améliorer significativement le DPE du logement tout en assurant un confort thermique optimal été comme hiver. Les travaux ont été réalisés en deux jours avec un nettoyage soigné du chantier.",
    details: [
      { label: "Type de travaux", value: "Isolation combles" },
      { label: "Ville", value: "Clamart" },
      { label: "Date", value: "Septembre 2023" },
      { label: "Matériaux", value: "Fibre de bois" },
      { label: "Surface", value: "À renseigner" },
      { label: "Durée", value: "À renseigner" },
    ],
    gallery: ["/chantier-2.jpg"],
  },
  {
    slug: "refection-toiture-velux-noisy-le-roi",
    title: "Réfection toiture & Velux",
    location: "Noisy-le-Roi",
    date: "Octobre 2023",
    type: "Rénovation",
    img: "/chantier-3.jpg",
    description:
      "Remplacement de la couverture, reprise des noues et pose de fenêtres de toit Velux double vitrage.",
    longDescription:
      "Réfection complète de la couverture avec reprise des noues qui présentaient des infiltrations. Pose de trois fenêtres de toit Velux double vitrage pour améliorer la luminosité des combles. L'ensemble du faîtage et des arêtiers a également été repris pour garantir une étanchéité parfaite.",
    details: [
      { label: "Type de travaux", value: "Rénovation + Velux" },
      { label: "Ville", value: "Noisy-le-Roi" },
      { label: "Date", value: "Octobre 2023" },
      { label: "Matériaux", value: "Tuiles, Velux GGL double vitrage" },
      { label: "Surface", value: "À renseigner" },
      { label: "Durée", value: "À renseigner" },
    ],
    gallery: ["/chantier-3.jpg"],
  },
  {
    slug: "renovation-toiture-ardoise-saint-germain",
    title: "Rénovation toiture ardoise",
    location: "Saint-Germain-en-Laye",
    date: "Janvier 2024",
    type: "Rénovation",
    img: "/chantier-4.png",
    description:
      "Réfection de la couverture en ardoise naturelle sur immeuble ancien, reprise des solins et faîtage en zinc.",
    longDescription:
      "Réfection complète d'une toiture en ardoise naturelle sur un immeuble de caractère. Les anciennes ardoises ont été déposées et remplacées par des ardoises naturelles calibrées. L'ensemble des éléments de zinguerie — solins, noues, faîtage — a été entièrement repris en zinc pour assurer une étanchéité durable conforme aux exigences des Bâtiments de France.",
    details: [
      { label: "Type de travaux", value: "Rénovation ardoise" },
      { label: "Ville", value: "Saint-Germain-en-Laye" },
      { label: "Date", value: "Janvier 2024" },
      { label: "Matériaux", value: "Ardoise naturelle, zinc" },
      { label: "Surface", value: "À renseigner" },
      { label: "Durée", value: "À renseigner" },
    ],
    gallery: ["/chantier-4.png"],
  },
  {
    slug: "charpente-couverture-maison-de-maitre-vesinet",
    title: "Charpente & couverture maison de maître",
    location: "Le Vésinet",
    date: "Août 2023",
    type: "Charpente",
    img: "/chantier-5.jpg",
    description:
      "Traitement et réparation de charpente, repose de la couverture en tuiles sur grande villa bourgeoise.",
    longDescription:
      "Intervention sur une grande villa bourgeoise du Vésinet. Après diagnostic complet, la charpente a été traitée contre les insectes xylophages et les parties endommagées ont été remplacées. La couverture en tuiles plates a ensuite été entièrement reposée avec pose d'un écran sous-toiture conforme aux normes en vigueur.",
    details: [
      { label: "Type de travaux", value: "Charpente + couverture" },
      { label: "Ville", value: "Le Vésinet" },
      { label: "Date", value: "Août 2023" },
      { label: "Matériaux", value: "Tuiles plates, traitement charpente" },
      { label: "Surface", value: "À renseigner" },
      { label: "Durée", value: "À renseigner" },
    ],
    gallery: ["/chantier-5.jpg"],
  },
  {
    slug: "toiture-terrasse-etancheite-versailles",
    title: "Toiture terrasse & Étanchéité",
    location: "Versailles",
    date: "Mars 2023",
    type: "Étanchéité",
    img: "/chantier-6.jpg",
    description:
      "Réfection complète de l'étanchéité d'une toiture terrasse, pose de membrane bitumineuse soudée.",
    longDescription:
      "Réfection totale de l'étanchéité d'une toiture-terrasse présentant des infiltrations importantes. Dépose de l'ancien système d'étanchéité, vérification et reprise du support, puis pose d'une membrane bitumineuse soudée multicouche. Les relevés d'étanchéité et les évacuations des eaux pluviales ont également été entièrement repris.",
    details: [
      { label: "Type de travaux", value: "Étanchéité toiture-terrasse" },
      { label: "Ville", value: "Versailles" },
      { label: "Date", value: "Mars 2023" },
      { label: "Matériaux", value: "Membrane bitumineuse soudée" },
      { label: "Surface", value: "À renseigner" },
      { label: "Durée", value: "À renseigner" },
    ],
    gallery: ["/chantier-6.jpg"],
  },
];
