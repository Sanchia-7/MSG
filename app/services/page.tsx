"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const services = [
    {
      title: "Testing",
      icon: "🧪",
      description:
        "With our vast experience, we are well aware of the Testing requirements of our Clients. We can arrange for Third party inspections on customer requests. Depending on our customers requirements we can outsource all kinds of relevant Testing.",
      bgColor: "bg-gray-100",
      iconBgColor: "bg-yellow-400",
    },
    {
      title: "Inspection",
      icon: "🔍",
      description:
        "With our vast experience, we are well aware of the Inspection requirements of our Clients. We can arrange for Third party inspections on customer requests. Depending on our customers requirements we can outsource all kinds of relevant Inspection.",
      bgColor: "bg-gray-900",
      iconBgColor: "bg-yellow-400",
      textColor: "text-white",
    },
    {
      title: "Cladding",
      icon: "👑",
      description:
        "Cladding is the process by which layer of Corrosion Resistant Alloy (CRA) is bonded internally on the normal Carbon Steel Pipe by various processes. There by providing corrosion resistant properties of CRA and Mechanical Properties of Carbon Steel Pipes.",
      bgColor: "bg-gray-100",
      iconBgColor: "bg-yellow-400",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="Our Services" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className={`${service.bgColor} rounded-lg p-8 relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>

                <div className="flex justify-center mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`w-16 h-16 ${service.iconBgColor} rounded-full flex items-center justify-center text-2xl`}
                  >
                    <motion.span
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                    >
                      {service.icon}
                    </motion.span>
                  </motion.div>
                </div>

                <h3 className={`text-2xl font-bold ${service.textColor || "text-gray-900"} mb-4 text-center`}>
                  {service.title}
                </h3>

                <p className={`${service.textColor || "text-gray-600"} mb-6 text-sm`}>{service.description}</p>

                <div className="text-center">
                  <Link
                    href={`/services/${service.title.toLowerCase()}`}
                    className={`inline-flex items-center ${
                      service.textColor
                        ? "text-yellow-400 hover:text-yellow-300"
                        : "text-yellow-600 hover:text-yellow-700"
                    } font-medium transition-colors duration-300`}
                  >
                    <span>Learn More</span>
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative rounded-lg overflow-hidden mb-20"
          >
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg?height=400&width=1200" alt="Oil Industry" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-16">
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Reach The Top With
                  <br />
                  The Oil Industry
                </motion.h2>

                <div className="space-y-6 max-w-2xl">
                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">Professional</span>
                      <span className="text-white font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">Quality</span>
                      <span className="text-white font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                      ></motion.div>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-white font-medium">Expert</span>
                      <span className="text-white font-medium">100%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: "100%" } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                      ></motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-6">
              Additional Services
            </motion.h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>

            <motion.p variants={itemVariants} className="text-gray-600 mb-12">
              Beyond our core offerings, we provide a comprehensive range of additional services to meet all your
              industrial needs. Our team of experts is ready to assist you with customized solutions.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Consulting", icon: "💼" },
                { title: "Maintenance", icon: "🔧" },
                { title: "Installation", icon: "🏗️" },
                { title: "Training", icon: "👨‍🏫" },
                { title: "Certification", icon: "📜" },
                { title: "Custom Solutions", icon: "⚙️" },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                    {service.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
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

