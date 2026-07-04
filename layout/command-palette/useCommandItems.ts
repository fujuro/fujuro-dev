"use client"

import type { ComponentType } from "react"
import { useRouter } from "next/navigation"
import { useI18n } from "@/providers/i18n"
import { useTheme } from "@/providers/theme"
import { LINKS, CV_PATHS, EMAIL, NAV_SECTIONS } from "@/shared/constants"
import { useCopyToClipboard } from "@/shared/hooks"
import {
  SunIcon,
  MoonIcon,
  MonitorIcon,
  DownloadIcon,
  MailIcon,
  GlobeIcon,
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
} from "@/shared/icons"

export interface CommandItem {
  id: string
  group: string
  label: string
  icon?: ComponentType<{ className?: string }>
  perform: () => void
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export function useCommandItems(onAfterRun: () => void): CommandItem[] {
  const router = useRouter()
  const { t, locale } = useI18n()
  const { setTheme } = useTheme()
  const { copy } = useCopyToClipboard()

  const run = (action: () => void) => () => {
    action()
    onAfterRun()
  }

  const navigateItems: CommandItem[] = NAV_SECTIONS.map(({ id, key }) => ({
    id: `nav-${id}`,
    group: t.commandPalette.groups.navigate,
    label: t.nav[key],
    perform: run(() => scrollToSection(id)),
  }))

  const themeItems: CommandItem[] = [
    { id: "theme-light", group: t.commandPalette.groups.theme, label: t.commandPalette.themeLight, icon: SunIcon, perform: run(() => setTheme("light")) },
    { id: "theme-dark", group: t.commandPalette.groups.theme, label: t.commandPalette.themeDark, icon: MoonIcon, perform: run(() => setTheme("dark")) },
    { id: "theme-system", group: t.commandPalette.groups.theme, label: t.commandPalette.themeSystem, icon: MonitorIcon, perform: run(() => setTheme("system")) },
  ]

  const otherLocale = locale === "ru" ? "en" : "ru"

  const actionItems: CommandItem[] = [
    { id: "copy-email", group: t.commandPalette.groups.actions, label: EMAIL, icon: MailIcon, perform: run(() => copy(EMAIL)) },
    { id: "download-cv", group: t.commandPalette.groups.actions, label: t.buttons.resume, icon: DownloadIcon, perform: run(() => window.open(CV_PATHS[locale], "_blank")) },
    { id: "switch-locale", group: t.commandPalette.groups.actions, label: `${t.commandPalette.switchLocale} (${otherLocale.toUpperCase()})`, icon: GlobeIcon, perform: run(() => router.push(`/${otherLocale}`)) },
  ]

  const connectItems: CommandItem[] = [
    { id: "github", group: t.commandPalette.groups.connect, label: "GitHub", icon: GithubIcon, perform: run(() => window.open(LINKS.github, "_blank")) },
    { id: "linkedin", group: t.commandPalette.groups.connect, label: "LinkedIn", icon: LinkedinIcon, perform: run(() => window.open(LINKS.linkedin, "_blank")) },
    { id: "telegram", group: t.commandPalette.groups.connect, label: "Telegram", icon: TelegramIcon, perform: run(() => window.open(LINKS.telegram, "_blank")) },
  ]

  return [...navigateItems, ...themeItems, ...actionItems, ...connectItems]
}
