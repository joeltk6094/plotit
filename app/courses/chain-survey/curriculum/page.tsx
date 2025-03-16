"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Clock, BookOpen, Play } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"
import CourseNavigation from "../components/course-navigation"
import { chainSurvey } from "@/lib/courses/chain-survey"
import { routes } from "@/lib/routes"

export default function ChainSurveyCurriculumPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsLoading(false)
  }, [])

  // Prevent hydration issues by only rendering client-specific content after mounting
  if (!mounted) {
    return null
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="animate-fade-in text-center">
          <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading curriculum...</p>
        </div>
      </div>
    )
  }

  const course = chainSurvey

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="transition-opacity duration-500 opacity-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-b from-yellow-900/20 to-black">
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <Link
                href={routes.courses.chainSurvey.index}
                className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300 mb-4 group"
              >
                <BookOpen className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Course Overview
              </Link>

              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title} Curriculum</h1>
              <p className="text-gray-300 text-lg mb-6">
                A comprehensive curriculum designed to teach you surveying principles and techniques.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-yellow-400" />
                  <span>{course.curriculum.length} Modules</span>
                </div>
                <div className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-green-400" />
                  <span>{course.curriculum.reduce((total, section) => total + section.items.length, 0)} Lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Navigation */}
        <CourseNavigation activeRoute={routes.courses.chainSurvey.curriculum} />

        {/* Curriculum Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="bg-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/5">
                <Accordion type="single" collapsible className="w-full">
                  {course.curriculum.map((section, sectionIndex) => (
                    <AccordionItem
                      key={section.id}
                      value={`section-${section.id}`}
                      className="border-b border-white/10 last:border-0 animate-fade-in-up"
                      style={{ animationDelay: `${0.7 + sectionIndex * 0.1}s`, animationFillMode: "both" }}
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-white/5 hover:no-underline transition-colors duration-300">
                        <div className="flex items-center gap-4 text-left">
                          <div
                            className={`w-8 h-8 ${course.color} rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110`}
                          >
                            <span className="font-bold">{section.id}</span>
                          </div>
                          <span className="font-semibold text-lg">{section.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-0 animate-fade-in-down">
                        <div className="space-y-1 pl-12 pr-6 pb-4">
                          {section.items.map((item, itemIndex) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1 animate-fade-in-up"
                              style={{ animationDelay: `${0.1 + itemIndex * 0.05}s`, animationFillMode: "both" }}
                            >
                              <div className="flex items-start gap-4">
                                <div className="text-gray-400 font-medium mt-0.5">
                                  {section.id}.{item.id}
                                </div>
                                <div>
                                  <h4 className="font-medium">{item.title}</h4>
                                  <p className="text-sm text-gray-400">{item.description}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-400">{item.duration}</span>
                                {item.hasVideo && (
                                  <button className="rounded-full h-8 w-8 p-0 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center">
                                    <Play className="h-4 w-4" />
                                    <span className="sr-only">Play video</span>
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

