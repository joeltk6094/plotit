import type { Course } from "./types"

export const finalCutPro: Course = {
  id: "final-cut-pro",
  title: "Final Cut Pro X",
  slug: "final-cut-pro",
  category: "Video Editing",
  color: "bg-pink-400",
  description:
    "Master professional video editing with Apple's industry-leading software. Learn to create stunning videos with advanced effects, transitions, and color grading techniques.",
  features: [
    "Professional video editing techniques",
    "Advanced color grading",
    "Motion graphics and effects",
    "Audio editing and enhancement",
    "Project organization and workflow",
  ],
  duration: "8 weeks",
  level: "Beginner to Intermediate",
  image: "/placeholder.svg?height=400&width=600",
  price: "$299",
  curriculum: [
    {
      id: 1,
      title: "Getting Started with Final Cut Pro X",
      items: [
        {
          id: 1,
          title: "Introduction to Final Cut Pro X",
          description: "Overview of the interface and basic concepts",
          duration: "15 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Setting Up Your First Project",
          description: "Creating a new project and configuring settings",
          duration: "20 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Importing and Organizing Media",
          description: "Managing your footage and creating libraries",
          duration: "25 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Basic Editing Techniques",
      items: [
        {
          id: 1,
          title: "Timeline Editing",
          description: "Working with the timeline and basic cuts",
          duration: "30 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Transitions and Effects",
          description: "Adding professional transitions between clips",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Working with Audio",
          description: "Basic audio editing and enhancement",
          duration: "20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Advanced Editing and Effects",
      items: [
        {
          id: 1,
          title: "Color Correction and Grading",
          description: "Professional color techniques for your footage",
          duration: "35 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Motion Graphics and Titles",
          description: "Creating dynamic text and motion elements",
          duration: "40 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Green Screen and Compositing",
          description: "Keying and layering visual elements",
          duration: "30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 4,
      title: "Final Project and Export",
      items: [
        {
          id: 1,
          title: "Project Organization",
          description: "Best practices for managing complex projects",
          duration: "20 min",
          hasVideo: true,
        },
        {
          id: 2,
          title: "Export and Delivery",
          description: "Optimizing your video for different platforms",
          duration: "25 min",
          hasVideo: true,
        },
        {
          id: 3,
          title: "Final Project Workshop",
          description: "Putting everything together in a complete project",
          duration: "45 min",
          hasVideo: true,
        },
      ],
    },
  ],
}

