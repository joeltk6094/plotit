import type { Course } from "./types"

export const englishGrammar: Course = {
  id: "english-grammar-ml",
  title: "ഇംഗ്ലീഷ് ഗ്രാമർ (English Grammar–Malayalam)",
  slug: "english-grammar-ml",
  category: "Language",
  color: "bg-blue-400",
  description:
    "A Malayalam‑language introduction to English grammar—covering parts of speech, basic tenses, with practical everyday examples, quizzes and downloadable notes. Perfect for beginners aiming to improve speaking and writing in English.",
  features: [
    "Taught in Malayalam by Paul Plotit",
    "Covers parts of speech & basic English tenses",
    "500+ daily conversational examples",
    "Quiz exercises included",
    "Lifetime access & certificate of completion",
  ],
  duration: "≈4 hours",          // total video: ~3 h 50 min :contentReference[oaicite:1]{index=1}
  level: "Level 1 (Beginner)",   // from “Level 1” :contentReference[oaicite:2]{index=2}
  image: "/placeholder.svg?height=400&width=600", // replace when you have official thumbnail
  price: "₹479 (77% off)",  // current sale price :contentReference[oaicite:3]{index=3}
  link:
    "https://www.udemy.com/course/plotitenglishgrammar/?couponCode=ST16MT230625G1",
  curriculum: [
    {
      id: 1,
      title: "Introduction",
      items: [
        {
          id: 1,
          title: "Parts of Speech",
          description: "Introduction to eight parts of speech in English",
          duration: "~1 h 40 min", // from section details :contentReference[oaicite:4]{index=4}
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Tenses",
      items: [
        {
          id: 1,
          title: "Present, Past & Future Tenses",
          description: "Basic forms of English tenses (simple, continuous, perfect)",
          duration: "≈1 h", 
          hasVideo: true,
        },
      ],
    },
  ],
}
