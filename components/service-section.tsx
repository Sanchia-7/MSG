"use client"

import { motion, useAnimationControls, type Variants } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Facebook, Instagram, Linkedin } from "lucide-react"

// Custom counter component with animated number
const AnimatedCounter = ({
  target,
  duration = 2,
  delay = 0,
  inView = false,
  className = "",
}: {
  target: number
  duration?: number
  delay?: number
  inView: boolean
  className?: string
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) {
      setCount(0)
      return
    }

    let startTime: number
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(updateCount)
    }, delay * 1000)

    return () => {
      clearTimeout(timeoutId)
      cancelAnimationFrame(animationFrame)
    }
  }, [inView, target, duration, delay])

  return <span className={className}>{count}</span>
}

export default function ServiceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [progressControls, setProgressControls] = useState(0);

  // Trigger the progress bar animation when the component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      if (progressControls < 100) {
        setProgressControls((prev) => prev + 1); // Increase the progress over time
      }
    }, 30); // Adjust the interval time to control speed

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, [progressControls]);

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const statCardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.6 + custom * 0.2,
        ease: [0.34, 1.56, 0.64, 1], // Spring-like bounce effect
      },
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: {
        duration: 0.3,
      },
    },
  }

  const socialLinkVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.3 + custom * 0.1,
      },
    }),
    hover: {
      x: 5,
      color: "#FFD700",
      transition: {
        duration: 0.2,
      },
    },
  }

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Side: Images and Social Media */}
          <motion.div
            className="w-full lg:w-5/12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="bg-[#2A2A2E] rounded-3xl p-6">
              <motion.div className="rounded-2xl overflow-hidden mb-6" variants={imageVariants}>
                <Image
                  src="/gambar-1.jpg"
                  alt="Industrial facility at sunset"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                <motion.div className="rounded-2xl overflow-hidden" variants={imageVariants}>
                  <Image
                    src="/gambar-2.jpg"
                    alt="Industrial equipment"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>

                <motion.div className="bg-[#3A3A3E] rounded-2xl p-5" variants={imageVariants}>
                  <h3 className="text-white text-xl font-semibold mb-4">Social Media</h3>
                  <div className="space-y-3">
                    <motion.a
                      href="#"
                      className="flex items-center text-white hover:text-yellow-400 transition-colors"
                      variants={socialLinkVariants}
                      custom={0}
                      whileHover="hover"
                    >
                      <Facebook className="w-5 h-5 text-yellow-400 mr-3" />
                      Facebook
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex items-center text-white hover:text-yellow-400 transition-colors"
                      variants={socialLinkVariants}
                      custom={1}
                      whileHover="hover"
                    >
                      <Instagram className="w-5 h-5 text-yellow-400 mr-3" />
                      Instagram
                    </motion.a>
                    <motion.a
                      href="#"
                      className="flex items-center text-white hover:text-yellow-400 transition-colors"
                      variants={socialLinkVariants}
                      custom={2}
                      whileHover="hover"
                    >
                      <Linkedin className="w-5 h-5 text-yellow-400 mr-3" />
                      Linkedin
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Text, Progress Bars and Stats */}
          <motion.div
            className="w-full lg:w-7/12"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-[#2A2A2E] mb-6">
              We are here to serve
              <br />
              your Piping need
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 mb-8 text-lg">
              "MSG Oilfield Equipment Trading LLC: Your Trusted Partner in Oil and Gas.
              <br />
              Delivering Excellence, Every Well, Every Time."
            </motion.p>

            <div className="space-y-8 mb-10">
              {/* Progress Bar 1 */}
              <motion.div variants={itemVariants} initial="hidden" animate="visible">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">Professional</span>
                  <span className="font-semibold text-lg">{progressControls}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${progressControls}%` }} // Set width based on state value
                    initial={{ width: 0 }}
                    animate={{ width: `${progressControls}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>

              {/* Progress Bar 2 */}
              <motion.div variants={itemVariants}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-lg">Quality</span>
                  <span className="font-semibold text-lg">{progressControls}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${progressControls}%` }} // Set width based on state value
                    initial={{ width: 0 }}
                    animate={{ width: `${progressControls}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Oil and Gas Projects */}
              <motion.div
                className="bg-white border border-yellow-200 rounded-lg p-4 text-center relative overflow-hidden"
                variants={statCardVariants}
                custom={0}
                whileHover="hover"
              >
                <motion.div className="absolute top-4 left-1/2 -translate-x-1/2" variants={iconVariants}>
                  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25 5L30 15L40 17L32.5 25L35 35L25 30L15 35L17.5 25L10 17L20 15L25 5Z"
                      fill="#E5E000"
                      stroke="#E5E000"
                      strokeWidth="2"
                    />
                  </svg>
                </motion.div>
                <div className="mt-8">
                  <motion.div
                    className="text-4xl font-bold text-[#2A2A2E]"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <AnimatedCounter target={385} duration={1.5} delay={0.8} inView={inView} />
                  </motion.div>
                  <p className="text-gray-600 text-sm">Oil and Gas Projects</p>
                </div>
              </motion.div>

              {/* Power and Marine Projects */}
              <motion.div
                className="bg-white border border-gray-200 rounded-lg p-4 text-center relative overflow-hidden"
                variants={statCardVariants}
                custom={1}
                whileHover="hover"
              >
                <motion.div className="absolute top-4 left-1/2 -translate-x-1/2" variants={iconVariants}>
                  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 5L35 20H15L25 5Z" fill="#E5E000" stroke="#E5E000" strokeWidth="2" />
                    <path d="M15 30H35L25 45L15 30Z" fill="#E5E000" stroke="#E5E000" strokeWidth="2" />
                  </svg>
                </motion.div>
                <div className="mt-8">
                  <motion.div
                    className="text-4xl font-bold text-[#2A2A2E] mb-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <AnimatedCounter target={125} duration={2.5} delay={1} inView={inView} />
                  </motion.div>
                  <p className="text-gray-600 text-sm">Power and Marine Projects</p>
                </div>
              </motion.div>

              {/* Other */}
              <motion.div
                className="bg-white border border-yellow-200 rounded-lg p-4 text-center relative overflow-hidden"
                variants={statCardVariants}
                custom={2}
                whileHover="hover"
              >
                <motion.div className="absolute top-4 left-1/2 -translate-x-1/2" variants={iconVariants}>
                  <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="20" width="10" height="20" fill="#E5E000" stroke="#E5E000" strokeWidth="2" />
                    <rect x="20" y="15" width="10" height="25" fill="#E5E000" stroke="#E5E000" strokeWidth="2" />
                    <rect x="30" y="10" width="10" height="30" fill="#E5E000" stroke="#E5E000" strokeWidth="2" />
                  </svg>
                </motion.div>
                <div className="mt-8">
                  <motion.div
                    className="text-4xl font-bold text-[#2A2A2E] mb-2"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <AnimatedCounter target={30} duration={2.5} delay={1.2} inView={inView} />
                  </motion.div>
                  <p className="text-gray-600 text-sm">Other</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

