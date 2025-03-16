export type CurriculumItem = {
  id: number
  title: string
  description: string
  duration: string
  hasVideo: boolean
}

export type CourseSection = {
  id: number
  title: string
  items: CurriculumItem[]
}

export type Course = {
  id: string
  title: string
  slug: string
  category: string
  color: string
  description: string
  features: string[]
  duration: string
  level: string
  image: string
  price?: string
  curriculum: CourseSection[]
}

