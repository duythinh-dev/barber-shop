"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { formatCurrency } from "@/lib/utils"

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, totalItems } = useCart()

  return (
    <>
      {/* Cart Icon with Counter */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed right-6 bottom-6 z-50 bg-[#D4AF37] text-black p-4 rounded-full shadow-lg hover:bg-[#D4AF37]/80 transition-all duration-300 md:hidden"
      >
        <ShoppingBag className="h-6 w-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Desktop Cart Button */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsCartOpen(true)}
          className="relative flex items-center text-white hover:text-[#D4AF37] transition-colors"
        >
          <ShoppingBag className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50"
              onClick={() => setIsCartOpen(false)}
              style={{ position: "fixed" }}
            />

            {/* Cart Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full sm:w-96 bg-[#0F0F0F] z-50 overflow-auto"
              style={{ position: "fixed", height: "100vh" }}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 mx-auto text-gray-600 mb-4" />
                    <p className="text-gray-400 mb-6">Your cart is empty</p>
                    <Button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-8">
                      {items.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center border-b border-gray-800 pb-4"
                        >
                          <div className="h-20 w-20 flex-shrink-0 overflow-hidden bg-gray-900">
                            <img
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4 flex-1">
                            <h3 className="text-white font-medium">{item.name}</h3>
                            <p className="text-[#D4AF37] font-bold">{formatCurrency(item.price)}</p>
                            <div className="flex items-center mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="text-gray-400 hover:text-white"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="mx-2 text-white w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="text-gray-400 hover:text-white"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-white ml-2"
                          >
                            <X className="h-5 w-5" />
                          </button>
                        </motion.div>
                      ))}
                    </div>

                    <div className="border-t border-gray-800 pt-4 mb-6">
                      <div className="flex justify-between text-white mb-2">
                        <span>Subtotal</span>
                        <span>{formatCurrency(totalPrice)}</span>
                      </div>
                      <div className="flex justify-between text-gray-400 mb-2">
                        <span>Shipping</span>
                        <span>Calculated at checkout</span>
                      </div>
                      <div className="flex justify-between text-white font-bold text-lg mt-4">
                        <span>Total</span>
                        <span>{formatCurrency(totalPrice)}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold py-6">
                        Checkout
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 text-white hover:bg-white/10"
                        onClick={() => setIsCartOpen(false)}
                      >
                        Continue Shopping
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
