"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, BookOpen, ActivitySquare } from "lucide-react"

const experiences = [
  {
    type: "education",
    title: "ICT Engineering Student",
    organization: "SUP'COM",
    location: "Tunisia",
    period: "2022 - Present",
    description: "Pursuing advanced studies in Information and Communication Technologies with a focus on Artificial Intelligence, Machine Learning, and Software Engineering. Maintaining excellent academic performance while engaging in cutting-edge research projects.",
    achievements: [
      "Passionate about Artificial Intelligence, Machine Learning, and Large Language Models (LLMs)",
      "Hands-on experience with real-world AI applications through personal and client projects",
      "Explored deep learning techniques with a focus on natural language processing and medical imaging",
      "Built and deployed multiple AI-powered tools and intelligent web applications"
    ]
    ,
    icon: BookOpen,
    color: "text-electric-blue"
  },
  {
    type: "experience",
    title: "AI Intern – Energy Anomaly Detection",
    organization: "Sagemcom",
    location: "Tunisia",
    period: "Summer 2024",
    description: "Contributed to the development of an AI-based system for anomaly detection in energy consumption data collected from smart meters across multiple buildings. This system aimed to enhance energy efficiency and enable predictive maintenance through intelligent data analysis.",
    achievements: [
      "Analyzed time-series energy consumption data from smart building sensors",
      "Developed a pipeline to generate synthetic anomalies for robust model training",
      "Trained and fine-tuned machine learning models to detect irregular consumption patterns",
      "Improved the accuracy of anomaly prediction to support proactive energy management decisions"
    ],
    icon: ActivitySquare,
    color: "text-light-green"
  }
  ,
  {
    type: "competition",
    title: "Competitive Programming",
    organization: "Various Platforms",
    location: "Online & Local",
    period: "2022 - Present",
    description: "Active participant in competitive programming contests, enhancing problem-solving skills and algorithmic thinking. Regularly practicing on platforms like Codeforces, LeetCode, and participating in local programming competitions.",
    achievements: [
      "Participated in multiple programming competitions",
      "Solved 500+ algorithmic problems",
      "Improved problem-solving and optimization skills",
      "Mentored junior students in competitive programming"
    ],
    icon: Award,
    color: "text-purple-500"
  }
]

const skills = [
  "Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP",, "Git", "Algorithms", "Data Structures"
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  console.log("Experience section in view:", isInView)

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in technology, education, and competitive programming
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-electric-blue to-success-green"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-background border-4 border-electric-blue rounded-full z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-full bg-background/80 ${exp.color}`}>
                          <exp.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-semibold">{exp.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 mr-1" />
                              {exp.period}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground mb-3">
                            <span className="font-medium">{exp.organization}</span>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>

                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="font-medium text-sm">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                                  transition={{ 
                                    duration: 0.4, 
                                    delay: index * 0.2 + achIndex * 0.1 
                                  }}
                                  className="text-xs text-muted-foreground flex items-start"
                                >
                                  <span className="w-1 h-1 bg-electric-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {achievement}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glass-effect">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-6">Core Technologies & Skills</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-sm py-2 px-4 hover:bg-electric-blue/20 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}