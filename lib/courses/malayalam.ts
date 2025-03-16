import type { Course } from "./types"

export const malayalam: Course = {
  id: "malayalam",
  title: "Malayalam",
  slug: "malayalam",
  category: "Language",
  color: "bg-red-400",
  description:
    "Learn to read, write, and speak Malayalam, the language of Kerala, India. This course covers vocabulary, grammar, and conversation skills.",
  features: [
    "Malayalam alphabet and pronunciation",
    "Basic vocabulary and phrases",
    "Grammar and sentence structure",
    "Reading and writing skills",
    "Conversational practice",
  ],
  duration: "16 weeks",
  level: "Beginner",
  image: "/placeholder.svg?height=400&width=600",
  price: "$229",
  curriculum: [
    {
      id: 1,
      title: "Malayalam Basics",
      items: [
        {
          id: 1,
          title: "Malayalam Alphabet",
          description: "Learning the script and pronunciation",
          duration: "40 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Basic Greetings and Phrases",
          description: "Essential expressions for beginners",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Grammar and Vocabulary",
      items: [
        {
          id: 1,
          title: "Nouns and Pronouns",
          description: "Understanding Malayalam nouns and their usage",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Verbs and Tenses",
          description: "Basic verb forms and tenses",
          duration: "45 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Practical Conversation",
      items: [
        {
          id: 1,
          title: "Everyday Conversations",
          description: "Common dialogues and situations",
          duration: "40 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Reading and Writing Practice",
          description: "Developing literacy skills",
          duration: "50 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

