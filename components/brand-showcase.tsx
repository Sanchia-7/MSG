"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

interface Brand {
  name: string
  logo: string
}

export default function BrandShowcase() {
  const images = [
    '/clo1.png?height=100&width=200',
    '/clo2.gif?height=100&width=200',
    '/clo5.png?height=100&width=200',
    '/clo6.jpg?height=100&width=200',
    '/clo1.png?height=100&width=200',
    '/clo2.gif?height=100&width=200',
    '/clo5.png?height=100&width=200',
    '/clo6.jpg?height=100&width=200',
    '/clo1.png?height=100&width=200',
    '/clo2.gif?height=100&width=200',
    '/clo5.png?height=100&width=200',
    '/clo6.jpg?height=100&width=200',
  ];
  const [currentIndex, setCurrentIndex] = useState(0)

  // Autoplay functionality: change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (images.length - 2)) // Ensure 3 images show at once
    }, 5000)

    // Clear the interval on component unmount
    return () => clearInterval(interval)
  }, [])


  // Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const brandVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={headerVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Our Brand</h2>
            <p className="text-gray-600">Brands We Stock</p>
          </motion.div>

          {/* Carousel Container */}
          <motion.div className="relative md:w-full overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }} // Shift by 1/3 (33.33%) of the total width to show 3 images
            >
              {images.map((image, index) => (
                <div key={index} className="w-full px-8 md:w-1/3 h-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Carousel Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
