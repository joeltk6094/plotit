import type { Course } from "./types"

export const it: Course = {
  id: "it",
  title: "Information Technology",
  slug: "it",
  category: "Tech",
  color: "bg-green-400",
  description:
    "Gain a comprehensive understanding of information technology fundamentals. This course covers hardware, software, networking, and cybersecurity basics.",
  features: [
    "Computer hardware and software",
    "Networking fundamentals",
    "Cybersecurity principles",
    "Database management",
    "IT troubleshooting",
  ],
  duration: "10 weeks",
  level: "Beginner",
  image: "/placeholder.svg?height=400&width=600",
  price: "$249",
  curriculum: [
    {
      id: 1,
      title: "IT Fundamentals",
      items: [
        {
          id: 1,
          title: "Introduction to Information Technology",
          description: "Overview of IT concepts and career paths",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Computer Hardware Basics",
          description: "Understanding computer components and systems",
          duration: "45 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Software and Operating Systems",
      items: [
        {
          id: 1,
          title: "Operating System Fundamentals",
          description: "Windows, macOS, and Linux basics",
          duration: "40 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Software Applications",
          description: "Common software categories and usage",
          duration: "35 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Networking and Security",
      items: [
        {
          id: 1,
          title: "Networking Basics",
          description: "Understanding network types and protocols",
          duration: "50 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Cybersecurity Fundamentals",
          description: "Protecting systems and data",
          duration: "45 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

