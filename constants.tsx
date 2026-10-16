import { Speaker, ProgramItem, Partner } from './types';

export const EVENT_INFO = {
  name: "Inaugural African Medicines Agency Week (1st AMA Week)",
  theme: "Building Africa's Regulatory Future Together — From National Strength to Continental Impact",
  dates: "25 – 30 October 2026",
  venue: "Marriott Hotel & Ubumwe Grande Hotel, Kigali",
  location: "Kigali, Rwanda",
  organizer: "African Medicines Agency (AMA)",
  frequency: "Six days, eleven convenings"
};

// Speakers confirmed in the Concept Note, Agenda and Programme v3.2 (8 October 2026).
// Speakers marked "to be confirmed" in that document are not listed.
export const SPEAKERS: Speaker[] = [
  {
    id: "1",
    name: "H.E. Dr Delese Mimi Darko",
    title: "Director-General",
    organization: "African Medicines Agency (AMA)",
    image: "/images/speakers/H.E. Dr Delese Mimi Darko.jpeg",
    bio: "Opens the Manufacturing and Innovation Day, inaugurates the AMA Technical Committees, launches the two AMA Hub Strategies and presents the Kigali Communiqué."
  },
  {
    id: "2",
    name: "Dr Sabin Nsanzimana",
    title: "Minister of Health",
    organization: "Republic of Rwanda",
    image: "/images/speakers/sabin.jpg",
    bio: "Delivers the welcome remarks from the Republic of Rwanda at the Official Opening of AMA Week on 27 October."
  },
  {
    id: "3",
    name: "H.E. Dr Jean Kaseya",
    title: "Director General",
    organization: "Africa CDC",
    image: "/images/speakers/Jean-Kaseya.jpg",
    bio: "Delivers a statement at the Official Opening and presents on the changing disease epidemiology and public health priorities for Africa."
  },
  {
    id: "4",
    name: "Dr Tedros Adhanom Ghebreyesus",
    title: "Director-General",
    organization: "World Health Organization (WHO)",
    image: "/images/speakers/Dr Tedros Adhanom Ghebreyesus.jpg",
    bio: "Delivers the WHO keynote speech at the Official Opening of AMA Week on 27 October."
  },
  {
    id: "5",
    name: "Dr Abdelmadjid Abderahim Mahamat",
    title: "Minister of Health",
    organization: "Republic of Chad",
    image: "",
    bio: "Officially opens the 1st AMA Week on 27 October."
  },
  {
    id: "6",
    name: "H.E. Amb. Amma A. Twum-Amoah",
    title: "Commissioner for Health, Humanitarian Affairs and Social Development",
    organization: "African Union Commission (AUC)",
    image: "",
    bio: "Delivers the African Union Commission keynote speech at the Official Opening."
  },
  {
    id: "7",
    name: "H.E. Mrs Nardos Bekele-Thomas",
    title: "Chief Executive Officer",
    organization: "AUDA-NEPAD",
    image: "",
    bio: "Delivers the AUDA-NEPAD statement at the Official Opening of AMA Week."
  },
  {
    id: "8",
    name: "H.E. Wamkele Keabetswe Mene",
    title: "Secretary-General",
    organization: "AfCFTA Secretariat",
    image: "",
    bio: "Delivers the AfCFTA statement at the Official Opening of AMA Week."
  },
  {
    id: "9",
    name: "Hon. Dr Michel Sidibé",
    title: "AMA Special Envoy",
    organization: "African Medicines Agency (AMA)",
    image: "",
    bio: "Delivers a statement at the Official Opening and moderates the session on the launch of the AMA Hubs."
  },
  {
    id: "10",
    name: "Dr Yossounon Chabi",
    title: "Chairperson",
    organization: "AMA Governing Board",
    image: "",
    bio: "Chairs the Official Opening session, formally inaugurates the AMA Technical Committees and addresses the African Medicines Regulators Conference."
  },
  {
    id: "11",
    name: "Prof. Raymond Muganga",
    title: "Director General",
    organization: "Rwanda FDA",
    image: "",
    bio: "Delivers remarks at the opening of the African Medicines Regulators Conference on 29 October."
  },
  {
    id: "12",
    name: "Prof. Alexander Dodoo",
    title: "Senior Advisor to the Director-General",
    organization: "African Medicines Agency (AMA)",
    image: "",
    bio: "Master of Ceremonies of the Manufacturing and Innovation Day and moderator of the high-level panel on the role of regulators in African public health priorities."
  },
  {
    id: "13",
    name: "Dr Amit N Thakker",
    title: "Executive Chairman",
    organization: "Africa Health Business",
    image: "",
    bio: "Delivers the keynote \"Health Security or Sound Business? The Case for Medical Products Manufacturing in Africa\" and moderates the industry panel."
  },
  {
    id: "14",
    name: "Prof. Mohamed Janabi",
    title: "Regional Director",
    organization: "WHO Regional Office for Africa (AFRO)",
    image: "",
    bio: "Panellist on the role of regulators in addressing African public health priorities."
  },
  {
    id: "15",
    name: "Dr Hanan Balkhy",
    title: "Regional Director",
    organization: "WHO Regional Office for the Eastern Mediterranean (EMRO)",
    image: "",
    bio: "Panellist on the role of regulators in addressing African public health priorities."
  },
  {
    id: "16",
    name: "Mr Hiiti Sillo",
    title: "Unit Head, Regulation and Safety",
    organization: "WHO Headquarters, Geneva",
    image: "",
    bio: "Presents the AMA–WHO Framework for Collaboration and regulatory systems strengthening in Africa at the AMRC."
  },
  {
    id: "17",
    name: "Dr Mariatou Tala Jallow",
    title: "Director, African Pooled Procurement Mechanism",
    organization: "Africa CDC",
    image: "",
    bio: "Presents the African Pooled Procurement Mechanism (APPM) at the Manufacturing and Innovation Day."
  },
  {
    id: "18",
    name: "Dr Richard Tendayi Rukwata",
    title: "Director General",
    organization: "Medicines Control Authority of Zimbabwe (MCAZ)",
    image: "",
    bio: "Moderates the AMRC fireside chat on sharing resources to strengthen capacity and accelerate access to medical products."
  },
  {
    id: "19",
    name: "Mr Emmanuel Mujuru",
    title: "Chairperson",
    organization: "Federation of African Pharmaceutical Manufacturers Associations (FAPMA)",
    image: "",
    bio: "Industry representative on the high-level panel at the Official Opening."
  },
  {
    id: "20",
    name: "Mr Robert Matilu",
    title: "Master of Ceremonies",
    organization: "Unitaid",
    image: "",
    bio: "Co-Master of Ceremonies of the AMA Manufacturing and Innovation Day on 25 October."
  }
];

