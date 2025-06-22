import type { Course } from "./types"

export const finalCutPro: Course = {
  id: "plotit-fcp",
  title: "ഫൈനൽ കട് പ്രോ (Final Cut Pro in Malayalam)",
  slug: "plotit-fcp",
  category: "Video Editing",
  color: "bg-pink-400",
  description:
    "A 4.5‑hour Malayalam‑language master course on Apple’s Final Cut Pro X – from installation and interface, through editing, effects, green‑screen and export, all with downloadable notes and shortcut keys.",
  features: [
    "4.5 hours of on‑demand video content",
    "Taught in Malayalam by Paul Plotit",
    "Downloadable full video notes & shortcut keys",
    "Covers editing tools, audio, titles, effects, keyframing",
    "Includes green‑screen, shapes, motion effects & export workflows",
  ],
  duration: "4.5 hours",
  level: "Beginner to Intermediate",
  image: "/placeholder.svg?height=400&width=600",
  price: "₹999 (approx. US$9.99)",
  link: "https://www.udemy.com/course/plotit-fcp-my/?couponCode=LOCLZDOFFPINCTRL", 
  curriculum: [
    {
      id: 1,
      title: "Introduction & Interface",
      items: [
        {
          id: 1,
          title: "Installation & Interface Overview",
          description: "Install FCP X, explore UI and import media.",
          duration: "≈20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 2,
      title: "Importing & Organizing",
      items: [
        {
          id: 1,
          title: "Importing Files & Using Events",
          description: "Merge/delete/rate clips; work with Events.",
          duration: "≈25 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 3,
      title: "Basic Editing Techniques",
      items: [
        {
          id: 1,
          title: "Timeline Editing & Tools",
          description: "Create a project, add media, edit clips using trim, blade, etc.",
          duration: "≈30 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 4,
      title: "Advanced Editing",
      items: [
        {
          id: 1,
          title: "Trimming, Moving & Timecode",
          description: "Use trim, slip, slide edits; understand timecode & markers.",
          duration: "≈25 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 5,
      title: "Audio Editing",
      items: [
        {
          id: 1,
          title: "Volume Adjustment & Fades",
          description: "Control volume, fades, add audio effects.",
          duration: "≈20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 6,
      title: "Titles & Text",
      items: [
        {
          id: 1,
          title: "Creating Titles & Lower Thirds",
          description: "Add text, adjust opacity, animation, fonts.",
          duration: "≈15 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 7,
      title: "Effects & Transitions",
      items: [
        {
          id: 1,
          title: "Effects, Pan & Ken Burns",
          description: "Add transitions, crop, pan/zoom effects.",
          duration: "≈20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 8,
      title: "Shapes & Backgrounds",
      items: [
        {
          id: 1,
          title: "Adding Shapes & Solids",
          description: "Insert shapes (square, circle, line) and solid backgrounds.",
          duration: "≈15 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 9,
      title: "Keyframing & Animation",
      items: [
        {
          id: 1,
          title: "Using Keyframes",
          description: "Animate objects via keyframes in audio/video.",
          duration: "≈20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 10,
      title: "Retime Effects",
      items: [
        {
          id: 1,
          title: "Speed Ramp, Hold, Rewind",
          description: "Create slow motion, speed up, hold/replay effects.",
          duration: "≈20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 11,
      title: "Green‑Screen Compositing",
      items: [
        {
          id: 1,
          title: "Chroma Key & Background Replacement",
          description: "Replace green screen with new background.",
          duration: "≈20 min",
          hasVideo: true,
        },
      ],
    },
    {
      id: 12,
      title: "Final Export",
      items: [
        {
          id: 1,
          title: "Exporting in Multiple Formats",
          description: "Share videos in different formats & platforms.",
          duration: "≈15 min",
          hasVideo: true,
        },
      ],
    },
  ],
}
