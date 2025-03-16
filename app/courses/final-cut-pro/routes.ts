/**
 * Routes specific to the Final Cut Pro course
 */

export const courseRoutes = {
  // Base path for this course
  basePath: "/courses/final-cut-pro",

  // Course component routes
  overview: "/courses/final-cut-pro",
  curriculum: "/courses/final-cut-pro/curriculum",
  reviews: "/courses/final-cut-pro/reviews",
  instructor: "/courses/final-cut-pro/instructor",
  resources: "/courses/final-cut-pro/resources",
  faq: "/courses/final-cut-pro/faq",
}

/**
 * Get a route path for this course
 * @param routeName The name of the route
 * @returns The complete route path
 */
export function getCourseRoute(routeName: keyof typeof courseRoutes): string {
  return courseRoutes[routeName]
}

