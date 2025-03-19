"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function CladdingPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="Cladding" />

      <ProductSection
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-700 dark:text-gray-300"
          >
            In highly corrosive environment or for transporting highly corrosive liquid, it is generally preferred to
            use Corrosion Resistant Alloy (CRA). However, the cost of CRA Pipes is extremely expensive, which leads cost
            overrun of the project. In order to overcome this high economic cost, Cladding is the process by which cost
            can be reduced drastically.
          </motion.p>
        </div>
      </ProductSection>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold">What is Cladding?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 text-gray-700 dark:text-gray-300"
          >
            <p>
              Cladding is the process by which layer of Corrosion Resistant Alloy (CRA) is bonded internally or to the
              normal Carbon Steel (CS) Pipe by various processes. There by providing corrosion resistant properties of
              CRA and Mechanical Properties of Carbon Steel Pipes. Hence, overall cost is brought down drastically.
              Efficacy of the Cladded Pipes is same as CRA Pipes. Apart from Pipes, Cladding Process can be carried out
              on Fittings, as well as on Valves too. Cladding process can be carried out externally as well as
              internally, depending upon requirements.
            </p>
            <p className="mt-4">
              MSG represents one of the leading exponents of Cladding process in China. MSG shall provide full technical
              support till completion of the project, to the Clients satisfaction.
            </p>
          </motion.div>

          <div ref={ref} className="relative py-8">
            <motion.div style={{ opacity, y }} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Internal Cladding",
                  description:
                    "Internal cladding involves applying a layer of corrosion-resistant alloy to the inside surface of a carbon steel pipe. This is particularly useful for pipes that transport corrosive fluids.",
                  icon: "🔄",
                },
                {
                  title: "External Cladding",
                  description:
                    "External cladding involves applying a layer of corrosion-resistant alloy to the outside surface of a carbon steel pipe. This is useful for pipes that are exposed to corrosive environments.",
                  icon: "🛡️",
                },
                {
                  title: "Weld Overlay Cladding",
                  description:
                    "Weld overlay cladding is a process where a layer of corrosion-resistant alloy is welded onto the surface of a carbon steel pipe. This creates a metallurgical bond between the two materials.",
                  icon: "⚡",
                },
                {
                  title: "Explosive Cladding",
                  description:
                    "Explosive cladding uses controlled detonations to bond the corrosion-resistant alloy to the carbon steel pipe. This creates a very strong bond between the two materials.",
                  icon: "💥",
                },
                {
                  title: "Roll Bonding",
                  description:
                    "Roll bonding involves pressing and rolling the corrosion-resistant alloy and carbon steel together at high temperatures. This creates a solid bond between the two materials.",
                  icon: "🔄",
                },
                {
                  title: "Mechanical Cladding",
                  description:
                    "Mechanical cladding involves mechanically attaching the corrosion-resistant alloy to the carbon steel pipe. This can be done using various methods, such as shrink fitting or expansion.",
                  icon: "🔧",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 overflow-hidden rounded-lg bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 p-8 dark:from-primary/20 dark:via-primary/10 dark:to-primary/20"
          >
            <h2 className="mb-6 text-2xl font-bold">Benefits of Cladding</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Cost Efficiency</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cladding provides the corrosion resistance of expensive alloys at a fraction of the cost of solid
                      alloy components.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Corrosion Resistance</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cladded pipes offer excellent resistance to corrosive environments, extending the lifespan of the
                      equipment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Mechanical Strength</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      The carbon steel base provides excellent mechanical properties, ensuring structural integrity.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Versatility</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cladding can be applied to various components, including pipes, fittings, valves, and vessels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Longevity</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Cladded components have a longer service life in corrosive environments compared to standard
                      carbon steel components.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Customization</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Different cladding materials can be selected based on specific corrosion resistance requirements.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">Our Cladding Process</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-primary/20"></div>
              <div className="space-y-16">
                {[
                  {
                    title: "Material Selection",
                    description:
                      "We carefully select the base material (carbon steel) and the cladding material (corrosion-resistant alloy) based on the specific requirements of the application.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Surface Preparation",
                    description:
                      "The surface of the base material is thoroughly cleaned and prepared to ensure proper bonding with the cladding material.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Cladding Application",
                    description:
                      "The cladding material is applied to the base material using the most appropriate method, such as weld overlay, roll bonding, or explosive cladding.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Quality Control",
                    description:
                      "Rigorous quality control measures are implemented to ensure the integrity of the cladding, including non-destructive testing and visual inspection.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                  {
                    title: "Final Processing",
                    description:
                      "The cladded component undergoes final processing, such as heat treatment, machining, or surface finishing, to meet the required specifications.",
                    image: "/placeholder.svg?height=300&width=500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div
                      className={`flex flex-col items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      } gap-8`}
                    >
                      <div className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                        {index + 1}
                      </div>
                      <div className="w-full md:w-1/2">
                        <div className="relative h-[250px] overflow-hidden rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2">
                        <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </div>
                    </div>
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

