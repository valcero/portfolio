export const personalInfo = {
  name: "Mohammad Hamza",
  tagline: "I build things for the web.",
  description:
    "Backend Developer passionate about crafting modern, performant web applications with clean code and great user experiences.",
  resumeUrl: "/resume.pdf",
  email: "mohdhamzarehman@gmail.com",
  socials: {
    github: "https://github.com/valcero",
    linkedin: "https://linkedin.com/in/mohdhamzarehman",
    twitter: "https://twitter.com/hamzastwt",
  },
};

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "15+" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export interface Experience {
  dateRange: string;
  role: string;
  company: string;
  type: string;
  description: string;
  bullets: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    dateRange: "June 2025 - December 2025",
    role: "Backend Intern",
    company: "Farmako(YC S20)",
    type: "Backend",
    description:
      "Leading development of customer-facing web applications and internal tools.",
    bullets: [
      "Architected and built a micro-frontend platform serving 100K+ daily users.",
      "Reduced page load times by 60% through code splitting and lazy loading.",
      "Mentored a team of 4 junior developers on React best practices.",
    ],
    tech: ["Golang", "TypeScript","Docker","Kubernetes","Prisma", "Node.js", "PostgreSQL"],
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, payment processing, and an admin dashboard. Built for scalability with microservices architecture.",
    tech: ["TypeScript", "Stripe", "PostgreSQL", "Redis"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Real-Time Collaboration Tool",
    description:
      "A collaborative workspace application featuring real-time document editing, video conferencing, and project management capabilities.",
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "An intelligent content generation platform leveraging LLMs for automated blog writing, social media posts, and marketing copy with customizable tone and style.",
    tech: ["Python", "FastAPI", "OpenAI", "React", "Docker"],
    liveUrl: "#",
    sourceUrl: "#",
  },
];
