"use client"

import { useEffect, useRef } from "react"

export function useMagneticHover<T extends HTMLElement>(strength = 0.3) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches
    if (prefersReducedMotion || isCoarsePointer) return

    el.style.transitionDuration = "0.2s"
    el.style.transitionTimingFunction = "var(--ease-out-expo)"

    let offsetX = 0
    let offsetY = 0
    let pressed = false

    const render = () => {
      const scale = pressed ? 0.97 : 1.03
      el.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      offsetX = (event.clientX - (rect.left + rect.width / 2)) * strength
      offsetY = (event.clientY - (rect.top + rect.height / 2)) * strength
      render()
    }

    const handlePointerDown = () => {
      pressed = true
      render()
    }

    const handlePointerUp = () => {
      pressed = false
      render()
    }

    const handlePointerLeave = () => {
      pressed = false
      offsetX = 0
      offsetY = 0
      el.style.transform = ""
    }

    el.addEventListener("pointermove", handlePointerMove)
    el.addEventListener("pointerdown", handlePointerDown)
    el.addEventListener("pointerup", handlePointerUp)
    el.addEventListener("pointerleave", handlePointerLeave)
    return () => {
      el.removeEventListener("pointermove", handlePointerMove)
      el.removeEventListener("pointerdown", handlePointerDown)
      el.removeEventListener("pointerup", handlePointerUp)
      el.removeEventListener("pointerleave", handlePointerLeave)
    }
  }, [strength])

  return ref
}
