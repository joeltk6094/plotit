"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion, useInView, useAnimationControls } from "framer-motion"
import { useEffect } from "react"
import { routes } from "@/lib/routes"

export default function KidsEducationSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimationControls()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 0.6,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const blobVariants = {
    hidden: { scale: 0, opacity: 0, rotate: -30 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1,
      },
    },
  }

  const decorativeElementVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.6,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 1.2,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  const floatingAnimation = {
    initial: {},
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  const pulseAnimation = {
    initial: {},
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  }

  return (
    <section ref={sectionRef} className="w-full py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative background elements with animation */}
      <motion.div
        className="absolute top-0 right-0 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-20"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-0 left-0 w-40 h-40 bg-green-300 rounded-full blur-3xl opacity-20"
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="responsive-container">
        <motion.div className="max-w-6xl mx-auto" variants={containerVariants} initial="hidden" animate={controls}>
          {/* Coral blob with animation */}
          <motion.div
            className="w-24 h-24 bg-gradient-to-br from-pink-300 to-orange-400 rounded-full mb-12 relative mx-auto sm:mx-0"
            variants={blobVariants}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-300 to-orange-400 blur-sm"></div>
              <div className="absolute inset-2 bg-gradient-to-br from-pink-300 to-orange-400 rounded-full"></div>
            </div>
          </motion.div>

          {/* Main content with animations */}
          <div className="relative">
            <motion.h2
              className="text-fluid-6xl font-bold leading-tight mb-8 md:mb-10 lg:mb-12"
              variants={itemVariants}
            >
              Learning
              <motion.div className="inline-block relative mx-4" variants={decorativeElementVariants}>
                <motion.span
                  className="absolute -top-8 right-0 w-12 h-12 bg-pink-400 rounded-lg rotate-12"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: "0.5s" }}
                />
              </motion.div>
              <br />
              Platf
              <motion.span className="relative">
                <span className="inline-block">o</span>
                <motion.span
                  className="absolute -top-4 right-8 w-8 h-8 bg-yellow-300 rounded-full rotate-45 transform scale-75"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: "1s" }}
                />
              </motion.span>
              rm
            </motion.h2>

            <motion.div
              className="max-w-2xl text-gray-400 text-lg md:text-xl lg:text-fluid-xl mb-12 md:mb-16"
              variants={itemVariants}
            >
              <p>
                &lt;&lt; At Plotit, we offer a diverse range of courses in IT, languages, music, and software training
                to help you achieve your learning goals. &gt;&gt;
              </p>
            </motion.div>

            <motion.div className="flex justify-end" variants={buttonVariants} whileHover="hover">
              <Link
                href={routes.courses.index}
                className="bg-gradient-to-r from-green-200 to-yellow-200 text-black px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 rounded-full font-medium text-base md:text-lg lg:text-fluid-lg hover:from-green-300 hover:to-yellow-300 transition-colors duration-300 inline-flex items-center gap-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" />
                </motion.span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-green-300 to-yellow-300 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Additional floating elements */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-10"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "2s" }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-purple-300 rounded-full opacity-10"
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "3s" }}
          />
        </motion.div>
      </div>
    </section>
  )
}

