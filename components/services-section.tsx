"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Scissors, RadarIcon as Razor, BeakerIcon as Beard, SprayCanIcon as Spray, Coffee } from "lucide-react"

const services = [
  {
    icon: Scissors,
    title: "Precision Haircut",
    description: "Expert cuts tailored to your face shape and personal style, finished with premium styling products.",
    price: "$35",
  },
  {
    icon: Razor,
    title: "Classic Shave",
    description: "Traditional hot towel treatment with straight razor for the smoothest shave experience.",
    price: "$30",
  },
  {
    icon: Beard,
    title: "Beard Grooming",
    description: "Shaping, trimming and conditioning to keep your facial hair looking its absolute best.",
    price: "$25",
  },
  {
    icon: Spray,
    title: "Hair Styling",
    description: "Professional styling with premium products for any occasion or everyday confidence.",
    price: "$20",
  },
  {
    icon: Coffee,
    title: "VIP Experience",
    description: "Comprehensive grooming package with complimentary beverages and extended service.",
    price: "$75",
  },
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  return (
    <section className="py-24 bg-[#0F0F0F] text-white relative" id="services" ref={ref}>
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
              <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Our Services</span>
              <div className="h-px w-8 bg-[#D4AF37]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Grooming <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            At Barber Bros, we offer a range of premium grooming services designed to enhance your style and confidence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-black p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8973D] flex items-center justify-center mb-4 shadow-lg shadow-[#D4AF37]/20 group-hover:shadow-[#D4AF37]/40 transition-all duration-500">
                    <service.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#D4AF37] mb-4 transform origin-left group-hover:w-20 transition-all duration-300"></div>
                </div>
                <p className="text-gray-400 mb-6 flex-grow">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#D4AF37] font-bold text-2xl">{service.price}</span>
                  <button className="text-white hover:text-[#D4AF37] font-medium transition-colors duration-300">
                    Book Now →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xl font-medium mb-8">
            <span className="text-[#D4AF37] font-bold">Looking Sharp, Feeling Confident</span> - The Barber Bros Promise
          </p>
          <a
            href="#pricing"
            className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
          >
            View Full Price List
          </a>
        </motion.div>
      </div>
    </section>
  )
}
