"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function CertificationPage() {
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

  const certificateVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="Certification" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={certificateVariants} className="flex justify-center">
              <div className="relative max-w-md">
                {/* Certificate frame with shadow and 3D effect */}
                <div className="absolute inset-0 border-8 border-yellow-700 rounded-lg transform rotate-1 translate-x-1 translate-y-1"></div>
                <div className="relative border-8 border-yellow-800 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=600&width=450"
                    alt="ISO Certificate"
                    width={450}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>

                {/* Animated shine effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0.5 }}
                  animate={{ x: "200%", opacity: 0 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    repeatDelay: 5,
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent skew-x-12 pointer-events-none"
                ></motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ISO 9001:2015</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>

              <p className="text-gray-600">
                MSG (Material Equipment Trading LLC) is proud to be a registered and certified entity in the field of
                Oil and gas equipment. Our certification is testament to our commitment to quality and excellence, with
                rigorous standards and procedures in place to ensure that our products and services meet or exceed the
                expectations and requirements of the global marketplace.
              </p>

              <p className="text-gray-600">
                Our certification is a reflection of our dedication to excellence and our ongoing efforts to provide you
                with the best-in-class solutions. We partner with internationally recognized testing laboratories,
                reputable and certified companies, dedicated to delivering the highest standards of quality and safety.
              </p>

              <p className="text-gray-600">
                MSG (Material Equipment Trading LLC) is committed to upholding the highest standards of quality and
                safety. Our ISO 9001:2015 certification serves as a testament to our unwavering dedication to providing
                products and services that consistently meet customer requirements and applicable statutory and
                regulatory requirements, ensuring that our products are supported by a trusted partner who prioritizes
                quality, safety, and compliance in every facet of our operations.
              </p>

              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Social Media:</h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Facebook size={18} className="text-gray-900" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Twitter size={18} className="text-gray-900" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="bg-yellow-400 hover:bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    <Linkedin size={18} className="text-gray-900" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to Quality</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Control",
                  icon: "⚙️",
                  description: "Rigorous testing and inspection at every stage of production",
                },
                {
                  title: "Continuous Improvement",
                  icon: "📈",
                  description: "Ongoing evaluation and enhancement of our processes and products",
                },
                {
                  title: "Customer Satisfaction",
                  icon: "🤝",
                  description: "Dedicated to exceeding customer expectations in every interaction",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    transition: { duration: 0.3 },
                  }}
                  className="bg-gray-100 rounded-lg p-6 text-center"
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    className="text-3xl mb-4"
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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

