"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { routes } from "@/lib/routes"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      // Here you would typically send this to your API
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-[150px] opacity-10"></div>

      <div className="responsive-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="grid grid-cols-2 gap-1 mr-2">
                <div className="w-2 h-2 bg-white rounded-sm"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-green-400 rounded-sm"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-sm"></div>
              </div>
              <span className="font-bold text-xl">Plotit</span>
            </div>

            <p className="text-gray-400 mb-6">
              Empowering learners worldwide with cutting-edge courses in IT, languages, music, and software skills.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Email Us</p>
                  <a href="mailto:hello@plotit.com" className="text-white hover:text-pink-400 transition-colors">
                    hello@plotit.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Call Us</p>
                  <a href="tel:+1234567890" className="text-white hover:text-green-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-300">Location</p>
                  <p className="text-white">123 Learning St, Education City</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-pink-400 rounded-full mr-2"></span>
              Quick Links
            </h3>

            <ul className="space-y-3">
              {[
                { name: "Home", path: routes.home },
                { name: "About Us", path: routes.about },
                { name: "Courses", path: routes.courses.index },
                { name: "Contact", path: routes.contact },
                { name: "Blog", path: "#" },
                { name: "Careers", path: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="flex items-center text-gray-300 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-pink-400 mr-2 transition-transform duration-300 group-hover:translate-x-1" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Course Categories */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-green-400 rounded-full mr-2"></span>
              Course Categories
            </h3>

            <ul className="space-y-3">
              {[
                { name: "IT & Programming", path: routes.courses.detail("it") },
                { name: "Language Learning", path: routes.courses.detail("english-grammar") },
                { name: "Music & Arts", path: routes.courses.detail("piano") },
                { name: "Office Software", path: routes.courses.detail("word") },
                { name: "Professional Skills", path: "#" },
                { name: "View All Courses", path: routes.courses.index, highlight: true },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className={`flex items-center ${link.highlight ? "text-pink-400 font-medium" : "text-gray-300"} hover:text-white transition-colors group`}
                  >
                    <ChevronRight
                      className={`w-4 h-4 ${link.highlight ? "text-pink-400" : "text-green-400"} mr-2 transition-transform duration-300 group-hover:translate-x-1`}
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center">
              <span className="w-8 h-1 bg-blue-400 rounded-full mr-2"></span>
              Stay Updated
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on new courses, promotions, and educational content.
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border-0 focus-visible:ring-pink-400 text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  {subscribed ? "Sent!" : "Subscribe"}
                </Button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Thank you for subscribing!
                </motion.p>
              )}
            </form>

            <div>
              <h4 className="text-sm font-bold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, color: "hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500" },
                  { icon: Twitter, color: "hover:bg-blue-400" },
                  { icon: Facebook, color: "hover:bg-blue-600" },
                  { icon: Linkedin, color: "hover:bg-blue-700" },
                  { icon: Youtube, color: "hover:bg-red-600" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:text-white hover:scale-110`}
                    aria-label={`Follow us on ${social.icon.name}`}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500 rounded-full blur-[100px] opacity-10"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-white">
                  Explore, Learn, Master with Plotit
                </h2>
                <p className="text-gray-300 max-w-xl">
                  Join our community of learners and unlock your potential with our expert-led courses.
                </p>
              </div>

              <Link
                href={routes.courses.index}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 group whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">© {currentYear} Plotit. All rights reserved.</div>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" },
                { name: "Cookie Policy", path: "#" },
                { name: "Accessibility", path: "#" },
              ].map((link, index) => (
                <Link key={index} href={link.path} className="text-gray-400 hover:text-white transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

