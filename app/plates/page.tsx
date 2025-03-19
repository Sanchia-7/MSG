"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PlatesPage() {
  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Plates" />

      <ProductSection image="/placeholder.svg?height=400&width=600" imageAlt="Plates">
        <div>
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">MSG</span> is a reputable plate supplier that offers high-quality materials
            for the oil and gas, construction and engineering industries. Sheets are typically classified with a
            thickness of 6mm and below, but some exceptions are determined based on their surface finish. Commonly No.
            1. Surfaces are known as plates because of their primary use as structural elements. The stainless steel
            sheets as well as plates can be found in a range of uses in the industry of construction and chemical
            industries, as well as oil & gas and many other fields.
          </p>
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-bold"
          >
            PLATE GRADES:
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="mb-2 text-xl font-semibold">SS304/L</h3>
              <p className="text-gray-700 dark:text-gray-300">
                is the most popular grades of <span className="font-semibold">stainless steel</span> are namely SS 304
                and SS316. SS304 contains 18% Chromium and 8% <span className="font-semibold">Nickel</span> and are
                commonly used worldwide.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">SS316/L</h3>
              <p className="text-gray-700 dark:text-gray-300">
                on the other hand, contains 16% Chromium and 10% Nickel but there is an additional 2% Molybdenum. This
                addition allows SS316 materials to have increased corrosion resistance as compared to SS304 materials.
                SS316 materials are favored for use outdoors and nearer to marine and coastal settlements.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">SS31803/2205</h3>
              <p className="text-gray-700 dark:text-gray-300">
                is also commonly known as duplex stainless steel. This grade is the most popular duplex product on the
                market which offers good resistance to uniform and localized corrosion and as well as stress corrosion
                cracking.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">SS32750</h3>
              <p className="text-gray-700 dark:text-gray-300">
                is a super duplex product with higher corrosive resistance and mechanical strength when compared with
                SS31803/2205. The PREN of Super Duplex is between 40 to 45. Super duplex has seen increasing usage in
                the Asia pacific region for usages such as scrubbers.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">SS310S</h3>
              <p className="text-gray-700 dark:text-gray-300">
                is an austenitic heat- and creep-resisting stainless steel with excellent oxidation resistance in mildly
                cyclic conditions and is best employed in high temperatures up to 1050°C/1920°F.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">SS253MA</h3>
              <p className="text-gray-700 dark:text-gray-300">
                is an austenitic heat-resisting stainless steel with excellent oxidation and creep resistance in cyclic
                conditions and is best employed in high temperatures up to 1100°C/2012°F. This material grade is
                trademarked by Outokumpu, of which HH Stainless is a appointed distributor for in the South East Asia
                Region.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-xl font-semibold">SS904L</h3>
              <p className="text-gray-700 dark:text-gray-300">
                is an austenitic high alloy stainless steel with low carbon content but with copper being added to
                improve its resistance to strong reducing acids. It is also resistant to stress corrosion cracking and
                crevice corrosion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </main>
  )
}

