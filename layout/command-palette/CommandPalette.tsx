"use client"

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react"
import { useI18n } from "@/providers/i18n"
import { SearchIcon, CloseIcon } from "@/shared/icons"
import { useCommandItems, type CommandItem } from "./useCommandItems"
import { OPEN_COMMAND_PALETTE_EVENT } from "./events"

interface GroupedItem {
  item: CommandItem
  index: number
}

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { t } = useI18n()

  const close = () => {
    setOpen(false)
    setQuery("")
    setActiveIndex(0)
  }

  const items = useCommandItems(close)

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    if (!normalizedQuery) return items
    return items.filter((item) => item.label.toLowerCase().includes(normalizedQuery))
  }, [items, query])

  const groups = useMemo(() => {
    const map = new Map<string, GroupedItem[]>()
    filteredItems.forEach((item, index) => {
      const entries = map.get(item.group) ?? []
      entries.push({ item, index })
      map.set(item.group, entries)
    })
    return [...map.entries()]
  }, [filteredItems])

  useEffect(() => {
    const toggleOnHotkey = (event: globalThis.KeyboardEvent) => {
      const isToggleCombo = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k"
      if (isToggleCombo) {
        event.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    const openFromEvent = () => setOpen(true)

    window.addEventListener("keydown", toggleOnHotkey)
    window.addEventListener(OPEN_COMMAND_PALETTE_EVENT, openFromEvent)
    return () => {
      window.removeEventListener("keydown", toggleOnHotkey)
      window.removeEventListener(OPEN_COMMAND_PALETTE_EVENT, openFromEvent)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = "hidden"
    inputRef.current?.focus()
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const handleQueryChange = (value: string) => {
    setQuery(value)
    setActiveIndex(0)
  }

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      close()
    } else if (event.key === "ArrowDown") {
      event.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, filteredItems.length - 1))
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (event.key === "Enter") {
      event.preventDefault()
      filteredItems[activeIndex]?.perform()
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-24 sm:pt-32">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={close} aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900"
      >
        <div className="flex items-center gap-3 border-b border-zinc-200 px-4 dark:border-white/10">
          <SearchIcon className="size-4 shrink-0 text-zinc-400" />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => handleQueryChange(event.target.value)}
            onKeyDown={handleInputKeyDown}
            placeholder={t.commandPalette.placeholder}
            className="w-full bg-transparent py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none dark:text-white"
          />
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="cursor-pointer p-1 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          >
            <CloseIcon className="size-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {groups.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
              {t.commandPalette.empty}
            </p>
          )}
          {groups.map(([group, entries]) => (
            <div key={group} className="mb-2 last:mb-0">
              <p className="px-3 pb-1 pt-2 text-xs font-medium uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                {group}
              </p>
              {entries.map(({ item, index }) => {
                const isActive = index === activeIndex
                const Icon = item.icon

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={item.perform}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                      isActive
                        ? "bg-zinc-100 text-zinc-900 dark:bg-white/10 dark:text-white"
                        : "text-zinc-700 dark:text-zinc-300"
                    }`}
                  >
                    {Icon && <Icon className="size-4 shrink-0" />}
                    {item.label}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
