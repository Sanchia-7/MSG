"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

export default function Community() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 md:py-24 bg-gray-800 text-white relative overflow-hidden" ref={ref} 
    style={{
      backgroundImage: "url('/home3.jpeg')",
      backgroundSize: "cover", // Cover the entire section
      backgroundPosition: "center", // Center the background image
      backgroundAttachment: "fixed", // Fixed background
    }}>
        <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated geometric shapes */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-2 border-yellow-400/20 -z-10"
        ></motion.div>

        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full border-2 border-yellow-400/10 -z-10"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Providing For The Community
            <br />
            And The World
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white/80 mb-10 leading-relaxed">
            Our team of experts is dedicated to providing products and services that meet the highest standards of
            quality, reliability, and safety. Whether you're a seasoned industry veteran or a newcomer, MSG Material
            Equipment Trading LLC is here to support your success.
          </motion.p>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }} className="inline-block">
            <Link
              href="/learn-more"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
            >
              <span>LEARN MORE</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

