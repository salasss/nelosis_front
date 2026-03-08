// ─── Types ───────────────────────────────────────────────────────────

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categoryColor: string;
  author: string;
  authorRole: string;
  date: string;           // ISO format for SEO (e.g. "2026-02-15")
  readTime: string;       // e.g. "5 min"
  tags: string[];
  featured?: boolean;
}

// ─── Articles Data ───────────────────────────────────────────────────

const articles: Article[] = [
  {
    id: 'innovation-vegetale-urbaine',
    slug: 'innovation-vegetale-urbaine',
    title: "L'innovation végétale au cœur des villes : comment repenser l'agriculture urbaine",
    excerpt:
      "Découvrez comment les nouvelles technologies d'extraction d'humidité et de toitures végétalisées transforment nos espaces urbains en oasis de biodiversité et d'autonomie alimentaire.",
    content: `
L'agriculture urbaine connaît une révolution silencieuse. Portée par des initiatives étudiantes comme le programme Végét'All de Nélosis, elle intègre désormais des technologies innovantes issues de la recherche fondamentale.

## Le défi de l'eau en milieu urbain

Les villes consomment 75% de l'eau potable mondiale. Face à ce constat, les extracteurs d'humidité nocturne développés par nos équipes proposent une alternative fascinante : capturer l'eau contenue dans l'air la nuit, sans aucune dépense énergétique.

## Des résultats prometteurs

Les premiers prototypes permettent déjà d'extraire environ 1L d'eau par m² et par nuit. Cette eau est ensuite acheminée directement vers les bacs de culture, créant un système d'irrigation autonome et durable.

## Vers une ville résiliente

L'objectif à long terme est de transformer chaque toit en un espace productif et résilient, capable de contribuer à la sécurité alimentaire locale tout en améliorant la biodiversité urbaine.
    `.trim(),
    category: 'Innovation',
    categoryColor: '#C7C652',
    author: 'Loann Faure',
    authorRole: 'Président Nélosis',
    date: '2026-02-15',
    readTime: '6 min',
    tags: ['agriculture urbaine', 'innovation', 'écologie', 'végétalisation', 'développement durable'],
    featured: true,
  },
  {
    id: 'bioluminescence-eclairage-durable',
    slug: 'bioluminescence-eclairage-durable',
    title: "Bioluminescence : quand la nature éclaire nos rues sans électricité",
    excerpt:
      "La bioluminescence, phénomène naturel fascinant, pourrait révolutionner l'éclairage public. Le programme NoctiLumen de Nélosis explore cette piste pour un futur plus vert.",
    content: `
Chaque nuit, nos villes consomment des quantités astronomiques d'électricité pour s'éclairer. Et si la solution venait du fond des océans ?

## La bioluminescence, un phénomène millénaire

Depuis des millions d'années, certains organismes marins produisent leur propre lumière grâce à des réactions biochimiques. Méduses, plancton, champignons… la nature regorge d'exemples de bioluminescence.

## Le programme NoctiLumen

Notre programme de recherche vise à adapter ces mécanismes naturels pour créer des solutions d'éclairage urbain durables. En collaboration avec des laboratoires de recherche, nous explorons les possibilités offertes par les organismes bioluminescents.

## Un avenir lumineux

Imaginez des allées de parc éclairées par des plantes luminescentes, des marquages routiers qui brillent naturellement, des façades de bâtiments qui s'illuminent au crépuscule. Ce futur est plus proche qu'on ne le pense.
    `.trim(),
    category: 'Recherche',
    categoryColor: '#7B8CFF',
    author: 'Natanaël Andral-Meignan',
    authorRole: 'Vice-président',
    date: '2026-01-28',
    readTime: '5 min',
    tags: ['bioluminescence', 'éclairage', 'recherche', 'énergie durable', 'biomimétisme'],
  },
  {
    id: 'engagement-etudiant-ecologie',
    slug: 'engagement-etudiant-ecologie',
    title: "Engagement étudiant : la nouvelle génération au service de la transition écologique",
    excerpt:
      "Comment les étudiants redéfinissent l'engagement écologique à travers des projets concrets, de la recherche appliquée et un réseau associatif en pleine expansion.",
    content: `
La transition écologique ne se fera pas sans la mobilisation de la jeunesse. Partout en France, des étudiants se lèvent pour proposer des solutions concrètes aux défis environnementaux.

## Un réseau qui grandit

Nélosis, réseau associatif étudiant, compte désormais plusieurs antennes à travers la France. De Perpignan à Lyon, des étudiants de toutes disciplines se rassemblent autour d'une ambition commune : innover pour la planète.

## Des projets qui font la différence

Bouée végétale pour restaurer la biodiversité marine, briques en mycélium pour une construction durable, programme éducatif Écoléogie… Les projets portés par les étudiants de Nélosis prouvent que l'innovation écologique est à la portée de tous.

## Rejoindre le mouvement

Chaque étudiant peut contribuer à la transition écologique. Qu'il s'agisse de recherche, de sensibilisation ou d'ingénierie, le réseau Nélosis offre un cadre pour transformer les idées en actions concrètes.
    `.trim(),
    category: 'Réseau',
    categoryColor: '#5CC796',
    author: 'Loann Faure',
    authorRole: 'Président Nélosis',
    date: '2026-01-10',
    readTime: '4 min',
    tags: ['engagement étudiant', 'réseau associatif', 'transition écologique', 'jeunesse', 'innovation sociale'],
  },
];

export default articles;

// ─── Helpers ─────────────────────────────────────────────────────────

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleTags(): string[] {
  const tags = new Set<string>();
  articles.forEach((a) => a.tags.forEach((t) => tags.add(t)));
  return Array.from(tags);
}

/**
 * Format date for display (French locale)
 */
export function formatArticleDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
