"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductCard from "@/components/product-card"
import SpecList from "@/components/spec-list"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PipeFittingsPage() {
  return (
    <main>
      <Navbar />
      <div>
        <PageHeader title="Pipe Fittings" />

        <ProductCard image="/p5.jpeg" imageAlt="Pipe Fittings">
          <div className="mb-4">
            <p className="text-gray-700 pt-15 dark:text-gray-300">
              MSG is proud to be an Aramco approved vendor that supplies high-quality materials and services that meet the stringent standards of the oil and gas industry.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              MSG provides a comprehensive range of <span className="font-semibold">pipe fittings in Dubai</span> that can
              cater to the needs of almost any industry. From Oil & Gas, Petrochemical, Onshore, Offshore, Power
              Generation, General Industries, and Shipbuilding, MSG offers a complete package of{" "}
              <span className="font-semibold">pipe fitting</span> solutions to meet the unique requirements of each
              sector. With their extensive experience in the piping industry, they are committed to providing reliable
              quality products and services at competitive prices.
            </p>
          </div>
        </ProductCard>


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
                Quality assurance is essential for any product to be considered satisfactory. To ensure that all products
                are up to the given standards, additional testing is necessary. This process not only gives our clients
                peace of mind knowing that their product is safe and effective but also allows us to have confidence in
                the work we have done. With this extra testing, both our clients and ourselves can rest assured that all
                products meet the necessary criteria.
              </p>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 text-2xl font-bold md:text-3xl"
            >
              Fittings
            </motion.h2>

            <div className="space-y-8">
              <SpecList
                items={[
                  { label: "Range", value: "1/2″ to 96″ Standard & Special Wall Thickness" },
                  { label: "Type", value: "Elbow, Tee, Reducer, Cap & Forged fittings" },
                  { label: "Ends", value: "Buttweld, Socketweld, Plainends, Threaded" },
                  { label: "Standard", value: "ANSI/ASME, MSS SP/ISO" },
                  {
                    label: "Materials",
                    value: (
                      <span>
                        Carbon Steel, Alloys, Stainless Steel, Duplex, Super Duplex,{" "}
                        <span className="font-semibold">Titanium</span>, Monel, Hastelloy
                      </span>
                    ),
                  },
                  { label: "Grade", value: "WPB, WPL6, A105, LF2" },
                  { label: "WPHY", value: "42/52/60/65/70" },
                  { label: "WP304/304L", value: "316/316L" },
                  {
                    label: "UNS",
                    value: "S31803, S32205, 32750, S32760, Alloy 625/825, WP11, WP22, WP91, 321/321H, 347/347H",
                  },
                  {
                    label: "Special",
                    value: "Barred & Barrel Flow Tees, Large Radius Bends, Sweep Bends, Stub Ends, Laterals",
                  },
                ]}
              />
            </div>
          </div>

        </section>
      </div>
      <Footer />
    </main>
  )
}

