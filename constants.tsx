
import { Speaker, ProgramItem, Partner } from './types';

export const EVENT_INFO = {
  name: "Heads of National Regulatory Authorities Forum",
  dates: "29 – 30 January 2026",
  venue: "Kigali Convention Centre (KCC)",
  location: "Kigali, Rwanda",
  organizer: "African Medicines Agency (AMA)",
  frequency: "Annual (Recurring Event)"
};

export const SPEAKERS: Speaker[] = [
  {
    id: "1",
    name: "H.E Dr. Jean Kaseya",
    title: "Director General",
    organization: "Africa-CDC",
    image: "/images/speakers/Jean-Kaseya.jpg",
    bio: "Specialist in vaccines and medical device regulation across Sub-Saharan Africa."
  },
  {
    id: "2",
    name: "Dr. Sabin Nsanzimana",
    title: "Minister of Health",
    organization: "Ministry of Health, Rwanda",
    image: "/images/speakers/sabin.jpg",
    bio: "Distinguished researcher and policy advocate driving the vision of a unified African pharmaceutical market."
  },
  {
    id: "3",
    name: "Prof. Emile BIENVENU",
    title: "Director General",
    organization: "Rwanda FDA",
    image: "/images/speakers/Prof. Emile BIENVENU.jpg",
    bio: "Leading expert in continental regulatory harmonisation with 20 years of experience in public health policy."
  }, 
  {
    id: "4",
    name: "Prof. Claude Mambo Muvunyi",
    title: "Director General",
    organization: "Rwanda Biomedical Centre",
    image: "/images/speakers/Claude-Mambo.jpg",
    bio: "Key architect of Rwanda's healthcare transformation and host representative for the inaugural forum."
  }
  
];

export const PROGRAM: ProgramItem[] = [
  {
    id: "d1-1",
    time: "08:30 - 09:30",
    day: 1,
    title: "Registration & Morning Coffee",
    description: "Welcome of delegates at the KCC Main Hall."
  },
  {
    id: "d1-2",
    time: "09:30 - 11:00",
    day: 1,
    title: "Official Opening Ceremony",
    description: "Welcome remarks from AMA leadership and the Host Government. Keynote address on 'The Future of African Regulatory Systems'."
  },
  {
    id: "d1-3",
    time: "11:30 - 13:00",
    day: 1,
    title: "Plenary: Harmonisation Milestones",
    description: "Review of progress in continental harmonisation and reliance initiatives."
  },
  {
    id: "d2-1",
    time: "09:00 - 11:00",
    day: 2,
    title: "Closed-door Strategic Session",
    description: "Restricted to Heads of NRAs. Collective decision-making on priority reforms."
  },
  {
    id: "d2-2",
    time: "14:00 - 16:00",
    day: 2,
    title: "Adoption of Chair’s Summary",
    description: "Finalizing and signing of the forum communique and future roadmaps."
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "p1",
    name: "African Medicines Agency",
    logo: "/images/partners/AMA.png",
    type: "Organizer"
  },
  {
    id: "p2",
    name: "Rwanda Food and Drugs Authority",
    logo: "/images/partners/rwanda-fda.jpg",
    type: "Host"
  },
  {
    id: "p3",
    name: "Gates Foundation",
    logo: "/images/partners/gates-foundation.png",
    type: "Strategic"
  }
];
