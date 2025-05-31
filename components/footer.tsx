"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  { icon: Github, href: "https://github.com/ghassenSW", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ghassenbenhmida/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:ghassen.benhmida@supcom.tn", label: "Email" }
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    console.log("Scroll to top clicked")
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (href: string, type: string) => {
    console.log(`Footer ${type} clicked:`, href)
    if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank')
    }
  }

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold gradient-text"
            >
              Portfolio
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm text-muted-foreground leading-relaxed"
            >
              ICT Engineering student passionate about AI, machine learning, and competitive programming. 
              Building innovative solutions for tomorrow's challenges.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-semibold"
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-2"
            >
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href, 'navigation')}
                    className="text-sm text-muted-foreground hover:text-electric-blue transition-colors"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-semibold"
            >
              Contact Info
            </motion.h4>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-2 text-sm text-muted-foreground"
            >
              <p>Tunisia</p>
              <p>ghassen.benhmida@supcom.tn</p>
              <p>+216 28 521 042</p>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="font-semibold"
            >
              Connect
            </motion.h4>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex space-x-3"
            >
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  onClick={() => handleLinkClick(social.href, 'social')}
                  className="p-2 rounded-full glass-effect hover:bg-electric-blue/20 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-4 h-4" />
                  <span className="sr-only">{social.label}</span>
                </motion.button>
              ))}
            </motion.div>
            
            {/* Newsletter/Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="pt-4"
            >
              <p className="text-xs text-muted-foreground mb-2">Stay updated with my latest projects</p>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleLinkClick("#contact", 'newsletter')}
                className="text-xs hover:bg-electric-blue hover:text-white transition-all duration-300"
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>© {currentYear} Portfolio. Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-xs text-muted-foreground">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
            
            <Button
              size="sm"
              variant="ghost"
              onClick={scrollToTop}
              className="p-2 rounded-full hover:bg-electric-blue/20 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    </footer>
  )
}