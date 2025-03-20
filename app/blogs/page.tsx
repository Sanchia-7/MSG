"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Blog post data
const blogPosts = [
  {
    id: "spacers",
    title: "Everything you need to know about spacers and what they do!",
    excerpt:
      "Let's first study more about spacers before seeking a spacers supplier provider. In contrast to a specific object, the term spacer is more directly associated with an application.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 26, 2023",
    author: "rizwan_119",
    category: "Uncategorized",
    featured: true,
  },
  {
    id: "duplex-steel-pipe-fittings",
    title: "Benefits of duplex steel pipe fittings!",
    excerpt:
      "Looking for a duplex fittings supplier in UAE, look no further than MSG Dubai. We are a leading company that provides products like bends, pipe fittings, flanges, spacers, and more.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 26, 2023",
    author: "rizwan_119",
    category: "Uncategorized",
    featured: true,
  },
  {
    id: "3d-bends",
    title: "Applications where 3D bends are used",
    excerpt:
      "Looking for a 3D bends supplier in UAE, look no further than MSG Dubai. We are a leading company that provides products like bends, pipe fittings, flanges, spacers, and more.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 26, 2023",
    author: "rizwan_119",
    category: "Uncategorized",
    featured: false,
  },
  {
    id: "stainless-steel-pipe-fittings",
    title: "Benefits of using stainless steel pipe fittings!",
    excerpt:
      "Benefits of using stainless steel pipe fittings! In pipe systems, fittings are used to join straight pipe or tube segments, adapt to various sizes or forms, and serve additional functions.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 26, 2023",
    author: "rizwan_119",
    category: "Uncategorized",
    featured: false,
  },
  {
    id: "pipe-manufacturing",
    title: "The Modern Process of Pipe Manufacturing",
    excerpt:
      "Discover the cutting-edge techniques used in modern pipe manufacturing and how they ensure higher quality and durability for industrial applications.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 24, 2023",
    author: "rizwan_119",
    category: "Manufacturing",
    featured: false,
  },
  {
    id: "oil-gas-industry",
    title: "Innovations in the Oil & Gas Industry",
    excerpt:
      "Explore the latest innovations in the oil and gas industry that are revolutionizing how companies extract, transport, and process these valuable resources.",
    image: "/placeholder.svg?height=400&width=600",
    date: "October 22, 2023",
    author: "rizwan_119",
    category: "Industry News",
    featured: false,
  },
]

// Blog card component with animations
const BlogCard = ({ post, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
    >
      <Link href={`/blogs/${post.id}`}>
        <div className="relative h-48 overflow-hidden sm:h-64">
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

          <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-primary">{post.title}</h3>

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

// Featured blog component with parallax effect
const FeaturedBlog = ({ post }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="group relative mb-12 overflow-hidden rounded-xl"
    >
      <Link href={`/blogs/${post.id}`}>
        <div className="relative h-[400px] w-full overflow-hidden">
          <motion.div style={{ y, opacity }} className="absolute inset-0">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="mb-2 flex items-center space-x-3 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-1 h-4 w-4" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">{post.title}</h2>

              <p className="mb-4 max-w-2xl text-gray-200 sm:text-lg">{post.excerpt}</p>

              <motion.div
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-white"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

// Floating category pills
const CategoryPill = ({ category, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-primary text-white"
        : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
    }`}
  >
    {category}
  </motion.button>
)

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredPosts, setFilteredPosts] = useState(blogPosts)

  // Extract unique categories
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

  // Featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = blogPosts

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (activeCategory !== "All") {
      filtered = filtered.filter((post) => post.category === activeCategory)
    }

    setFilteredPosts(filtered)
  }, [searchTerm, activeCategory])

  // Scroll progress for parallax effects
  const { scrollYProgress } = useScroll()
  const headerY = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <div>
      <Navbar />
      <PageHeader title="Article & Blog" />

      <div className="container mx-auto px-4 py-12">
        {/* Search and filter section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((category) => (
                <CategoryPill
                  key={category}
                  category={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Featured blog section */}
        {featuredPosts.length > 0 && activeCategory === "All" && !searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <motion.h2 style={{ y: headerY }} className="mb-8 text-3xl font-bold">
              Featured Articles
            </motion.h2>

            <FeaturedBlog post={featuredPosts[0]} />
          </motion.div>
        )}

        {/* Blog grid */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-3xl font-bold"
          >
            {filteredPosts.length > 0
              ? activeCategory === "All"
                ? "Latest Articles"
                : `${activeCategory} Articles`
              : "No Articles Found"}
          </motion.h2>

          <AnimatePresence>
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <BlogCard key={post.id} post={post} index={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-12 text-center dark:bg-gray-900"
              >
                <div className="mb-4 text-4xl">🔍</div>
                <h3 className="mb-2 text-xl font-bold">No articles found</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setActiveCategory("All")
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Newsletter subscription */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-xl bg-gradient-to-r from-primary/20 to-primary/10 p-8 dark:from-primary/30 dark:to-primary/20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-3 text-2xl font-bold">Subscribe to Our Newsletter</h3>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              Stay updated with our latest articles, industry news, and product information.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

