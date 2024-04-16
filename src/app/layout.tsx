import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import React from "react"
import Navbar from "@/components/header/navbar"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: Readonly<{
  children : React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-[#ebe6e6] font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  )
}