"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { Phone, X, MessageCircle } from "lucide-react"
import ContactPulseEffect from "./contact-pulse-effect"

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const controls = useAnimation()

  // Track mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (buttonRef.current && !isOpen) {
        const rect = buttonRef.current.getBoundingClientRect()
        const buttonCenterX = rect.left + rect.width / 2
        const buttonCenterY = rect.top + rect.height / 2

        const maxDistance = 300
        const distance = Math.sqrt(Math.pow(e.clientX - buttonCenterX, 2) + Math.pow(e.clientY - buttonCenterY, 2))

        if (distance < maxDistance) {
          const pull = 1 - distance / maxDistance
          const moveX = (e.clientX - buttonCenterX) * pull * 0.2
          const moveY = (e.clientY - buttonCenterY) * pull * 0.2

          controls.start({
            x: moveX,
            y: moveY,
            transition: { type: "spring", stiffness: 150, damping: 15 },
          })
        } else {
          controls.start({ x: 0, y: 0, transition: { type: "spring", stiffness: 150, damping: 15 } })
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Start the floating animation
    const floatingAnimation = async () => {
      while (true) {
        if (!isOpen) {
          await controls.start({
            y: [0, -10, 0],
            transition: { duration: 2, ease: "easeInOut" },
          })
        }
        await new Promise((resolve) => setTimeout(resolve, 3000))
      }
    }

    floatingAnimation()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [controls, isOpen])

  const toggleOpen = () => {
    setIsOpen(!isOpen)

    // Reset position when toggling
    if (!isOpen) {
      controls.start({ x: 0, y: 0 })
    }
  }

  // Button variants for animations
  const buttonVariants = {
    closed: {
      rotate: 0,
      scale: 1,
    },
    open: {
      rotate: [0, 90, 180, 270, 360],
      scale: [1, 1.2, 1],
      transition: {
        rotate: { duration: 0.5 },
        scale: { duration: 0.3 },
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 20px rgba(240, 240, 160, 0.7)",
    },
    tap: {
      scale: 0.9,
    },
  }

  // Action button variants
  const actionButtonVariants = {
    initial: { opacity: 0, y: 20, scale: 0 },
    animate: (custom: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: custom % 2 === 0 ? [0, -10, 10, -10, 0] : [0, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        rotate: { repeat: 0, duration: 0.5 },
      },
    }),
    exit: (custom: number) => ({
      opacity: 0,
      y: 20,
      scale: 0,
      transition: { duration: 0.2, delay: 0.1 - custom * 0.05 },
    }),
    hover: {
      scale: 1.2,
      rotate: [0, 5, -5, 5, 0],
      transition: { duration: 0.3 },
    },
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-20 right-0 flex flex-col items-center space-y-4">
            {/* WhatsApp Button */}
            <motion.a
              href="https://wa.me/+971429512222"
              target="_blank"
              rel="noopener noreferrer"
              custom={1}
              variants={actionButtonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </motion.a>

            {/* Call Button */}
            <motion.a
              href="tel:+971429512222"
              custom={2}
              variants={actionButtonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#4CAF50] text-white shadow-lg"
            >
              <Phone size={24} />
            </motion.a>

            {/* Close Button */}
            <motion.button
              onClick={toggleOpen}
              custom={3}
              variants={actionButtonVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
              className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F0A0] text-gray-800 shadow-lg"
            >
              <X size={24} />
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Main Contact Button */}
      <motion.button
        ref={buttonRef}
        onClick={toggleOpen}
        animate={controls}
        variants={buttonVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        whileHover="hover"
        whileTap="tap"
        className={`relative flex h-16 w-16 items-center justify-center rounded-full ${
          isOpen ? "bg-[#F0F0A0]" : "bg-[#F0F0A0]"
        } text-gray-800 shadow-lg transition-colors duration-300`}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.div>

        {/* Pulse effect */}
        {!isOpen && <ContactPulseEffect />}
      </motion.button>
    </div>
  )
}

