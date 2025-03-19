"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"

export default function Suppliers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
  id="learn-more"
  className="relative py-16 md:py-24"
  ref={ref}
  style={{
    backgroundImage: "url('/home1.jpg')",
    backgroundSize: "cover", // Cover the entire section
    backgroundPosition: "center", // Center the background image
    backgroundAttachment: "fixed", // Fixed background
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-10"></div>
  <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 z-20 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Stockiest & Suppliers</h2>
            <div className="w-20 h-1 bg-yellow-200 mb-4"></div>
          </div>
          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="flex-shrink-0 z-20">
            <Link
              href="/contact"
              className="z-20 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

