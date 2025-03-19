"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function SpecialItemsPage() {
  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Special Items" />

      <ProductSection image="/placeholder.svg?height=400&width=600" imageAlt="Special Items">
        <div className="space-y-4">
          <ul className="space-y-2">
            <li className="text-gray-700 dark:text-gray-300">Isolation Joints</li>
            <li className="text-gray-700 dark:text-gray-300">Corrosion Coupons & Injection Quills</li>
            <li className="text-gray-700 dark:text-gray-300">Nozzles and Special Forgings</li>
            <li className="text-gray-700 dark:text-gray-300">End Closures</li>
            <li className="text-gray-700 dark:text-gray-300">Pressure Vessels</li>
            <li className="text-gray-700 dark:text-gray-300">Pig Launcher & Receiver</li>
            <li className="text-gray-700 dark:text-gray-300">Cladding Works</li>
            <li className="text-gray-700 dark:text-gray-300">Dish Ends</li>
            <li className="text-gray-700 dark:text-gray-300">Test Rings/ Spectical Blinds/ Spade & Spacers</li>
            <li className="text-gray-700 dark:text-gray-300">Welding Consumables</li>
          </ul>
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-700 dark:text-gray-300">
              In order to provide complete package to our clients, we at MSG strive and provide materials which are
              required by our esteemed customers.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Based on specific requirements, on case to case basis, we do provide materials as requested by our
              Clients. Requirements are not limited to below given items.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
  </main>
  )
}

