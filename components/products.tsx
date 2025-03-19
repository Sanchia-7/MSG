"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"

const productCategories = [
  {
    id: "flanges",
    title: "FLANGES",
    description: "High quality flanges of all types and materials",
    image: "/flanges.png?height=300&width=300",
  },
  {
    id: "pipes",
    title: "PIPES",
    description: "Wide range of pipes for various applications",
    image: "/pipes.png?height=300&width=300",
  },
  {
    id: "fittings",
    title: "FITTINGS",
    description: "Precision engineered fittings of all types",
    image: "/fittings.jpg?height=300&width=300",
  },
  {
    id: "fasteners",
    title: "FASTENERS & GASKET",
    description: "Reliable fasteners and gaskets for secure connections",
    image: "/fastners.png?height=300&width=300",
  },
  {
    id: "valves",
    title: "VALVES",
    description: "High performance valves for flow control",
    image: "/valves.png?height=300&width=300",
  },
  {
    id: "special",
    title: "SPECIAL PRODUCTS",
    description: "Specialized solutions for unique requirements",
    image: "/specialproducts.png?height=300&width=300",
  },
]

export default function Products() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Following are the assortment of our Main Products</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>

                  <AnimatePresence>
                    {hoveredItem === category.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Link
                          href={`/products/${category.id}`}
                          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
                        >
                          View Products
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                  </div>

                  <Link
                    href={`/products/${category.id}`}
                    className="text-yellow-600 hover:text-yellow-700 font-medium inline-flex items-center group"
                  >
                    <span>Explore {category.title}</span>
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 inline-block"
          >
            SEE MORE PRODUCTS
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

