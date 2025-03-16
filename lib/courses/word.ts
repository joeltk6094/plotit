import type { Course } from "./types"

export const word: Course = {
  id: "word",
  title: "MS Office 365 Word - MY",
  slug: "word",
  category: "Productivity",
  color: "bg-blue-500",
  description:
    "Master Microsoft Word with our comprehensive course. Learn to create professional documents, reports, and more with this essential productivity tool.",
  features: [
    "Document formatting and styles",
    "Tables, charts, and graphics",
    "Mail merge and templates",
    "Collaboration and review tools",
    "Advanced automation with macros",
  ],
  duration: "4 weeks",
  level: "Beginner to Intermediate",
  image: "/placeholder.svg?height=400&width=600",
  price: "$149",
  curriculum: [
    {
      id: 1,
      title: "Word Basics",
      items: [
        {
          id: 1,
          title: "Getting Started with Word",
          description: "Interface overview and basic operations",
          duration: "20 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Document Creation and Formatting",
          description: "Creating and formatting your first document",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Working with Text",
          description: "Text editing, formatting, and styles",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Advanced Document Features",
      items: [
        {
          id: 1,
          title: "Tables and Lists",
          description: "Creating and formatting tables and lists",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Graphics and SmartArt",
          description: "Adding visual elements to documents",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Headers, Footers, and Page Layout",
          description: "Professional document layout techniques",
          duration: "20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Professional Document Tools",
      items: [
        {
          id: 1,
          title: "Templates and Themes",
          description: "Using and creating document templates",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Mail Merge",
          description: "Creating personalized mass mailings",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Collaboration and Review",
          description: "Working with others on documents",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

