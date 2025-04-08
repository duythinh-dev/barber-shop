"use client"

import { useState } from "react"
import { useParams, notFound } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, ChevronRight, Plus, Minus, ArrowLeft } from "lucide-react"
import { products } from "@/data/products"
import { useCart } from "@/context/cart-context"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"

export default function ProductDetailPage() {
  const params = useParams()
  const productId = Number(params.id)
  const product = products.find((p) => p.id === productId)

  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  if (!product) {
    notFound()
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      },
      quantity,
    )
  }

  // Find related products (same category, excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/products" className="text-gray-400 hover:text-[#D4AF37] flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              {product.bestseller && (
                <div className="absolute top-4 left-4 z-10 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  Bestseller
                </div>
              )}
              <div className="aspect-square bg-black border border-gray-800 overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="mb-2">
                <span className="text-[#D4AF37] uppercase text-sm tracking-wider">{product.category}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-400 fill-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-400 ml-2">({product.reviews} reviews)</span>
              </div>
              <div className="text-2xl font-bold text-[#D4AF37] mb-6">{formatCurrency(product.price)}</div>
              <p className="text-gray-300 mb-8">{product.description}</p>

              <div className="mb-8">
                <h3 className="text-white font-bold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <ChevronRight className="h-5 w-5 text-[#D4AF37] mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-white font-bold mb-2">How to Use</h3>
                <p className="text-gray-300">{product.howToUse}</p>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gray-700">
                  <button
                    onClick={decrementQuantity}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 text-white">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <Button
                  className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold px-8 py-6 text-lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" /> Add to Cart
                </Button>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2">Ingredients</h3>
                <p className="text-gray-300 text-sm">{product.ingredients}</p>
              </div>
            </div>
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-white mb-8">You May Also Like</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-black border border-gray-800 overflow-hidden group">
                    <Link href={`/products/${relatedProduct.id}`} className="block relative overflow-hidden h-48">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </Link>
                    <div className="p-4">
                      <Link href={`/products/${relatedProduct.id}`}>
                        <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                          {relatedProduct.name}
                        </h3>
                      </Link>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-[#D4AF37] font-bold">{formatCurrency(relatedProduct.price)}</span>
                        <Link
                          href={`/products/${relatedProduct.id}`}
                          className="text-white hover:text-[#D4AF37] transition-colors duration-300 text-sm"
                        >
                          View →
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
