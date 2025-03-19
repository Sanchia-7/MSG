"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import React, { useState, useEffect } from 'react';


export default function TopSupplier() {
  const images = [
    '/caro1.jpg',
    '/caro2.png',
    '/caro3.jpg',
    '/caro4.png',
    '/caro5.jpg',
    '/caro6.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change the image every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

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
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-16 md:py-24 bg-[#2d2a32]" ref={ref}>
      <div className="container mx-auto px-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* Write-up Section (Left) */}
            
            <motion.div variants={itemVariants} className="space-y-4 text-gray-100 md:w-2/3">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold text-gray-100 mb-8">
            Top Supplier of Quality Piping Products
            <div className="flex mt-4 space-x-2">
              {/* Dots */}
              <div className="w-1 h-0.5 rounded-full bg-yellow-400"></div>
              <div className="w-1 h-0.5 rounded-full bg-yellow-400"></div>
              <div className="w-1 h-0.5 rounded-full bg-yellow-400"></div>

              {/* Line */}
              <div className="w-1/6 h-0.5 bg-yellow-400"></div>
            </div>
          </motion.h2>
              <p>
              Material Solutions Grid Oilfield Equipment Trading LLC is a top supplier of quality oilfield flanges, pipes, valves, fittings, fasteners and gaskets and special product serving oil and gas industries globally. Known for our dedication to quality and dependability, we provide a wide variety of products created to satisfy the strict requirements of modern oil and gas industrial needs. Our wide range of products consists of fasteners, gaskets, valves, pipes, and flanges, all designed to provide top-level performance and lasting quality.MSG Oilfield Equipment Trading LLC is a top provider of high-quality oilfield equipment and services, committed to assisting the oil and gas sector. Known for our dedication to excellence and dependability.Our products meet strict industry regulations, guaranteeing long-lasting quality and top- performance in the field, helping clients improve productivity and uphold safety in challenging settings.
              </p>
              <p>
              MSG Oilfield Equipment Trading LLC not only offers high-quality equipment but also provides expert advice and full support services. Our team works closely with clients to comprehend their individual requirements and provide customized solutions.
              </p>
            </motion.div>

            {/* Images Section (Right) */}
            <motion.div className="relative md:w-1/3 overflow-hidden">
              {/* Carousel Container */}
              {/* Image Container */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {images.map((image, index) => (
                  <div key={index} className="w-full h-full flex-shrink-0">
                    <img
                      src={image}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </section>
  )
}
