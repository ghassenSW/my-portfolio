"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

const roles = [
  "ICT Engineering Student",
  "AI Specialist", 
  "Machine Learning Engineer",
  "Competitive Programmer"
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const role = roles[currentRole]
    let index = 0

    const typeInterval = setInterval(() => {
      if (isTyping) {
        if (index < role.length) {
          setDisplayText(role.slice(0, index + 1))
          index++
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setIsTyping(true)
            setCurrentRole((prev) => (prev + 1) % roles.length)
            setDisplayText("")
            index = 0
          }, 2000)
        }
      }
    }, 100)

    console.log("Hero typing animation for role:", role)
    return () => clearInterval(typeInterval)
  }, [currentRole, isTyping])

  const handleContactClick = () => {
    console.log("Contact Me button clicked")
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleProjectsClick = () => {
    console.log("View Projects button clicked")
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSocialClick = (platform: string, href: string) => {
    console.log(`${platform} clicked`)
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mt-16"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Ghassen</span>
              <br />
              <span className="gradient-text">Ben Hmida</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-12 flex items-center"
            >
              <span className="text-xl md:text-2xl text-muted-foreground font-medium">
                {displayText}
                <span className="animate-blink border-r-2 border-electric-blue ml-1"></span>
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Passionate AI and software engineer with expertise in machine learning, 
              data science, and IoT-driven smart solutions. Experienced in developing 
              AI models for trend analysis, mental health classification, and predictive analytics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                onClick={handleProjectsClick}
                size="lg" 
                className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/25"
              >
                View Projects
                <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg]" />
              </Button>
              <Button 
                onClick={handleContactClick}
                variant="outline" 
                size="lg"
                className="px-8 py-3 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex space-x-6"
            >
              {[
                { icon: Github, href: "https://github.com/ghassenSW", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ghassenbenhmida/", label: "LinkedIn" },
                { icon: Mail, href: "#contact", label: "Email" }
              ].map((social, index) => (
                <motion.button
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
                  onClick={() => handleSocialClick(social.label, social.href)}
                  className="p-3 rounded-full glass-effect hover:bg-electric-blue/20 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-6 h-6" />
                  <span className="sr-only">{social.label}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                {/* Profile Image with Border Animation */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                  <img
                    src="/photo.jpg"
                    alt="Ghassen Ben Hmida - AI Engineer"
                    className="w-full h-full rounded-full object-cover shadow-2xl"
                  />
                </div>
                {/* Floating Tech Icons */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-8 -right-8 w-16 h-16 bg-electric-blue/20 rounded-full flex items-center justify-center glass-effect"
                >
                  <span className="text-2xl">🤖</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 w-14 h-14 bg-success-green/20 rounded-full flex items-center justify-center glass-effect"
                >
                  <span className="text-xl">💻</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    x: [0, 5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute top-1/2 -left-8 w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center glass-effect"
                >
                  <span className="text-lg">🧠</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Background Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-electric-blue/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-success-green/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}