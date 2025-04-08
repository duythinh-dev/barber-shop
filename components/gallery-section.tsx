"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=400&text=Haircut+1",
    alt: "Modern Fade Haircut",
    title: "Modern Fade",
    category: "Haircut",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Haircut+2",
    alt: "Classic Pompadour Haircut",
    title: "Classic Pompadour",
    category: "Haircut",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Beard+1",
    alt: "Beard Grooming",
    title: "Precision Beard",
    category: "Beard",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Haircut+3",
    alt: "Textured Crop Haircut",
    title: "Textured Crop",
    category: "Haircut",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Shave+1",
    alt: "Classic Straight Razor Shave",
    title: "Straight Razor Shave",
    category: "Shave",
  },
  {
    src: "/placeholder.svg?height=600&width=400&text=Haircut+4",
    alt: "Slick Back Haircut",
    title: "Slick Back",
    category: "Haircut",
  },
]

export default function GallerySection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1))
  }

  const categories = ["All", "Haircut", "Beard", "Shave"]

  return (
    <section className="py-24 bg-[#0F0F0F] text-white relative" id="gallery" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="flex items-center">
              <div className="h-px w-8 bg-[#D4AF37]"></div>
              <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Our Gallery</span>
              <div className="h-px w-8 bg-[#D4AF37]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Showcase of <span className="text-[#D4AF37]">Our Work</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Browse through our portfolio of premium haircuts, beard styling, and grooming services.
          </p>
        </motion.div>

        <div className="mb-10 flex justify-center">
          <div className="inline-flex bg-black/50 backdrop-blur-sm p-1 border border-gray-800">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setActiveIndex(0)
                }}
                className={`px-6 py-2 font-medium transition-all duration-300 ${
                  selectedCategory === category ? "bg-[#D4AF37] text-black" : "text-white hover:text-[#D4AF37]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Mobile Gallery (Slider) */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {filteredImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="relative group overflow-hidden">
                      <img
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        className="w-full h-[500px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">{image.title}</h3>
                        <p className="text-[#D4AF37]">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Gallery (Grid) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-white">{image.title}</h3>
                  <p className="text-[#D4AF37]">{image.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#booking"
            className="inline-block px-8 py-3 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 font-semibold"
          >
            Book Your Style Now
          </a>
        </motion.div>
      </div>
    </section>
  )
}
