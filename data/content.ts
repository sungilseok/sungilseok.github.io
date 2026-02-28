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
  text: `I'm Sungil Seok, a Ph.D. student in Information Systems at HKUST Business School. My research sits at the intersection of AI and business & AI and health, with a focus on causal inference and human-computer interaction. I hold an M.Eng. in Big Data Technology from Tsinghua University and a B.A. in Economics from Yonsei University. I'm passionate about bridging cutting-edge AI research with real-world business and health problems.`,
};

// ─── Contact ─────────────────────────────────────────────────
export const contactData: ContactEntry[] = [];

// ─── Publications ─────────────────────────────────────────────
export const publicationsData: Publication[] = [
  {
    title: "MiniFed : LLM-based Agentic Workflow for Simulating FOMC Meeting",
    venue: "Pacific Asia Conference on Information Systems",
    year: "2025",
  },
  {
    title: "DFCH: Diffusion Based Conditional Heteroskedasticity for Generating Long-Term and High-Frequency Financial Time-Series Data",
    venue: "IEEE International Conference on e-Business Engineering",
    year: "2024",
  },
  {
    title: "Still thinking",
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
