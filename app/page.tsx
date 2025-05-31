"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  console.log("Portfolio website loaded")
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
