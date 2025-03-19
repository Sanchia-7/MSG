"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function StrainersPage() {
  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Strainers" subtitle="MSG provides wide range of Strainers to our Clients." />

      <ProductSection image="/placeholder.svg?height=400&width=600" imageAlt="Strainers">
        <div>
          <p className="text-gray-700 dark:text-gray-300">
            MSG provides a complete package of <span className="font-semibold">pipe fitting</span> to almost every
            industry ranging from Oil & Gas, Petrochemical, Onshore as well as Offshore, Power Generation, General
            Industries, and Shipbuilding. We take utmost care of every incoming as well as outgoing product with our
            stringent quality checks We take utmost care of every incoming as well as outgoing product with our
            stringent quality checks. If needed, we always do additional testing to assure ourselves as well as our
            Client, that every product conforms to the given Standards.
          </p>
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-gray-700 dark:text-gray-300">
              MSG provides a comprehensive range of <span className="font-semibold">pipe fittings in Dubai</span> that
              can cater to the needs of almost any industry. From Oil & Gas, Petrochemical, Onshore, Offshore, Power
              Generation, General Industries, and Shipbuilding, MSG offers a complete package of{" "}
              <span className="font-semibold">pipe fitting</span> solutions to meet the unique requirements of each
              sector. With their extensive experience in the piping industry, they are committed to providing reliable
              quality products and services at competitive prices.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Quality assurance is essential for any product to be considered satisfactory. To ensure that all products
              are up to the given standards, additional testing is necessary. This process not only gives our clients
              peace of mind knowing that their product is safe and effective but also allows us to have confidence in
              the work we have done. With this extra testing, both our clients and ourselves can rest assured that all
              products meet the necessary criteria.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
  </main>
  )
}

