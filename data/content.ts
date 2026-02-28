import type {
  HeroData,
  SkillsData,
  AboutData,
  ContactEntry,
  ProjectCategory,
  Publication,
} from "./types";

// Re-export types so existing imports keep working.
export type { ContactEntry, Project, ProjectCategory, Publication } from "./types";

// ─── Hero ────────────────────────────────────────────────────
export const heroData: HeroData = {
  greeting: "Hi, I'm Sungil Seok(Anderson).",
  titles: ["Nice to see you :)", "Still nice to see you :)"],
};

// ─── Skills ──────────────────────────────────────────────────
export const skillsData: SkillsData = {
  skills: "claude, chatgpt, copilot, openclaw, gemini, deepseek ",
  highlights: ["claude", "chatgpt"],
};

// ─── About ───────────────────────────────────────────────────
export const aboutData: AboutData = {
  image: "/pic.png",
  imageAlt: " Character Illustration",
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [];

// ─── Publications ─────────────────────────────────────────────
export const publicationsData: Publication[] = [
  {
    title: "Your Paper Title Here",
    venue: "Conference / Journal Name",
    year: "2024",
  },
];

// ─── Work / Projects ─────────────────────────────────────────
export const projectCategories: ProjectCategory[] = [
  {
    category: "Ph.D. Student",
    projects: [
      {
        title: "Hong Kong University of Science and Technology",
        image: "",
        techStack: ["Ph.D., Information Systems"],
      },
      {
        title: "Tsinghua University",
        image: "",
        techStack: ["MEng., Big Data Technology and Engineering"],
      },
      {
        title: "Yonsei University",
        image: "",
        techStack: ["B.A., Economics"],
      },
    ],
  },
];
