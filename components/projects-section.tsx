"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, MessageSquare, ShoppingCart, BatteryCharging, Leaf, Apple, ChartBar } from "lucide-react"

const projects = [
  {
    title: "Gemini Chatbot with Streamlit and Astra DB",
    description: "A Retrieval-Augmented Generation (RAG) chatbot that leverages Google Gemini and Astra DB to provide intelligent, context-aware answers from uploaded PDFs or text documents. Built with a focus on usability, flexibility, and real-time interaction.",
    category: "Natural Language Processing",
    icon: MessageSquare,
    technologies: ["Streamlit", "Google Generative AI", "LangChain", "Astra DB", "Python"],
    features: [
      "Document upload and training with Gemini",
      "Chat interface powered by Streamlit",
      "Contextual responses via RAG pipeline",
      "Data stored and queried using Astra DB"
    ],
    status: "Completed",
    color: "text-electric-blue",
    githubLink: "https://github.com/ghassenSW/gemini_chatbot",
    demoLink: "" // Replace with actual demo link
  },
  {
    title: "IVF Patient Response Prediction System",
    description: "AI-powered clinical decision support system for predicting ovarian response to IVF treatment. Uses calibrated machine learning models with SHAP explainability to stratify patients into response categories, helping optimize treatment protocols.",
    category: "Healthcare AI / Machine Learning",
    icon: ChartBar,
    technologies: ["Python", "Scikit-learn", "FastAPI", "SHAP", "Pandas", "NumPy"],
    features: [
      "Calibrated Gradient Boosting with 86.1% accuracy",
      "SHAP-based model explainability for clinical insights",
      "REST API with automatic feature normalization",
      "Interactive web interface for real-time predictions",
      "Probability outputs for low, optimal, and high response"
    ],
    status: "Completed",
    color: "text-purple-500",
    githubLink: "https://github.com/ghassenSW/IVF-Patient-Response-Prediction-System",
    demoLink: "https://ivf-patient-response-prediction-system.onrender.com"
  },
   {
    title: "Leaf Disease Segmentation",
    description: "Deep learning-based plant disease segmentation using U-Net architecture. Designed to identify and segment disease-affected regions in leaf images with an intuitive Streamlit web interface.",
    category: "Computer Vision",
    icon: Leaf,
    technologies: ["TensorFlow", "Keras", "Python", "Streamlit", "OpenCV", "NumPy"],
    features: [
      "Semantic segmentation using U-Net",
      "Streamlit web app for predictions",
      "Real-time mask overlay for input images",
      "Supports uploading new leaf images"
    ],
    status: "Completed",
    color: "text-electric-green",
    githubLink: "https://github.com/ghassenSW/leaf_disease_segmentation",
    demoLink: "https://leafdiseasesegmentation-aornkexmsemsymjmdsmh6e.streamlit.app/"
  },
  {
    title: "Customer Behavior Analysis in Retail",
    description: "An AI-powered retail analytics system that tracks and analyzes customer-product interactions using YOLO object detection and regression modeling. Designed to enhance product layout strategies and improve purchase conversion in supermarkets.",
    category: "Computer Vision / Retail AI",
    icon: ShoppingCart,
    technologies: ["YOLO", "OpenCV", "Python", "Pandas", "Scikit-learn"],
    features: [
      "Real-time customer behavior tracking using YOLO",
      "Detection of pick-up, inspect, and put-back actions",
      "Linear regression analysis of non-purchased interactions",
      "Insights to improve product placement and increase sales"
    ],
    status: "Completed",
    color: "text-electric-blue",
    githubLink: "https://github.com/ghassenSW/customers-action-recognition",
    demoLink: "" // Replace with actual demo link
  },
  {
    title: "Energy Consumption Anomaly Detection",
    description: "AI-driven system to detect and predict anomalies in energy usage data from multiple appliances across buildings. Focuses on identifying irregular patterns to enable early maintenance and optimize energy management.",
    category: "Time-Series Analysis",
    icon: BatteryCharging,
    technologies: ["Python", "Machine Learning", "Time-Series Forecasting", "Anomaly Detection"],
    features: [
      "Synthetic anomaly generation for training",
      "Machine learning model for anomaly detection",
      "Early detection of abnormal energy consumption",
      "Improves decision-making for energy management"
    ],
    status: "Completed",
    color: "text-purple-500",
    githubLink: "", // Replace with actual GitHub link
    demoLink: "" // Replace with actual demo link
  },
  
 
  {
    title: "Tunisian Date Fruit Classification",
    description: "Convolutional Neural Network (CNN)-based image classification system that identifies 11 varieties of Tunisian date fruits. Designed to automate visual recognition using deep learning.",
    category: "Computer Vision",
    icon: Apple,
    technologies: ["TensorFlow", "Keras", "Python", "OpenCV", "NumPy", "Matplotlib"],
    features: [
      "Classification of 11 Tunisian date varieties",
      "Custom CNN architecture",
      "Image preprocessing and augmentation",
      "Evaluated with accuracy and confusion matrix"
    ],
    status: "Completed",
    color: "text-electric-blue",
    githubLink: "https://github.com/ghassenSW/dates_classifier",
    demoLink: "" // Replace with actual demo link
  },
  {
    title: "FPL Academy",
    description: "A web-based analytics tool for Fantasy Premier League (FPL) managers to visualize stats, monitor player performance, and generate insightful updates using live Premier League data.",
    category: "Web Application / Sports Analytics",
    icon: ChartBar,
    technologies: ["Flask", "Python", "MongoDB", "HTML", "CSS", "Vercel"],
    features: [
      "User authentication with login and registration",
      "Dynamic dashboard with attack/defense analytics",
      "Automated tweet generation for injuries and price changes",
      "Team and player comparison tools",
      "Gameweek-based match and player statistics",
      "Live data scraping from FPL and SofaScore"
    ],
    status: "Completed",
    color: "text-blue-500",
    githubLink: "https://github.com/ghassenSW/FPL_Academy",
    demoLink: "https://fplacademy.vercel.app/"
  }
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  console.log("Projects section in view:", isInView)

  const handleProjectClick = (project: string, type: string, link: string) => {
    console.log(`${type} clicked for project:`, project)
    if (type === "GitHub" || type === "Demo") {
      window.location.href = link
    }
  }

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, machine learning, and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glass-effect hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-background/80 ${project.color}`}>
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-electric-blue transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="font-medium text-sm mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1 + featureIndex * 0.05 
                          }}
                          className="text-xs text-muted-foreground flex items-start"
                        >
                          <span className="w-1 h-1 bg-electric-blue rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ 
                            duration: 0.2, 
                            delay: index * 0.1 + techIndex * 0.02 
                          }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="text-xs py-1 px-2 hover:bg-electric-blue/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 hover:bg-electric-blue hover:text-white transition-all duration-300"
                      onClick={() => handleProjectClick(project.title, "GitHub", project.githubLink)}
                      disabled={!project.githubLink}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-electric-blue hover:bg-electric-blue/90"
                      onClick={() => handleProjectClick(project.title, "Demo", project.demoLink)}
                      disabled={!project.demoLink}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="glass-effect">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { label: "Projects Completed", value: "15+" },
                  { label: "AI Models Deployed", value: "8" },
                  { label: "Competition Problems Solved", value: "400+" },
                  { label: "GitHub Repositories", value: "8" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
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