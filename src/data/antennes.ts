import type { Antenne } from '../types';

export const antennas: Antenne[] = [
  {
    slug: 'perpignan',
    name: 'Perpignan',
    isHQ: true,
    coords: {
      lat: 42.6986,
      lng: 2.8956,
      x: 420,
      y: 539
    },
    contact: {
      email: 'perpignan@nelosis.fr',
      phone: '04 68 00 00 00',
      address: 'Université de Perpignan Via Domitia, 52 Avenue Paul Alduy, 66100 Perpignan'
    },
    description: `Siège historique du réseau Nélosis, l'antenne de Perpignan est au cœur de l'innovation agro-écologique. Elle collabore étroitement avec les laboratoires de l'UPVD pour développer des solutions comme Végét'All et la Bouée Végétale. C'est ici que tout a commencé.`,
    team: [
      {
        name: 'Loann Faure',
        role: 'Président',
        bio: 'Passionné par l\'innovation sociale et l\'écologie, Loann dirige la stratégie globale de l\'association.',
        image: "",
        social: {
            linkedin: "#",
            email: "president@nelosis.fr",
            phone: "+33 6 12 34 56 78"
        }
      },
      {
        name: 'Ali',
        role: 'Trésorier',
        bio: 'Expert en finance, Ali veille à la bonne gestion des ressources pour nos projets.',
        image: "",
        social: {
            linkedin: "#",
            email: "tresorier@nelosis.fr"
        }
      },
      {
        name: 'Natanaël Andral-Meignan',
        role: 'Vice-président',
        bio: 'Organisé et rigoureux, Natanaël coordonne les activités administratives et la communication interne.',
        image: "",
        social: {
            linkedin: "#",
            email: "secretaire@nelosis.fr"
        }
      }
    ], // À remplir avec les membres locaux
    projects_ids: ['vegetall', 'bouee-vegetale'],
    partners: [
      {
        name: 'UPVD',
        type: 'school',
        description: 'Université de Perpignan Via Domitia - Partenaire historique.'
      },
      {
        name: 'IAE Perpignan',
        type: 'school',
        description: 'École Universitaire de Management.'
      }
    ]
  },
  {
    slug: 'montpellier',
    name: 'Montpellier',
    coords: {
      lat: 43.6108,
      lng: 3.8767,
      x: 440,
      y: 481
    },
    contact: {
      email: 'montpellier@nelosis.fr'
    },
    description: `Située dans une ville dynamique et étudiante, l'antenne de Montpellier se concentre sur la sensibilisation et les projets d'urbanisme durable.`,
    team: [],
    projects_ids: ['ecoleogie'],
    partners: [
        {
            name: 'Université de Montpellier',
            type: 'school'
        }
    ]
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    coords: {
      lat: 45.7640,
      lng: 4.8357,
      x: 495,
      y: 338
    },
    contact: {
      email: 'lyon@nelosis.fr'
    },
    description: `L'antenne Lyonnaise développe des partenariats forts avec les écoles d'ingénieurs et de commerce de la région pour propulser l'innovation sociale.`,
    team: [],
    projects_ids: ['brique-mycelium'],
    partners: []
  },
  {
    slug: 'toulouse',
    name: 'Toulouse',
    coords: {
      lat: 43.6047,
      lng: 1.4442,
      x: 344,
      y: 497
    },
    contact: {
      email: 'toulouse@nelosis.fr'
    },
    description: `Au cœur de la ville rose, l'antenne toulousaine mobilise les étudiants autour de la tech et de l'écologie.`,
    team: [],
    projects_ids: [],
    partners: []
  },
  {
    slug: 'toulon',
    name: 'Toulon',
    coords: {
      lat: 43.1242,
      lng: 5.9280,
      x: 560,
      y: 515
    },
    contact: {
      email: 'toulon@nelosis.fr'
    },
    description: `L'antenne de Toulon se mobilise pour la protection de la biodiversité marine et l'économie circulaire sur le littoral.`,
    team: [],
    projects_ids: [],
    partners: []
  }

];
