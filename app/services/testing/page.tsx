"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function TestingPage() {
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
      <PageHeader title="Testing" />

      <ProductSection
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-77P1RkEs8fHVmEdJ82uBXzTCQRHZFy.png"
        imageAlt="Testing measurement with caliper"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300"
          >
            With our vast experience, we are well aware of the testing requirements of our Clientele. We can arrange for
            Third party testing on customer requests. Depending on our customers requirements we can outsource all kinds
            of relevant testing such as...
          </motion.p>
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-3 text-xl font-bold">SSCC (Sulphide Stress Corrosion Cracking)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Specialized testing to evaluate material resistance to cracking in environments containing hydrogen
                  sulfide.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">HIC (Hydrogen Induced Cracking)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Testing to assess material susceptibility to cracking caused by hydrogen absorption.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">Various Mechanical (Bend Test, Ultimate Tensile Test etc.)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Comprehensive mechanical testing to evaluate material strength, ductility, and other physical
                  properties.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">Chemical Analysis, Impact Test, Grain size</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Detailed analysis of material composition and microstructure to ensure compliance with specifications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="mb-3 text-xl font-bold">
                  Various NDE (Non-destructive examinations) such as UT (Ultrasonic Testing Examination)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Advanced ultrasonic testing to detect internal flaws without damaging the material.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">Radiography</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  X-ray or gamma-ray imaging to identify internal defects in materials and welds.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">LPE (Liquid Penetrant Examination)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Surface testing method to detect cracks and other surface defects.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">MPI (Magnetic Particle Examination)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Testing method that uses magnetic fields to detect surface and near-surface discontinuities.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-bold">PMI (Positive Material Identification) etc.</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  On-site analysis to verify material composition and ensure the correct materials are being used.
                </p>
              </div>
            </motion.div>
          </div>

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
            className="mt-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Our Testing Capabilities</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Mechanical Testing",
                  description: "Comprehensive mechanical testing to evaluate material properties and performance.",
                  icon: "⚙️",
                  features: [
                    "Tensile Testing",
                    "Hardness Testing",
                    "Impact Testing",
                    "Bend Testing",
                    "Flattening Testing",
                  ],
                },
                {
                  title: "Corrosion Testing",
                  description: "Specialized testing to evaluate material resistance to various corrosive environments.",
                  icon: "🧪",
                  features: [
                    "SSCC Testing",
                    "HIC Testing",
                    "Pitting Corrosion Testing",
                    "Intergranular Corrosion Testing",
                    "Stress Corrosion Testing",
                  ],
                },
                {
                  title: "Non-Destructive Testing",
                  description: "Advanced testing methods to detect defects without damaging the material.",
                  icon: "🔍",
                  features: [
                    "Ultrasonic Testing",
                    "Radiographic Testing",
                    "Magnetic Particle Testing",
                    "Liquid Penetrant Testing",
                    "Visual Inspection",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 },
                  }}
                  className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all dark:border-gray-800 dark:bg-gray-950"
                >
                  <div className="bg-primary/10 p-6 dark:bg-primary/20">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-md dark:bg-gray-800">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center"
                        >
                          <span className="mr-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                            ✓
                          </span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20"
          >
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-primary/20 opacity-70"></div>
              <div className="absolute -right-4 -bottom-4 h-16 w-16 rounded-full bg-primary/20 opacity-70"></div>
              <div className="relative z-10">
                <h2 className="mb-4 text-2xl font-bold">Why Choose Our Testing Services?</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Expertise and Experience</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      With years of experience in the industry, our team has the expertise to provide accurate and
                      reliable testing services.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Comprehensive Testing Capabilities</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We offer a wide range of testing services to meet all your needs, from mechanical testing to
                      non-destructive examination.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Quality Assurance</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our testing processes are designed to ensure the highest level of quality and reliability in your
                      products.
                    </p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">Customer-Focused Approach</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We work closely with our clients to understand their specific needs and provide tailored testing
                      solutions.
                    </p>
                  </div>
                </div>
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

