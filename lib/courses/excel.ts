import type { Course } from "./types"

export const excel: Course = {
  id: "excel",
  title: "MS Office 365 Excel - MY",
  slug: "excel",
  category: "Productivity",
  color: "bg-green-500",
  description:
    "Become an Excel power user with our comprehensive course. Learn formulas, functions, data analysis, and visualization techniques.",
  features: [
    "Formulas and functions",
    "Data analysis and PivotTables",
    "Charts and data visualization",
    "Macros and VBA basics",
    "Financial modeling",
  ],
  duration: "6 weeks",
  level: "Beginner to Advanced",
  image: "/placeholder.svg?height=400&width=600",
  price: "$169",
  curriculum: [
    {
      id: 1,
      title: "Excel Basics",
      items: [
        {
          id: 1,
          title: "Getting Started with Excel",
          description: "Interface overview and basic operations",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Data Entry and Formatting",
          description: "Working with cells and formatting options",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Formulas and Functions",
      items: [
        {
          id: 1,
          title: "Basic Formulas",
          description: "Creating calculations in Excel",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Advanced Functions",
          description: "VLOOKUP, IF, and other powerful functions",
          duration: "40 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Data Analysis",
      items: [
        {
          id: 1,
          title: "PivotTables",
          description: "Analyzing data with PivotTables",
          duration: "45 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Charts and Visualizations",
          description: "Creating effective data visualizations",
          duration: "35 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

