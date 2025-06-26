"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, Server, Palette, GitBranch, Zap } from "lucide-react"

const skills = [
  {
    name: "JavaScript",
    level: 90,
    icon: Code2,
    color: "bg-yellow-500",
    description: "Modern ES6+ JavaScript, async/await, DOM manipulation",
    experience: "3+ years",
    projects: 25,
  },
  {
    name: "React",
    level: 85,
    icon: Zap,
    color: "bg-blue-500",
    description: "Hooks, Context API, Redux, Next.js, component architecture",
    experience: "2+ years",
    projects: 18,
  },
  {
    name: "Node.js",
    level: 80,
    icon: Server,
    color: "bg-green-500",
    description: "Express.js, RESTful APIs, middleware, authentication",
    experience: "2+ years",
    projects: 15,
  },
  {
    name: "Database",
    level: 70,
    icon: Database,
    color: "bg-purple-500",
    description: "MySQL, PostgreSQL, MongoDB, database design",
    experience: "1+ years",
    projects: 10,
  },
  {
    name: "Web Design",
    level: 85,
    icon: Palette,
    color: "bg-pink-500",
    description: "UI/UX design, Figma, responsive design, Tailwind CSS",
    experience: "2+ years",
    projects: 20,
  },
  {
    name: "Git & GitHub",
    level: 88,
    icon: GitBranch,
    color: "bg-gray-700",
    description: "Version control, branching strategies, collaboration",
    experience: "3+ years",
    projects: 30,
  },
]

export default function ProgrammingSkills() {
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(new Array(skills.length).fill(0))
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setTimeout(() => {
      setAnimatedLevels(skills.map((skill) => skill.level))
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4">Programming Skills</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and experience across various programming languages,
            frameworks, and tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.name}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer  shadow-lg bg-white/4 backdrop-blur-lg border-cyan-400 text-white ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg ${skill.color} text-white transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {skill.level}%
                    </Badge>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4 ">
                    <Progress value={animatedLevels[index]} className="h-2 transition-all duration-1000 bg-cyan-400" />
                  </div>

                  {/* Skill Description */}
                  <p className="text-sm text-white mb-4 leading-relaxed">{skill.description}</p>

                  {/* Skill Stats */}
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span className="flex items-center text-cyan-400 gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      {skill.experience}
                    </span>
                    <span className="flex items-center gap-1 text-rose-400">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      {skill.projects} projects
                    </span>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Summary Stats */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center p-6 bg-white/8 border-1 border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-cyan-400 mb-2">9</div>
            <div className="text-white">Technologies</div>
          </div>
          <div className="text-center p-6 bg-white/8 border-1 border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-green-400 mb-2">3+</div>
            <div className="text-white">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white/8 border-1 border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-400 mb-2">144</div>
            <div className="text-white">Total Projects</div>
          </div>
          <div className="text-center p-6 bg-white/8 border-1 border-cyan-400 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl font-bold text-orange-400 mb-2">78%</div>
            <div className="text-white">Average Proficiency</div>
          </div>
        </div>

      </div>
    </div>
  )
}
