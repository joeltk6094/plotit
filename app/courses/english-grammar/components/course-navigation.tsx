"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { BookOpen, Video, MessageSquare, User, FileText, HelpCircle } from "lucide-react"
import { courseRoutes } from "../routes"

interface CourseNavigationProps {
  activeRoute: string
}

export default function CourseNavigation({ activeRoute }: CourseNavigationProps) {
  const navItems = [
    {
      name: "Overview",
      icon: <BookOpen className="h-4 w-4" />,
      route: courseRoutes.overview,
    },
    {
      name: "Curriculum",
      icon: <Video className="h-4 w-4" />,
      route: courseRoutes.curriculum,
    },
    {
      name: "Reviews",
      icon: <MessageSquare className="h-4 w-4" />,
      route: courseRoutes.reviews,
    },
    {
      name: "Instructor",
      icon: <User className="h-4 w-4" />,
      route: courseRoutes.instructor,
    },
    {
      name: "Resources",
      icon: <FileText className="h-4 w-4" />,
      route: courseRoutes.resources,
    },
    {
      name: "FAQ",
      icon: <HelpCircle className="h-4 w-4" />,
      route: courseRoutes.faq,
    },
  ]

  return (
    <div className="bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="overflow-x-auto">
          <nav className="flex items-center py-4 min-w-max">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.route}
                className={`flex items-center gap-2 px-4 py-2 mx-1 rounded-full transition-all duration-300 ${
                  activeRoute === item.route
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                {activeRoute === item.route && (
                  <motion.div
                    layoutId="navigation-pill"
                    className="absolute inset-0 bg-blue-500 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

