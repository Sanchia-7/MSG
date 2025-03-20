"use client"
import { useEffect, useState, useRef } from "react"
import { motion, AnimatePresence, useAnimationControls } from "framer-motion"
import Image from "next/image"

export default function MSGLoadingPage() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const flameControls = useAnimationControls()
  const cubeControls = useAnimationControls()
  const particlesRef = useRef<HTMLCanvasElement>(null)

  // Simulate loading progress with slower updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 5 // Adjusting the progress increment
        if (newProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setLoading(false)
          }, 200) // Short delay before loading completes
          return 100
        }
        return newProgress
      })
    }, 800) // Increased interval time (800ms instead of 400ms)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#111] overflow-hidden"
        >
          <canvas ref={particlesRef} className="absolute inset-0 z-0" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative h-[300px] w-[300px]">            
              {/* Cube animation */}
              <motion.div
                animate={cubeControls}
                className="absolute left-1/2 top-[120px] -translate-x-1/2"
                style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
              >
                <Image
                  src="/logo4.png"
                  alt="MSG Logo"
                  width={150}
                  height={150}
                />
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <h2 className="text-2xl font-bold text-white mb-2">
                <motion.span
                  animate={{
                    color: ["#f7931e", "#ed1c24", "#58595b", "#f7931e"],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  MSG
                </motion.span>{" "}
                Industrial Supply
              </h2>
              <p className="text-gray-400 mb-4">Loading amazing industrial solutions...</p>
            </motion.div>

            {/* Progress bar */}
            {/* <div className="w-[300px] h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#f7931e] via-[#ed1c24] to-[#58595b]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>
            <p className="mt-2 text-white">{Math.round(progress)}%</p> */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
