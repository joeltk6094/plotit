"use client"

import { useState, useEffect } from "react"
import {
  Grid2X2,
  PlayCircle,
  Filter,
  ChevronRight,
  Star,
  Users,
  Code,
  Globe,
  Music,
  Layers,
  ArrowRight,
  Sparkles,
  Rocket,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { routes, getRoute } from "@/lib/routes"

const featuredCourses = [
  {
    title: "IT Courses",
    description: "Programming, web development, and system administration",
    icon: Code,
    primaryColor: "#00C9A7",
    secondaryColor: "#128C7E",
    gradientClass: "from-[#00C9A7] to-[#128C7E]",
    patternColor: "rgba(0, 201, 167, 0.15)",
    slug: "it",
  },
  {
    title: "Language Learning",
    description: "Master new languages with expert instructors",
    icon: Globe,
    primaryColor: "#4D61FC",
    secondaryColor: "#8C52FF",
    gradientClass: "from-[#4D61FC] to-[#8C52FF]",
    patternColor: "rgba(77, 97, 252, 0.15)",
    slug: "english-grammar",
  },
  {
    title: "Music Training",
    description: "Instruments, theory, and composition courses",
    icon: Music,
    primaryColor: "#FF9966",
    secondaryColor: "#FF5E62",
    gradientClass: "from-[#FF9966] to-[#FF5E62]",
    patternColor: "rgba(255, 153, 102, 0.15)",
    slug: "piano",
  },
  {
    title: "Software Skills",
    description: "Office applications and professional software",
    icon: Layers,
    primaryColor: "#F857A6",
    secondaryColor: "#FF5858",
    gradientClass: "from-[#F857A6] to-[#FF5858]",
    patternColor: "rgba(248, 87, 166, 0.15)",
    slug: "word",
  },
]

export default function PopularCourses() {
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration issues by only rendering client-specific content after mounting
  if (!mounted) {
    return null // or a loading state
  }

  return (
    <section className="w-full py-24 bg-black text-white">
      <div className="responsive-container">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-12 md:mb-16 lg:mb-20">
          <div className="flex items-center gap-3">
            <Link
              href={routes.courses.index}
              className="px-4 py-1.5 md:px-6 md:py-2 lg:px-8 lg:py-3 bg-green-200/90 text-black rounded-full text-sm md:text-base lg:text-fluid-base font-medium hover:bg-green-300/90 transition-colors duration-300"
            >
              Explore
            </Link>
            <button className="w-8 h-8 bg-green-200/90 rounded-full flex items-center justify-center hover:bg-green-300/90 transition-colors duration-300">
              <Filter size={16} className="text-black" />
            </button>
            <button className="w-8 h-8 bg-green-200/90 rounded-full flex items-center justify-center hover:bg-green-300/90 transition-colors duration-300">
              <PlayCircle size={16} className="text-black" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-300 relative">
                  <Image
                    src={`/placeholder.svg?height=32&width=32`}
                    alt={`Student ${i + 1}`}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-bold">5k</span> happy students
              <br />
              since 2020
            </div>
          </div>
        </div>

        {/* Course Grid - Redesigned Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-16 md:mb-20 lg:mb-24">
          {featuredCourses.map((course, index) => (
            <Link
              href={getRoute(routes.courses.detail, course.slug)}
              key={index}
              className="group relative h-[280px] md:h-[320px] overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${course.primaryColor}, ${course.secondaryColor})`,
                boxShadow: `0 10px 30px -5px ${course.patternColor}`,
              }}
            >
              {/* Card Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white/20 backdrop-blur-md 
                  shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-white/30"
                >
                  <course.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl font-bold text-white mb-3 
                  transition-transform duration-500 group-hover:translate-x-2"
                >
                  {course.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/80 text-base mb-6 max-w-[90%] 
                  transition-transform duration-500 group-hover:translate-x-2"
                >
                  {course.description}
                </p>

                {/* Bottom Action */}
                <div className="mt-auto">
                  <span
                    className="inline-flex items-center gap-2 py-2 px-4 bg-white/20 backdrop-blur-sm rounded-full 
                    text-white text-sm font-medium transition-all duration-500 group-hover:bg-white/30 group-hover:pl-6"
                  >
                    Explore
                    <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Shine Effect */}
              <div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 
                group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              ></div>
            </Link>
          ))}
        </div>

        {/* Redesigned Footer Section */}
        <div
          className="relative overflow-hidden rounded-3xl mb-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background with animated gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900 via-purple-800 to-fuchsia-900 animate-pulse-soft"></div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-white/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Decorative shapes */}
          <motion.div
            className="absolute top-10 right-10 w-32 h-32 rounded-full bg-pink-500/20 blur-3xl"
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl"
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />

          {/* Content container */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left column - Text content */}
              <div className="space-y-8">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Sparkles className="h-4 w-4 text-yellow-300" />
                  <span className="text-sm font-medium">Join our learning community</span>
                </motion.div>

                {/* Main heading with animated gradient text */}
                <div className="space-y-2">
                  <motion.h2
                    className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 animate-pulse-soft">
                      Explore, Learn, Master
                    </span>
                  </motion.h2>
                  <motion.h3
                    className="text-3xl md:text-4xl lg:text-5xl font-bold"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    with Plotit Courses
                  </motion.h3>
                </div>

                {/* Features with icons */}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <GraduationCap className="h-5 w-5 text-pink-300" />
                    </div>
                    <div>
                      <p className="font-medium">Expert Instructors</p>
                      <p className="text-sm text-gray-300">Learn from the best</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <p className="font-medium">Hands-on Projects</p>
                      <p className="text-sm text-gray-300">Build your portfolio</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-300" />
                    </div>
                    <div>
                      <p className="font-medium">4.9/5 Rating</p>
                      <p className="text-sm text-gray-300">From 2,500+ reviews</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-green-300" />
                    </div>
                    <div>
                      <p className="font-medium">Community Support</p>
                      <p className="text-sm text-gray-300">Connect with peers</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href={routes.courses.index}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-900 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/20 group"
                  >
                    Browse All Courses
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>

              {/* Right column - Image and decorative elements */}
              <div className="relative">
                {/* Main image */}
                <motion.div
                  className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/placeholder.svg?height=400&width=500&text=Learn+with+Plotit"
                    alt="Learn with Plotit"
                    width={500}
                    height={400}
                    className="w-full h-auto"
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                          <PlayCircle className="h-4 w-4 text-white" />
                        </div>
                        <p className="font-medium text-white">Featured Course</p>
                      </div>
                      <h4 className="text-xl font-bold text-white mb-1">Web Development Bootcamp</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-300 fill-yellow-300" />
                          ))}
                        </div>
                        <span className="text-sm text-white/80">5.0 (350 reviews)</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl rotate-12 z-0"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  animate={{
                    rotate: isHovered ? 25 : 12,
                    scale: isHovered ? 1.1 : 1,
                  }}
                />
                <motion.div
                  className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full z-0"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom action buttons */}
          <div className="absolute bottom-6 right-6 flex gap-3 z-20">
            <motion.button
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Grid2X2 size={20} className="text-white" />
            </motion.button>
            <motion.button
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -10 }}
            >
              <PlayCircle size={20} className="text-white" />
            </motion.button>
            <motion.button
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <Filter size={20} className="text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

