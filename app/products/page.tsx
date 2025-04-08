import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { products } from "@/data/products"
import Link from "next/link"
import { Star } from "lucide-react"

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Shop <span className="text-[#D4AF37]">Premium Products</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover our collection of professional-grade grooming products used and recommended by our master
              barbers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group bg-black border border-gray-800 overflow-hidden">
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
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#D4AF37] font-bold text-xl">${product.price.toFixed(2)}</span>
                    <Link
                      href={`/products/${product.id}`}
                      className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                    >
                      View Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
