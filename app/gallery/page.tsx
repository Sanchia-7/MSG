"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { X } from "lucide-react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import PageHeader from "@/components/page-header"

// Gallery categories and images
const galleryData = {
  products: [
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 1" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 2" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 3" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 4" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 5" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 6" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 7" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 8" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 9" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 10" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 11" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Product 12" },
  ],
  warehouse: [
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 1" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 2" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 3" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 4" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 5" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 6" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 7" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Warehouse 8" },
  ],
  office: [
    { src: "/placeholder.svg?height=300&width=300", alt: "Office 1" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Office 2" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Office 3" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Office 4" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Office 5" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Office 6" },
  ],
  testing: [
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 1" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 2" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 3" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 4" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 5" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 6" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 7" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 8" },
    { src: "/placeholder.svg?height=300&width=300", alt: "Testing 9" },
  ],
}

// Image component with animation
const GalleryImage = ({ src, alt, onClick, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        transition: { duration: 0.3 },
      }}
      className="group relative cursor-pointer overflow-hidden rounded-lg"
      onClick={onClick}
    >
      <div className="relative h-48 w-full sm:h-60 md:h-64">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white bg-opacity-80 px-4 py-2 text-sm font-medium text-gray-900">View</span>
        </div>
      </div>
    </motion.div>
  )
}

// Gallery section component
const GallerySection = ({ title, images, onImageClick }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section className="py-8">
      <motion.h2
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="mb-8 text-center text-3xl font-bold"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
        {images.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            onClick={() => onImageClick(image, title)}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

// Lightbox component
const Lightbox = ({ image, category, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="relative max-h-[90vh] max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[80vh] w-auto max-w-[90vw]">
          <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
        </div>
        <button
          className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 shadow-lg transition-colors hover:bg-gray-200"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
          <p className="text-sm font-medium uppercase">{category}</p>
          <p className="text-lg font-bold">{image.alt}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("")

  const handleImageClick = (image, category) => {
    setSelectedImage(image)
    setSelectedCategory(category)
  }

  const handleCloseLightbox = () => {
    setSelectedImage(null)
  }

  return (
    <main>
    <Navbar/>
    <div>
      <PageHeader title="Our Gallery" />

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Explore our collection of high-quality industrial products, facilities, and services through our
            comprehensive gallery.
          </p>
        </motion.div>

        <GallerySection title="PRODUCTS" images={galleryData.products} onImageClick={handleImageClick} />

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>

        <GallerySection title="Warehouse" images={galleryData.warehouse} onImageClick={handleImageClick} />

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>

        <GallerySection title="Office" images={galleryData.office} onImageClick={handleImageClick} />

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700"></div>

        <GallerySection title="Testing & Inspection" images={galleryData.testing} onImageClick={handleImageClick} />
      </div>

      <AnimatePresence>
        {selectedImage && <Lightbox image={selectedImage} category={selectedCategory} onClose={handleCloseLightbox} />}
      </AnimatePresence>
    </div>
    <Footer/>
    </main>
  )
}

