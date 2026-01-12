
export interface Speaker {
  id: string;
  name: string;
  title: string;
  organization: string;
  image: string;
  bio: string;
}

export interface ProgramItem {
  id: string;
  time: string;
  title: string;
  description: string;
  speakers?: string[];
  day: number;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  type: 'Organizer' | 'Host' | 'Strategic' | 'Technical';
}
