"use client"

import type React from "react"

import { useState, useEffect } from "react"
import MSGLoadingPage from "@/components/ui/loader"

interface LoadingWrapperProps {
  children: React.ReactNode
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Show loading screen for at least 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Force loading on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      // This doesn't actually set state (page is unloading)
      // but it's a signal that we're about to refresh
      setIsLoading(true)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 w-full h-screen flex justify-center items-center bg-white z-50">
        <MSGLoadingPage />
      </div>
    )
  }

  return <>{children}</>
}

