"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: "/placeholder.svg?height=1080&width=1920&text=Slide+1",
    title: "Crafting Confidence",
    subtitle: "One Cut at a Time",
    description: "Where modern grooming meets timeless craftsmanship. Experience the art of barbering redefined.",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920&text=Slide+2",
    title: "Premium Grooming",
    subtitle: "For The Modern Man",
    description: "Exceptional haircuts and beard styling by master barbers with years of experience.",
  },
  {
    image: "/placeholder.svg?height=1080&width=1920&text=Slide+3",
    title: "Tradition Meets",
    subtitle: "Modern Style",
    description: "Classic techniques with contemporary styles for the discerning gentleman.",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  }

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  const prevSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }, [isAnimating])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" style={{ backgroundBlendMode: "overlay" }}></div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10"
            style={{ backgroundBlendMode: "overlay" }}
          ></div>
          <div
            className="w-full h-full object-cover"
            style={{
              backgroundImage: `url('${slides[currentSlide].image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              ...parallaxStyle,
            }}
          ></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-6">
              <div className="flex items-center">
                <div className="h-px w-12 bg-[#D4AF37]"></div>
                <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">
                  Premium Barbershop
                </span>
                <div className="h-px w-12 bg-[#D4AF37]"></div>
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              {slides[currentSlide].title} <span className="text-[#D4AF37]">{slides[currentSlide].subtitle}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold px-8 py-6 text-lg rounded-none"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-none"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-30">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1)
                  setCurrentSlide(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#D4AF37] w-10" : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-colors duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 right-10 text-white text-center z-30"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest mb-2 text-[#D4AF37]">Scroll Down</span>
            <ChevronDown className="animate-bounce h-6 w-6 text-[#D4AF37]" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D4AF37]/10 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  )
}
