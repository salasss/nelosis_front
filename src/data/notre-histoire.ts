// ═══════════════════════════════════════
// Notre Histoire — Data Source
// Modifier ce fichier pour mettre à jour
// le contenu de la page /notre-histoire
// ═══════════════════════════════════════

// ── Hero ──
export const hero = {
  badge: "Notre Histoire",
  titleLine1: "Notre",
  titleLine2: "Histoire",
  lead: "De l'idée d'un petit groupe d'étudiants à un réseau national — découvrez comment Nélosis prend racine et grandit.",
};

// ── Section 1 : Origines & Nom ──
export const origines = {
  sectionLabel: "Origines & Nom",
  heading: "D'où vient Nélosis ?",
  paragraphs: [
    "Nélosis est né en 2022 à l'Université de Perpignan, d'un constat simple : les initiatives écologiques étudiantes restaient isolées, sans réseau pour les connecter. Un groupe d'étudiants passionnés a décidé de changer la donne.",
    "Le nom <strong>Nélosis</strong> est un néologisme évoquant la <em>symbiose</em> — cette relation où chaque organisme renforce l'autre. C'est exactement ce que nous construisons : un réseau où chaque antenne, chaque projet, chaque membre amplifie l'impact collectif.",
  ],
};

// ── Timeline ──
export interface TimelineItem {
  year: string;
  description: string;
  color: "primary" | "accent" | "highlight";
}

export const timeline: TimelineItem[] = [
  {
    year: "2022",
    description: "Fondation à Perpignan",
    color: "primary",
  },
  {
    year: "2022",
    description: "Premiers ateliers sur le campus",
    color: "accent",
  },
  {
    year: "2023",
    description: "Lancement des premiers programmes",
    color: "highlight",
  },
  {
    year: "2024",
    description: "Ouverture de 3 antennes régionales",
    color: "primary",
  },
  {
    year: "2025",
    description: "Expansion nationale — 7 antennes",
    color: "accent",
  },
  {
    year: "2026",
    description: "50+ membres actifs",
    color: "highlight",
  },
];

// ── Section 2 : Mantra & Missions ──
export const mantra = {
  sectionLabel: "Mantra & Missions",
  quote: "« Innover, Connecter, Transformer »",
  description:
    "Trois mots. Une philosophie. Chaque action que nous menons s'inscrit dans cette vision d'un futur durable, construit par les étudiants.",
};

export interface Mission {
  title: string;
  description: string;
  color: "primary" | "accent" | "highlight" | "soft";
  /** Heroicons path (stroke, 24x24 viewBox) */
  iconPath: string;
}

export const missions: Mission[] = [
  {
    title: "Recherche & Innovation",
    description:
      "Développer des solutions écologiques concrètes en mobilisant l'ingéniosité étudiante et la recherche appliquée.",
    color: "primary",
    iconPath:
      "M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18",
  },
  {
    title: "Réseau Inter-Campus",
    description:
      "Connecter les antennes universitaires à travers la France pour mutualiser les compétences et maximiser l'impact.",
    color: "accent",
    iconPath:
      "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",
  },
  {
    title: "Impact Terrain",
    description:
      "Transformer les idées en actions mesurables, avec des projets dont l'impact est évalué et partagé.",
    color: "highlight",
    iconPath:
      "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
  },
  {
    title: "Formation & Transmission",
    description:
      "Former la prochaine génération de leaders écologiques via des ateliers, conférences et mentorat pair-à-pair.",
    color: "soft",
    iconPath:
      "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
];

// ── Section 3 : Actualités / Instagram ──
export const instagram = {
  sectionLabel: "Actualités",
  heading: "Suivez-nous en direct",
  description: "Retrouvez nos dernières actions, événements et coulisses sur Instagram.",
  handle: "@nelosis.asso",
  subtitle: "Suivez nos actus en temps réel",
  url: "https://instagram.com/nelosis.asso",
  buttonText: "Voir sur Instagram",
};

// ── Section 4 : Ils parlent de nous ──
export interface PressItem {
  source: string;
  title: string;
  date: string;
  url: string;
}

export const press: PressItem[] = [
  {
    source: "L'Indépendant",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tempor",
    date: "Décembre 2022",
    url: "#",
  },
  {
    source: "France 3 Occitanie",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
    date: "Mars 2023",
    url: "#",
  },
  {
    source: "Le Monde Campus",
    title: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit",
    date: "Septembre 2023",
    url: "#",
  },
  {
    source: "20 Minutes",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do",
    date: "Février 2024",
    url: "#",
  },
  {
    source: "La Dépêche du Midi",
    title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    date: "Juin 2024",
    url: "#",
  },
  {
    source: "Libération",
    title: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    date: "Novembre 2025",
    url: "#",
  },
];

// ── Section 5 : Équipe ──
export const equipe = {
  sectionLabel: "Bureau National",
  heading: "L'Équipe Nélosis",
  description: "Le bureau national qui œuvre au quotidien pour le développement du réseau.",
};
