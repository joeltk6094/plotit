import type { Course } from "./types"

export const wnescore: Course = {
  id: "wnescore",
  title: "Learn Piano, Musical Keyboard from Scratch",
  slug: "wnescore",
  category: "Music",
  color: "bg-orange-400",
  description:
    "A beginner‑friendly course covering piano basics, music theory, playing techniques, and practice methods—with lifetime access, assignments, downloadable resources, and optional one-on-one support.",
  features: [
    "4.5 hours of on‑demand video",
    "18 downloadable resources",
    "Assignments & certificate of completion",
    "Lifetime access on mobile & TV",
    "Optional one‑on‑one video call help",
  ],
  duration: "4.5 hours",  // as stated in course info :contentReference[oaicite:1]{index=1}
  level: "Beginner",
  image: "/placeholder.svg?height=400&width=600",
  price: "₹589 (82% off)",  // typical sale price :contentReference[oaicite:2]{index=2}
  link: "https://www.udemy.com/course/learnpiano/?couponCode=ST16MT230625G1",
  curriculum: [
    {
      id: 1,
      title: "Introduction & Course Overview",
      items: [
        {
          id: 1,
          title: "Welcome & Course Goals",
          description: "Introduction by Paul Plotit and what you'll learn",
          duration: "≈10 min",
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
          title: "Posture & Hand Technique",
          description: "Proper sitting position and hand placement",
          duration: "≈20 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Reading Notes & Keyboard Layout",
          description: "Learn note names, octaves, and basic notation",
          duration: "≈30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Practice & Performance",
      items: [
        {
          id: 1,
          title: "Playing First Songs & Practice Tips",
          description: "Beginner pieces and routine-building techniques",
          duration: "≈30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Assignments & Personalized Help",
          description: "Exercises plus option for one‑on‑one sessions",
          duration: "≈15 min",
          hasVideo: true,
        },
      ],
    },
  ],
}
