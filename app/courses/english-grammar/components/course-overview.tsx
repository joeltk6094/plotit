"use client"
import { CheckCircle } from "lucide-react"
import type { Course } from "@/lib/courses/types"

interface CourseOverviewProps {
  course: Course
}

export default function CourseOverview({ course }: CourseOverviewProps) {
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
    <div>
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
          Our {course.title} course is designed to provide you with comprehensive knowledge and practical skills in{" "}
          {course.category.toLowerCase()}. Whether you're a beginner looking to learn the basics or an experienced user
          wanting to enhance your skills, this course offers valuable insights and hands-on experience.
        </p>
        <p>
          Throughout the {course.duration} program, you'll work on real-world examples, receive personalized feedback,
          and learn from language experts. By the end of the course, you'll have a strong foundation in English grammar
          and the confidence to communicate effectively in both written and spoken English.
        </p>
        <p>Join thousands of satisfied students who have improved their language skills with Plotit courses.</p>
      </div>
    </div>
  )
}

