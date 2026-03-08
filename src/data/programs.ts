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
    tagline: 'Lorem ipsum dolor sit',
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.",
    color: '#C7C652',
    accentColor: '#a8a836',
    icon: 'leaf',
    presentation: {
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      enjeux:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      objectifs: [
        "Lorem ipsum dolor sit amet consectetur adipiscing",
        "Sed do eiusmod tempor incididunt ut labore",
        "Ut enim ad minim veniam quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit voluptate",
      ],
      vision:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis.",
    },
    partners: [
      {
        name: 'Lorem Ipsum University',
        type: 'institution',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
      },
      {
        name: 'DOLOR-CNRS',
        type: 'labo',
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
      },
    ],
    projects: [
      {
        id: 'extracteurs-humidite',
        slug: 'extracteurs-humidite',
        title: "Extracteurs d'humidité nocturne",
        subtitle: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        color: '#C7C652',
        icon: 'droplets',
        logo: vegetallImg,
        status: 'active',
        featured: true,
        leaders: [
          { name: 'Lorem Ipsum', role: 'Lorem / Ipsum' },
        ],
        content: [
          {
            title: "Lorem ipsum dolor sit amet ?",
            text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: vegetallInnovation,
          },
          {
            title: 'Lorem principe',
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            image: vegetallPrincipe,
          },
          {
            title: "Lorem organisation",
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.",
            image: vegetallOrganisation,
          },
        ],
      },
      {
        id: 'toits-vegetalises',
        slug: 'toits-vegetalises',
        title: 'Toitures Végétalisées Autonomes',
        subtitle: 'Lorem ipsum dolor',
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
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
    tagline: 'Consectetur adipiscing elit',
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    color: '#7B8CFF',
    accentColor: '#5a6be6',
    icon: 'sparkles',
    presentation: {
      intro:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      enjeux:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      objectifs: [
        "Lorem ipsum dolor sit amet consectetur",
        "Adipiscing elit sed do eiusmod tempor",
        "Incididunt ut labore et dolore magna aliqua",
        "Ut enim ad minim veniam quis nostrud",
      ],
      vision:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    },
    partners: [],
    projects: [
      {
        id: 'lampes-bioluminescentes',
        slug: 'lampes-bioluminescentes',
        title: 'Lampes Bioluminescentes',
        subtitle: "Lorem ipsum dolor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
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
    tagline: 'Sed do eiusmod tempor',
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
    color: '#5CC796',
    accentColor: '#3dab7a',
    icon: 'waves',
    presentation: {
      intro:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.",
      enjeux:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.",
      objectifs: [
        "Lorem ipsum dolor sit amet consectetur adipiscing",
        "Sed do eiusmod tempor incididunt ut labore",
        "Ut enim ad minim veniam quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit voluptate",
      ],
      vision:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    },
    partners: [
      {
        name: 'Lorem Ipsum Naturel',
        type: 'institution',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    projects: [
      {
        id: 'bouee-vegetale',
        slug: 'bouee-vegetale',
        title: 'Bouée Végétale',
        subtitle: 'Lorem ipsum dolor sit',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.',
        color: '#5CC796',
        icon: 'life-buoy',
        logo: boueeImg,
        status: 'active',
        featured: true,
        leaders: [
          { name: 'Lorem Ipsum', role: 'Lorem de projet' },
        ],
        content: [
          {
            title: 'Lorem concept',
            text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.",
          },
        ],
      },
      {
        id: 'brique-mycelium',
        slug: 'brique-mycelium',
        title: 'Brique Mycélium',
        subtitle: 'Lorem vivante',
        description:
          'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
        color: '#FBA824',
        icon: 'cube',
        logo: briqueImg,
        status: 'active',
        featured: true,
        content: [
          {
            title: 'Lorem fongique',
            text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
          },
        ],
      },
    ],
  },
  {
    id: 'sensibilisation',
    slug: 'sensibilisation-innovante',
    name: 'Sensibilisation Innovante',
    tagline: 'Ut labore et dolore',
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    color: '#FF7D7D',
    accentColor: '#e65c5c',
    icon: 'graduation-cap',
    presentation: {
      intro:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore.",
      enjeux:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      objectifs: [
        "Lorem ipsum dolor sit amet consectetur adipiscing",
        "Sed do eiusmod tempor incididunt ut labore",
        "Ut enim ad minim veniam quis nostrud exercitation",
        "Duis aute irure dolor in reprehenderit voluptate",
      ],
      vision:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    },
    partners: [
      {
        name: 'Lorem Occitanie',
        type: 'institution',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
    projects: [
      {
        id: 'ecoleogie',
        slug: 'ecoleogie',
        title: 'Écoléogie',
        subtitle: 'Lorem durable',
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
        color: '#FF7D7D',
        icon: 'school',
        logo: ecoleogieImg,
        status: 'active',
        featured: true,
        leaders: [
          { name: 'Lorem Ipsum', role: 'Lorem de projet' },
        ],
        content: [
          {
            title: 'Lorem transmission',
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
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
