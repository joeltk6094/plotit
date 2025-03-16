"use client"

import type React from "react"

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Metadata is now a variable since we're using 'use client'
const metadata: Metadata = {
  title: "Plotit - Where Knowledge Meets, Skills Evolve",
  description: "An online learning platform offering courses in IT, language, music, software training and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const [isPageTransitioning, setIsPageTransitioning] = useState(false)
  const [pageContent, setPageContent] = useState<React.ReactNode>(null)
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Handle page transitions
  useEffect(() => {
    setMounted(true)

    if (!mounted) {
      setPageContent(children)
      return
    }

    setIsPageTransitioning(true)

    const timer = setTimeout(() => {
      setPageContent(children)
      setIsPageTransitioning(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, children, mounted])

  // Check for user's preferred color scheme
  useEffect(() => {
    if (mounted) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setDarkMode(prefersDark)
    }
  }, [mounted])

  return (
    <html lang="en" suppressHydrationWarning className={darkMode ? "dark" : ""}>
      <head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </head>
      <body className={`${inter.variable} font-sans text-[calc(14px+0.4vw)]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme={darkMode ? "dark" : "light"}
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen relative overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed top-0 right-0 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-10 animate-float"></div>
            <div
              className="fixed bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl opacity-10 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>

            {/* Page transition container */}
            <div className={`transition-opacity duration-300 ${isPageTransitioning ? "opacity-0" : "opacity-100"}`}>
              {mounted ? pageContent : children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'