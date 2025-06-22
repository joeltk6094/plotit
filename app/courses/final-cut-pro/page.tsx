"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Clock, BookOpen, Play, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import CourseNavigation from "./components/course-navigation"
import CourseOverview from "./components/course-overview"
import { finalCutPro } from "@/lib/courses/final-cut-pro"
import { courseRoutes } from "./routes"

export default function FinalCutProPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsLoading(false)
  }, [])

  // Prevent hydration issues by only rendering client-specific content after mounting
  if (!mounted) {
    return null // This will be replaced immediately after hydration
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="animate-fade-in text-center">
          <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading course details...</p>
        </div>
      </div>
    )
  }

  const course = finalCutPro

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="transition-opacity duration-500 opacity-100">
        {/* Hero Section with Prominent Enrollment Button */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
          <div className="relative container mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                <Link
                  href="/courses"
                  className="inline-flex items-center text-gray-400 hover:text-pink-400 transition-colors duration-300 mb-4 group"
                >
                  <BookOpen className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Back to Courses
                </Link>

                <Badge className={`${course.color.replace("bg-", "bg-opacity-20 text-")} mb-4`}>
                  {course.category}
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-gray-300 text-lg mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                    <Clock className="h-5 w-5 text-pink-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                    <BookOpen className="h-5 w-5 text-yellow-400" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span>1,200+ Students</span>
                  </div>
                  <div className="flex items-center gap-2 transition-transform duration-300 hover:translate-y-[-2px]">
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    <span>4.8/5 (256 reviews)</span>
                  </div>
                </div>

                {/* Prominent Enrollment Button */}
                <Button asChild>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-6 h-auto text-lg w-full sm:w-auto relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20"
                  >
                    <span className="relative z-10">Enroll Now for {course.price}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  </a>
                </Button>

              </div>

              <div
                className="relative rounded-3xl overflow-hidden animate-fade-in-up"
                style={{ animationDelay: "0.3s", animationFillMode: "both" }}
              >
                <div className={`absolute inset-0 ${course.color} opacity-20 blur-2xl animate-pulse-soft`}></div>
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="rounded-3xl relative z-10 w-full h-auto transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110 group">
                    <Play className="h-12 w-12 text-white fill-white transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Navigation */}
        <CourseNavigation activeRoute={courseRoutes.overview} />

        {/* Course Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <CourseOverview course={course} />
            </div>

            <div>
              <div
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 sticky top-8 animate-fade-in-left transition-all duration-300 hover:shadow-lg hover:shadow-white/5"
                style={{ animationDelay: "0.7s", animationFillMode: "both" }}
              >
                <h3 className="text-xl font-bold mb-4">Course Details</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between transition-transform duration-300 hover:translate-x-1">
                    <span className="text-gray-400">Price:</span>
                    <span className="font-bold">{course.price}</span>
                  </div>
                  <div className="flex justify-between transition-transform duration-300 hover:translate-x-1">
                    <span className="text-gray-400">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between transition-transform duration-300 hover:translate-x-1">
                    <span className="text-gray-400">Level:</span>
                    <span>{course.level}</span>
                  </div>
                  <div className="flex justify-between transition-transform duration-300 hover:translate-x-1">
                    <span className="text-gray-400">Category:</span>
                    <span>{course.category}</span>
                  </div>
                  <div className="flex justify-between transition-transform duration-300 hover:translate-x-1">
                    <span className="text-gray-400">Certificate:</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex justify-between transition-transform duration-300 hover:translate-x-1">
                    <span className="text-gray-400">Language:</span>
                    <span>English</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white mb-4 relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">Enroll Now</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  </a>
                </Button>


                <Button
                  variant="outline"
                  className="w-full group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Try Free Preview
                  </span>
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                </Button>

                <p className="text-center text-sm text-gray-400 mt-4">
                  Have questions?{" "}
                  <Link
                    href="/contact"
                    className="text-pink-400 hover:text-pink-300 transition-colors duration-300 hover:underline"
                  >
                    Contact us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

