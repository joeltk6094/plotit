"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter, X, CheckCircle, Star, ArrowRight, ChevronDown, MapPin } from "lucide-react"
import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { routes } from "@/lib/routes"

// Teacher data
const teachers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Lead Instructor",
    specialty: "Web Development",
    rating: 4.9,
    reviews: 128,
    students: 1240,
    courses: 5,
    location: "New York, USA",
    image: "/placeholder.svg?height=400&width=400&text=Sarah",
    bio: "With over 10 years of experience in web development and education, Sarah specializes in making complex coding concepts accessible to learners of all ages.",
    expertise: ["JavaScript", "React", "Node.js", "HTML/CSS"],
    featured: true,
    available: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Instructor",
    specialty: "Mobile App Development",
    rating: 4.8,
    reviews: 96,
    students: 890,
    courses: 3,
    location: "San Francisco, USA",
    image: "/placeholder.svg?height=400&width=400&text=Michael",
    bio: "Michael is a mobile development expert with experience at top tech companies. He's passionate about teaching the next generation of app developers.",
    expertise: ["Swift", "Flutter", "React Native", "iOS Development"],
    featured: false,
    available: true,
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Language Instructor",
    specialty: "English Grammar",
    rating: 5.0,
    reviews: 156,
    students: 1450,
    courses: 4,
    location: "London, UK",
    image: "/placeholder.svg?height=400&width=400&text=Priya",
    bio: "Priya holds a Masters in English Literature and has taught English to students from over 30 countries. Her engaging teaching style makes grammar fun and accessible.",
    expertise: ["Grammar", "Pronunciation", "Business English", "IELTS Preparation"],
    featured: true,
    available: true,
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Music Instructor",
    specialty: "Piano & Keyboard",
    rating: 4.9,
    reviews: 112,
    students: 780,
    courses: 2,
    location: "Madrid, Spain",
    image: "/placeholder.svg?height=400&width=400&text=David",
    bio: "A classically trained pianist with a modern approach to teaching, David makes learning piano enjoyable for students of all ages and skill levels.",
    expertise: ["Classical Piano", "Jazz", "Music Theory", "Composition"],
    featured: false,
    available: false,
  },
  {
    id: 5,
    name: "Aisha Mohammed",
    role: "Software Instructor",
    specialty: "Microsoft Office",
    rating: 4.7,
    reviews: 89,
    students: 1120,
    courses: 3,
    location: "Dubai, UAE",
    image: "/placeholder.svg?height=400&width=400&text=Aisha",
    bio: "Aisha is a certified Microsoft Office specialist who excels at teaching productivity software to beginners and advanced users alike.",
    expertise: ["Excel", "Word", "PowerPoint", "Office 365"],
    featured: false,
    available: true,
  },
  {
    id: 6,
    name: "Carlos Mendez",
    role: "Engineering Instructor",
    specialty: "Civil Engineering",
    rating: 4.8,
    reviews: 76,
    students: 650,
    courses: 2,
    location: "Mexico City, Mexico",
    image: "/placeholder.svg?height=400&width=400&text=Carlos",
    bio: "With 15 years of field experience, Carlos brings practical knowledge to his teaching of surveying and civil engineering principles.",
    expertise: ["Chain Survey", "Structural Analysis", "AutoCAD", "Civil 3D"],
    featured: false,
    available: true,
  },
  {
    id: 7,
    name: "Emma Wilson",
    role: "Creative Instructor",
    specialty: "Digital Art",
    rating: 4.9,
    reviews: 104,
    students: 920,
    courses: 4,
    location: "Sydney, Australia",
    image: "/placeholder.svg?height=400&width=400&text=Emma",
    bio: "Emma is a professional digital artist who loves teaching others how to express their creativity through digital mediums.",
    expertise: ["Photoshop", "Illustrator", "Digital Painting", "Character Design"],
    featured: true,
    available: true,
  },
  {
    id: 8,
    name: "Hiroshi Tanaka",
    role: "Technology Instructor",
    specialty: "Data Science",
    rating: 4.8,
    reviews: 87,
    students: 760,
    courses: 3,
    location: "Tokyo, Japan",
    image: "/placeholder.svg?height=400&width=400&text=Hiroshi",
    bio: "Hiroshi combines his background in mathematics with programming to teach data science concepts in an approachable way.",
    expertise: ["Python", "Machine Learning", "Data Visualization", "Statistics"],
    featured: false,
    available: true,
  },
]

// Specialties for filtering
const specialties = ["All Specialties", ...Array.from(new Set(teachers.map((teacher) => teacher.specialty)))]

