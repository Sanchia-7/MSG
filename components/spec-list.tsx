"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SpecItem {
  label: string
  value: string | React.ReactNode
}

interface SpecListProps {
  items: SpecItem[]
}

export default function SpecList({ items }: SpecListProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-1 sm:flex-row sm:space-y-0"
        >
          <div className="font-medium text-gray-900 dark:text-white sm:w-1/4">{item.label}:</div>
          <div className="text-gray-700 dark:text-gray-300 sm:w-3/4">{item.value}</div>
        </motion.div>
      ))}
    </div>
  )
}

