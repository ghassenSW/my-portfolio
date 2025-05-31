"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
      console.log("Navbar scroll state:", isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    console.log("Navigation clicked:", href)
    setIsOpen(false)
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-xl gradient-text"
          >
            Portfolio
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors hover:scale-105 transform duration-200"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="glass-effect"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-md transition-all"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}