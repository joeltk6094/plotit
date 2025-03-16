"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import { getAllCourses } from "@/lib/courses"

export default function CoursesPage() {
  const courses = getAllCourses()
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All Categories")

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const categories = ["All Categories", ...Array.from(new Set(courses.map((course) => course.category)))]

  const filteredCourses =
    activeCategory === "All Categories" ? courses : courses.filter((course) => course.category === activeCategory)

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main
        className={`container mx-auto px-6 py-12 transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Courses Header */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationFillMode: "both" }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our wide range of courses designed to help you master new skills, advance your career, and explore
            your creativity.
          </p>
        </div>

        {/* Course Categories */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          {categories.map((category, index) => (
            <Badge
              key={category}
              className={`${
                activeCategory === category ? "bg-white text-black" : "bg-white/10 text-white"
              } hover:bg-white/20 cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${0.2 + index * 0.05}s`, animationFillMode: "both" }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 group hover:shadow-lg hover:shadow-white/5 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="relative overflow-hidden">
                <div
                  className={`absolute inset-0 ${course.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={400}
                  height={225}
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <Badge
                  className={`absolute top-4 left-4 ${course.color.replace("bg-", "bg-opacity-90 text-")} transition-all duration-300 group-hover:scale-110`}
                >
                  {course.category}
                </Badge>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm">{course.duration}</span>
                  <ArrowRight className="h-5 w-5 text-pink-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

