"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import SpecList from "@/components/spec-list"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function PipesPage() {
  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Pipes" />

      <ProductSection image="/placeholder.svg?height=400&width=600" imageAlt="Pipes">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Pipes</h2>
          <SpecList
            items={[
              { label: "Range", value: "1/2″ to 96″" },
              { label: "Execution", value: "Seamless & Welded Pipes, ERW, HFW, SAW, DSAW, LSAW" },
              { label: "Standards", value: "API, ASTM/ASME, BS/ISO" },
              {
                label: "Materials",
                value: "Carbon Steel, Alloys, Stainless Steel, Duplex, Inconel, Titanium, Monel, Hastelloy",
              },
              {
                label: "Grade",
                value:
                  "APISLB, A106 Gr B, APISL Gr X42, X52, X60, X65, X70, A333 Gr 6, A333 Gr 3, A671 Gr5, A335 P5, P9, P11, P22, P91, A312, Gr 316/316L, 304/304L, 321/321H, 347/347H, A790 UNS S31803, S32750 / S32760, 6Moly, 310, 317L, 3191I, 904L, Alloy 400, 625, 825, 70600, 70620",
              },
              {
                label: "Specials",
                value:
                  "Finned Tubes, Head Exchangers, Tubes & Duplex Tubing Coating: Polythene, Epoxy, Galvanized, 3LPE Cement Lining Galvanized (ASTM153, ASTM123) Electro galvanizing",
              },
            ]}
          />
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
              If you're looking for high-quality pipes for your construction, plumbing, or industrial needs, then you
              need a reliable pipes supplier. With so many pipes suppliers in the market, it can be challenging to find
              the right one. That's why it's essential to do your research and choose a reputable supplier that can
              provide you with the best quality pipes at competitive prices.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              A good pipes supplier should have a wide range of pipes to choose from, including different types, sizes,
              and materials. They should also have a team of experienced professionals who can provide expert advice on
              the best pipes for your specific needs. We also know brands as{" "}
              <span className="font-semibold">Forging Supplier</span>, Insulation Sleeves,{" "}
              <span className="font-semibold">Gaskets Supplier</span> etc.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              When looking for a pipes supplier, you should consider their reputation in the market. A supplier with a
              good reputation is more likely to offer high-quality pipes and excellent customer service. You can check
              online reviews and ask for referrals from friends or business associates.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Another important factor to consider is the supplier's delivery time and availability. A good pipes
              supplier should have a prompt and reliable delivery system to ensure that you receive your{" "}
              <span className="font-semibold">pipes fitting</span> on time. They should also be available to answer any
              questions or concerns you may have about their products.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              In summary, finding a reputable pipes supplier is crucial for any construction or industrial project. A
              reliable supplier can provide you with high-quality pipes at competitive prices, offer expert advice, and
              ensure prompt delivery. So, take the time to research and choose the right pipes supplier for your needs.
            </p>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              So if you are looking for a <span className="font-semibold">Pipes Suppliers</span>, contact one and only
              MSG!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </main>
  )
}

