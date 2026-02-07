import type { ImageMetadata } from 'astro';

import presidentImg from '../assets/images/team/president.jpg';
import treasurerImg from '../assets/images/team/treasurer.jpg';
import secretaryImg from '../assets/images/team/secretary.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: ImageMetadata;
  social: {
    linkedin?: string;
    email: string;
  };
}

const team: TeamMember[] = [
    {
        id: "president",
        name: "Loann Faure",
        role: "Président",
        bio: "Passionné par l'innovation sociale et l'écologie, Loann dirige la stratégie globale de l'association.",
        image: presidentImg,
        social: {
            linkedin: "#",
            email: "president@nelosis.fr"
        }
    },
    {
        id: "treasurer",
        name: "Ali",
        role: "Trésorier",
        bio: "Expert en finance, Ali veille à la bonne gestion des ressources pour nos projets.",
        image: treasurerImg,
        social: {
            linkedin: "#",
            email: "tresorier@nelosis.fr"
        }
    },
    {
        id: "secretary",
        name: "Natanaël Andral-Meignan",
        role: "Vice-président",
        bio: "Organisé et rigoureux, Natanaël coordonne les activités administratives et la communication interne.",
        image: secretaryImg,
        social: {
            linkedin: "#",
            email: "secretaire@nelosis.fr"
        }
    }
];

export default team;
