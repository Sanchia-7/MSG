"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"
import Image from "next/image"

export default function ContactPage() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const contactCards = [
    {
      icon: <Phone className="h-6 w-6 text-gray-900" />,
      title: "",
      content: (
        <div className="text-center">
          <p className="font-bold text-gray-900">+971 50 550 2350</p>
          <p className="font-bold text-gray-900">+971 42 951 222</p>
          <p className="text-gray-600 text-sm mt-2">
            Call us anytime and we'll be answering your call and questions for business.
          </p>
        </div>
      ),
      bgColor: "bg-yellow-400",
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "info@msgpiping.com",
      content: (
        <div className="text-white">
          <p className="text-sm mt-2">
            For inquiries, assistance, or to address your concerns, feel free to reach out to our team. We're here to
            help you with any industry-related questions.
          </p>
        </div>
      ),
      bgColor: "bg-gray-900",
    },
    {
      icon: <MapPin className="h-6 w-6 text-gray-900" />,
      title: "",
      content: (
        <div className="text-center">
          <p className="font-bold text-gray-900">Dubai Industrial City, Green Community,</p>
          <p className="font-bold text-gray-900">DIC, Dubai, United Arab Emirates</p>
          <p className="text-gray-600 text-sm mt-2">
            Come by our office anytime during our MSG business hours. Feel free to visit us at this address.
          </p>
        </div>
      ),
      bgColor: "bg-yellow-400",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="Contact Us" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className={`${card.bgColor} rounded-lg p-6 relative overflow-hidden`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  {card.icon}
                </motion.div>

                {card.title && <h3 className="text-xl font-bold text-center mb-2">{card.title}</h3>}

                {card.content}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-16 relative"
          >
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image src="/placeholder.svg?height=400&width=1200" alt="Map" fill className="object-cover" />

              {/* Animated map marker */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="h-6 w-6 text-gray-900" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full"
                ></motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600">
                We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              {/* Animated decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-yellow-400"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.05, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-yellow-400"
              ></motion.div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

