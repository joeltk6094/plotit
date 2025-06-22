import type { Course } from "./types"

export const excel: Course = {
  id: "excel",
  title: "Mastering Microsoft Excel (Malayalam)",
  slug: "excel",
  category: "Productivity",
  color: "bg-green-500",
  description:
    "Learn Microsoft Excel in Malayalam—from basics to advanced—covering formulas, functions, charts, PivotTables, data entry, automation, and real-world practice, with lifetime access and certificate.",
  features: [
    "Formulas & functions (SUM, IF, VLOOKUP, etc.)",
    "PivotTables & charts for data analysis",
    "Data entry, formatting & validation",
    "Introduction to Macros & automation",
    "Real-world examples & downloadable files",
  ],
  duration: "≈4 hours", 
  level: "Beginner to Advanced",
  image: "/placeholder.svg?height=400&width=600",
  price: "₹479 (77% off)", 
  link:
    "https://www.udemy.com/course/plotit_excel/?couponCode=ST16MT230625G1",
  curriculum: [
    {
      id: 1,
      title: "Excel Basics",
      items: [
        {
          id: 1,
          title: "Getting Started with Excel",
          description: "Interface overview, cell entry, basic formatting",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Data Entry & Formatting",
          description: "Cells, rows/columns, number formats & styles",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Formulas & Functions",
      items: [
        {
          id: 1,
          title: "Basic Formulas",
          description: "SUM, AVERAGE, COUNT, MIN/MAX, relative & absolute references",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Advanced Functions",
          description: "VLOOKUP, IF, COUNTIF, SUMIF, and date functions",
          duration: "40 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Data Analysis & Visualization",
      items: [
        {
          id: 1,
          title: "PivotTables",
          description: "Creating and customizing PivotTables for insights",
          duration: "45 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Charts & Visualizations",
          description: "Building charts and formatting for clear data visuals",
          duration: "35 min",
          hasVideo: true,
        },
      ],
    },
  ],
}
