"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Send } from "lucide-react"

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    console.log("Newsletter subscription:", email)
    setIsSubmitted(true)
    setEmail("")

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

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

  // Animated illustration elements
  const illustrationElements = [
    { x: "10%", y: "20%", delay: 0.2, size: 10 },
    { x: "20%", y: "60%", delay: 0.3, size: 8 },
    { x: "30%", y: "30%", delay: 0.4, size: 12 },
    { x: "80%", y: "40%", delay: 0.5, size: 14 },
    { x: "70%", y: "70%", delay: 0.6, size: 6 },
    { x: "90%", y: "20%", delay: 0.7, size: 9 },
  ]

  return (
    <section className="py-16 md:py-24 bg-yellow-400 relative overflow-hidden" ref={ref}>
      {/* Animated illustration elements */}
      {illustrationElements.map((el, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.3 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: el.delay }}
          className="absolute"
          style={{
            left: el.x,
            top: el.y,
            width: el.size,
            height: el.size,
            backgroundColor: "#000",
            borderRadius: "50%",
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto bg-yellow-400 rounded-xl p-8 md:p-12 relative"
        >
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute left-4 top-4 w-16 h-16 border-2 border-gray-900/20 rounded-full"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute right-12 bottom-8 w-24 h-24 border-2 border-gray-900/10 rounded-full"
          ></motion.div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="180"
                  height="180"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900/20"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Our Newsletters</h2>
              <p className="text-gray-800 mb-6">
                Subscribe to the email address of the MSG (Material Equipment Trading LLC) newsletter! You're excited to
                keep you in the loop with the latest developments in the oil and gas industry, product highlights, and
                valuable resources.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitted ? (
                    "Thank you for subscribing!"
                  ) : (
                    <>
                      <span>SIGN UP</span>
                      <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

