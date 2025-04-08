"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Scissors } from "lucide-react"

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer className="bg-black text-white pt-20 pb-8 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-16"
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Scissors className="h-8 w-8 text-[#D4AF37] mr-3" />
              <h3 className="text-3xl font-bold">
                <span className="text-[#D4AF37]">BARBER</span>BROS
              </h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              Where modern grooming meets timeless craftsmanship. Experience the art of barbering redefined for the
              modern gentleman.
            </p>
            <div className="flex justify-center space-x-6 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#booking"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Precision Haircut
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Classic Shave
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Beard Grooming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  Hair Styling
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300 flex items-center"
                >
                  <span className="h-px w-4 bg-[#D4AF37] mr-2"></span>
                  VIP Experience
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-gray-800">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#D4AF37] mr-3 mt-0.5" />
                <span className="text-gray-400">123 Main Street, Downtown, City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-[#D4AF37] mr-3" />
                <span className="text-gray-400">info@barberbros.com</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 mb-4 md:mb-0">© 2025 Barber Bros. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-[#D4AF37] text-sm transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
