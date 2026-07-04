"use client"

import { useI18n } from "@/providers/i18n"
import { AnimateOnScroll, GlassCard } from "@/shared/components"
import { LINKS, CV_PATHS, EMAIL } from "@/shared/constants"
import { useCopyToClipboard } from "@/shared/hooks"
import { MailIcon, GithubIcon, LinkedinIcon, TelegramIcon, CheckIcon } from "@/shared/icons"

const socialLinks = [
  { href: LINKS.github, icon: GithubIcon, label: "GitHub" },
  { href: LINKS.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: LINKS.telegram, icon: TelegramIcon, label: "Telegram" },
]

export function Contact() {
  const { t, locale } = useI18n()
  const { copied, copy } = useCopyToClipboard()

  return (
    <AnimateOnScroll>
      <section id="contact" className="py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <GlassCard className="p-8 sm:p-10 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
              {t.contact.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              {t.contact.cta}
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <button
                type="button"
                onClick={() => copy(EMAIL)}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border
                  border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-300
                  hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                {copied ? (
                  <CheckIcon className="size-5 text-green-600 dark:text-green-400" />
                ) : (
                  <MailIcon />
                )}
                {copied ? t.contact.copied : EMAIL}
              </button>
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border
                    border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-300
                    hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </div>
            <a
              href={CV_PATHS[locale]}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
            >
              {t.buttons.resume}
            </a>
          </GlassCard>
        </div>
      </section>
    </AnimateOnScroll>
  )
}
