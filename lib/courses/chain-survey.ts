import type { Course } from "./types"

export const chainSurvey: Course = {
  id: "chain-survey",
  title: "Chain Survey",
  slug: "chain-survey",
  category: "Engineering",
  color: "bg-yellow-400",
  description:
    "Learn the principles and practices of chain surveying for land measurement and mapping. Ideal for civil engineering and architecture students.",
  features: [
    "Surveying principles and equipment",
    "Field procedures and techniques",
    "Data recording and calculations",
    "Map preparation and plotting",
    "Error analysis and adjustments",
  ],
  duration: "8 weeks",
  level: "Intermediate",
  image: "/placeholder.svg?height=400&width=600",
  price: "$219",
  curriculum: [
    {
      id: 1,
      title: "Introduction to Surveying",
      items: [
        {
          id: 1,
          title: "Surveying Fundamentals",
          description: "Basic concepts and principles",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Chain Surveying Equipment",
          description: "Tools and instruments used in chain surveying",
          duration: "25 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Field Techniques",
      items: [
        {
          id: 1,
          title: "Field Procedures",
          description: "Step-by-step surveying process",
          duration: "40 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Taking Measurements",
          description: "Accurate measurement techniques",
          duration: "35 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Data Processing and Mapping",
      items: [
        {
          id: 1,
          title: "Calculations and Adjustments",
          description: "Processing field data",
          duration: "45 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Map Preparation",
          description: "Creating accurate survey maps",
          duration: "50 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

