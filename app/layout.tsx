import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { NavBar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Audiophile - Premium Audio Equipment",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <CartProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
