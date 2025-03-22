"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
// import img from "/logo3.png"

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    // { name: "Products", href: "/products" },
    // { name: "Gallery", href: "/gallery" },
    { name: "Certification", href: "/certification" },
  ]

  const navigationLinks = [
    // { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blogs" },
    { name: "FAQs", href: "/faqs" },
    { name: "Our Gallery", href: "/gallery" },
  ]

  const contactInfo = [
    { label: "Phone", value: "+97142 951 222" },
    { label: "Email", value: "info@msgoilfield.com" },
    { label: "Address", value: "Dubai industrial city Phase 1, Salih Shuaib 2, Warehouse No:J-04 Dubai, United Arab Emirates" },
  ]

  return (
    <footer className="bg-gray-900 text-white" ref={ref}>
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
                {/* <input type="image" src="/logo3.png" alt="" /> */}
                <span className="text-gray-900 font-bold text-xl">MSG</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Material Solutions Grid</h3>
                <p className="text-gray-400 text-sm">Connecting Elements Naturally</p>
              </div>
            </div>

            <p className="text-gray-400">
              MSG is a leading supplier of quality piping products, serving the industrial, oil & gas, and petrochemical
              sectors worldwide.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/msgoilfield"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/msgoilfield/"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/msg-oilfield-equipment-trading-llc/"
                className="bg-gray-800 hover:bg-yellow-400 hover:text-gray-900 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold border-b border-gray-800 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold border-b border-gray-800 pb-2">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold border-b border-gray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  className="flex items-start"
                >
                  <span className="bg-gray-800 p-2 rounded-md mr-3 flex-shrink-0">
                    <span className="text-yellow-400 text-xs font-bold">{item.label[0]}</span>
                  </span>
                  <span className="text-gray-400">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Material Solutions Grid. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

