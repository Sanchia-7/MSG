"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

type DropdownItem = {
  name: string
  href: string
}

type NavItem = {
  name: string
  href: string
  dropdown?: DropdownItem[]
  highlight?: boolean
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)

    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const dropdownRef = dropdownRefs.current[activeDropdown]
        if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
          setActiveDropdown(null)
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  const navLinks: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    {
      name: "Our Services",
      href: "/services",
      dropdown: [
        { name: "Inspection", href: "services/inspection" },
        { name: "Testing", href: "services/testing" },
        { name: "Cladding", href: "services/cladding" },
      ],
      highlight: true,
    },
    {
      name: "Our Products",
      href: "/products",
      dropdown: [
        { name: "Pipe Fittings", href: "/pipe-fittings" },
        { name: "Pipes", href: "/pipes" },
        { name: "Flanges", href: "/flanges" },
        { name: "Valves", href: "/valves" },
        { name: "Strainers", href: "/strainers" },
        { name: "Plates", href: "/plates" },
        { name: "Special items", href: "/special-items" },
      ],
      highlight: true,
    },
    { name: "Our Gallery", href: "/gallery" },
    {
      name: "Certification",
      href: "/certification",
      dropdown: [
        { name: "Download", href: "/download" },
        { name: "Company Profile", href: "/company-profile" },
        { name: "ISO Certificate", href: "/iso-certificate" },
      ],
      highlight: true,
    },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
    {
      name: "Calculator",
      href: "/calculator",
      dropdown: [
        { name: "Pipe Weight Calculator", href: "/pipe-weight" },
        { name: "Flange Weight Calculator", href: "/flange-weight" },
      ],
    },
  ]

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/60 " : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-5 py-7 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <Link href="/" className="text-white font-bold text-xl">
            <Image width={125} height={25} src="/logo.png" alt="Logo" />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="items-center hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              ref={(el) => {
                if (link.dropdown) {
                  dropdownRefs.current[link.name] = el
                }
              }}
            >
              {link.dropdown ? (
                <div>
                  <button
                    // onClick={() => toggleDropdown(link.name)} 
                    className={`flex items-center text-white hover:text-yellow-400 transition-colors duration-300 text-sm ${isActive(link.href) ? "text-yellow-400" : ""
                      } ${link.highlight ? "group" : ""}`}
                  >

                    <span className={link.highlight ? "group-hover:text-yellow-400" : ""}><Link
                      href={link.href}                        >
                      {link.name}
                    </Link></span>
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                        } ${link.highlight ? "text-yellow-400 group-hover:text-yellow-400" : ""}`}
                    />
                  </button>

                  {/* Dropdown options on hover */}
                  <div className="absolute left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg overflow-hidden z-20 group-hover:block hidden">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-800 hover:text-yellow-400 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={`text-white hover:text-yellow-400 transition-colors duration-300 text-sm relative ${isActive(link.href) ? "text-yellow-400" : ""
                    }`}
                >
                  {link.name}
                  {isActive(link.href) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              )}
            </motion.div>
          ))}
        </nav>

        {/* Login Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="hidden md:block"
        >
          <Link
            href="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.dropdown ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`flex items-center text-white hover:text-yellow-400 transition-colors duration-300 ${isActive(link.href) ? "text-yellow-400" : ""
                          }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown
                          size={16}
                          className={`ml-1 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 space-y-2"
                          >
                            {link.dropdown.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                className="block text-sm text-white hover:text-yellow-400 transition-colors duration-200"
                                onClick={() => {
                                  setActiveDropdown(null)
                                  setIsOpen(false)
                                }}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-white hover:text-yellow-400 block transition-colors duration-300 ${isActive(link.href) ? "text-yellow-400" : ""
                        }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/login"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-4 py-2 rounded-md block text-center transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
