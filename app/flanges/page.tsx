"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import SpecList from "@/components/spec-list"
import QuoteForm from "@/components/quote-form"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function FlangesPage() {
  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Flanges" />

      <ProductSection image="/placeholder.svg?height=400&width=600" imageAlt="Flanges">
        <div>
          <div className="mb-4">
            <p className="text-gray-700 dark:text-gray-300">
              The range is 1/2″ to 96″150# to 2500#, 3000psi to 10,000psi. Based on the standard wide range of thickness
              and Specifications.
            </p>
          </div>
          <SpecList
            items={[
              { label: "Type", value: "Weldneck, Socketweld, Blind, Threaded, Slipon" },
              { label: "Standards", value: "API, ASTM/ASME, ISO" },
              {
                label: "Materials",
                value: (
                  <span>
                    Carbon Steel, Alloys, Stainless Steel, Duplex, Super Duplex, Inconel,{" "}
                    <span className="font-semibold">Titanium</span>, Monel, Hastelloy Grade: A105, A350 LF2, LF3,
                    LF6,A182 F316, 304/304L, F316/316L, F11, F12, F22, F51, F53, F55, High Yield F42 to F70, Inconel
                    625/825
                  </span>
                ),
              },
              {
                label: "Special",
                value:
                  "Spectacle Blinds, Drip Ings, Long Weldnecks, Nozzles, Insuruon Flanges, An Swivel Flange, Orifice Flange, Nipofflanges",
              },
            ]}
          />
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-gray-700 dark:text-gray-300">
                We at MSG, supply flanges as per the needs of our Client. We also have the provision of keeping flanges
                that are 'Semi-finished' in order to allow special facing, end preparation or drilling to meet Clients
                immediate requirements.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                MSG is the most renowned Melesi flanges supplier throughout the UAE. With a dedication to quality and a
                vast assortment, we're proud to be acknowledged as the top flanges distributor in the region.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We have a wide selection of ASME Flanges with classes that range from 150-2,500, along with flanges that
                range from 2,000 to 20,000. Additionally, specialized flanges may be sourced on request, such as orifice
                assembly, swivel anchor and long weld-neck flanges, which conform to the standard dimensions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Flange systems are a proven and reliable alternative to conventional flanged connections that are used
                in the gas, oil and petrochemical generation industries. They are available in a wide variety of sizes
                and materials that offer flexibility as well as lightweight, compactness, and cost-effective connections
                for pipeline systems.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The Flange System is designed to comply with the ANSI B 16.5, ASME VIII, and other applicable design
                codes. The Flange System has received certification from reputable organizations across the globe.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                MSG is a trusted swivel flange supplier with a reputation for providing high-quality products to the oil
                and gas industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold">Get Your Custom Quote Now!</h2>
                <p className="mb-6 text-gray-700 dark:text-gray-300">
                  Request a custom quote in just a few clicks! Simply fill out the form below with your details and
                  specific requirements. Our team will get back to you with a personalized quote tailored to your needs.
                  Enjoy competitive pricing and top-notch customer service. Let's get started!
                </p>
                <QuoteForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </main>
  )
}

