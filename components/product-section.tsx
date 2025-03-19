"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProductSectionProps {
  image: string
  imageAlt: string
  children: ReactNode
  reversed?: boolean
}

export default function ProductSection({ image, imageAlt, children, reversed = false }: ProductSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col gap-8 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 md:p-6 lg:flex-row ${
            reversed ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
              <Image src={image || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

