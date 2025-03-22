"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PageHeader from "@/components/page-header"

type FAQ = {
  question: string
  answer: string | React.ReactNode
}

export default function FAQsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openGeneral, setOpenGeneral] = useState<number | null>(null)
  const [openFlanges, setOpenFlanges] = useState<number | null>(null)

  const toggleGeneral = (index: number) => {
    setOpenGeneral(openGeneral === index ? null : index)
  }

  const toggleFlanges = (index: number) => {
    setOpenFlanges(openFlanges === index ? null : index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const generalFAQs: FAQ[] = [
    {
      question: "What types of oilfield equipment do you provide?",
      answer:
        "We offer a wide range of oilfield equipment, including drilling tools, production equipment, safety gear, and various other essential items for oil and gas exploration and production.",
    },
    {
      question: "How can I request a quote or place an order?",
      answer:
        "You can request a quote or place an order by contacting our sales team directly through our website, email, or phone. Our team will assist you in selecting the right products and provide pricing information.",
    },
    {
      question: "Do you offer customized solutions for unique project requirements?",
      answer:
        "Yes, we specialize in providing customized solutions to meet your specific project needs. Contact our experts to discuss your requirements, and we'll work to tailor a solution for you.",
    },
    {
      question: "What is your standard lead time for product delivery?",
      answer:
        "Our lead time varies depending on the product and quantity. We aim to provide accurate delivery estimates when you request a quote or place an order. We also offer expedited shipping options when necessary.",
    },
  ]

  //   const flangesFAQs: FAQ[] = [
  //     {
  //       question: "What are Flangs and why is it used?",
  //       answer:
  //         "Flanges are used to connect Pipes, Pipe Fittings, Valves, Pumps, Compressors, etc, with each other, to make a complete piping system.",
  //     },
  //     {
  //       question: "Common Types of Flanges",
  //       answer:
  //         `There are various type of Flanges. Most common type of Flanges are as follows with face finish Raised Face, RTJ and Flat Face.

  // 1.Weld Neck Flanges

  // 2.Slip On Flanges

  // 3.Socket Weld Flanges

  // 4.Threaded Flanges

  // 5.Blind Flanges.

  // Generally, size of pipe is above 2inch, also, where Pressure is high and Flanged Joints are required to be long lasting, then Weld Neck, Slip On or Socket Weld Flanges are used.

  // Wherever pressure is low and mechanical forces (Vibration, Expansion, Oscillation, Contraction) are absent and pipe connection is less than 2”, Threaded Flanges are used. Further, it is imperative to use Threaded Flanges in Explosive Areas.

  // Blind Flanges are used to curtail the flow of the fluid.

  // Person needs to be trained to carry out Flanged Joints. Standard TSE-TS EN 1591 Part 1-4 is the reference to execute Flange Joint.`,
  //     },
  //     {
  //       "question": "Special Type of Flanges",
  //       "answer": `There are specific or special types of flanges such as:</p><ul><li>Swivel Flanges</li><li>Expander/Reducer Flanges</li><li>Nippo Flange</li><li>Weldo Flange</li><li>Orifice Flange</li></ul>`
  //     },
  //     {
  //       question: "Flange Grade and its corresponding Pipe Grade",
  //       answer:
  //         "Special types include Orifice Flanges, Spectacle Blind Flanges, Reducing Flanges, and Expander Flanges. These are designed for specific applications where standard flanges may not be suitable.",
  //     },
  //     {
  //       question: "How to order Flange?",
  //       answer:
  //         "Flange grades must be compatible with pipe grades to ensure system integrity. Common pairings include ASTM A105 flanges with A53/A106 pipes for carbon steel applications, and A182 F304/F316 flanges with A312 TP304/TP316 pipes for stainless steel systems.",
  //     },

  //   ]

  const flangesFAQs: FAQ[] = [
    {
      question: "What types of oilfield equipment do you provide?",
      answer:
        "We offer a wide range of oilfield equipment, including drilling tools, production equipment, safety gear, and various other essential items for oil and gas exploration and production.",
    },
    {
      question: "Common Types of Flanges",
      answer: (
        <>
          <p>
            There are various type of Flanges. Most common type of Flanges are as follows with face finish Raised Face,
            RTJ and Flat Face.
          </p>
          <br />
          <ol className="list-disc pl-5">
            <li>Weld Neck Flanges</li>
            <li>Slip On Flanges</li>
            <li>Socket Weld Flanges</li>
            <li>Threaded Flanges</li>
            <li>Blind Flanges</li>
          </ol>
          <br />
          <p>
            Generally, for pipes above 2 inches with high pressure, Weld Neck, Slip On, or Socket Weld flanges are used.
          </p>
          <br />
          <p>
            Wherever pressure is low and mechanical forces (Vibration, Expansion, Oscillation, Contraction) are absent
            and pipe connection is less than 2”, Threaded Flanges are used. Further, it is imperative to use Threaded
            Flanges in Explosive Areas.
          </p>
          <br />
          <p>Blind Flanges are used to curtail the flow of the fluid.</p>
          <br />
          <p>
            Person needs to be trained to carry out Flanged Joints. Standard TSE-TS EN 1591 Part 1-4 is the reference to
            execute Flange Joint.
          </p>
          <br />
        </>
      ),
    },
    {
      question: "Special Type of Flanges",
      answer: (
        <>
          <p>There are specific or special types of flanges such as:</p>
          <br />
          <ul className="list-disc pl-5">
            <li>Swivel Flanges</li>
            <li>Expander/Reducer Flanges</li>
            <li>Nippo Flange</li>
            <li>Weldo Flange</li>
            <li>Orifice Flange</li>
          </ul>
        </>
      ),
    },
    {
      question: "Flange Grade and its corresponding Pipe Grade",
      answer: (
        <>
          <p>
            Flanges conforming to <b>ASTM A105N</b> (Carbon Steel High Temperature). These Flanges can be used along
            with Pipes conforming to ASTM A53, A106, API 5L
          </p>
          <br />
          <p>
            1.Flanges conforming to <b>ASTM A350</b> Grade LF1/2/3 (Carbon Steel Low Temperature). These Flanges can be
            used along with Pipes conforming to ASTM A333:
          </p>
          <br />
          <p>
            2.Flanges conforming to <b>ASTM A694</b> Grades F42 to F80(High Yield Carbon Steel). These Flanges can be
            used along with Pipes conforming to API 5L Pipe Grades
          </p>
          <br />
          <p>
            3.Flanges conforming to <b>ASTM A182</b> Grades F1 to F91(Alloy Steel Flanges). These Flanges can be used
            along with Pipes conforming to ASTM A335.
          </p>
          <br />
          <p>
            4.Flanges conforming to <b>ASTM A182</b> Grade F304, F316, F321. These Flanges can be used along with Pipes
            conforming to ASTM A312 SS Pipes
          </p>
          <br />
          <p>
            5.Flanges conforming to ASTM A182 Grade F44/F51/F53/F55 (Duplex/Super Duplex). These Flanges can be used
            along with Pipes conforming to ASTM A790/A928, Inconel, Incoloy, Hastelloy, Monel.
          </p>
          <br />
        </>
      ),
    },
    {
      question: "How to order Flang",
      answer: (
        <>
          <p>
            While ordering Flanges, following minimum details are required <br />
            <br />
            Type of Flange
            <br />
            Eg.: Weld Neck, Socket Weld, etc
            <br />
            <br />
            Size of Pipe (NPS-Nominal Pipe Size)
            <br />
            Eg.:2”,3”,etc.
            <br />
            <br />
            Schedule of the Pipe
            <br />
            Eg.: Sch 10,Sch,20,Sch30,Sch Std, Sch 40,etc
            <br />
            <br />
            Rating or Class
            <br />
            Eg.: As per Standard such as ASME (150 – 2500),JIS B2220/KS1503(5k – 30k),
            <br /> DIN/UNI/EN 1092-1/GOST 12820,12821-80(PN6 – PN100),SANS/SABS(Class 600/3 – 4000/3),etc.
            <br />
            <br />
            Face of the Flange
            <br />
            Eg.: FF(Flat Face),RF(Raised Face),RTJ (Ring Type Joint),etc.
            <br />
            <br />
            Surface Finish of the Flange
            <br />
            Eg.: Smooth, Stock, Concentric Serrated, etc
            <br />
            <br />
            Grade of the Material
            <br />
            Eg.: Ferrous such as Forged Carbon Steel, Stainless Steel, Duplex,etc or
            <br />
            Non-Ferrous such as CuproNickel,Copper,Aluminium, Bronze.
            <br />
            <br />
            Specification of the Flange
            <br />
            Eg.: ASME B16.5,ASME B16.47 Type A,EN 1092-1,JIS,UNI,DIN, etc
          </p>
          <br />
        </>
      ),
    },
  ]

  return (
    <main className="overflow-hidden">
      <Navbar />
      <PageHeader title="FAQs" />

      <section className="py-16 md:py-24 bg-white" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">GENERAL FAQ's</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Your satisfaction and success are our top priorities, and we are committed to delivering the best and
                most reliable solutions. Click on a question to see the answer. If you don't see what you're looking
                for, please feel free to contact us directly.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 bg-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleGeneral(index)}
                    className="w-full flex items-center justify-between p-4 text-left  transition-colors duration-300"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openGeneral === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-2"
                    >
                      <ChevronDown className="h-5 w-5 text-white" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openGeneral === index ? "auto" : 0,
                      opacity: openGeneral === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">FLANGES FAQ's</h2>
              <div className="w-20 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-gray-600 mb-8">
                Find answers to common questions about our flanges products, specifications, and applications. Our
                comprehensive FAQ section provides detailed information to help you make informed decisions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              {flangesFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border border-gray-200 bg-gray-800 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFlanges(index)}
                    className="w-full flex items-center justify-between p-4 text-left transition-colors duration-300"
                  >
                    <span className="font-medium text-white">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFlanges === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 ml-2"
                    >
                      <ChevronDown className="h-5 w-5 text-white" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openFlanges === index ? "auto" : 0,
                      opacity: openFlanges === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