// Day 1 = Sunday 25 October ... Day 6 = Friday 30 October 2026.
export const PROGRAM: ProgramItem[] = [
  // Sunday 25 October — AMA Manufacturing and Innovation Day (Marriott Hotel)
  {
    id: "d1-1",
    time: "08:00 - 09:00",
    day: 1,
    title: "Arrival, Registration and Networking",
    description: "AMA Manufacturing and Innovation Day — a full day of regulator–industry dialogue."
  },
  {
    id: "d1-2",
    time: "09:00 - 10:30",
    day: 1,
    title: "Session 1: Opening and Setting the Scene",
    description: "Welcome address; keynote \"Health Security or Sound Business? The Case for Medical Products Manufacturing in Africa\"; high-level panel on manufacturing, innovation and market access in Africa with FAPMA, EAFPMA, IFPMA, DNDi and Biovac.",
    speakers: ["Dr Delese Mimi Darko", "Dr Amit N Thakker"]
  },
  {
    id: "d1-3",
    time: "11:00 - 12:15",
    day: 1,
    title: "Session 2: Manufacturing in Practice — Challenges and Success Stories",
    description: "Challenges in vaccine and medical device manufacturing in Africa, an African manufacturer's journey to WHO prequalification of antiretrovirals, and an open forum with all participants.",
    speakers: ["VACSERA (Egypt)", "FIND", "Universal Corporation Ltd (Kenya)"]
  },
  {
    id: "d1-4",
    time: "12:15 - 13:00",
    day: 1,
    title: "Session 3: AMA in Operation — What It Means for Industry",
    description: "The AMA operational phase and the AMA Coordinated Continental Procedure, followed by discussion.",
    speakers: ["Clariator Mvurume", "Alex Juma"]
  },
  {
    id: "d1-5",
    time: "14:00 - 15:00",
    day: 1,
    title: "Session 4: AMA as an Enabler of Local Manufacturing",
    description: "AMA as a facilitator for local manufacturing and market access in Africa, and the AMA fee structure, with an open forum.",
    speakers: ["Nathaniel Nkrumah", "Dr Amit N Thakker"]
  },
  {
    id: "d1-6",
    time: "15:00 - 16:00",
    day: 1,
    title: "Session 5: Market Access through Pooled Procurement",
    description: "The African Pooled Procurement Mechanism (APPM) and the role of AMA in quality assurance, with an open forum.",
    speakers: ["Dr Mariatou Tala Jallow", "Nkaelang Modutlwa"]
  },
  {
    id: "d1-7",
    time: "16:30 - 17:30",
    day: 1,
    title: "Session 6: Closing Session",
    description: "Closing plenary on how regulators, industry and product development partnerships can work together to improve local manufacturing and market access; key outcomes and next steps; closing remarks.",
    speakers: ["Dr Delese Mimi Darko"]
  },
  {
    id: "d1-8",
    time: "18:00 - 19:30",
    day: 1,
    title: "AMA Week Opening Reception",
    description: "Welcome reception for all arriving delegates."
  },

  // Monday 26 October — Inauguration, Technical Committee Meetings I and the Open House (Marriott Hotel)
  {
    id: "d2-1",
    time: "09:00 - 10:30",
    day: 2,
    title: "Inauguration of the Seven AMA Technical Committees (Open)",
    description: "The role of the Technical Committees in delivering the Agency's work programme; partner statements from WHO, EMA and the Gates Foundation; introduction of the Committees and their members; formal inauguration and group photograph.",
    speakers: ["Dr Delese Mimi Darko", "Dr Yossounon Chabi"]
  },
  {
    id: "d2-2",
    time: "11:00 - 12:30",
    day: 2,
    title: "Orientation Plenary for Technical Committee Members (Closed)",
    description: "Orientation on terms of reference, rules of procedure and the AMA strategy."
  },
  {
    id: "d2-3",
    time: "13:30 - 17:00",
    day: 2,
    title: "Technical Committee Meetings I (Members Only)",
    description: "Five Committees meet in parallel closed session: Evaluation of Medicines, Vaccines and Biologicals; Regulatory Inspections (GMP and GCP); Market Intelligence and Control; Vigilance; and Quality Control Laboratories and Laboratory Networks."
  },
  {
    id: "d2-4",
    time: "14:00 - 17:00",
    day: 2,
    title: "AMA Hubs Open House",
    description: "The Regulatory Innovation and Manufacturing Readiness Hub and the AMA Capacity Strengthening Hub in open session with industry, partners and regulators: what each Hub offers, how to access it, and an interactive exhibition with bilateral Hub engagements."
  },

  // Tuesday 27 October — Official Opening of AMA Week (Marriott Hotel)
  {
    id: "d3-1",
    time: "08:45 - 09:50",
    day: 3,
    title: "Official Opening of AMA Week",
    description: "Welcome remarks from AMA and the Republic of Rwanda; statements from AUDA-NEPAD, Africa CDC, the AfCFTA and the AMA Special Envoy; keynote speeches from the AUC and WHO; official opening.",
    speakers: ["Dr Yossounon Chabi", "Dr Delese Mimi Darko", "Dr Sabin Nsanzimana", "Nardos Bekele-Thomas", "Dr Jean Kaseya", "Wamkele Mene", "Dr Michel Sidibé", "Amb. Amma A. Twum-Amoah", "Dr Tedros Adhanom Ghebreyesus", "Dr Abdelmadjid Abderahim Mahamat"]
  },
  {
    id: "d3-2",
    time: "10:30 - 11:20",
    day: 3,
    title: "Launch of the AMA Hubs and Updates",
    description: "The AMA Capacity Strengthening Hub and the Regulatory Innovation and Manufacturing Readiness Hub — mandates, work programmes and access; official launch of the two Hub Strategies; the changing disease epidemiology and public health priorities for Africa.",
    speakers: ["Dr Michel Sidibé", "Dr Delese Mimi Darko", "Dr Jean Kaseya"]
  },
  {
    id: "d3-3",
    time: "11:20 - 12:45",
    day: 3,
    title: "High-Level Panel: The Role of Regulators in Addressing African Public Health Priorities",
    description: "Regulators, industry and WHO regional leadership on regulatory responses to priority health needs and support for African manufacturing.",
    speakers: ["Prof. Alexander Dodoo", "Prof. Mohamed Janabi", "Dr Hanan Balkhy", "Emmanuel Mujuru"]
  },
  {
    id: "d3-4",
    time: "14:15 - 17:30",
    day: 3,
    title: "Parallel Convenings",
    description: "Annual Meeting of the Regional Centres of Regulatory Excellence (RCOREs); Meeting of alumni of the African Regulators Leadership Programme (ARLP); Meeting between AMA and RECs Coordinators."
  },
  {
    id: "d3-5",
    time: "Evening",
    day: 3,
    title: "AMA Week Dinner",
    description: "The principal hosted function of the Week."
  },

  // Wednesday 28 October — Technical Committee Meetings II and the Network of Heads of African NRAs (Ubumwe Grande Hotel)
  {
    id: "d4-1",
    time: "09:00 - 12:30",
    day: 4,
    title: "Technical Committee Meetings II (Members Only)",
    description: "Consideration and adoption of the procedures and frameworks tabled and finalisation of workplans. In parallel: continuation of the AMA–RECs Coordinators meeting."
  },
  {
    id: "d4-2",
    time: "14:00 - 17:00",
    day: 4,
    title: "Technical Committee Meetings II (Continued)",
    description: "Adoption of workplans and of each Committee's report and recommendations to the AMRC, followed by a joint consolidation session of the Committees."
  },
  {
    id: "d4-3",
    time: "14:00 - 17:30",
    day: 4,
    title: "2nd In-Person Meeting of the Network of Heads of African NRAs",
    description: "The case for a standing peer network; consideration and adoption of the Network's terms of reference, governance and meeting cadence; the Network's work plan."
  },

  // Thursday 29 October — African Medicines Regulators Conference, Day One (Ubumwe Grande Hotel)
  {
    id: "d5-1",
    time: "09:00 - 10:00",
    day: 5,
    title: "AMRC Opening Session",
    description: "African Medicines Regulators Conference — Regulatory Reliance: Accelerating Innovation, Access and Regulatory Excellence in Africa. Welcome address, remarks, the AMA–WHO Framework for Collaboration, and the keynote on regulatory reliance. A closed meeting of Heads of NRAs, in collaboration with WHO.",
    speakers: ["Dr Delese Mimi Darko", "Dr Yossounon Chabi", "Prof. Raymond Muganga", "Hiiti Sillo"]
  },
  {
    id: "d5-2",
    time: "10:30 - 12:15",
    day: 5,
    title: "Regulatory Systems Strengthening and Fireside Chat",
    description: "Regulatory systems strengthening in Africa and the growing number of ML3 NRAs; fireside chat with Heads of NRAs on sharing resources to strengthen capacity and accelerate access to quality, safe and efficacious medical products; open forum.",
    speakers: ["Hiiti Sillo", "Dr Richard Tendayi Rukwata"]
  },
  {
    id: "d5-3",
    time: "12:15 - 13:00",
    day: 5,
    title: "Reports of the Technical Committees",
    description: "The Chairpersons of the five Committees present their outcomes, adopted workplans and recommendations to Heads of NRAs."
  },
  {
    id: "d5-4",
    time: "14:00 - 15:30",
    day: 5,
    title: "Parallel Technical Tracks",
    description: "Track A: substandard and falsified medical products. Track B: safety monitoring and vigilance. Track C: AMA eligibility criteria, the continental listing pathway and reliance."
  },
  {
    id: "d5-5",
    time: "16:00 - 17:30",
    day: 5,
    title: "Regulatory Reliance in Africa — Facts, Myths and Practical Realities",
    description: "Principles of reliance, country experiences, and a panel with SADC, EMA and AMA on accelerating reliance among African NRAs and on the AMA."
  },
  {
    id: "d5-6",
    time: "19:30",
    day: 5,
    title: "AMRC Dinner",
    description: "For Heads of NRAs and invited guests."
  },

  // Friday 30 October — African Medicines Regulators Conference, Day Two (Ubumwe Grande Hotel)
  {
    id: "d6-1",
    time: "09:15 - 10:30",
    day: 6,
    title: "Regulatory Excellence in the Digital Age",
    description: "Artificial intelligence, data and digital transformation: country case studies, global best practice from WHO and EMA, and recommendations for continental adoption."
  },
  {
    id: "d6-2",
    time: "11:00 - 13:00",
    day: 6,
    title: "Securing the Product Lifecycle",
    description: "Integrating quality, safety surveillance and market intelligence across Africa: consultations on the NARL overarching continental procedure, the continental market surveillance procedure and the continental framework for vigilance."
  },
  {
    id: "d6-3",
    time: "14:00 - 15:00",
    day: 6,
    title: "From Continental Scientific Opinions to National Decisions",
    description: "Consultation on the centralised procedures for evaluation and regulatory inspections, the AMA scope of products and eligibility criteria, and the continental procedure for the joint review of clinical trials."
  },
  {
    id: "d6-4",
    time: "15:00 - 16:00",
    day: 6,
    title: "Strategic Partnerships and the Way Forward",
    description: "The African Regulatory Leadership Programme, partner perspectives, and adoption of the Kigali Communiqué and commitments matrix.",
    speakers: ["Dr Delese Mimi Darko"]
  },
  {
    id: "d6-5",
    time: "16:00 - 16:30",
    day: 6,
    title: "Closing Remarks and End of Conference",
    description: "Closing remarks from WHO AFRO, WHO EMRO and the AMRC Chairperson.",
    speakers: ["Mohamed Ismail", "Dr Houda Langar"]
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
