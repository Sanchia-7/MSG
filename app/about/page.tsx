"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function AboutPage() {
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

  const valueCards = [
    {
      title: "KNOWLEDGE",
      description: "Acquiring and applying the knowledge for better product procurement and delivery to our clients",
      icon: "🧠",
    },
    {
      title: "SKILL",
      description: "Our team holds the key skills to deliver the right solutions and advice to customers",
      icon: "💡",
    },
    {
      title: "EXCELLENCE",
      description: "Excellence is creating success for our clients by supplying the right material right away",
      icon: "🏆",
    },
    {
      title: "SOLUTION",
      description: "Solving problems of our customers by providing the right solutions for their product and service",
      icon: "🔄",
    },
    {
      title: "QUALITY",
      description: "Delivering the highest level quality of products and services to our customers",
      icon: "✅",
    },
    {
      title: "SERVICE",
      description: "We go beyond with our customers from inquiry to delivery with excellent service",
      icon: "🛎️",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="About Us" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={itemVariants} className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">WHO WE ARE</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-4">
                MSG Global Enterprise Trading LLC is an industrial products supplier such as Pipes, Fittings, Flanges,
                Valves, Fasteners and Gaskets.
              </p>
              <p className="text-gray-600 mb-4">
                We MSG combine experience in offering our services to several leading Oil Pipe & Process Industries.
              </p>
              <p className="text-gray-600 mb-4">
                If your clients demand renewed products, we suggest our clients to come to us regarding product quality,
                technical parameters, so we can provide them with the best solution.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 md:order-2 relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="About us image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-yellow-400"
                ></motion.div>
              </div>

              {/* Animated decorative elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-4 border-yellow-400 z-0"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full border-4 border-yellow-400 z-0"
              ></motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20"
          >
            <motion.div variants={itemVariants} className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="What we do image"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="absolute bottom-0 left-0 h-1 bg-yellow-400"
                ></motion.div>
              </div>

              {/* Animated decorative elements */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-10 right-10 bg-yellow-400 rounded-lg p-3 shadow-lg"
              >
                <span className="text-gray-900 font-bold">Since 2005</span>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">WHAT WE DO</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-4">
                MSG is an effort to provide the industrial world an uninterrupted supply of premium quality and
                competitively priced piping and fitting products that meet the operational standards worldwide these
                days. We, at MSG take every care to ensure our clients with our specialized experience of ensuring
                supplies of material to the oil and gas industry, petrochemical industry, power plants, and other
                companies as needed. With a structured in-house order flow and sales order systems, MSG is an organized
                through well-trained support staff, to ensure that the client's requirements are met in a timely manner.
                We are driven by a common vision and shared values; every individual of MSG is committed to our clients
                to sell quality materials, products, and services. We are committed to the highest standards of
                integrity and fairness. We take personal ownership and hold the integrity of our organization by
                building cordial professional relationships with our clients. MSG is the cornerstone of the true work
                ethics and values that we uphold. We are committed to meeting the needs of our clients by supporting the
                core values of MSG. We understand the importance of quality. These delivery and quality values allow us
                to do everything that we need to do to ensure that our clients are satisfied with our services. We
                strive to deliver the highest value proposition to its Clients.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-gray-100 rounded-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">VISION</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <span className="text-2xl">👁️</span>
                    </motion.div>
                  </div>
                </div>
                <p className="text-gray-600 text-center">
                  To become the most trusted and respected partner in the field of the piping industry and serve our
                  customers with the highest quality products.
                </p>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-yellow-400 rounded-lg p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-900/10 rounded-bl-full"></div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">MISSION</h3>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <span className="text-2xl text-yellow-400">🚀</span>
                    </motion.div>
                  </div>
                </div>
                <p className="text-gray-900 text-center">
                  To provide the highest quality products and solutions to the core industry we serve and excel in
                  upgrading our skills to serve the needs of our clients.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our USP</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-4xl mx-auto">
                MSG solutions team has acquired knowledge that in the long run always creates a good source for customer
                satisfaction. Our actions express beliefs that our clients are the responsible for our success and that
                we must exceed expectations in every way possible. We have developed a set of values that guide our
                actions and decisions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-gray-100 rounded-lg p-6 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute top-0 right-0 w-16 h-16 bg-yellow-400/20 rounded-bl-full"
                  ></motion.div>

                  <div className="text-center mb-4">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                      className="inline-block"
                    >
                      <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto flex items-center justify-center text-2xl">
                        {card.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4">{card.title}</h3>
                  </div>

                  <p className="text-gray-600 text-center text-sm">{card.description}</p>
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

