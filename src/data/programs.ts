import type { ImageMetadata } from 'astro';

// Project images
import vegetallImg from '../assets/images/projects/vegetall.png';
import boueeImg from '../assets/images/projects/boue.png';
import briqueImg from '../assets/images/projects/BriqueMycelium.png';
import ecoleogieImg from '../assets/images/projects/Ecoleogie.png';

// SVG imports
import vegetallInnovation from '../assets/images/projects/vegetall-innovation.svg';
import vegetallPrincipe from '../assets/images/projects/vegetall-principe.svg';
import vegetallOrganisation from '../assets/images/projects/vegetall-organisation.svg';

// ─── Types ───────────────────────────────────────────────────────────

export interface ContentSection {
  title: string;
  text: string;
  image?: ImageMetadata | string;
}

export interface ProjectLeader {
  name: string;
  role?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  logo?: ImageMetadata;
  status?: 'active' | 'coming_soon';
  leaders?: ProjectLeader[];
  content: ContentSection[];
}

export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  icon: string; // SVG path data or icon name
  projects: Project[];
}

// ─── Programs Data ───────────────────────────────────────────────────

const programs: Program[] = [
  {
    id: 'vegetall',
    slug: 'vegetall',
    name: "Végét'All",
    tagline: 'Agriculture urbaine autonome',
    description:
      "Concevoir et prototyper des systèmes d'agriculture urbaine autonomes, capables de fonctionner sans apport énergétique externe, pour ramener la nature au cœur des villes.",
    color: '#C7C652',
    accentColor: '#a8a836',
    icon: 'leaf',
    projects: [
      {
        id: 'extracteurs-humidite',
        slug: 'extracteurs-humidite',
        title: "Extracteurs d'humidité nocturne",
        subtitle: "Des solutions plein les poches !",
        description:
          "Une approche innovante pour l'agriculture urbaine autonome basée sur l'extraction d'humidité nocturne sans dépense d'énergie.",
        color: '#C7C652',
        icon: 'droplets',
        logo: vegetallImg,
        status: 'active',
        leaders: [
          { name: 'Xavier PY', role: 'Porteur de projet / Chercheur' },
        ],
        content: [
          {
            title: "Quelles innovations sont mises au point actuellement ?",
            text: "Pourquoi l'agro-urbanisme ? Gouttes de pluie sur feuille. Les extracteurs d'humidité nocturne.",
            image: vegetallInnovation,
          },
          {
            title: 'Le principe',
            text: 'Ces dispositifs sont appuyés sur le sujet de thèse de Xavier PY. Ces "entonnoirs" permettent l\'extraction d\'environ 1L d\'eau par m² et par nuit, et ce sans dépenses d\'énergie. L\'extraction est permise par deux principes physiques, le refroidissement radiatif des matériaux et les paramètres de variation de la pression de vapeur saturante. Les gouttes continument récupérées s\'infiltrent ensuite dans les sols pour irriguer le bac de culture.',
            image: vegetallPrincipe,
          },
          {
            title: "L'organisation",
            text: "La structure même du toit est un prototype en soi. Empruntée à des domaines divers tels la terrariophilie bioactive et inspirée de principes d'aquaponie, elle est travaillée de manière à optimiser la fertilité et l'humidité du sol. Son rôle est de conserver l'eau et les nutriments rincés tout en entretenant un lent circuit d'eau qui limite les contaminations. Ce système eau/sol est autonome et demande peu d'entretien.",
            image: vegetallOrganisation,
          },
        ],
      },
      {
        id: 'toits-vegetalises',
        slug: 'toits-vegetalises',
        title: 'Toitures Végétalisées Autonomes',
        subtitle: 'Des écosystèmes sur nos toits',
        description:
          "Des prototypes de toits auto-suffisants intégrant récupération d'eau et culture urbaine.",
        color: '#C7C652',
        icon: 'home',
        status: 'coming_soon',
        content: [],
      },
    ],
  },
  {
    id: 'noctilumen',
    slug: 'noctilumen',
    name: 'NoctiLumen',
    tagline: 'Éclairage vivant & bioluminescence',
    description:
      "Explorer et développer des solutions d'éclairage basées sur la bioluminescence et les organismes vivants pour créer des alternatives durables à l'éclairage artificiel.",
    color: '#7B8CFF',
    accentColor: '#5a6be6',
    icon: 'sparkles',
    projects: [
      {
        id: 'lampes-bioluminescentes',
        slug: 'lampes-bioluminescentes',
        title: 'Lampes Bioluminescentes',
        subtitle: "La lumière du vivant",
        description:
          "Développement de lampes fonctionnant grâce à des micro-organismes bioluminescents, sans électricité.",
        color: '#7B8CFF',
        icon: 'lightbulb',
        status: 'coming_soon',
        content: [],
      },
    ],
  },
  {
    id: 'lagoon',
    slug: 'lagoon',
    name: 'Lagoon',
    tagline: 'Restauration des écosystèmes aquatiques',
    description:
      "Protéger et restaurer les milieux aquatiques méditerranéens grâce à des dispositifs innovants qui relancent la biodiversité locale de manière durable.",
    color: '#5CC796',
    accentColor: '#3dab7a',
    icon: 'waves',
    projects: [
      {
        id: 'bouee-vegetale',
        slug: 'bouee-vegetale',
        title: 'Bouée Végétale',
        subtitle: 'Restauration de la biodiversité marine',
        description:
          'Un dispositif flottant vivant pour relancer la chaîne alimentaire locale.',
        color: '#5CC796',
        icon: 'life-buoy',
        logo: boueeImg,
        status: 'active',
        content: [
          {
            title: 'Le concept',
            text: "Installation de bouées recouvertes d'algues spécifiques. Ces algues attirent les poissons herbivores, qui attirent à leur tour les prédateurs plus gros, recréant ainsi un cycle alimentaire complet et durable.",
          },
        ],
      },
      {
        id: 'brique-mycelium',
        slug: 'brique-mycelium',
        title: 'Brique Mycélium',
        subtitle: 'Construction vivante',
        description:
          'Des briques écologiques fabriquées à base de champignons pour des récifs artificiels.',
        color: '#FBA824',
        icon: 'cube',
        logo: briqueImg,
        status: 'active',
        content: [
          {
            title: 'Innovation fongique',
            text: "Remplacer les matériaux de construction traditionnels par du mycélium, une alternative biodégradable et isolante.",
          },
        ],
      },
    ],
  },
  {
    id: 'sensibilisation',
    slug: 'sensibilisation-innovante',
    name: 'Sensibilisation Innovante',
    tagline: 'Éduquer pour transformer',
    description:
      "Développer des programmes de sensibilisation créatifs et impactants pour éveiller les consciences écologiques, en particulier chez les jeunes générations.",
    color: '#FF7D7D',
    accentColor: '#e65c5c',
    icon: 'graduation-cap',
    projects: [
      {
        id: 'ecoleogie',
        slug: 'ecoleogie',
        title: 'Écoléogie',
        subtitle: 'Éducation durable',
        description:
          "Sensibilisation à l'écologie pour les élèves de primaire et collège.",
        color: '#FF7D7D',
        icon: 'school',
        logo: ecoleogieImg,
        status: 'active',
        content: [
          {
            title: 'Transmission',
            text: "Un programme pédagogique pour éveiller la conscience écologique dès le plus jeune âge.",
          },
        ],
      },
    ],
  },
];

export default programs;

// Helper: get all projects across all programs (flat list)
export function getAllProjects(): (Project & { programSlug: string; programName: string })[] {
  return programs.flatMap((program) =>
    program.projects.map((project) => ({
      ...project,
      programSlug: program.slug,
      programName: program.name,
    }))
  );
}

// Helper: find program by slug
export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

// Helper: find project by slug across all programs
export function getProjectBySlug(
  slug: string
): (Project & { programSlug: string; programName: string }) | undefined {
  for (const program of programs) {
    const project = program.projects.find((p) => p.slug === slug);
    if (project) {
      return {
        ...project,
        programSlug: program.slug,
        programName: program.name,
      };
    }
  }
  return undefined;
}
