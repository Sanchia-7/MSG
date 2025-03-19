"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function CalculatorPage() {
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

  const calculators = [
    {
      title: "Pipe Weight Calculator",
      description: "Calculate the weight of pipes based on dimensions and material",
      icon: "📏",
      link: "/calculator/pipe-weight",
    },
    {
      title: "Flange Weight Calculator",
      description: "Calculate the weight of flanges based on dimensions and material",
      icon: "⚖️",
      link: "/calculator/flange-weight",
    },
    {
      title: "Fitting Weight Calculator",
      description: "Calculate the weight of fittings based on dimensions and material",
      icon: "🔧",
      link: "/calculator/fitting-weight",
    },
    {
      title: "Material Converter",
      description: "Convert between different material specifications and standards",
      icon: "🔄",
      link: "/calculator/material-converter",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="Calculators" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Calculators</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Use our specialized calculators to help with your piping and material calculations. These tools are
                designed to make your work easier and more accurate.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {calculators.map((calculator, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                  className="bg-gray-100 rounded-lg p-6 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-full"></div>

                  <div className="flex items-center mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="text-3xl mr-4"
                    >
                      {calculator.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900">{calculator.title}</h3>
                  </div>

                  <p className="text-gray-600 mb-6">{calculator.description}</p>

                  <Link
                    href={calculator.link}
                    className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors duration-300"
                  >
                    <span>Use Calculator</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

