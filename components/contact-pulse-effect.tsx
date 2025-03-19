"use client"

import { motion } from "framer-motion"

interface ContactPulseEffectProps {
  color?: string
  size?: number
}

export default function ContactPulseEffect({ color = "#F0F0A0", size = 16 }: ContactPulseEffectProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            border: `2px solid ${color}`,
            height: size * 4,
            width: size * 4,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.7, 0],
            scale: [0.5, 1.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}

