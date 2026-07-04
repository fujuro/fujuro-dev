"use client"

import { useState } from "react"
import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"
import { TrophyIcon } from "@/shared/icons"

export function Achievements() {
  const { t } = useI18n()
  const m = t.achievements.metrics
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  const toggleFlip = (index: number) => {
    setFlippedIndex((current) => (current === index ? null : index))
  }

  return (
    <AnimateOnScroll>
      <section id="achievements" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-10">
            {t.achievements.title}
          </h2>

          <div className="grid gap-6 sm:grid-cols-3 mb-6">
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
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                retention
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
