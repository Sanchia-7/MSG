"use client"
import { motion } from "framer-motion"
import PageHeader from "@/components/page-header"
import ProductSection from "@/components/product-section"
import SpecList from "@/components/spec-list"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export default function ValvesPage() {
  return (
    <main>
      <Navbar />
    <div>
      <PageHeader title="API 6A & API 6D VALVES" />

      <ProductSection image="/placeholder.svg?height=400&width=600" imageAlt="API 6A & API 6D Valves">
        <div>
          <h2 className="mb-4 text-2xl font-bold">Valves</h2>
          <SpecList
            items={[
              {
                label: "Range",
                value: "1/2″ to 48″ – #150 lbs thru #2500 lbs Flanged, Threaded, Socketweld & Buttweld Connections",
              },
              {
                label: "Ball",
                value: "Floating & Trunnion Execution, Split Body, Top Entry, Side Entry, Fully Welded",
              },
              { label: "Standard", value: "BS5351, API 6D and API 6A Gate, Globe, Check : Forged & Castings" },
              {
                label: "Standards",
                value: "BS5352, BS1414, BS1873, BS1868, API 6D,API 602/600 and equivalent ISO standards",
              },
              { label: "Butterfly", value: "Regular & Offset design. Castiron & Caststeel Execution" },
              { label: "Standards", value: "BS5155, API609" },
              { label: "Construction", value: "Wafer Type, Semi-lug, Single & Double Flanged" },
              {
                label: "Materials & Grades",
                value:
                  "A105N, WCB, WCC, LF2, LCB, LCC, F316L, F304L, F321, CF8, CF8C, CF8NM, F5, F9, F11, F51, F53, 625/825 Alloys",
              },
              {
                label: "Specials",
                value:
                  "Metal Seated valves, Cryogenic Valves, Actuated Valves, Exotic Alloy Valves Coating : Polythene, Epoxy, Cement Lined",
              },
              { label: "Operation", value: "Lever, Gear, Hydraulic, Electric Movement, Motor Operated" },
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
            className="space-y-4"
          >
            <p className="text-gray-700 dark:text-gray-300">
              If you're in the oil and gas industry, you're likely familiar with API 6A & API 6D valves. These valves
              are used in a variety of applications, from drilling and production to refining and transportation. When
              it comes to finding a reliable supplier of API 6A & API 6D valves, there are several things you should
              consider.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              First and foremost, you'll want to look for a supplier that has a proven track record of quality and
              reliability. This means finding a supplier that uses high-quality materials and manufacturing processes to
              produce their valves. You'll also want to make sure that the supplier has a rigorous quality control
              process in place to ensure that every valve they produce meets API 6A & API 6D standards.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Another important factor to consider is the supplier's level of expertise. A knowledgeable supplier will
              be able to provide you with guidance and support throughout the entire valve selection and installation
              process. They should be able to answer any questions you have about API 6A & API 6D valves and help you
              select the right valves for your specific application.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In addition to expertise, you'll also want to look for a{" "}
              <span className="font-semibold">API 6A & API 6D Flanges Supplier</span>. This will allow you to choose
              from a variety of sizes, pressure ratings, and materials to ensure that you get the valves that are best
              suited for your needs. Ideally, the supplier should also be able to offer customized valve solutions to
              meet your unique requirements.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When it comes to delivery and customer service, you'll want to find a supplier that can meet your specific
              needs. This means finding a supplier that can provide fast delivery times and flexible shipping options to
              ensure that you get your valves when you need them. Additionally, the supplier should have a responsive
              customer service team that is available to answer any questions or concerns you may have.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              In conclusion, finding a reliable and knowledgeable API 6A & API 6D valves supplier is essential for any
              oil and gas company. By considering factors such as quality, expertise, availability, delivery, and
              customer service, you can find a supplier that meets all of your needs and helps ensure the success of
              your projects.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
    <Footer />
    </main>
  )
}

