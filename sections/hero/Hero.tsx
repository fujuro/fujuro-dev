"use client"

import { useI18n } from "@/providers/i18n"
import { usePointerSpotlight, useMagneticHover } from "@/shared/hooks"
import { LINKS, CV_PATHS } from "@/shared/constants"
import { DownloadIcon, GithubIcon, LinkedinIcon } from "@/shared/icons"

export function Hero() {
  const { t, locale } = useI18n()
  const cvPath = CV_PATHS[locale]
  const spotlightRef = usePointerSpotlight<HTMLElement>()
  const resumeButtonRef = useMagneticHover<HTMLAnchorElement>()
  const githubButtonRef = useMagneticHover<HTMLAnchorElement>()
  const linkedinButtonRef = useMagneticHover<HTMLAnchorElement>()

  return (
    <section
      ref={spotlightRef}
      className="spotlight-container relative min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-violet-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-violet-950/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-400/10 dark:bg-violet-500/5 rounded-full blur-3xl" />
      <div className="spotlight-glow" />

      <div className="relative mx-auto max-w-3xl animate-hero-fade-in">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
          {t.role}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight mb-6">
          {t.name}
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 max-w-2xl">
          {t.tagline}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            ref={resumeButtonRef}
            href={cvPath}
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium shadow-lg transition-all duration-300"
          >
            <DownloadIcon />
            {t.buttons.resume}
          </a>
          <a
            ref={githubButtonRef}
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <GithubIcon />
            {t.buttons.github}
          </a>
          <a
            ref={linkedinButtonRef}
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-300 dark:border-zinc-600 text-zinc-700 dark:text-zinc-300 transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <LinkedinIcon />
            {t.buttons.linkedin}
          </a>
        </div>
      </div>
    </section>
  )
}
