"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

export default function ProductsPage() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  const productCategories = [
    {
      title: "Pipe",
      image: "/p1.jpg?height=300&width=300",
      link: "/products/pipe",
      color: "bg-gray-100",
    },
    {
      title: "Strainers",
      image: "/about2.jpeg?height=300&width=300",
      link: "/products/strainers",
      color: "bg-yellow-400",
    },
    {
      title: "Valves",
      image: "/valves.png?height=300&width=300",
      link: "/products/valves",
      color: "bg-gray-100",
    },
    {
      title: "Flanges",
      image: "/flanges.png?height=300&width=300",
      link: "/products/flanges",
      color: "bg-gray-100",
    },
    {
      title: "Pipe Fittings",
      image: "/fittings.jpg?height=300&width=300",
      link: "/products/pipe-fittings",
      color: "bg-yellow-400",
    },
    {
      title: "Plates",
      image: "/p6.jpeg?height=300&width=300",
      link: "/products/plates",
      color: "bg-gray-100",
    },
  ]

  const detailedProducts = [
    {
      title: "FLANGES",
      description: "We can supply a wide range of Flanges in all grades.",
      image: "/flanges.png?height=150&width=300",
      link: "/products/flanges",
    },
    {
      title: "PIPES",
      description: "We can supply a wide range of seamless and welded pipes in all grades.",
      image: "/pipes.png?height=150&width=300",
      link: "/products/pipes",
    },
    {
      title: "FITTINGS",
      description: "We provide a complete package of pipe fittings in different specifications.",
      image: "/fittings.jpg?height=150&width=300",
      link: "/products/fittings",
    },
    {
      title: "FASTNERS & GASKET",
      description: "We carry a wide range of customer base with various kind of Fastners & Gasket.",
      image: "/p7.png?height=150&width=300",
      link: "/products/fastners-gasket",
    },
    {
      title: "VALVES",
      description: "We carry wide range of customer base with various kinds of valves.",
      image: "/valves.png?height=150&width=300",
      link: "/products/valves",
    },
    {
      title: "SPECIAL PRODUCTS",
      description: "We provide a wide range of special products to various every industry.",
      image: "/specialproducts.png?height=150&width=300",
      link: "/products/special-products",
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="Our Products" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3 },
                }}
                className={`${category.color} rounded-lg overflow-hidden`}
              >
                <Link href={category.link} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-gray-900 rounded-lg p-8 mb-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Product Range</h2>
              <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6"></div>
              <p className="text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive range of high-quality products for various industrial applications. Our
                products are sourced from trusted manufacturers and undergo rigorous quality checks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {detailedProducts.map((product, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  className="bg-white rounded-lg overflow-hidden"
                >
                  <Link href={product.link} className="block">
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm">{product.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Products?
            </motion.h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>

            <motion.p variants={itemVariants} className="text-gray-600 mb-12">
              At MSG, we are committed to providing the highest quality products that meet international standards. Our
              products are sourced from reputable manufacturers and undergo rigorous quality checks before delivery.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Quality Assured",
                  icon: "🏆",
                  description: "All products meet international quality standards",
                },
                { title: "Competitive Pricing", icon: "💰", description: "Best value for your investment" },
                { title: "Expert Support", icon: "👨‍💼", description: "Technical assistance from industry experts" },
              ].map((feature, index) => (
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
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
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

