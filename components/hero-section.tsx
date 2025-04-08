"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-black/60 z-10"
          style={{ backgroundBlendMode: "overlay" }}
        ></div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10"
          style={{ backgroundBlendMode: "overlay" }}
        ></div>
        <div
          className="w-full h-full object-cover"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            ...parallaxStyle,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Crafting <span className="text-[#D4AF37]">Confidence</span>
            <br />
            One Cut at a Time
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
          >
            Where modern grooming meets timeless craftsmanship. Experience the
            art of barbering redefined for the modern gentleman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-white/10 px-8 py-6 text-lg rounded-none"
            >
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <div className="flex flex-col items-center">
            <span className="text-sm uppercase tracking-widest mb-2">
              Scroll Down
            </span>
            <ChevronDown className="animate-bounce h-6 w-6" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#D4AF37]/10 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10"></div>
    </section>
  );
}
