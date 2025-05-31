"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Cog, Database, Cpu, Handshake, Zap } from "lucide-react"

const skillCategories = [
  {
    icon: Cog,
    title: "Technical Skills",
    color: "text-purple-500",
    skills: [
      { name: "Machine Learning & Deep Learning ", level: 88 },
      { name: "Computer Vision", level: 85 },
      { name: "Natural Language Processing", level: 80 },
      { name: "Streamlit & REST APIs Deployment", level: 82 },
      { name: "Data Analysis & Visualization", level: 80 }
    ]
  },
  {
  icon: Code,
  title: "Programming Skills",
  color: "text-sky-500",
  skills: [
    { name: "Python", level: 95 },
    { name: "Tensorflow / Pytorch", level: 90 },
    { name: "C / C++", level: 95 },
    { name: "MongoDB / NoSQL", level: 80 },
    { name: "Git / GitHub", level: 85 }
  ]
},
  {
    icon: Handshake,
    title: "Soft Skills",
    color: "text-orange-500",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Critical Thinking", level: 85 },
      { name: "Communication", level: 80 },
      { name: "Team Management", level: 75 },
    ]
  }

]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  console.log("Skills section in view:", isInView)

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI, software development, and competitive programming
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg bg-background/80 ${category.color}`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: "100%" } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                      >
                        <Progress 
                          value={isInView ? skill.level : 0} 
                          className="h-2"
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}