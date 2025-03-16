/**
 * Routes specific to the English Grammar course
 */

export const courseRoutes = {
  // Base path for this course
  basePath: "/courses/english-grammar",

  // Course component routes
  overview: "/courses/english-grammar",
  curriculum: "/courses/english-grammar/curriculum",
  reviews: "/courses/english-grammar/reviews",
  instructor: "/courses/english-grammar/instructor",
  resources: "/courses/english-grammar/resources",
  faq: "/courses/english-grammar/faq",
}

/**
 * Get a route path for this course
 * @param routeName The name of the route
 * @returns The complete route path
 */
export function getCourseRoute(routeName: keyof typeof courseRoutes): string {
  return courseRoutes[routeName]
}

