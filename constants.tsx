
import { Speaker, ProgramItem, Partner } from './types';

export const EVENT_INFO = {
  name: "First AMA Heads of NRAs and RECs Coordinators Forum",
  theme: "Building the African Medicines Agency Together",
  dates: "29 – 30 January 2026",
  venue: "Kigali, Rwanda",
  location: "Kigali, Rwanda",
  organizer: "African Medicines Agency (AMA)",
  frequency: "Two-day Forum"
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
    description: "Welcome of delegates. Registration and networking."
  },
  {
    id: "d1-2",
    time: "09:30 - 11:00",
    day: 1,
    title: "Official Opening & AMA Updates",
    description: "Welcome remarks from AMA leadership and Host Government. Updates on AMA operationalisation including transition from AMRH initiative."
  },
  {
    id: "d1-3",
    time: "11:30 - 13:00",
    day: 1,
    title: "Continental Systems for 2026",
    description: "Inputs into AMA's proposed continental systems for Medical Product Vigilance, Quality Monitoring, and Clinical Trials coordination."
  },
  {
    id: "d1-4",
    time: "14:00 - 16:00",
    day: 1,
    title: "AMA Technical Committees & Capacity Building",
    description: "Deliberations on AMA Technical Committees, Advisory Committees, and co-creating the AMA Tiered Capacity-Building Strategy."
  },
  {
    id: "d2-1",
    time: "09:00 - 11:00",
    day: 2,
    title: "SME & Innovation Office / Local Manufacturing",
    description: "Discussion on the proposed AMA SME & Innovation Office and how it can support local and regional manufacturing of medical products."
  },
  {
    id: "d2-2",
    time: "11:30 - 13:00",
    day: 2,
    title: "AMA Headquarters Tour",
    description: "Guided tour of the AMA Headquarters building in Kigali."
  },
  {
    id: "d2-3",
    time: "14:00 - 16:00",
    day: 2,
    title: "2026 Work Plan & Closing",
    description: "Alignment on priority activities for 2026 and adoption of the AMA/NRAs/RECs Draft Work Plan. Closing remarks."
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
