"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Clock, BookOpen, ArrowLeft, CheckCircle, Play, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Header from "@/components/header"
import { getCourseBySlug } from "@/lib/courses"
import type { Course } from "@/lib/courses"

export default function CoursePage({ params }: { params: { slug: string } }) {
  const [course, setCourse] = useState<Course | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const foundCourse = getCourseBySlug(params.slug)
    if (!foundCourse) {
      notFound()
    }
    setCourse(foundCourse)
    setIsLoading(false)
  }, [params.slug])

  // Prevent hydration issues by only rendering client-specific content after mounting
  if (!mounted) {
    return null // This will be replaced immediately after hydration
  }

  if (isLoading || !course) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <div className="animate-fade-in text-center">
          <div className="w-8 h-8 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-gray-400">Loading course details...</p>
        </div>
      </div>
    )
  }

  // Rest of your component code remains the same, just replace any direct course.
  // access with the course state variable
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className={`transition-opacity duration-500 opacity-100`}>
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
                  <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
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
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-6 h-auto text-lg w-full sm:w-auto relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                    <span className="relative z-10">Enroll Now for {course.price}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                  </Button>
                  <span className="text-gray-400 animate-pulse-soft">30-Day Money-Back Guarantee</span>
                </div>
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

        {/* Course Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2
                className="text-2xl font-bold mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.4s", animationFillMode: "both" }}
              >
                What You'll Learn
              </h2>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {course.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 animate-fade-in-up transition-transform duration-300 hover:translate-y-[-2px] hover:bg-white/5 p-2 rounded-lg"
                    style={{ animationDelay: `${0.4 + index * 0.1}s`, animationFillMode: "both" }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              {/* Numbered Curriculum List */}
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
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="rounded-full h-8 w-8 p-0 bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                      <Play className="h-4 w-4" />
                                      <span className="sr-only">Play video</span>
                                    </Button>
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

              <h2
                className="text-2xl font-bold mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.8s", animationFillMode: "both" }}
              >
                Course Overview
              </h2>
              <div
                className="prose prose-invert max-w-none animate-fade-in-up"
                style={{ animationDelay: "0.9s", animationFillMode: "both" }}
              >
                <p>
                  Our {course.title} course is designed to provide you with comprehensive knowledge and practical skills
                  in {course.category.toLowerCase()}. Whether you're a beginner looking to learn the basics or an
                  experienced user wanting to enhance your skills, this course offers valuable insights and hands-on
                  experience.
                </p>
                <p>
                  Throughout the {course.duration} program, you'll work on real-world projects, receive personalized
                  feedback, and learn from industry experts. By the end of the course, you'll have a portfolio of work
                  and the confidence to apply your skills in professional settings.
                </p>
                <p>Join thousands of satisfied students who have transformed their careers with Plotit courses.</p>
              </div>
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

                <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white mb-4 relative overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20">
                  <span className="relative z-10">Enroll Now</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
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

