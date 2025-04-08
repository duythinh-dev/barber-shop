"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Cart from "@/components/cart";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-2xl">
              <span className="text-[#D4AF37]">BARBER</span>BROS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              Services
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/#gallery"
              className="text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/products"
              className="text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              Shop
            </Link>
            <Link
              href="/#testimonials"
              className="text-white hover:text-[#D4AF37] transition-colors font-medium"
            >
              Testimonials
            </Link>
            <Cart />
            <Button
              className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold ml-4"
              size="sm"
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white ml-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#gallery"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/#testimonials"
                className="text-white hover:text-[#D4AF37] transition-colors font-medium py-2 border-b border-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
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
  );
}
