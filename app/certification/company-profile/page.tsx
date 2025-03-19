"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function CompanyProfilePage() {
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
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="Company Profile" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">MSG Company Profile</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Learn more about our company, our values, and our commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-8 mb-12 relative overflow-hidden"
            >
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

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="md:w-1/3">
                    <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/placeholder.svg?height=400&width=300"
                        alt="Company Headquarters"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">About MSG</h3>
                    <p className="text-gray-600 mb-4">
                      MSG (Material Equipment Trading LLC) was established in 2005 as a leading supplier of quality
                      piping products, serving the industrial, oil & gas, and petrochemical sectors worldwide.
                    </p>
                    <p className="text-gray-600">
                      With our headquarters in Dubai, UAE, we have expanded our operations globally, providing
                      high-quality products and exceptional service to clients across the Middle East, Asia, Europe, and
                      Africa.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide the highest quality products and solutions to the core industry we serve and excel in
                      upgrading our skills to serve the needs of our clients.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-600">
                      To become the most trusted and respected partner in the field of the piping industry and serve our
                      customers with the highest quality products.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Quality and Excellence in everything we do</li>
                      <li>Integrity and Transparency in all our dealings</li>
                      <li>Customer Satisfaction as our top priority</li>
                      <li>Innovation and Continuous Improvement</li>
                      <li>Teamwork and Collaboration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <a
                href="/certification/company-profile/download"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <span>Download Company Profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

