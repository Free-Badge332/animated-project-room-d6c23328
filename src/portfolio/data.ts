
export type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

/** The first 6 projects show only their screenshot and link to the GitHub profile. */
export const GITHUB_PROFILE_URL = "https://github.com/ezadin2";
export const isImageOnlyProject = (p: { id: number }) => p.id <= 6;

export const projects: Project[] = [
  {
    id: 1,
    title: "ProShop",
    subtitle: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart management, and secure checkout.",
    image: "/__l5e/assets-v1/47d66438-16c9-4e8b-adbe-e6c44222ec0c/social.png",
    technologies: ["React.js", "MongoDB", "Node.js", "Express.js", "CSS"],
    githubUrl: "https://github.com/ezadin2/proshop-demo",
  },
  {
    id: 2,
    title: "ሀሴት Delivery",
    subtitle: "Delivery Management Platform",
    description:
      "An Ethiopian delivery platform with customer booking, real-time tracking, admin analytics, and a driver operations interface.",
    image: "/__l5e/assets-v1/20e88b95-10a2-4d36-94e3-a42dfc805c92/quran.png",
    technologies: ["React.js", "TypeScript", "Node.js", "Tailwind CSS", "Express.js"],
    liveUrl: "https://hasset-delivery-front-end-side.onrender.com/",
    githubUrl: "https://github.com/ezadin2/Hasset_Delivery_Front-End_Side",
  },
  {
    id: 3,
    title: "Dina Mart",
    subtitle: "Complete E-commerce System",
    description:
      "A secure cross-platform shopping experience with verified Firebase authentication, product browsing, cart management, orders, and user accounts.",
    image: "/__l5e/assets-v1/f56e45ca-f3df-4424-a849-ddcbaa8febf0/notes.png",
    technologies: ["Flutter", "Firebase", "Node.js", "MongoDB"],
    liveUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Privacy Checker",
    subtitle: "Data Privacy Compliance",
    description:
      "A Streamlit tool built at INSA Summer Camp for PII scanning, anonymization, NLP entity detection, and automated compliance scoring.",
    image: "/__l5e/assets-v1/2955072f-f6d9-446d-86c5-a618602458b5/trello.png",
    technologies: ["Python", "Streamlit", "NLP", "Pandas"],
    githubUrl: "https://github.com/ezadin2",
  },
  {
    id: 5,
    title: "Audio Application",
    subtitle: "Cross-platform Audio Experience",
    description:
      "An audio-based mobile application showcasing sound features, modern UI, and responsive state management.",
    image: "/__l5e/assets-v1/665c440a-eb55-480c-9119-1de2093a7245/portfolio.png",
    technologies: ["Flutter", "Firebase", "Dart", "State Management"],
    githubUrl: "https://github.com/ezadin2/Audio-player",
  },
  {
    id: 6,
    title: "Chat Application",
    subtitle: "Real-time Messaging",
    description:
      "A real-time chat application with a modern interface, user messaging, and a responsive design.",
    image: "/__l5e/assets-v1/aab37353-bbcf-4d82-aacb-b76fe677548d/chatApp.png",
    technologies: ["Next.js", "Node.js", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://nextjs-setup-gilt.vercel.app/",
    githubUrl: "https://github.com/ezadin2/nextjs-setup",
  },
  {
    id: 7,
    title: "FaydaRent",
    subtitle: "Rental Marketplace",
    description:
      "A trust-first rental marketplace for Ethiopia where people find homes, vehicles and equipment from verified owners, with search by neighborhood, category and price.",
    image: "/__l5e/assets-v1/7a1f208d-c6b6-4e56-864a-2353e6318e80/techxpert.png",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Node.js"],
    liveUrl: "https://techxpert-rental-market-place.vercel.app/",
  },
  {
    id: 8,
    title: "Al-Qur'an Al-Kareem",
    subtitle: "Quran Reading App",
    description:
      "A Quran study companion with all 114 surahs, translations, recitations, azkar and duas, prayer times, a Ramadan tracker, hadith and bookmarks.",
    image: "/__l5e/assets-v1/c035a1c3-9d7f-4cbe-879a-d4ea37a54e0f/my-quran-onrender.png",
    technologies: ["React.js", "Tailwind CSS", "REST API"],
    liveUrl: "https://my-quran.onrender.com/",
  },
  {
    id: 9,
    title: "QemerTech",
    subtitle: "Tech Education Platform",
    description:
      "An online learning platform offering industry-ready courses in web development, AI and mobile, with course listings, instructors and student sign-up.",
    image: "/__l5e/assets-v1/d2a05979-a9f1-4b8f-be21-531b8873ef2a/qemer.png",
    technologies: ["React.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://qemer-final-project.vercel.app/",
  },
  {
    id: 10,
    title: "Socialbook",
    subtitle: "Social Media Page",
    description:
      "A Facebook-style social page with stories, a post feed, events, friends sidebar and chat list.",
    image: "/__l5e/assets-v1/3a14f295-f721-47b6-95b8-05e8b00a9d1b/qemer-fb.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://ezadin2.github.io/qemer_tech_project_facebookpage/",
  },
];

export type Certificate = {
  id: number;
  title: string;
  image: string;
  link: string;
};

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate of Appreciation",
    image: "/__l5e/assets-v1/10b291a7-664e-4c5e-bd2a-4ef2ac03c483/appr2.png",
    link: "/__l5e/assets-v1/10b291a7-664e-4c5e-bd2a-4ef2ac03c483/appr2.png",
  },
  {
    id: 2,
    title: "Academic Achievement",
    image: "/__l5e/assets-v1/aff7fba9-c26a-46f2-b40b-eefe87ccb209/appre1.png",
    link: "/__l5e/assets-v1/aff7fba9-c26a-46f2-b40b-eefe87ccb209/appre1.png",
  },
  {
    id: 3,
    title: "Professional Certificate",
    image: "/__l5e/assets-v1/96105c8f-f4e8-4e20-9b5c-f022ec4e5a73/tempo.png",
    link: "/__l5e/assets-v1/96105c8f-f4e8-4e20-9b5c-f022ec4e5a73/tempo.png",
  },
  {
    id: 4,
    title: "Huawei Certificate",
    image: "/__l5e/assets-v1/b38d8ec5-d923-41da-8e41-7311a069d8d1/huawe.png",
    link: "/__l5e/assets-v1/b38d8ec5-d923-41da-8e41-7311a069d8d1/huawe.png",
  },
  {
    id: 5,
    title: "Cisco Certificate",
    image: "/__l5e/assets-v1/09555df5-1d56-49f6-a3b4-852e8d0e02bf/cisco.png",
    link: "/__l5e/assets-v1/09555df5-1d56-49f6-a3b4-852e8d0e02bf/cisco.png",
  },
  {
    id: 6,
    title: "Development Certificate",
    image: "/__l5e/assets-v1/dffb21fb-972c-40e7-9d57-140e7a6c22f8/bago.png",
    link: "/__l5e/assets-v1/dffb21fb-972c-40e7-9d57-140e7a6c22f8/bago.png",
  },
  {
    id: 7,
    title: "Technical Certificate",
    image: "/__l5e/assets-v1/bc707bd1-3c9d-4001-818f-3d815e870561/mosq2.png",
    link: "/__l5e/assets-v1/bc707bd1-3c9d-4001-818f-3d815e870561/mosq2.png",
  },
  {
    id: 8,
    title: "Oracle Certificate",
    image: "/__l5e/assets-v1/5d8a1ecb-0d4c-4817-ac06-66634f2d8e75/orac.png",
    link: "/__l5e/assets-v1/5d8a1ecb-0d4c-4817-ac06-66634f2d8e75/orac.png",
  },
];

export const resumeUrl = "/__l5e/assets-v1/c6422255-8b47-4272-9b22-58c7b545b5c4/Ezadin_Resume.pdf";
