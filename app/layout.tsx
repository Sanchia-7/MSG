import type { Metadata } from 'next'
// In your _app.tsx or component file
import "swiper/swiper-bundle.min.css";

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FloatingContactButton from '@/components/floating-contact-button';

import './globals.css'

export const metadata: Metadata = {
  title: 'MSG Oilfield',
  description: 'Created with v0',
  generator: 'v0.dev',
  icons: {
    icon: "/Favicon.png",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar />  Navbar always present */}
        <main>{children}</main>  {/* Main content */}
        {/* <Footer />  Footer always present */}
        <FloatingContactButton /> {/* Floating Contact Button */}
      </body>
    </html>
  )
}
