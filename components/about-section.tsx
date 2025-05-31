"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Brain, Code, Trophy } from "lucide-react"

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "ICT Engineering Student at SUP'COM",
    color: "text-electric-blue"
  },
  {
    icon: Brain,
    title: "AI Specialization",
    description: "Machine Learning & Computer Vision Expert",
    color: "text-success-green"
  },
  {
    icon: Trophy,
    title: "Competitive Programming",
    description: "Active Participant in Programming Contests",
    color: "text-orange-500"
  }
]

const technologies = [
  "Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV",
  "JavaScript", "Git", "SQL", "MongoDB"
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  console.log("About section in view:", isInView)

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging artificial intelligence to solve real-world problems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-foreground/90 leading-relaxed">
                I'm a dedicated ICT Engineering student at SUP'COM with a deep passion for 
                <span className="font-semibold text-electric-blue"> Artificial Intelligence</span> and 
                <span className="font-semibold text-success-green"> Software Engineering</span>. 
                My expertise spans across machine learning, data science, and developing AI models 
                for various applications.
              </p>
              <p className="text-foreground/90 leading-relaxed">
                I have hands-on experience in <span className="font-semibold">medical imaging</span>, 
                <span className="font-semibold"> computer vision</span>, and 
                <span className="font-semibold"> Large Language Models (LLMs)</span>. 
                Additionally, I actively participate in competitive programming competitions, 
                which sharpens my problem-solving skills and algorithmic thinking.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Technologies & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="text-sm py-1 px-3 hover:bg-electric-blue/20 transition-colors cursor-default"
                    >
                      {tech}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Card className="glass-effect hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-background/80 ${item.color}`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}