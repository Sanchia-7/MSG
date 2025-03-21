import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Calculators | MSG Oilfield Equipment",
  description: "Specialized calculators for industrial applications",
}

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

