"use client"

import { useEffect, useRef } from "react"

export function usePointerSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
    if (prefersReducedMotion || isCoarsePointer) return

    const handlePointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`)
      el.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`)
    }

    el.addEventListener("pointermove", handlePointerMove)
    return () => el.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return ref
}
