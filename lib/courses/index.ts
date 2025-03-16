import type { Course } from "./types"
import { finalCutPro } from "./final-cut-pro"
import { englishGrammar } from "./english-grammar"
import { word } from "./word"
import { wnescore } from "./wnescore"
import { it } from "./it"
import { excel } from "./excel"
import { chainSurvey } from "./chain-survey"
import { malayalam } from "./malayalam"
import { piano } from "./piano"

// Combine all courses into a single array
export const courses: Course[] = [finalCutPro, englishGrammar, word, wnescore, it, excel, chainSurvey, malayalam, piano]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}

export function getAllCourses(): Course[] {
  return courses
}

// Re-export types
export type { Course, CourseSection, CurriculumItem } from "./types"

