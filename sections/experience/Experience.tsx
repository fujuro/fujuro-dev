"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"

export function Experience() {
  const { t } = useI18n()
  const jobs = [
    t.experience.kmfbank,
    t.experience.stakeme,
    t.experience.dragau,
    t.experience.apc,
  ]

  return (
    <AnimateOnScroll>
      <section id="experience" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            {t.experience.title}
          </h2>
          <div className="space-y-6">
            {jobs.map((job) => (
              <GlassCard key={job.company} className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                      {job.company}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {job.subtitle}
                    </p>
                  </div>
                  <span className="text-sm text-zinc-600 dark:text-zinc-400 shrink-0">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                  {job.role} · {job.duration}
                </p>
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-zinc-600 dark:text-zinc-400 text-sm"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1.5">·</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
