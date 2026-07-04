"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useTheme } from "@/providers/theme";
import type { Theme } from "@/shared/types";
import { useI18n } from "@/providers/i18n";
import { locales } from "@/content";
import { NAV_SECTIONS } from "@/shared/constants";
import { SunIcon, MoonIcon, MenuIcon, CloseIcon, SearchIcon } from "@/shared/icons";
import { useActiveSection } from "@/shared/hooks";
import { openCommandPalette } from "@/layout/command-palette";

export function Header() {
	const { setThemeWithTransition, resolved, mounted } = useTheme();
	const { t, locale } = useI18n();
	const [open, setOpen] = useState(false);
	const themeButtonRef = useRef<HTMLButtonElement>(null);
	const activeId = useActiveSection(NAV_SECTIONS.map(({ id }) => id));

	const cycleTheme = () => {
		const themes: Theme[] = ["light", "dark", "system"];
		const currentTheme =
			(localStorage.getItem("fujuro-theme") as Theme) || "system";
		const systemIsDark = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		const resolveTheme = (themeVal: Theme): "light" | "dark" =>
			themeVal === "system" ? (systemIsDark ? "dark" : "light") : themeVal;

		const currentResolved = resolveTheme(currentTheme);
		let i = themes.indexOf(currentTheme);
		let nextTheme: Theme;

		do {
			i = (i + 1) % themes.length;
			nextTheme = themes[i];
		} while (
			resolveTheme(nextTheme) === currentResolved &&
			nextTheme !== currentTheme
		);

		setThemeWithTransition(nextTheme, themeButtonRef);
	};

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		el?.scrollIntoView({ behavior: "smooth" });
		setOpen(false);
	};

	return (
		<header
			className={`
        fixed top-0 left-0 right-0 z-50
        border-b border-white/5 bg-white/70 backdrop-blur-lg
        dark:border-white/5 dark:bg-black/50
      `}
		>
			<div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
				<Link
					href={`/${locale}`}
					onClick={(e) => {
						e.preventDefault();
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
					className="cursor-pointer text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 select-none"
					aria-label="Go to top"
				>
					Kalimov.com
				</Link>

				<nav className="hidden md:flex items-center gap-1">
					{NAV_SECTIONS.map(({ id, key }) => (
						<button
							key={id}
							onClick={() => scrollTo(id)}
							aria-current={activeId === id ? "true" : undefined}
							className={`px-3 py-2 text-sm transition-colors rounded-lg cursor-pointer ${
								activeId === id
									? "text-zinc-900 dark:text-white font-medium"
									: "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
							}`}
						>
							{t.nav[key]}
						</button>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<button
						type="button"
						onClick={openCommandPalette}
						className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/5 transition-colors cursor-pointer"
						aria-label="Open command palette"
					>
						<SearchIcon className="size-3.5" />
						<span>⌘K</span>
					</button>

					<button
						ref={themeButtonRef}
						onClick={cycleTheme}
						className="p-2 rounded-lg text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5 transition-colors cursor-pointer"
						aria-label="Toggle theme"
					>
						{mounted ? (
							resolved === "dark" ? (
								<MoonIcon />
							) : (
								<SunIcon />
							)
						) : (
							<div className="size-5"></div>
						)}
					</button>

					<div className="hidden sm:flex rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700">
						{locales.map((l) => (
							<Link
								key={l}
								href={`/${l}`}
								className={`px-3 py-1.5 text-sm font-medium transition-colors ${
									locale === l
										? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
										: "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
								}`}
							>
								{l.toUpperCase()}
							</Link>
						))}
					</div>

					<button
						onClick={() => setOpen(!open)}
						className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 cursor-pointer"
						aria-label="Toggle menu"
					>
						{open ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</div>

			{open && (
				<div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
					<nav className="flex flex-col p-4 gap-1 cursor-pointer">
						{NAV_SECTIONS.map(({ id, key }) => (
							<button
								key={id}
								onClick={() => scrollTo(id)}
								aria-current={activeId === id ? "true" : undefined}
								className={`py-3 text-left transition-colors ${
									activeId === id
										? "text-zinc-900 dark:text-white font-medium"
										: "text-zinc-700 dark:text-zinc-300"
								}`}
							>
								{t.nav[key]}
							</button>
						))}
						<div className="flex gap-2 pt-2">
							{locales.map((l) => (
								<Link
									key={l}
									href={`/${l}`}
									onClick={() => setOpen(false)}
									className={`px-4 py-2 rounded-lg text-sm ${
										locale === l
											? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
											: "border border-zinc-300 text-zinc-700 dark:border-zinc-600 dark:text-zinc-300"
									}`}
								>
									{l.toUpperCase()}
								</Link>
							))}
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
