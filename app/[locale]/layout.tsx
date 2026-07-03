import type { Metadata } from "next"
import { cookies } from "next/headers"
import { DM_Sans } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/providers/theme"
import { I18nProvider } from "@/providers/i18n"
import { ThemeInitScript } from "@/app/theme-init"
import { locales, content, type Locale } from "@/content"
import { generateProfilePageSchema } from "@/shared/helpers"
import { notFound } from "next/navigation"

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
})

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = content[locale as Locale]

  const baseUrl = "https://kalimov.com"

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: `${t.name} | ${t.role}`,
      template: `%s | ${t.name}`,
    },
    description: t.tagline,
    keywords: [
      "Frontend Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Web3",
      "Blockchain",
      "Джалиль Калимов",
      "Dzhalil Kalimov",
      "Portfolio",
      "Software Engineer",
    ],
    authors: [{ name: t.name }],
    creator: t.name,
    openGraph: {
      title: `${t.name} | ${t.role}`,
      description: t.tagline,
      url: `${baseUrl}/${locale}`,
      siteName: t.name,
      images: [
        {
          url: `${baseUrl}/opengraph.png`,
          width: 1200,
          height: 630,
          alt: `${t.name} - ${t.role}`,
        },
      ],
      locale: locale === "ru" ? "ru_RU" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t.name} | ${t.role}`,
      description: t.tagline,
      images: [`${baseUrl}/opengraph.png`],
      creator: "@fujuro",
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ru: `${baseUrl}/ru`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/ru`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "",
      yandex: "",
    },
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  const cookieStore = await cookies()
  const themeCookie = cookieStore.get("fujuro-theme")?.value
  const themeClass = themeCookie === "dark" || themeCookie === "light" ? themeCookie : ""
  const jsonLd = generateProfilePageSchema(locale as Locale)

  return (
    <html lang={locale} className={themeClass} suppressHydrationWarning>
      <head>
        <ThemeInitScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="alternate" hrefLang="ru" href="https://kalimov.com/ru" />
        <link rel="alternate" hrefLang="en" href="https://kalimov.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://kalimov.com/ru" />
      </head>
      <body className={`${dmSans.variable} font-sans antialiased`}>
        <ThemeProvider>
          <I18nProvider locale={locale as Locale}>
            {children}
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
