import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Suppliers from "@/components/suppliers"
import TopSupplier from "@/components/top-supplier"
import Products from "@/components/products"
import Community from "@/components/community"
import ServiceSection from "@/components/service-section"
import ContactSection from "@/components/contact-section"
import BrandShowcase from "@/components/brand-showcase"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"
import FloatingContactButton from "@/components/floating-contact-button"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Suppliers />
      <TopSupplier />
      <Products />
      <Community />
      <ServiceSection />
      <ContactSection />
      <BrandShowcase />
      <Newsletter />
      <FloatingContactButton/>
      <Footer />
    </main>
  )
}

