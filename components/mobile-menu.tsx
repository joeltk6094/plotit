"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { courses } from "@/lib/courses"
import { routes, getRoute } from "@/lib/routes"

// First, import the necessary icons at the top of the file
import { Menu, X, Video, BookOpen, FileSpreadsheet, Music, Ruler, Languages, Piano, Laptop } from "lucide-react"
import Image from "next/image"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleCourses = () => setShowCourses(!showCourses)

  // Close menu when route changes
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Prevent hydration errors by only rendering client-specific content after mounting
  if (!mounted) {
    return (
      <div className="md:hidden">
        <button
          className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          <Menu size={18} />
        </button>
      </div>
    )
  }

  // Add the getCourseIcon function
  function getCourseIcon(slug: string) {
    switch (slug) {
      case "final-cut-pro":
        return <Video className="h-4 w-4 text-pink-400" />
      case "english-grammar":
        return <Languages className="h-4 w-4 text-blue-400" />
      case "word":
        return <BookOpen className="h-4 w-4 text-blue-500" />
      case "wnescore":
        return <Music className="h-4 w-4 text-purple-400" />
      case "it":
        return <Laptop className="h-4 w-4 text-green-400" />
      case "excel":
        return <FileSpreadsheet className="h-4 w-4 text-green-500" />
      case "chain-survey":
        return <Ruler className="h-4 w-4 text-yellow-400" />
      case "malayalam":
        return <Languages className="h-4 w-4 text-red-400" />
      case "piano":
        return <Piano className="h-4 w-4 text-orange-400" />
      default:
        return <BookOpen className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-opacity-90"
        aria-label="Toggle mobile menu"
      >
        <Menu size={18} className="transition-transform duration-300 hover:rotate-90" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/95 z-50"
          >
            {/* Close button section */}
            <div className="flex justify-between items-center p-4">
              <Link href={routes.home} className="flex items-center group" onClick={handleLinkClick}>
                <div className="relative w-24 h-8 transition-transform duration-300 group-hover:scale-110">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/670041_4219617713004c539724ebff34a68a07~mv2-JSwS8hpC4AFFPrNdIqJs0BjJqcPWfF.png"
                    alt="Plotit Logo"
                    fill
                    className="object-contain brightness-0 invert"
                    priority
                  />
                </div>
              </Link>

              <motion.button
                initial={{ rotate: -90, scale: 0.5 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, type: "spring" }}
                onClick={toggleMenu}
                className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-opacity-90"
                aria-label="Close mobile menu"
              >
                <X size={18} className="transition-transform duration-300 hover:rotate-90" />
              </motion.button>
            </div>

            <motion.div
              className="px-6 py-4 flex flex-col gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link
                href={routes.home}
                className={`text-white text-xl font-bold py-2 transition-all duration-300 hover:translate-x-2 ${
                  pathname === routes.home ? "text-pink-400" : ""
                }`}
                onClick={handleLinkClick}
              >
                Home
              </Link>

              <Link
                href={routes.about}
                className={`text-white text-xl font-bold py-2 transition-all duration-300 hover:translate-x-2 ${
                  pathname === routes.about ? "text-pink-400" : ""
                }`}
                onClick={handleLinkClick}
              >
                About
              </Link>

              <div>
                <button
                  onClick={toggleCourses}
                  className={`text-white text-xl font-bold py-2 flex items-center justify-between w-full transition-all duration-300 hover:translate-x-2 ${
                    pathname.startsWith(routes.courses.index) ? "text-pink-400" : ""
                  }`}
                >
                  Courses Library
                  <span className={`transform transition-transform duration-300 ${showCourses ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {showCourses && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 py-2 space-y-3">
                        {courses.slice(0, 6).map((course, index) => (
                          <motion.div
                            key={course.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Link
                              href={getRoute(routes.courses.detail, course.slug)}
                              className={`flex items-center gap-3 py-2 transition-all duration-300 hover:translate-x-2 ${
                                pathname === getRoute(routes.courses.detail, course.slug) ? "text-pink-400" : ""
                              }`}
                              onClick={handleLinkClick}
                            >
                              {/* <div
                                className={`w-2 h-10 ${course.color} rounded-full transition-all duration-300 hover:w-3`}
                              ></div> */}
                              <div className="flex items-center gap-2">
                                <div className="bg-white/10 rounded-full p-1.5">{getCourseIcon(course.slug)}</div>
                                <div>
                                  <div className="font-medium">{course.title}</div>
                                  <div className="text-xs text-gray-400">{course.category}</div>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        ))}

                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: courses.length * 0.05 }}
                        >
                          <Link
                            href={routes.courses.index}
                            className={`block text-pink-400 font-medium py-2 transition-all duration-300 hover:translate-x-2 hover:text-pink-300 ${
                              pathname === routes.courses.index ? "text-pink-300" : ""
                            }`}
                            onClick={handleLinkClick}
                          >
                            View All Courses
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={routes.contact}
                className={`text-white text-xl font-bold py-2 transition-all duration-300 hover:translate-x-2 ${
                  pathname === routes.contact ? "text-pink-400" : ""
                }`}
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>

              <motion.div
                className="mt-4 pt-4 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link
                  href={routes.contact}
                  className="block text-center bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:from-pink-600 hover:to-orange-600"
                  onClick={handleLinkClick}
                >
                  Register for a Course
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

