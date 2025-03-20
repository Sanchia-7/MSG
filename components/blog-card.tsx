"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    image: string
    date: string
    author: string
    category: string
  }
  index: number
  featured?: boolean
}

export default function BlogCard({ post, index, featured = false }: BlogCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 ${
        featured ? "col-span-full md:col-span-2" : ""
      }`}
    >
      <Link href={`/blogs/${post.id}`}>
        <div className={`relative overflow-hidden ${featured ? "h-64 md:h-80" : "h-48 sm:h-64"}`}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute bottom-0 left-0 right-0 p-4 text-white"
          >
            <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-medium">Read More</span>
          </motion.div>
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-1 h-3 w-3" />
              <span>{post.author}</span>
            </div>
          </div>

          <h3
            className={`mb-2 font-bold transition-colors group-hover:text-primary ${featured ? "text-2xl" : "text-xl"}`}
          >
            {post.title}
          </h3>

          <p className="mb-3 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">{post.excerpt}</p>

          <div className="flex items-center text-primary">
            <span className="text-sm font-medium">Read article</span>
            <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

