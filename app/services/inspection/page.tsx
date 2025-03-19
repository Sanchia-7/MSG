"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function InspectionPage() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Inspection" />

      <ProductSection
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SsDkS9HMkXdgOuBdceOABkh4ywVVNz.png"
        imageAlt="Inspection measurement with caliper"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300"
          >
            With our vast experience, we are well aware of the inspection requirements of our Clientele. We can arrange
            for Third party inspections on customer requests. Depending on our customers requirements we can outsource
            all kinds of relevant inspection.
          </motion.p>
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate={controls}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                title: "Visual Inspection",
                description:
                  "Our experienced inspectors perform thorough visual examinations to identify surface defects, dimensional accuracy, and overall quality.",
                icon: "🔍",
              },
              {
                title: "Dimensional Inspection",
                description:
                  "Using precision measuring tools, we verify that all dimensions meet the required specifications and tolerances.",
                icon: "📏",
              },
              {
                title: "Material Verification",
                description:
                  "We conduct material testing to ensure that the correct materials have been used and that they meet the required specifications.",
                icon: "🧪",
              },
              {
                title: "Third-Party Inspection",
                description:
                  "We can arrange for independent third-party inspections to provide unbiased verification of product quality and compliance.",
                icon: "👥",
              },
              {
                title: "Pre-Shipment Inspection",
                description:
                  "Before products are shipped, we conduct comprehensive inspections to ensure they meet all requirements and are properly packaged.",
                icon: "📦",
              },
              {
                title: "Documentation Review",
                description:
                  "We thoroughly review all documentation to ensure compliance with industry standards and customer specifications.",
                icon: "📄",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 },
                }}
                className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all dark:border-gray-800 dark:bg-gray-950"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-2xl text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-8 dark:from-primary/20 dark:to-primary/10"
          >
            <h2 className="mb-4 text-2xl font-bold">Our Inspection Process</h2>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              At MSG, we follow a rigorous inspection process to ensure that all products meet the highest standards of
              quality and reliability. Our inspection process includes:
            </p>
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/30"></div>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Initial Assessment",
                    description:
                      "We begin by assessing the specific inspection requirements based on the product type, industry standards, and customer specifications.",
                  },
                  {
                    step: "2",
                    title: "Inspection Planning",
                    description:
                      "We develop a detailed inspection plan that outlines the scope, methods, and criteria for the inspection.",
                  },
                  {
                    step: "3",
                    title: "Execution",
                    description:
                      "Our experienced inspectors carry out the inspection according to the plan, using appropriate tools and techniques.",
                  },
                  {
                    step: "4",
                    title: "Documentation",
                    description: "We document all findings and results in a comprehensive inspection report.",
                  },
                  {
                    step: "5",
                    title: "Review and Certification",
                    description:
                      "The inspection results are reviewed and, if satisfactory, the product is certified as meeting the required standards.",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer /> 
    </main>
  )
}

