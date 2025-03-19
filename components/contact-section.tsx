"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Send } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
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

  const formVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.3 } },
  }

  return (
    <section className="relative py-16 md:py-24" ref={ref}
      style={{
        backgroundImage: "url('/home2.jpeg')",
        backgroundSize: "cover", // Cover the entire section
        backgroundPosition: "center", // Center the background image
        backgroundAttachment: "fixed", // Fixed background
      }}>
        {/* <div className="absolute inset-0 bg-black/60 z-1"></div> */}

      <div className="container mx-auto px-4 z-10 flex justify-center items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div variants={itemVariants} className="mb-12 z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact MSG Experts Now
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-left">
              We make available and supply products as per our customers’ needs.
              In our process of creating solutions for the needs of our customers,
              we invest our experience and expertise to execute excellence. We
              always endure and ensure that the solutions we create for our
              customers can help them to stay ahead of the competition no matter
              the challenge. Contact us today to discuss your specific needs and
              experience the difference of working with a trusted partner in the
              oilfield industry.
            </p>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-yellow-400 z-10 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center mx-auto"
          >
            <Send className="h-5 w-5 mr-2 z-10" />
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
