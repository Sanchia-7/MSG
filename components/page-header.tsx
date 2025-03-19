"use client"

import { motion } from "framer-motion"
import AnimatedBackground from "@/components/animated-background"

interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-[#1e2130] py-56">
      <AnimatedBackground className="z-0 opacity-90" />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg text-white"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

