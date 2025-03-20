import type { Metadata } from 'next'
import { useState, useEffect } from 'react'
import "swiper/swiper-bundle.min.css"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import FloatingContactButton from '@/components/floating-contact-button'

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
    <html lang="en" suppressHydrationWarning>
      <body>
      <ThemeProvider attribute="class" defaultTheme="light">
          <Suspense
            fallback={
              <div className="fixed inset-0 w-full h-screen flex justify-center items-center bg-white z-50">
                {/* This fallback will rarely be seen as we're using the LoadingWrapper */}
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-500">Loading...</div>
                </div>
              </div>
            }
          >
            {children}
            <FloatingContactButton /> {/* Floating Contact Button */}
          </Suspense>
          </ThemeProvider>
      </body>
    </html>
  )
}
