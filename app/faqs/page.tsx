"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

type FAQ = {
  question: string
  answer: string
}

export default function FAQsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openGeneral, setOpenGeneral] = useState<number | null>(null)
  const [openFlanges, setOpenFlanges] = useState<number | null>(null)

  const toggleGeneral = (index: number) => {
    setOpenGeneral(openGeneral === index ? null : index)
  }

  const toggleFlanges = (index: number) => {
    setOpenFlanges(openFlanges === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const generalFAQs: FAQ[] = [
    {
      question: "What types of MSG equipment do you provide?",
      answer:
        "We offer a wide range of MSG equipment, including piping tools, valves, flanges, fittings, and more. Our products are designed to meet the highest standards of quality and durability for oil and gas production.",
    },
    {
      question: "How can I request a quote or place an order?",
      answer:
        "You can request a quote by filling out our online form, calling our sales team directly, or sending us an email. Our team will promptly respond with detailed pricing and availability information.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries worldwide. Shipping costs and delivery times vary depending on your location. Please contact our logistics team for specific details about shipping to your region.",
    },
    {
      question: "What is your standard lead time for product delivery?",
      answer:
        "Our standard lead time varies by product, but typically ranges from 1-4 weeks. For commonly stocked items, we can often ship within 2-3 business days. Custom orders may require additional production time.",
    },
  ]

  const flangesFAQs: FAQ[] = [
    {
      question: "What are Flanges and why are used?",
      answer:
        "Flanges are used to connect Pipes, Fittings, Valves, Pumps, Equipment, etc. and also allow for easy cleaning, inspection or modification of the piping system.",
    },
    {
      question: "Common Types of Flanges",
      answer:
        "The most common types include Weld Neck Flanges, Slip-On Flanges, Socket Weld Flanges, Threaded Flanges, Blind Flanges, and Lap Joint Flanges. Each type has specific applications and advantages depending on the piping system requirements.",
    },
    {
      question: "Special Types of Flanges",
      answer:
        "Special types include Orifice Flanges, Spectacle Blind Flanges, Reducing Flanges, and Expander Flanges. These are designed for specific applications where standard flanges may not be suitable.",
    },
    {
      question: "Flange Grades and its corresponding Pipe Grades",
      answer:
        "Flange grades must be compatible with pipe grades to ensure system integrity. Common pairings include ASTM A105 flanges with A53/A106 pipes for carbon steel applications, and A182 F304/F316 flanges with A312 TP304/TP316 pipes for stainless steel systems.",
    },
    {
      question: "How to order Flanges?",
      answer:
        "When ordering flanges, specify the type, size, pressure class, material grade, facing type (RF, FF, RTJ), and applicable standards (ASME, API, etc.). Including your application details helps us recommend the most suitable products.",
    },
    {
      question: "Class Markings for various Pipe Standards with Flange Standards",
      answer:
        "Flanges are marked according to standards like ASME B16.5 (Class 150, 300, 600, 900, 1500, 2500), API 6A (2000, 3000, 5000, 10000, 15000 PSI), and MSS SP-44 for large diameter flanges. These markings ensure compatibility with corresponding pipe standards.",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="FAQs" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GENERAL FAQ's</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Your satisfaction and success are our top priorities, and we are committed to delivering the best and
                most reliable solutions. Click on a question to see the answer. If you don't see what you're looking
                for, please feel free to contact us directly.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleGeneral(index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openGeneral === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-2"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openGeneral === index ? "auto" : 0,
                      opacity: openGeneral === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FLANGES FAQ's</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our flanges products, specifications, and applications. Our
                comprehensive FAQ section provides detailed information to help you make informed decisions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {flangesFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFlanges(index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFlanges === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-2"
                    >
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFlanges === index ? "auto" : 0,
                      opacity: openFlanges === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

