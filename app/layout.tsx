import type React from "react"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Barber Bros - Premium Barbershop",
  description: "Where modern grooming meets timeless craftsmanship",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
