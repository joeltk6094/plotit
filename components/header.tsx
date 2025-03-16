"use client"

import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  MessageCircle,
  Search,
  ChevronDown,
  Video,
  BookOpen,
  FileSpreadsheet,
  Music,
  Ruler,
  Languages,
  Piano,
  Laptop,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import MobileMenu from "./mobile-menu"
import { courses } from "@/lib/courses"
import { routes, getRoute } from "@/lib/routes"
import Image from "next/image"

// Then, add a function to get the appropriate icon for each course
// Add this function before the Header component
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

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Handle scroll effect for header
  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent hydration errors by only rendering client-specific content after mounting
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 py-4 bg-transparent">
        <div className="responsive-container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link href={routes.home} className="text-white flex items-center">
              <div className="relative w-24 h-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/670041_4219617713004c539724ebff34a68a07~mv2-JSwS8hpC4AFFPrNdIqJs0BjJqcPWfF.png"
                  alt="Plotit Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Simplified navigation for SSR */}
            <nav className="hidden md:flex gap-3 lg:gap-4 xl:gap-5">
              <Link
                href={routes.about}
                className="bg-white text-black rounded-full px-4 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 text-sm md:text-base lg:text-fluid-base font-medium"
              >
                <span className="relative z-10">About</span>
              </Link>
              <button className="bg-white text-black rounded-full px-4 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 text-sm md:text-base lg:text-fluid-base font-medium flex items-center gap-1">
                <span className="relative z-10">Courses Library</span>
                <ChevronDown className="h-4 w-4 relative z-10" />
              </button>
              <Link
                href={routes.contact}
                className="bg-white text-black rounded-full px-4 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 text-sm md:text-base lg:text-fluid-base font-medium"
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </nav>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <div className="responsive-container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link href={routes.home} className="text-white flex items-center group">
            <div className="relative w-24 h-8 transition-transform duration-300 group-hover:scale-110">
              {/* Logo Container */}
              {/* <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/670041_4219617713004c539724ebff34a68a07~mv2-JSwS8hpC4AFFPrNdIqJs0BjJqcPWfF.png"
                  alt="Plotit Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  priority
                />
              </div> */}
              {/* Hover State Logo */}
            
              <div className="flex items-center gap-2">
          <Link href={routes.home} className="text-white flex items-center group">
            <div className="grid grid-cols-2 gap-1 mr-2 transition-transform duration-300 group-hover:rotate-180">
              <div className="w-2 h-2 bg-white rounded-sm transition-colors duration-300 group-hover:bg-pink-300"></div>
              <div className="w-2 h-2 bg-white rounded-sm transition-colors duration-300 group-hover:bg-yellow-300"></div>
              <div className="w-2 h-2 bg-white rounded-sm transition-colors duration-300 group-hover:bg-green-300"></div>
              <div className="w-2 h-2 bg-white rounded-sm transition-colors duration-300 group-hover:bg-blue-300"></div>
            </div>
            <span className="font-bold text-lg relative overflow-hidden group-hover:text-transparent transition-colors duration-300">
              <span className="absolute inset-0 text-white group-hover:translate-y-0 translate-y-full transition-transform duration-300">
                Plotit
              </span>
              <span className="absolute inset-0 text-transparent group-hover:text-white group-hover:-translate-y-full translate-y-0 transition-transform duration-300">
                Plotit
              </span>
              Plotit
            </span>
          </Link>
        </div>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-3 lg:gap-4 xl:gap-5">
            <Link
              href={routes.about}
              className={`bg-white text-black rounded-full px-4 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 text-sm md:text-base lg:text-fluid-base font-medium relative overflow-hidden group hover:bg-opacity-90 transition-colors duration-300 ${
                pathname === routes.about ? "bg-pink-500 text-white" : ""
              }`}
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></span>
            </Link>

            {/* Course Library Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`bg-white text-black rounded-full px-4 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 text-sm md:text-base lg:text-fluid-base font-medium flex items-center gap-1 relative overflow-hidden group hover:bg-opacity-90 transition-colors duration-300 ${
                    pathname.startsWith(routes.courses.index) ? "bg-pink-500 text-white" : ""
                  }`}
                >
                  <span className="relative z-10">Courses Library</span>
                  <ChevronDown className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                  <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 bg-black/95 border border-white/20 text-white rounded-xl shadow-xl backdrop-blur-sm animate-fade-in-down">
                <DropdownMenuLabel className="text-gray-400 font-normal">
                  <div className="flex items-center justify-between">
                    <span>Available Courses</span>
                    <Link
                      href={routes.courses.index}
                      className="text-xs text-pink-400 hover:text-pink-300 transition-colors duration-300"
                    >
                      View All
                    </Link>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuGroup>
                  {courses.slice(0, 6).map((course, index) => (
                    <CourseMenuItem
                      key={course.id}
                      title={course.title}
                      category={course.category}
                      color={course.color}
                      href={getRoute(routes.courses.detail, course.slug)}
                      slug={course.slug}
                      delay={index * 0.05}
                    />
                  ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="cursor-pointer focus:bg-white/10 focus:text-white">
                  <Link href={routes.contact} className="flex items-center justify-center w-full py-1">
                    <span className="text-pink-400 font-medium hover:text-pink-300 transition-colors duration-300">
                      Register for a Course
                    </span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href={routes.contact}
              className={`bg-white text-black rounded-full px-4 py-1 md:px-5 md:py-1.5 lg:px-6 lg:py-2 text-sm md:text-base lg:text-fluid-base font-medium relative overflow-hidden group hover:bg-opacity-90 transition-colors duration-300 ${
                pathname === routes.contact ? "bg-pink-500 text-white" : ""
              }`}
            >
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full"></span>
            </Link>
          </nav>

          <Link
            href="/teachers"
            className="flex items-center bg-white text-black rounded-full px-3 py-1 md:px-4 md:py-2 lg:px-5 lg:py-2.5 group hover:bg-opacity-90 transition-colors duration-300"
          >
            <div className="flex -space-x-2 mr-2 relative">
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-blue-400 border-2 border-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-green-400 border-2 border-white transition-transform duration-300 group-hover:translate-y-1"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-yellow-400 border-2 border-white transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            </div>
            <span className="text-xs md:text-sm lg:text-base font-medium">+1.1k teachers</span>
          </Link>

          <button
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
            onClick={() => alert("Chat feature coming soon!")}
          >
            <MessageCircle
              size={18}
              className="md:h-5 md:w-5 lg:h-6 lg:w-6 transition-transform duration-300 hover:scale-110"
            />
          </button>

          <button
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-300 hover:scale-110"
            onClick={() => alert("Search feature coming soon!")}
          >
            <Search
              size={18}
              className="md:h-5 md:w-5 lg:h-6 lg:w-6 transition-transform duration-300 hover:scale-110"
            />
          </button>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function CourseMenuItem({
  title,
  category,
  color,
  href,
  slug,
  delay = 0,
}: {
  title: string
  category: string
  color: string
  href: string
  slug: string
  delay?: number
}) {
  return (
    <DropdownMenuItem asChild>
      <Link
        href={href}
        className="flex items-center gap-3 px-3 py-2 cursor-pointer focus:bg-white/10 focus:text-white hover:bg-white/10 rounded-lg transition-all duration-300 animate-fade-in-up"
        style={{ animationDelay: `${delay}s`, animationFillMode: "both" }}
      >
        {/* <div className={`w-2 h-10 ${color} rounded-full transition-all duration-300 group-hover:h-12`}></div> */}
        <div className="flex items-center gap-2 flex-1">
          <div className="bg-white/10 rounded-full p-1.5">{getCourseIcon(slug)}</div>
          <div>
            <div className="font-medium">{title}</div>
            <div className="text-xs text-gray-400">{category}</div>
          </div>
        </div>
      </Link>
    </DropdownMenuItem>
  )
}

