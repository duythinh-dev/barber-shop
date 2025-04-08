"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "James Wilson",
    role: "Business Professional",
    content:
      "Barber Bros has been my go-to for the past 3 years. The attention to detail and consistency is unmatched. My barber knows exactly how I like my fade and beard trimmed.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=JW",
  },
  {
    name: "Michael Thompson",
    role: "Creative Director",
    content:
      "As someone who's particular about my appearance, I appreciate the skill and precision at Barber Bros. The atmosphere is great and the complimentary drinks are a nice touch.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=MT",
  },
  {
    name: "David Rodriguez",
    role: "Entrepreneur",
    content:
      "The VIP experience is worth every penny. Hot towel treatment, perfect haircut, and beard grooming all in one session. I always leave feeling refreshed and confident.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=DR",
  },
  {
    name: "Robert Chen",
    role: "Marketing Executive",
    content:
      "I've tried many barbershops in the city, but none compare to the level of service and expertise at Barber Bros. They truly understand men's grooming needs.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100&text=RC",
  },
]

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="testimonials" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 text-[#D4AF37]/5 opacity-30">
        <Quote className="w-64 h-64" />
      </div>

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
              <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Testimonials</span>
              <div className="h-px w-8 bg-[#D4AF37]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-[#D4AF37]">Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our clients have to say about their Barber Bros experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border-2 border-[#D4AF37] transform translate-x-4 translate-y-4"></div>
              <img
                src={testimonials[activeIndex].image || "/placeholder.svg"}
                alt={testimonials[activeIndex].name}
                className="relative z-10 w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <Quote className="h-16 w-16 text-[#D4AF37] opacity-50" />
            </div>
            <div className="mb-8">
              <p className="text-2xl font-light italic leading-relaxed text-gray-300">
                "{testimonials[activeIndex].content}"
              </p>
            </div>
            <div className="flex mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{testimonials[activeIndex].name}</h3>
              <p className="text-[#D4AF37]">{testimonials[activeIndex].role}</p>
            </div>

            <div className="mt-10 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-[#D4AF37] w-10" : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
