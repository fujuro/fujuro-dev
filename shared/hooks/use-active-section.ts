"use client"

import { useEffect, useState } from "react"

export function useActiveSection(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null)
  const key = ids.join(",")

  useEffect(() => {
    const targetIds = key.split(",").filter(Boolean)
    const targets = targetIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (targets.length === 0) return

    const isVisible = new Map<string, boolean>()

    const updateActiveId = () => {
      const visibleIds = targetIds.filter((id) => isVisible.get(id))
      if (visibleIds.length > 0) {
        setActiveId(visibleIds[visibleIds.length - 1])
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible.set(entry.target.id, entry.isIntersecting)
        })
        updateActiveId()
      },
      { rootMargin: "-25% 0px -75% 0px", threshold: 0 }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [key])

  return activeId
}
