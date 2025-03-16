import type { Course } from "./types"

export const wnescore: Course = {
  id: "wnescore",
  title: "Wnescore Music Notation Software",
  slug: "wnescore",
  category: "Music",
  color: "bg-purple-400",
  description:
    "Learn to use Wnescore to create professional music scores and compositions. Perfect for musicians, composers, and music teachers.",
  features: [
    "Music notation basics",
    "Score layout and formatting",
    "Instrument parts and transposition",
    "Playback and MIDI export",
    "Publishing and sharing your compositions",
  ],
  duration: "6 weeks",
  level: "Beginner to Advanced",
  image: "/placeholder.svg?height=400&width=600",
  price: "$179",
  curriculum: [
    {
      id: 1,
      title: "Introduction to Wnescore",
      items: [
        {
          id: 1,
          title: "Getting Started with Wnescore",
          description: "Interface overview and basic concepts",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Creating Your First Score",
          description: "Setting up a new composition",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Basic Notation Techniques",
      items: [
        {
          id: 1,
          title: "Note Entry Methods",
          description: "Different ways to input notes",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Rhythms and Time Signatures",
          description: "Working with different rhythmic patterns",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Advanced Notation",
      items: [
        {
          id: 1,
          title: "Articulations and Dynamics",
          description: "Adding expressive markings to your score",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Layout and Formatting",
          description: "Professional score presentation",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

