import { Header, Footer, CommandPalette } from "@/layout"
import { Hero, About, Skills, Experience, Projects, Achievements, Contact } from "@/sections"
import { ScrollProgress } from "@/shared/components"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CommandPalette />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
