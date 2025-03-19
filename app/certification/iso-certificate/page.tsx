"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ISOCertificatePage() {
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
      <PageHeader title="ISO Certificate" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">ISO 9001:2015 Certificate</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600">
                Our ISO 9001:2015 certification demonstrates our commitment to quality management systems and continuous
                improvement.
              </p>
            </motion.div>

            <motion.div variants={certificateVariants} className="flex justify-center mb-12">
              <div className="relative max-w-lg">
                {/* Certificate frame with shadow and 3D effect */}
                <div className="absolute inset-0 border-8 border-yellow-700 rounded-lg transform rotate-1 translate-x-1 translate-y-1"></div>
                <div className="relative border-8 border-yellow-800 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="ISO Certificate"
                    width={600}
                    height={800}
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

            <motion.div variants={itemVariants} className="space-y-6 mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate Details</h3>
              <p className="text-gray-600">
                Our ISO 9001:2015 certification covers all aspects of our operations, including product sourcing,
                quality control, customer service, and continuous improvement processes. This certification is
                recognized globally and demonstrates our commitment to maintaining the highest standards in all our
                business activities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Certificate Number</h4>
                  <p className="text-gray-600">ISO 9001:2015-12345</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Date of Issue</h4>
                  <p className="text-gray-600">January 15, 2023</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Valid Until</h4>
                  <p className="text-gray-600">January 14, 2026</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Issuing Body</h4>
                  <p className="text-gray-600">International Certification Authority</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <a
                href="/certification/iso-certificate/download"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                <span>Download Certificate</span>
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

