import type { Course } from "./types"

export const piano: Course = {
  id: "piano",
  title: "Piano & Keyboard",
  slug: "piano",
  category: "Music",
  color: "bg-orange-400",
  description:
    "Learn to play piano and keyboard from scratch. This course covers music theory, technique, and repertoire for beginners to intermediate players.",
  features: [
    "Piano technique and posture",
    "Music theory and notation",
    "Scales, chords, and arpeggios",
    "Repertoire from various genres",
    "Performance skills and practice methods",
  ],
  duration: "12 weeks",
  level: "Beginner to Intermediate",
  image: "/placeholder.svg?height=400&width=600",
  price: "$259",
  curriculum: [
    {
      id: 1,
      title: "Piano Fundamentals",
      items: [
        {
          id: 1,
          title: "Introduction to the Piano",
          description: "Understanding the instrument and proper posture",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Basic Music Notation",
          description: "Reading notes and rhythms",
          duration: "35 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Playing Techniques",
      items: [
        {
          id: 1,
          title: "Finger Exercises",
          description: "Developing finger strength and independence",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Scales and Chords",
          description: "Basic scales and chord progressions",
          duration: "40 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Repertoire and Performance",
      items: [
        {
          id: 1,
          title: "Beginning Pieces",
          description: "Simple songs for beginners",
          duration: "45 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Performance Techniques",
          description: "Expressing yourself through music",
          duration: "35 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

