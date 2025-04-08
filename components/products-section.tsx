"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star, Plus, Minus } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { products } from "@/data/products"

export default function ProductsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [quantities, setQuantities] = useState<{ [key: number]: number }>({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
  })

  const { addToCart } = useCart()

  const incrementQuantity = (productId: number) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }))
  }

  const decrementQuantity = (productId: number) => {
    if (quantities[productId] > 1) {
      setQuantities((prev) => ({
        ...prev,
        [productId]: prev[productId] - 1,
      }))
    }
  }

  const handleAddToCart = (product: any) => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantities[product.id] || 1,
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  // Only show the first 4 products on the homepage
  const featuredProducts = products.slice(0, 4)

  return (
    <section className="py-24 bg-[#0F0F0F] text-white relative" id="products" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent transform -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="h-px w-8 bg-[#D4AF37]"></div>
              <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Shop</span>
              <div className="h-px w-8 bg-[#D4AF37]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium <span className="text-[#D4AF37]">Hair Products</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Elevate your grooming routine with our curated selection of professional-grade styling products used by our
            barbers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-black border border-gray-800 overflow-hidden"
            >
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Bestseller
                </div>
              )}
              <Link href={`/products/${product.id}`} className="block relative overflow-hidden h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </Link>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-[#D4AF37] fill-[#D4AF37]"
                            : "text-gray-400 fill-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm ml-2">({product.reviews})</span>
                </div>
                <Link href={`/products/${product.id}`}>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#D4AF37] font-bold text-xl">{formatCurrency(product.price)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-gray-700">
                    <button
                      onClick={() => decrementQuantity(product.id)}
                      className="px-3 py-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-3 py-1 text-white">{quantities[product.id] || 1}</span>
                    <button
                      onClick={() => incrementQuantity(product.id)}
                      className="px-3 py-1 text-gray-400 hover:text-white transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <Button
                    className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/products"
            className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
