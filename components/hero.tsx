"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import LazyLoad from 'react-lazy-load'
import Link from "next/link"  

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null)
  
  const handleContentVisible = () => {
    const video = document.getElementById('myVideo');
    if (video) {
      video.play();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-text-reveal")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <LazyLoad height={1080} offset={100} onContentVisible={handleContentVisible}>
          <video
            id="myVideo"
            className="object-cover w-full h-full absolute top-0 left-0"
            autoPlay
            loop
            muted
            preload="auto"
            alt="Industrial background"
          >
            <source src="/main.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </LazyLoad>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 z-20">
        <div className="particles-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              initial={{
                x: Math.random() * 100 - 50 + "%",
                y: Math.random() * 100 - 50 + "%",
                opacity: Math.random() * 0.5 + 0.3,
                scale: Math.random() * 0.6 + 0.2,
              }}
              animate={{
                x: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
                y: [Math.random() * 100 - 50 + "%", Math.random() * 100 - 50 + "%"],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                position: "absolute",
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "50%",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            <span className="block">Material</span>
            <span className="block">Solutions Grid</span>
          </h1>
          <div ref={textRef} className="overflow-hidden">
            <p className="text-xl text-white/80 opacity-0 transform translate-y-8 transition-all duration-1000">
              CONNECTING ELEMENTS NATURALLY, TOGETHER
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <Link href="/about">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Who We Are
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
            className="w-1.5 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
