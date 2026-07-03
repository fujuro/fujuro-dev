"use client"

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type RefObject,
  type ReactNode,
} from "react"
import { flushSync } from "react-dom"
import type { Theme, ResolvedTheme } from "@/shared/types"

const STORAGE_KEY = "fujuro-theme"
const COOKIE_KEY = "fujuro-theme"
const COOKIE_MAX_AGE = 31536000

function setThemeCookie(resolved: ResolvedTheme) {
  if (typeof document === "undefined") return
  document.cookie = `${COOKIE_KEY}=${resolved};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`
}

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system"
  return (localStorage.getItem(STORAGE_KEY) as Theme) || "system"
}

function applyTheme(theme: ResolvedTheme) {
  if (typeof document === "undefined") return
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(theme)
  document.documentElement.style.colorScheme = theme
  setThemeCookie(theme)
}

interface ThemeContextValue {
  theme: Theme
  resolved: ResolvedTheme
  mounted: boolean
  setTheme: (t: Theme) => void
  setThemeWithTransition: (
    t: Theme,
    buttonRef: RefObject<HTMLButtonElement | null>
  ) => Promise<void>
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system")
  const [resolved, setResolved] = useState<ResolvedTheme>("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = getStoredTheme()
    const effective = stored === "system" ? getSystemTheme() : stored
    setThemeState(stored)
    setResolved(effective)
    applyTheme(effective)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (theme !== "system") return
    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = () => {
      const effective = mq.matches ? "dark" : "light"
      setResolved(effective)
      applyTheme(effective)
    }
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [theme])

  const setTheme = (t: Theme) => {
    localStorage.setItem(STORAGE_KEY, t)
    const effective = t === "system" ? getSystemTheme() : t
    setResolved(effective)
    applyTheme(effective)
    setThemeState(t)
  }

  const setThemeWithTransition = async (
    t: Theme,
    buttonRef: RefObject<HTMLButtonElement | null>
  ) => {
    const supportsViewTransition =
      typeof document !== "undefined" && "startViewTransition" in document
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!buttonRef.current || !supportsViewTransition || prefersReducedMotion) {
      setTheme(t)
      return
    }

    const { top, left, width, height } = buttonRef.current.getBoundingClientRect()
    const x = left + width / 2
    const y = top + height / 2
    const right = window.innerWidth - left
    const bottom = window.innerHeight - top
    const maxRadius = Math.hypot(Math.max(left, right), Math.max(top, bottom))

    const effective = t === "system" ? getSystemTheme() : t

    const root = document.documentElement
    root.style.setProperty("--vt-x", `${x}px`)
    root.style.setProperty("--vt-y", `${y}px`)
    root.style.setProperty("--vt-r", `${maxRadius}px`)
    document.body.classList.add("theme-transitioning")

    try {
      const transition = (
        document as Document & {
          startViewTransition: (callback: () => void) => {
            ready: Promise<void>
            finished: Promise<void>
          }
        }
      ).startViewTransition(() => {
        flushSync(() => {
          localStorage.setItem(STORAGE_KEY, t)
          setResolved(effective)
          applyTheme(effective)
          setThemeState(t)
        })
      })

      transition.finished.finally(() => {
        document.body.classList.remove("theme-transitioning")
      })

      await transition.finished
    } catch {
      document.body.classList.remove("theme-transitioning")
      setTheme(t)
    }
  }

  const value: ThemeContextValue = {
    theme,
    resolved,
    mounted,
    setTheme,
    setThemeWithTransition,
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
