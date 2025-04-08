"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, Award, Users } from "lucide-react"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="about" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#D4AF37]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-6">
              <div className="flex items-center">
                <div className="h-px w-8 bg-[#D4AF37]"></div>
                <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Our Story</span>
                <div className="h-px w-8 bg-[#D4AF37]"></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#D4AF37]">Barber Bros</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Founded in 2015, Barber Bros has established itself as the premier destination for men seeking exceptional
              grooming services. Our team of skilled barbers combines traditional techniques with modern styles to
              deliver an unparalleled experience.
            </p>
            <p className="text-gray-300 mb-10 text-lg leading-relaxed">
              We believe that a great haircut is more than just a service—it's a confidence booster, a statement, and an
              essential part of your personal brand. That's why we take the time to understand your needs and
              preferences before every cut.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8973D] flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">10+</h3>
                <p className="text-sm text-gray-400">Years Experience</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8973D] flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">3</h3>
                <p className="text-sm text-gray-400">Locations</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8973D] flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">15+</h3>
                <p className="text-sm text-gray-400">Expert Barbers</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8973D] flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">12</h3>
                <p className="text-sm text-gray-400">Industry Awards</p>
              </motion.div>
            </div>

            <Button className="bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold px-8 py-6 text-lg rounded-none">
              Meet Our Team
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Barber Bros Shop Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-[#D4AF37] to-[#B8973D] p-6 flex flex-col justify-center z-20">
              <p className="text-black font-bold text-xl mb-2">Client Satisfaction</p>
              <p className="text-black text-6xl font-bold">98%</p>
            </div>

            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-[#D4AF37] z-0"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#0F0F0F] z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
