"use client"
import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  MessageCircle,
  ArrowRight,
  Clock,
  FileText,
  Zap,
  Plus,
  Heart,
  Globe,
  MessageCircleMore,
} from "lucide-react";
import Header from "@/components/header";
import KidsEducationSection from "@/components/kids-education-section";
import PopularCourses from "@/components/popular-courses";
import { routes } from "@/lib/routes";
import { useState } from "react";

import { Menu, X, BookOpen, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button";
export default function Home() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
     <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 lg:pt-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6">
          Master New Skills<br />
          with <span className="text-teal-400">Online</span> Courses
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed px-2">
          Learn at your pace, from the best instructors, and earn certificates that matter.
        </p>
        <p className="text-gray-400 text-sm mb-8">10,000+ students already learning with PLOTIT</p>
        <Button  className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:scale-105">
          Explore Courses
          <ArrowRight className="h-5 w-5" />
        </Button>

        <div className="relative max-w-5xl mx-auto mt-12">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300">
            <img
              src="/46836.jpg"
              alt="PLOTIT Course Dashboard Preview"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="courses" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Why Choose PLOTIT?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to master new skills and advance your knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="text-center p-8 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Courses</h3>
              <p className="text-gray-300">
                50+ courses from English, Music, Coding & Productivity to boost your skills
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center p-8 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-300">
                Learn from top professionals passionate about teaching and mentoring
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center p-8 rounded-lg bg-gray-800/40 backdrop-blur-sm border border-gray-700 hover:bg-gray-800/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-teal-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certified Learning</h3>
              <p className="text-gray-300">
                Earn certificates to showcase your skills and boost your career prospects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real feedback from learners who transformed their skills
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700 text-gray-300 hover:scale-105 transition-all duration-300">
              <p>"The English course improved my confidence drastically!"</p>
              <p className="mt-4 font-semibold text-teal-400">– Rahul S.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700 text-gray-300 hover:scale-105 transition-all duration-300">
              <p>"I finally learned piano online without leaving my home!"</p>
              <p className="mt-4 font-semibold text-teal-400">– Priya M.</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-800/40 border border-gray-700 text-gray-300 hover:scale-105 transition-all duration-300">
              <p>"Great instructors and hands-on exercises. Loved it!"</p>
              <p className="mt-4 font-semibold text-teal-400">– Aman K.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
        <Button className="bg-teal-400 text-black hover:bg-teal-500 px-8 py-4 text-lg font-medium rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:scale-105">
          Explore Courses
          <ArrowRight className="h-5 w-5" />
        </Button>
      </section>
    </div>
  );
}
