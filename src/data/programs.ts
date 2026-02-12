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
  featured?: boolean; // true = mis en avant dans "Projets Phares"
  leaders?: ProjectLeader[];
  content: ContentSection[];
}

export interface ProgramPartner {
  name: string;
  type: 'institution' | 'entreprise' | 'labo' | 'asso' | 'autre';
  description?: string;
  url?: string;
}

export interface ProgramPresentation {
  intro: string;           // Texte d'introduction court
  enjeux: string;          // Pourquoi ce programme existe ?
  objectifs: string[];     // Liste à puces des objectifs clés
  vision?: string;         // Vision long terme (optionnel)
}

export interface Program {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  accentColor: string;
  icon: string;
  presentation: ProgramPresentation;
  partners: ProgramPartner[];
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
    presentation: {
      intro:
        "Végét'All repense l'agriculture en milieu urbain. L'objectif : des systèmes autonomes capables de nourrir les villes sans énergie externe, en s'appuyant sur la physique et le biomimétisme.",
      enjeux:
        "Les villes consomment 75 % des ressources mondiales et concentrent la majorité de la population. Pourtant, elles restent presque totalement dépendantes de systèmes agricoles lointains. Le programme Végét'All naît de cette fracture : comment ramener une production alimentaire locale, résiliente et à faible coût énergétique au cœur des espaces urbains ?",
      objectifs: [
        "Développer des extracteurs d'humidité nocturne à zéro énergie",
        "Prototyper des toitures végétalisées autonomes en circuit fermé",
        "Créer des micro-écosystèmes urbains réplicables et open-source",
        "Former les étudiants aux techniques d'agro-urbanisme",
      ],
      vision:
        "À terme, chaque immeuble pourrait intégrer un module Végét'All, transformant les toits inutilisés en terres nourricières qui fonctionnent en totale autonomie.",
    },
    partners: [
      {
        name: 'Université de Perpignan Via Domitia',
        type: 'institution',
        description: "Partenaire académique principal – laboratoire de recherche sur les matériaux et la physique appliquée.",
      },
      {
        name: 'PROMES-CNRS',
        type: 'labo',
        description: "Laboratoire de recherche sur les procédés, matériaux et énergie solaire.",
      },
    ],
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
        featured: true,
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
        featured: false,
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
    presentation: {
      intro:
        "NoctiLumen explore la frontière entre le vivant et la lumière. Ce programme de recherche développe des solutions d'éclairage biologique — sans électricité, sans batterie — en utilisant des organismes bioluminescents.",
      enjeux:
        "L'éclairage artificiel représente environ 15 % de la consommation mondiale d'électricité. La pollution lumineuse perturbe les écosystèmes nocturnes et la santé humaine. NoctiLumen explore une voie radicalement différente : utiliser le vivant pour produire de la lumière.",
      objectifs: [
        "Cultiver et stabiliser des organismes bioluminescents en milieu contrôlé",
        "Concevoir des lampes biologiques fonctionnelles pour l'éclairage d'appoint",
        "Étudier l'impact environnemental comparé à l'éclairage LED",
        "Développer des protocoles de maintenance biologique accessibles",
      ],
      vision:
        "Imaginer un monde où les rues, parcs et espaces publics pourraient être éclairés par des organismes vivants, sans électricité.",
    },
    partners: [],
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
        featured: true,
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
    presentation: {
      intro:
        "Lagoon se consacre à la restauration des milieux aquatiques méditerranéens. Nos projets combinent ingénierie écologique et innovation matériau pour relancer des écosystèmes menacés.",
      enjeux:
        "La Méditerranée est l'un des 25 hotspots mondiaux de biodiversité, mais aussi l'un des plus menacés. Surpêche, pollution plastique, réchauffement… Le programme Lagoon développe des solutions concrètes et reproductibles pour aider les écosystèmes côtiers à se régénérer.",
      objectifs: [
        "Déployer des bouées végétales pour relancer les chaînes alimentaires locales",
        "Créer des récifs artificiels biodégradables à base de mycélium",
        "Mesurer et documenter l'impact de nos dispositifs sur la biodiversité",
        "Collaborer avec les pêcheurs et acteurs locaux du littoral",
      ],
      vision:
        "Chaque port méditerranéen pourrait être équipé de dispositifs Lagoon pour restaurer progressivement l'écosystème côtier environnant.",
    },
    partners: [
      {
        name: 'Parc Naturel Marin du Golfe du Lion',
        type: 'institution',
        description: "Partenaire terrain pour les déploiements en mer et le suivi scientifique.",
      },
    ],
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
        featured: true,
        leaders: [
          { name: 'Équipe Lagoon', role: 'Porteurs de projet' },
        ],
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
        featured: true,
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
    presentation: {
      intro:
        "La Sensibilisation Innovante est le bras éducatif de Nélosis. Ce programme crée des outils et formats pédagogiques nouveaux pour toucher les publics là où ils sont, avec impact et créativité.",
      enjeux:
        "L'information sur les enjeux écologiques existe, mais elle peine à transformer les comportements. La sensibilisation classique (flyers, conférences) a ses limites. Ce programme explore des formats immersifs, ludiques et expérientiels pour créer un déclic durable, en ciblant notamment les jeunes générations.",
      objectifs: [
        "Concevoir des ateliers pédagogiques immersifs pour les écoles",
        "Développer des outils de sensibilisation numériques et interactifs",
        "Former des étudiants-ambassadeurs pour les interventions terrain",
        "Mesurer l'impact des actions de sensibilisation sur les comportements",
      ],
      vision:
        "Que chaque jeune ayant participé à un programme Sensibilisation Innovante devienne un acteur de changement dans son environnement.",
    },
    partners: [
      {
        name: 'Rectorat Occitanie',
        type: 'institution',
        description: "Facilitation de l'accès aux établissements scolaires de la région.",
      },
    ],
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
        featured: true,
        leaders: [
          { name: 'Équipe Sensibilisation', role: 'Porteurs de projet' },
        ],
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
export function getAllProjects(): (Project & { programSlug: string; programName: string; programColor: string })[] {
  return programs.flatMap((program) =>
    program.projects.map((project) => ({
      ...project,
      programSlug: program.slug,
      programName: program.name,
      programColor: program.color,
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
): (Project & { programSlug: string; programName: string; programColor: string }) | undefined {
  for (const program of programs) {
    const project = program.projects.find((p) => p.slug === slug);
    if (project) {
      return {
        ...project,
        programSlug: program.slug,
        programName: program.name,
        programColor: program.color,
      };
    }
  }
  return undefined;
}
