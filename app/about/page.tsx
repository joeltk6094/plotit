"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, Users, Award, BookOpen, Code, Zap, ChevronDown } from "lucide-react"
import Header from "@/components/header"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState("mission")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header />

      <main className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-[150px] opacity-20 animate-float"></div>
          <div
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500 rounded-full blur-[120px] opacity-10 animate-pulse-soft"></div>

          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse-soft"></span>
                <span className="text-sm font-medium">Empowering Young Minds Since 2020</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white"
              >
                Shaping the Future <br />
                Through Code
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                At Plotit, we believe every child deserves the opportunity to become a creator of technology, not just a
                consumer. Our innovative approach makes coding accessible, engaging, and fun for children of all ages.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group flex items-center gap-2"
                >
                  Explore Our Courses
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-medium text-white hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-2">Scroll to discover</span>
            <ChevronDown className="h-6 w-6 text-gray-400 animate-bounce-subtle" />
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">5,000+</div>
                <div className="text-gray-400">Happy Students</div>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">20+</div>
                <div className="text-gray-400">Specialized Courses</div>
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">50+</div>
                <div className="text-gray-400">Expert Instructors</div>
              </motion.div>

              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-gray-400">Satisfaction Rate</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Tabs Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-400 text-lg">
                Learn more about our journey, mission, and the values that drive us forward.
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              {/* Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "mission"
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Our Mission
                </button>
                <button
                  onClick={() => setActiveTab("approach")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "approach"
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Our Approach
                </button>
                <button
                  onClick={() => setActiveTab("team")}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === "team"
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Our Team
                </button>
              </motion.div>

              {/* Tab Content */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12">
                {activeTab === "mission" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Empowering the Next Generation</h3>
                      <p className="text-gray-300 mb-6">
                        Our mission at Plotit is to empower children with the skills, knowledge, and confidence to
                        thrive in a digital world. We believe that coding is not just about programming; it's about
                        developing critical thinking, problem-solving abilities, and creativity.
                      </p>
                      <p className="text-gray-300 mb-6">
                        We're committed to making technology education accessible to all children, regardless of their
                        background or prior experience. By providing a supportive, engaging, and fun learning
                        environment, we aim to inspire a lifelong love of learning and innovation.
                      </p>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-1" />
                          <p>Fostering creativity and innovation through code</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-1" />
                          <p>Building confidence and resilience in problem-solving</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-pink-400 flex-shrink-0 mt-1" />
                          <p>Preparing children for the jobs of tomorrow</p>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=500"
                        alt="Children learning to code"
                        width={500}
                        height={400}
                        className="rounded-3xl relative z-10 w-full h-auto"
                      />
                    </div>
                  </motion.div>
                )}

                {activeTab === "approach" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                  >
                    <div className="order-2 md:order-1 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-3xl blur-xl"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=500"
                        alt="Our teaching approach"
                        width={500}
                        height={400}
                        className="rounded-3xl relative z-10 w-full h-auto"
                      />
                    </div>
                    <div className="order-1 md:order-2">
                      <h3 className="text-2xl font-bold mb-6">Learn by Doing, Create by Playing</h3>
                      <p className="text-gray-300 mb-6">
                        Our approach to teaching coding is hands-on, project-based, and fun. We believe that children
                        learn best when they're engaged and excited about what they're creating. That's why our
                        curriculum is designed to be interactive, creative, and relevant to children's interests.
                      </p>
                      <p className="text-gray-300 mb-6">
                        We use a variety of teaching methods, from visual block-based coding for beginners to text-based
                        programming for more advanced students. Our step-by-step approach ensures that children build a
                        strong foundation while being challenged to grow and explore.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-xl p-4 transition-transform duration-300 hover:translate-y-[-5px]">
                          <Code className="h-6 w-6 text-blue-400 mb-2" />
                          <h4 className="font-medium mb-1">Project-Based</h4>
                          <p className="text-sm text-gray-400">Learn through creating real projects</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 transition-transform duration-300 hover:translate-y-[-5px]">
                          <Users className="h-6 w-6 text-green-400 mb-2" />
                          <h4 className="font-medium mb-1">Collaborative</h4>
                          <p className="text-sm text-gray-400">Work together to solve problems</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 transition-transform duration-300 hover:translate-y-[-5px]">
                          <Zap className="h-6 w-6 text-yellow-400 mb-2" />
                          <h4 className="font-medium mb-1">Adaptive</h4>
                          <p className="text-sm text-gray-400">Personalized to each child's pace</p>
                        </div>
                        <div className="bg-white/10 rounded-xl p-4 transition-transform duration-300 hover:translate-y-[-5px]">
                          <BookOpen className="h-6 w-6 text-purple-400 mb-2" />
                          <h4 className="font-medium mb-1">Comprehensive</h4>
                          <p className="text-sm text-gray-400">Covers all aspects of coding</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "team" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold mb-6 text-center">Meet Our Expert Team</h3>
                    <p className="text-gray-300 mb-10 text-center max-w-3xl mx-auto">
                      Our team consists of passionate educators, experienced developers, and creative thinkers who are
                      dedicated to providing the best learning experience for your child.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="bg-white/10 rounded-2xl overflow-hidden transition-transform duration-300 hover:translate-y-[-5px] group"
                        >
                          <div className="h-48 bg-gradient-to-r from-pink-500/20 to-purple-500/20 relative">
                            <Image
                              src={`/placeholder.svg?height=200&width=300&text=Team Member ${i}`}
                              alt={`Team Member ${i}`}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="p-6">
                            <h4 className="font-bold text-lg mb-1">Sarah Johnson</h4>
                            <p className="text-pink-400 text-sm mb-3">Lead Instructor</p>
                            <p className="text-gray-400 text-sm">
                              With over 10 years of experience in education and technology, Sarah is passionate about
                              making coding accessible and fun for children of all ages.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 text-center">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
                      >
                        <span>Join Our Team</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto mb-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-gray-400 text-lg">The principles that guide everything we do at Plotit</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 backdrop-blur-sm rounded-3xl p-8 border border-pink-500/10 transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from our curriculum development to our teaching methods.
                  We're committed to providing the highest quality education for every child.
                </p>
              </motion.div>

              <motion.div
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/10 transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Inclusivity</h3>
                <p className="text-gray-300">
                  We believe that every child deserves the opportunity to learn coding. We're committed to creating an
                  inclusive environment where all children feel welcome, valued, and supported.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/10 transition-transform duration-300 hover:translate-y-[-5px]"
              >
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-300">
                  We're constantly innovating and improving our teaching methods and curriculum to ensure that our
                  students receive the most effective and engaging learning experience possible.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl opacity-30"></div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Child's Coding Journey?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of parents who have helped their children discover the joy of coding with Plotit.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/courses"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                >
                  Explore Our Courses
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-medium text-white hover:bg-white/20 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

