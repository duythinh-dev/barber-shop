"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">
              <span className="text-[#D4AF37]">BARBER</span>BROS
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
              Home
            </a>
            <a href="#services" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
              Services
            </a>
            <a href="#about" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
              About
            </a>
            <a href="#gallery" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
              Gallery
            </a>
            <a href="#testimonials" className="text-white hover:text-[#D4AF37] transition-colors font-medium">
              Testimonials
            </a>
            <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold ml-4" size="sm">
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="#"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <Button
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
