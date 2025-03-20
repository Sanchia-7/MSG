"use client"

import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  duration?: number
}

export default function AnimatedText({
  text,
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
}: AnimatedTextProps) {
  const controls = useAnimation()

  useEffect(() => {
    controls.start("visible")
  }, [controls])

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-1 inline-block" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

