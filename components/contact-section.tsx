"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ghassen.benhmida@supcom.tn",
    href: "mailto:ghassen.benhmida@supcom.tn",
    color: "text-electric-blue"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+216 28521042",
    href: "tel:+21628521042",
    color: "text-success-green"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tunisia",
    href: "#",
    color: "text-purple-500"
  }
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/ghassenSW",
    color: "hover:text-gray-600"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ghassenbenhmida/",
    color: "hover:text-blue-600"
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/GhassenBH111",
    color: "hover:text-blue-400"
  }
]

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  console.log("Contact section in view:", isInView)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(`Form field ${name} updated:`, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    console.log("Form submission started:", formData)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out!"
      })
      
      console.log("Form submitted successfully:", formData)
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactClick = (type: string, value: string) => {
    console.log(`Contact method clicked: ${type} - ${value}`)
  }

  const handleSocialClick = (platform: string, href: string) => {
    console.log(`Social platform clicked: ${platform} - ${href}`)
    window.open(href, '_blank')
  }

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a conversation about AI and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, 
                or collaborations in AI, machine learning, and software development. 
                Whether you have a project idea, want to learn more about my work, 
                or just want to connect, I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                      <CardContent className="p-4">
                        <div 
                          className="flex items-center space-x-4"
                          onClick={() => handleContactClick(info.label, info.value)}
                        >
                          <div className={`p-3 rounded-full bg-background/80 ${info.color}`}>
                            <info.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-medium">{info.label}</p>
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="pt-8"
              >
                <h4 className="font-medium mb-4">Connect on Social Media</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.button
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                      onClick={() => handleSocialClick(social.label, social.href)}
                      className={`p-3 rounded-full glass-effect transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="glass-effect"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="glass-effect"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What would you like to discuss?"
                      required
                      className="glass-effect"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, idea, or just say hello..."
                      rows={6}
                      required
                      className="glass-effect resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/25"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to build something amazing together.
              </p>
              <Button
                onClick={() => handleContactClick("Direct Email", "your.email@example.com")}
                size="lg"
                className="bg-success-green hover:bg-success-green/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me Directly
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}