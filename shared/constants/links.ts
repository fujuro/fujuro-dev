export const EMAIL = "fujuroa@gmail.com"

export const LINKS = {
  github: "https://github.com/fujuro",
  linkedin: "https://www.linkedin.com/in/fujuro",
  telegram: "https://t.me/fujura",
  email: `mailto:${EMAIL}`,
} as const

export const CV_PATHS = {
  ru: "/cv/ru_CV_Dzhalil_Kalimov_frontend_developer.pdf",
  en: "/cv/en_CV_Dzhalil_Kalimov_frontend_developer.pdf",
} as const

export const SKILLS = {
  frontend: [
    "HTML5",
    "CSS3",
    "SASS/SCSS",
    "Tailwind CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js (App Router, SSR/SSG/SPA)",
    "Vue 3 (Composition API)",
    "Vue Router",
    "Redux",
    "Zustand",
    "Pinia",
    "shadcn/ui",
    "PrimeVue",
    "Storybook",
    "a11y",
    "Microfrontends (Single-SPA)",
    "Web3 (ethers.js, wallets)",
  ],
  tooling: [
    "Git",
    "GitHub",
    "GitHub Actions",
    "CI/CD",
    "Docker",
    "Webpack",
    "Turbopack",
    "Vite",
    "Sentry",
    "Grafana",
    "Jira",
    "Linear",
  ],
  testing: [
    "REST API",
    "Auth/RBAC",
    "Jest",
    "React Testing Library",
    "Vitest",
    "Mock Service Worker",
  ],
} as const

export const PROJECTS = [
  {
    name: "fujuro-dev",
    description: "Personal portfolio site. Next.js, Tailwind, glassmorphism design.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind"],
    href: "https://github.com/fujuro/fujuro-dev",
    demo: null,
  },
]
