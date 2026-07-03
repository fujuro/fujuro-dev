import type { Locale } from "@/shared/types"

export type { Locale } from "@/shared/types"
export const locales: Locale[] = ["ru", "en"]

export const defaultLocale: Locale = "ru"

export const content = {
  ru: {
    name: "Джалиль Калимов",
    role: "Frontend разработчик (Vue.js 3 / React.js)",
    tagline:
      "Frontend-разработчик с 3-летним опытом в Fintech (банковский сектор) и Web3. Разрабатываю микрофронтенды на Single-SPA (Vue 3) для внутренних систем банка (300 000+ клиентов) и высоконагруженные решения на React/Next.js. Специализируюсь на оптимизации производительности и сложных интеграциях.",
    about: {
      title: "О себе",
      description:
        "Frontend-разработчик с 3-летним коммерческим опытом в банковском Fintech и Web3. Разрабатываю микрофронтенды на Single-SPA (Vue 3) и высоконагруженные решения на React/Next.js. Фокус на измеримых результатах: производительность, SEO, retention.",
      highlights: [
        "3+ года коммерческого опыта",
        "Fintech, Web3, Enterprise",
        "10x ускорение сборки",
        "+23% SEO трафика",
        "300 000+ клиентов банка",
      ],
    },
    skills: {
      title: "Навыки",
      frontend: "Frontend",
      tooling: "Tooling & DevOps",
      testing: "Testing & API",
    },
    experience: {
      title: "Опыт",
      kmfbank: {
        company: "АО «KMF Банк»",
        subtitle: "Коммерческий банк, 300 000+ клиентов · Алматы",
        period: "Апр 2026 – наст. время",
        duration: "3+ мес",
        role: "Frontend разработчик",
        points: [
          "4+ модуля вынесено в микрофронтенды на Single-SPA (Vue 3)",
          "Интеграция со SmartBridge — гос. платформой обмена данными",
          "Интеграционные тесты на Vitest и MSW",
          "Scrum, 2-недельные спринты, департамент из 40+ специалистов",
        ],
      },
      stakeme: {
        company: "STAKEME LLC",
        subtitle: "Blockchain, 18,000+ пользователей, 35+ сетей · Удалённо",
        period: "Дек 2024 – Янв 2026",
        duration: "1 год 2 мес",
        role: "Frontend разработчик",
        points: [
          "SEO оптимизация → рост выручки",
          "10x ускорение сборки (Next.js 14→15, Turbopack)",
          "Интеграция MetaMask, Keplr, crypto wallets",
          "Design system, код-ревью, рефакторинг legacy",
        ],
      },
      dragau: {
        company: "DragAu",
        subtitle: "Custom software, 20+ клиентов · Алматы",
        period: "Мар 2024 – Дек 2024",
        duration: "10 мес",
        role: "Frontend разработчик",
        points: [
          "Ozo.direct: платформа для 15+ ресторанов",
          "+13% retention через систему лояльности",
          "1,000+ заказов/мес, Yandex Delivery, цифровые меню",
        ],
      },
      apc: {
        company: "APC",
        subtitle: "IT колледж, 1,500+ студентов · Алматы",
        period: "Фев 2023 – Мар 2024",
        duration: "1 год 2 мес",
        role: "Frontend разработчик",
        points: [
          "Attendix: QR-посещаемость, +26% attendance",
          "500+ пользователей, RBAC, real-time мониторинг",
          "6+ проектов: web apps, Telegram bots",
        ],
      },
    },
    projects: {
      title: "Проекты",
      viewRepo: "Репозиторий",
      viewDemo: "Demo",
    },
    achievements: {
      title: "Достижения",
      worldskillsAlmaty: "1 место WorldSkills Almaty, Веб-технологии",
      worldskillsKz: "2 место WorldSkills Kazakhstan, Веб-технологии",
      hackathon: "Halyk Bank OIY Hackathon",
      security: "Курс «Информационная безопасность», Zhejiang College",
      metrics: {
        build: "10x",
        seo: "+23%",
        retention: "+13%",
      },
    },
    contact: {
      title: "Связаться",
      cta: "Открыт к предложениям. Напишите — обсудим ваш проект.",
    },
    footer: {
      copyright: "©",
    },
    nav: {
      about: "О себе",
      skills: "Навыки",
      experience: "Опыт",
      projects: "Проекты",
      achievements: "Достижения",
      contact: "Контакты",
    },
    buttons: {
      resume: "Скачать резюме",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
  en: {
    name: "Dzhalil Kalimov",
    role: "Frontend Developer (Vue.js 3 / React.js)",
    tagline:
      "Frontend Developer with 3 years of experience in Fintech (banking sector) and Web3. I build Single-SPA microfrontends (Vue 3) for internal banking systems (300,000+ clients) and high-load React/Next.js solutions. Specialized in performance optimization and complex integrations.",
    about: {
      title: "About",
      description:
        "Frontend Developer with 3+ years of commercial experience in banking Fintech and Web3. Building Single-SPA microfrontends (Vue 3) and high-load React/Next.js solutions. Focus on measurable outcomes: performance, SEO, retention.",
      highlights: [
        "3+ years commercial experience",
        "Fintech, Web3, Enterprise",
        "10x build speed improvement",
        "+23% SEO traffic",
        "300,000+ bank clients",
      ],
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      tooling: "Tooling & DevOps",
      testing: "Testing & API",
    },
    experience: {
      title: "Experience",
      kmfbank: {
        company: "KMF Bank JSC",
        subtitle: "Commercial bank, 300,000+ clients · Almaty",
        period: "Apr 2026 – Present",
        duration: "3+ mo",
        role: "Frontend Developer",
        points: [
          "4+ modules extracted into Single-SPA microfrontends (Vue 3)",
          "SmartBridge integration — government data exchange platform",
          "Integration tests with Vitest and MSW",
          "Scrum, two-week sprints, 40+ specialist department",
        ],
      },
      stakeme: {
        company: "STAKEME LLC",
        subtitle: "Blockchain, 18,000+ users, 35+ networks · Remote",
        period: "Dec 2024 – Jan 2026",
        duration: "1 yr 2 mo",
        role: "Frontend Developer",
        points: [
          "SEO optimization → revenue growth",
          "10x build speed (Next.js 14→15, Turbopack)",
          "MetaMask, Keplr, crypto wallets integration",
          "Design system, code review, legacy refactoring",
        ],
      },
      dragau: {
        company: "DragAu",
        subtitle: "Custom software, 20+ clients · Almaty",
        period: "Mar 2024 – Dec 2024",
        duration: "10 mo",
        role: "Frontend Developer",
        points: [
          "Ozo.direct: platform for 15+ restaurants",
          "+13% retention via loyalty system",
          "1,000+ orders/mo, Yandex Delivery, digital menus",
        ],
      },
      apc: {
        company: "APC",
        subtitle: "IT college, 1,500+ students · Almaty",
        period: "Feb 2023 – Mar 2024",
        duration: "1 yr 2 mo",
        role: "Frontend Developer",
        points: [
          "Attendix: QR attendance, +26% attendance",
          "500+ users, RBAC, real-time monitoring",
          "6+ projects: web apps, Telegram bots",
        ],
      },
    },
    projects: {
      title: "Projects",
      viewRepo: "Repository",
      viewDemo: "Demo",
    },
    achievements: {
      title: "Achievements",
      worldskillsAlmaty: "1st Place WorldSkills Almaty, Web Technologies",
      worldskillsKz: "2nd Place WorldSkills Kazakhstan, Web Technologies",
      hackathon: "Halyk Bank OIY Hackathon",
      security: "Course: Applied Information Security, Zhejiang College",
      metrics: {
        build: "10x",
        seo: "+23%",
        retention: "+13%",
      },
    },
    contact: {
      title: "Contact",
      cta: "Open to opportunities. Reach out — let's discuss your project.",
    },
    footer: {
      copyright: "©",
    },
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      achievements: "Achievements",
      contact: "Contact",
    },
    buttons: {
      resume: "Download Resume",
      github: "GitHub",
      linkedin: "LinkedIn",
    },
  },
} as const

export type Content = (typeof content)["en"]
