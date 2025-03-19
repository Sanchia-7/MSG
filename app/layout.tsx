import type { Metadata } from 'next'
// In your _app.tsx or component file
import "swiper/swiper-bundle.min.css";

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
      <body>{children}</body>
    </html>
  )
}
