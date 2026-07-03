"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"
import { TrophyIcon } from "@/shared/icons"

export function Achievements() {
  const { t } = useI18n()
  const m = t.achievements.metrics

  return (
    <AnimateOnScroll>
      <section id="achievements" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            {t.achievements.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <GlassCard className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {m.build}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                build speed
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {m.seo}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                SEO traffic
              </p>
            </GlassCard>
            <GlassCard className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                {m.retention}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                retention
              </p>
            </GlassCard>
            <GlassCard className="p-6 sm:col-span-2 lg:col-span-1 flex flex-col justify-center">
              <div className="flex justify-center mb-2">
                <TrophyIcon />
              </div>
              <p className="text-sm font-medium text-zinc-900 dark:text-white mb-2">
                WorldSkills
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {t.achievements.worldskillsAlmaty}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {t.achievements.worldskillsKz}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {t.achievements.hackathon}
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                {t.achievements.security}
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
