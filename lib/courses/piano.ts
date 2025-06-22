import type { Course } from "./types"

export const piano: Course = {
  id: "learn-piano-plotit",
  title: "Learn Piano, Musical Keyboard from Scratch",
  slug: "learn-piano-plotit",
  category: "Music",
  color: "bg-orange-400",
  description:
    "A beginner-friendly course covering piano basics, music theory, playing techniques, and practice methods—with lifetime access and one-on-one support options.",
  features: [
    "4.5 hours of on-demand video",
    "18 downloadable resources",
    "Full lifetime access on mobile & TV",
    "Assignments & certificate",
    "Personalized help via video calls",
  ],
  duration: "≈4.5 hours", // exact total from Udemy page :contentReference[oaicite:1]{index=1}
  level: "Beginner",
  image: "/placeholder.svg?height=400&width=600", // replace with official thumbnail if available
  price: "₹589 (82% off)", // typical Udemy sale price; update as appropriate
  link:
    "https://www.udemy.com/course/learnpiano/?couponCode=ST16MT230625G1",
  curriculum: [
    {
      id: 1,
      title: "Introduction & Basics",
      items: [
        {
          id: 1,
          title: "Getting Started",
          description:
            "Welcome message, course goals, and introducing piano basics",
          duration: "10 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Piano Basics",
      items: [
        {
          id: 1,
          title: "Posture & Technique",
          description: "Proper sitting position and hand technique",
          duration: "20 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Reading Notes & Keyboard Layout",
          description:
            "Learning notes, octaves, and basic music notation",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Practice, Songs & Support",
      items: [
        {
          id: 1,
          title: "First Songs & Practice Tips",
          description:
            "Beginner pieces and techniques to build practice habits",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Assignments & One-on-One Help",
          description:
            "Exercises and option for personal video call support",
          duration: "15 min",
          hasVideo: true,
        },
      ],
    },
  ],
}
