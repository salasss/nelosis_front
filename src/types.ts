export interface Partner {
  name: string;
  type: string;
  description?: string;
}

export interface Antenne {
  slug: string;
  name: string;
  isHQ?: boolean;
  coords: {
    lat: number;
    lng: number;
    x: number;
    y: number;
  };
  contact: {
    email: string;
    phone?: string;
    address?: string;
  };
  description: string;
  team: any[];
  projects_ids: string[];
  partners: Partner[];
}
