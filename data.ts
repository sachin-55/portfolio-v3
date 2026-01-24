import { ExperienceItem, ProjectItem, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Sachin Bhattarai",
  role: "Fullstack Developer & Team Leader",
  email: "sachinbhattarai55@gmail.com",
  github: "github.com/sachin-55",
  linkedin: "linkedin.com/in/5achin-bhattarai",
  summary:
    "Fullstack Developer with 4+ years of experience in web and 2 years in mobile development, specializing in React, Next.js, Node.js, and modern JavaScript frameworks. Strong background in team leadership, project management, and delivering high-quality scalable applications across multiple industries including e-commerce, property rental, and social platforms.",
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Colthinkspace",
    role: "Project Lead and Mentor (Part Time)",
    period: "2025 - Present",
    details: ["Providing helping hand to the react and react native team"],
    isCurrent: true,
  },
  {
    company: "Intosoft Technologies",
    role: "Fullstack Developer & Team Leader",
    period: "2023 - Present",
    details: [
      "Team management, work assignments and work review",
      "Worked on multiple projects at a time",
      "Refactored and maintained old projects",
    ],
    isCurrent: true,
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "2023",
    details: [
      "Developed website for Yoga Studio using Next.js",
      "Contributed to developing admin dashboard for Upakar Service",
    ],
  },
  {
    company: "Tekkon Technologies",
    role: "Frontend Developer",
    period: "2022 – 2023",
    details: [
      "Focused on developing web-app using react library, redux, socket.io and other supporting tools",
      "Worked on developing and maintaining a social platform called DiGii Social, which features cyber safety and can be monitored by educators and guardians.",
    ],
  },
  {
    company: "Revv Inc.",
    role: "Web Developer",
    period: "2020 - 2022",
    details: [
      "Contributed in both frontend and backend to create ads delivering system",
      "Contributed to create headless e-commerce system",
      "Developed e-commerce frontend for Food Buster company",
    ],
    technologies: ["React", "Next.js", "Node.js", "Postgres", "Prisma"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Energyfix",
    period: "2024",
    description:
      "Solution for home energy retrofits in Ireland! From design to SEAI grant funding.",
    responsibilities:
      "Assisted on frontend as well as backend platform. Assist on stripe integration, database design and UI atomic components development.",
    category: "Work",
  },
  {
    title: "Housebuild",
    period: "2024",
    description:
      "Assisted on migration of the project from Ruby and Rails to React, Next.js, node and mongodb.",
    responsibilities: "Assisting on frontend platform.",
    category: "Work",
  },
  {
    title: "Rentiisty",
    period: "2023 - Present",
    description: "Property renting platform for Ireland.",
    responsibilities:
      "Led the development team, managed client communications, and coordinated with UI/UX designers.",
    category: "Work",
  },
  {
    title: "Camera Compliance",
    period: "2023",
    description:
      "Used to share information on cities and municipalities to uphold GDPR compliance effortlessly in Ireland. A QR code is generated for banners and on scan a website with link data appears.",
    responsibilities:
      "Core development and implementation of QR based platform.",
    category: "Work",
  },
  {
    title: "Teritori",
    period: "2023",
    description: "Decentralized platform.",
    responsibilities:
      "Responsibility was to create a react native app for the teritori platform.",
    category: "Work",
  },
  {
    title: "DiGii Social",
    period: "2022 - 2023",
    description:
      "Australian social network focused on online safety for children.",
    responsibilities:
      "Developed the parent and student-side features using React and Redux.",
    category: "Work",
  },
  {
    title: "Foodbusters",
    period: "2022",
    description:
      "Restaurants food and Bhatbhateni products ordering system. Online food ordering platform.",
    responsibilities:
      "Developed full frontend UI based on provided Figma designs with API integration using Next.js.",
    category: "Work",
  },
  {
    title: "Revv Inc. Ads System",
    period: "2020 - 2022",
    description:
      "Advertisement delivering system for local digital news portals.",
    responsibilities:
      "Contributed to both frontend and backend. React and node were used for developing dashboard UI, python was used in delivery engine and postgres was used as database.",
    category: "Work",
  },
  {
    title: "Anonimo",
    period: "2023",
    description: "Question and Answers widget for anonimo website.",
    responsibilities: "Frontend development of the widget.",
    category: "Personal",
  },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "Zustand",
      "React Query",
      "Tailwind CSS",
      "MaterialUI",
      "ChakraUI",
      "ThemeUI",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express",
      "GraphQL",
      "Socket.io",
      "Postgres",
      "MySQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    title: "Other",
    skills: [
      "Git",
      "Team Leadership",
      "Mentoring",
      "Project Planning",
      "Client Communication",
      "Cross-platform (Web + Mobile)",
      "React Native",
      "UI/UX Principles",
    ],
  },
];

export const EDUCATION = {
  degree: "Bachelor in Computer Engineering",
  institution: "Himalaya College of Engineering, Chyasal, Lalitpur",
  year: "2019 AD (2076 BS)",
};