export default function TeachersPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSpecialty, setActiveSpecialty] = useState("All Specialties")
  const [showFilters, setShowFilters] = useState(false)
  const [availableOnly, setAvailableOnly] = useState(false)
  const [featuredOnly, setFeaturedOnly] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  // Filter teachers based on search, specialty, and other filters
  const filteredTeachers = teachers.filter((teacher) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.expertise.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()))

    // Specialty filter
    const matchesSpecialty = activeSpecialty === "All Specialties" || teacher.specialty === activeSpecialty

    // Availability filter
    const matchesAvailability = !availableOnly || teacher.available

    // Featured filter
    const matchesFeatured = !featuredOnly || teacher.featured

    return matchesSearch && matchesSpecialty && matchesAvailability && matchesFeatured
  })

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-20 animate-float"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-[150px] opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>

          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse-soft"></span>
                <span className="text-sm font-medium">Meet Our Expert Instructors</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white"
              >
                Learn from the Best <br />
                <span className="text-white">1,100+ Expert Teachers</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl"
              >
                Our instructors are industry professionals, passionate educators, and subject matter experts committed
                to helping you achieve your learning goals.
              </motion.p>

              {/* Search and Filter Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 mb-12"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <Input
                      type="text"
                      placeholder="Search by name, specialty, or skill..."
                      className="pl-10 bg-white/10 border-0 focus-visible:ring-pink-400 text-white"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={() => setShowFilters(!showFilters)}
                    className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-2"
                  >
                    <Filter size={18} />
                    Filters
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${showFilters ? "rotate-180" : ""}`}
                    />
                  </Button>
                </div>

                {/* Expandable Filters */}
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Specialty Filter */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Specialty</h3>
                        <div className="flex flex-wrap gap-2">
                          {specialties.map((specialty, index) => (
                            <Badge
                              key={specialty}
                              className={`${
                                activeSpecialty === specialty ? "bg-pink-500 text-white" : "bg-white/10 text-white"
                              } hover:bg-white/20 cursor-pointer transition-all duration-300 hover:scale-105`}
                              onClick={() => setActiveSpecialty(specialty)}
                            >
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Availability Filter */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Availability</h3>
                        <div
                          className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                            availableOnly ? "bg-green-500/20 text-green-400" : "bg-white/10"
                          }`}
                          onClick={() => setAvailableOnly(!availableOnly)}
                        >
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              availableOnly ? "bg-green-500" : "bg-white/20"
                            }`}
                          >
                            {availableOnly && <CheckCircle size={12} className="text-white" />}
                          </div>
                          <span>Available for new students</span>
                        </div>
                      </div>

                      {/* Featured Filter */}
                      <div>
                        <h3 className="text-sm font-medium text-gray-400 mb-3">Featured</h3>
                        <div
                          className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-colors duration-300 ${
                            featuredOnly ? "bg-yellow-500/20 text-yellow-400" : "bg-white/10"
                          }`}
                          onClick={() => setFeaturedOnly(!featuredOnly)}
                        >
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center ${
                              featuredOnly ? "bg-yellow-500" : "bg-white/20"
                            }`}
                          >
                            {featuredOnly && <CheckCircle size={12} className="text-white" />}
                          </div>
                          <span>Featured teachers only</span>
                        </div>
                      </div>
                    </div>

                    {/* Clear Filters */}
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-white"
                        onClick={() => {
                          setSearchQuery("")
                          setActiveSpecialty("All Specialties")
                          setAvailableOnly(false)
                          setFeaturedOnly(false)
                        }}
                      >
                        <X size={14} className="mr-1" />
                        Clear all filters
                      </Button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Teachers Grid Section */}
        <section className="py-12 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            {filteredTeachers.length > 0 ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">
                    {filteredTeachers.length} Teacher{filteredTeachers.length !== 1 && "s"} Found
                  </h2>
                  <div className="text-gray-400">
                    Showing {filteredTeachers.length} of {teachers.length} teachers
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                  {filteredTeachers.map((teacher) => (
                    <motion.div
                      key={teacher.id}
                      variants={itemVariants}
                      className={`bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-white/5 hover:translate-y-[-5px] group relative ${
                        teacher.featured ? "border border-yellow-500/30" : "border border-white/5"
                      }`}
                    >
                      {/* Featured Badge */}
                      {teacher.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <Badge className="bg-yellow-500 text-black font-medium">Featured</Badge>
                        </div>
                      )}

                      {/* Availability Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <Badge
                          className={`${
                            teacher.available ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {teacher.available ? "Available" : "Fully Booked"}
                        </Badge>
                      </div>

                      {/* Teacher Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={teacher.image || "/placeholder.svg"}
                          alt={teacher.name}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-xl font-bold text-white">{teacher.name}</h3>
                          <p className="text-gray-300 text-sm">{teacher.role}</p>
                        </div>
                      </div>

                      {/* Teacher Info */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 font-medium">{teacher.rating}</span>
                          </div>
                          <span className="text-gray-400 text-sm">({teacher.reviews} reviews)</span>
                          <span className="text-gray-400 mx-1">•</span>
                          <span className="text-gray-400 text-sm">{teacher.students} students</span>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                          <MapPin size={14} />
                          <span>{teacher.location}</span>
                        </div>

                        <p className="text-gray-300 text-sm mb-4 line-clamp-3">{teacher.bio}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-400 mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {teacher.expertise.map((skill) => (
                              <Badge key={skill} className="bg-white/10 text-white text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                          View Profile
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No teachers found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveSpecialty("All Specialties")
                    setAvailableOnly(false)
                    setFeaturedOnly(false)
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white"
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Become a Teacher CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl opacity-30"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Share Your Knowledge with the World</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join our community of expert instructors and help students achieve their learning goals. Become a Plotit
                teacher today.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8"
                >
                  Apply to Teach
                </Button>
                <Link
                  href={routes.contact}
                  className="inline-flex items-center gap-2 text-white hover:text-pink-400 transition-colors duration-300"
                >
                  <span>Learn more about teaching</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

