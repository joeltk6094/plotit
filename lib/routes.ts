/**
 * Application routes configuration
 * Centralizes all route definitions to avoid hardcoding paths throughout the application
 */

export const routes = {
  // Main pages
  home: "/",
  about: "/about",
  contact: "/contact",
  teachers: "/teachers",

  // Course routes
  courses: {
    index: "/courses",
    detail: (slug: string) => `/courses/${slug}`,

    // Chain Survey routes
    chainSurvey: {
      index: "/courses/chain-survey",
      curriculum: "/courses/chain-survey/curriculum",
      reviews: "/courses/chain-survey/reviews",
      instructor: "/courses/chain-survey/instructor",
      resources: "/courses/chain-survey/resources",
      faq: "/courses/chain-survey/faq",
    },
    // English Grammar routes
    englishGrammar: {
      index: "/courses/english-grammar",
      curriculum: "/courses/english-grammar/curriculum",
      reviews: "/courses/english-grammar/reviews",
      instructor: "/courses/english-grammar/instructor",
      resources: "/courses/english-grammar/resources",
      faq: "/courses/english-grammar/faq",
    },
    // Excel routes
    excel: {
      index: "/courses/excel",
      curriculum: "/courses/excel/curriculum",
      reviews: "/courses/excel/reviews",
      instructor: "/courses/excel/instructor",
      resources: "/courses/excel/resources",
      faq: "/courses/excel/faq",
    },
    // Final Cut Pro routes
    finalCutPro: {
      index: "/courses/final-cut-pro",
      curriculum: "/courses/final-cut-pro/curriculum",
      reviews: "/courses/final-cut-pro/reviews",
      instructor: "/courses/final-cut-pro/instructor",
      resources: "/courses/final-cut-pro/resources",
      faq: "/courses/final-cut-pro/faq",
    },
    // IT routes
    it: {
      index: "/courses/it",
      curriculum: "/courses/it/curriculum",
      reviews: "/courses/it/reviews",
      instructor: "/courses/it/instructor",
      resources: "/courses/it/resources",
      faq: "/courses/it/faq",
    },
    // Malayalam routes
    malayalam: {
      index: "/courses/malayalam",
      curriculum: "/courses/malayalam/curriculum",
      reviews: "/courses/malayalam/reviews",
      instructor: "/courses/malayalam/instructor",
      resources: "/courses/malayalam/resources",
      faq: "/courses/malayalam/faq",
    },
    // Piano routes
    piano: {
      index: "/courses/piano",
      curriculum: "/courses/piano/curriculum",
      reviews: "/courses/piano/reviews",
      instructor: "/courses/piano/instructor",
      resources: "/courses/piano/resources",
      faq: "/courses/piano/faq",
    },
    // Wnescore routes
    wnescore: {
      index: "/courses/wnescore",
      curriculum: "/courses/wnescore/curriculum",
      reviews: "/courses/wnescore/reviews",
      instructor: "/courses/wnescore/instructor",
      resources: "/courses/wnescore/resources",
      faq: "/courses/wnescore/faq",
    },
    // Word routes
    word: {
      index: "/courses/word",
      curriculum: "/courses/word/curriculum",
      reviews: "/courses/word/reviews",
      instructor: "/courses/word/instructor",
      resources: "/courses/word/resources",
      faq: "/courses/word/faq",
    },
  },

  // API routes can be added here as well
  api: {
    // example: '/api/example',
  },
}

/**
 * Helper function to get a route path
 * @param route The route key or function
 * @param params Optional parameters for dynamic routes
 * @returns The complete route path
 */
export function getRoute(route: string | Function, params?: any): string {
  if (typeof route === "function") {
    return route(params)
  }
  return route
}

/**
 * Helper function to get a course route
 * @param courseName The name of the course
 * @param routeName The name of the route (index, curriculum, etc.)
 * @returns The complete route path
 */
export function getCourseRoute(courseName: keyof typeof routes.courses, routeName: string): string {
  const courseRoutes = routes.courses[courseName] as Record<string, string>
  if (!courseRoutes || !courseRoutes[routeName]) {
    console.error(`Route not found: ${courseName}.${routeName}`)
    return routes.courses.index // Fallback to courses index
  }
  return courseRoutes[routeName]
}

/**
 * Helper function to get all routes for a course
 * @param courseName The name of the course
 * @returns All routes for the specified course
 */
export function getAllCourseRoutes(courseName: keyof typeof routes.courses) {
  return routes.courses[courseName]
}

