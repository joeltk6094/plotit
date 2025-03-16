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
} from "lucide-react";
import Header from "@/components/header";
import KidsEducationSection from "@/components/kids-education-section";
import PopularCourses from "@/components/popular-courses";
import { routes } from "@/lib/routes";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="responsive-container py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 min-h-screen">
              <h1 className="text-fluid-5xl font-bold leading-tight mb-6 md:mb-8 lg:mb-10">
                Where Knowledge{" "}
                <span className="inline-flex items-center">
                  <span className="inline-block w-12 h-12 bg-pink-300 rounded-full mx-2"></span>
                </span>{" "}
                Meets,
                <br />
                Skills{" "}
                <span className="inline-flex items-center">
                  <span className="inline-block w-12 h-12 bg-yellow-300 rounded-full mx-2 rotate-45"></span>
                </span>{" "}
                Evolve
              </h1>

              <div className="mt-8">
                <p className="text-gray-400 text-fluid-lg">
                  From <span className="text-white">Learning</span> to{" "}
                  <span className="text-white">Mastering</span>
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href={routes.courses.index}
                  className="px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-medium text-fluid-base text-white hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 inline-flex items-center gap-2"
                >
                  Explore Courses
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-end justify-start">
              <div className="flex gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-pink-300 rounded-full flex items-center justify-center">
                  <FileText
                    size={20}
                    className="md:h-6 md:w-6 lg:h-8 lg:w-8 text-black"
                  />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Zap
                    size={20}
                    className="md:h-6 md:w-6 lg:h-8 lg:w-8 text-black"
                  />
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gray-300 rounded-full flex items-center justify-center">
                  <Clock
                    size={20}
                    className="md:h-6 md:w-6 lg:h-8 lg:w-8 text-black"
                  />
                </div>
              </div>

              <div className="text-right">
                <p className="font-medium text-fluid-lg">
                  Discover, Learn, Excel:
                </p>
                <p className="font-medium text-fluid-lg">The Plotit Way!</p>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 mt-12 md:mt-16 lg:mt-20">
            {/* Teacher Card */}
            <div className="lg:col-span-3 bg-pink-200 rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 left-0 h-full">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-0 right-0 w-full h-full text-red-400 opacity-20"
                >
                  <path
                    fill="currentColor"
                    d="M44.9,-76.2C59.7,-69.7,74.4,-60.4,81.9,-46.6C89.4,-32.8,89.7,-14.4,85.8,1.9C82,18.2,74,32.4,64.4,44.7C54.8,57,43.6,67.5,30.2,73.2C16.8,78.9,1.2,79.8,-14.4,77.3C-30,74.8,-45.6,68.9,-58.3,58.7C-71,48.5,-80.8,34,-85.2,17.8C-89.6,1.6,-88.6,-16.3,-81.9,-31.1C-75.2,-45.9,-62.8,-57.6,-48.6,-64.2C-34.4,-70.8,-18.4,-72.3,-1.9,-69.3C14.6,-66.3,30.1,-82.7,44.9,-76.2Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 bg-white rounded-full overflow-hidden flex items-center justify-center">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
                </div>
                <div>
                  <div className="font-bold text-black text-sm">
                    Best Teacher
                  </div>
                  <div className="text-black text-xs">Of The Year</div>
                </div>
                <div className="ml-auto">
                  <ArrowRight size={16} className="text-black" />
                </div>
              </div>

              <div className="absolute top-4 right-4 z-10">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <Bell size={16} className="text-black" />
                </div>
              </div>

              <div className="mt-auto relative z-10">
                <h3 className="text-black text-xl md:text-2xl lg:text-fluid-2xl font-bold mb-2 md:mb-3">
                  Expert Instructors Guiding Your Learning Journey!
                </h3>
                <p className="text-black text-sm md:text-base lg:text-fluid-base">
                  Dedicated mentors across IT, languages, music, and more
                </p>
              </div>
            </div>

            {/* Main Feature Card */}
            <div className="lg:col-span-6 bg-white rounded-3xl overflow-hidden">
              <div className="p-6 text-black">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-500 text-sm">
                    &lt;&lt; About &gt;&gt;
                  </div>
                  <div className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center">
                    <FileText size={16} className="text-gray-500" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-fluid-3xl font-bold mb-4 md:mb-6">
                  Diverse Learning Paths
                  <br />
                  For Every Passion
                </h2>

                <div className="flex gap-2">
                  <div className="px-4 py-1 border border-gray-300 rounded-full text-sm">
                    Popular
                  </div>
                  <Link
                    href={routes.courses.index}
                    className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300"
                  >
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="h-64 bg-gradient-to-r from-orange-400 to-pink-400 relative">
                <Image
                  src="/placeholder.svg?height=300&width=600"
                  alt="Students learning various subjects"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-opacity duration-300">
                    <MessageCircle size={16} className="text-gray-700" />
                  </button>
                  <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-opacity duration-300">
                    <FileText size={16} className="text-gray-700" />
                  </button>
                  <button className="w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-opacity duration-300">
                    <Zap size={16} className="text-gray-700" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                  <Plus size={16} className="text-black" />
                </button>
                <Link
                  href={routes.courses.index}
                  className="px-4 py-1 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-colors duration-300"
                >
                  Explore Courses
                </Link>
              </div>

              <div className="bg-green-100 rounded-3xl p-6 flex-1 relative">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-black font-bold text-lg md:text-xl lg:text-fluid-xl">
                    Smart Academy
                  </h3>
                  <button className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    <Heart size={14} className="text-black" />
                  </button>
                </div>

                <div className="relative h-40">
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-medium">IT</span>
                  </div>

                  <div className="absolute bottom-12 left-16 w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-medium rotate-45">
                      Language
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-0 w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-medium -rotate-45">
                      Music
                    </span>
                  </div>

                  <div className="absolute top-0 right-8 w-16 h-16 bg-pink-200 rounded-full flex items-center justify-center">
                    <span className="text-black text-xs font-medium">
                      Software
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4">
                  <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300">
                    <MessageCircle size={16} className="text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <KidsEducationSection />
        <PopularCourses />
      </main>
    </div>
  );
}
