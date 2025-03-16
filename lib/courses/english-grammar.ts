import type { Course } from "./types"

export const englishGrammar: Course = {
  id: "english-grammar",
  title: "English Grammar",
  slug: "english-grammar",
  category: "Language",
  color: "bg-blue-400",
  description:
    "Build a strong foundation in English grammar with our comprehensive course. Perfect for students looking to improve their writing and speaking skills.",
  features: [
    "Parts of speech and sentence structure",
    "Verb tenses and usage",
    "Punctuation and capitalization",
    "Common grammatical errors",
    "Academic writing skills",
  ],
  duration: "12 weeks",
  level: "All Levels",
  image: "/placeholder.svg?height=400&width=600",
  price: "$199",
  curriculum: [
    {
      id: 1,
      title: "Fundamentals of English Grammar",
      items: [
        {
          id: 1,
          title: "Parts of Speech",
          description: "Nouns, verbs, adjectives, and adverbs",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Sentence Structure",
          description: "Building effective sentences",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Subject-Verb Agreement",
          description: "Ensuring proper agreement in your writing",
          duration: "20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Verb Tenses and Forms",
      items: [
        {
          id: 1,
          title: "Present Tenses",
          description: "Simple, continuous, and perfect forms",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Past Tenses",
          description: "Simple, continuous, and perfect forms",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Future Tenses",
          description: "Different ways to express future actions",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Punctuation and Writing",
      items: [
        {
          id: 1,
          title: "Commas, Semicolons, and Colons",
          description: "Using punctuation effectively",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Quotation Marks and Apostrophes",
          description: "Proper usage in writing",
          duration: "20 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Common Writing Mistakes",
          description: "Avoiding frequent grammatical errors",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

