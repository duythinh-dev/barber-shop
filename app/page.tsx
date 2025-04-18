import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import ProductsSection from "@/components/products-section";
import TestimonialsSection from "@/components/testimonials-section";
import BookingSection from "@/components/booking-section";
import Footer from "@/components/footer";
import Cart from "@/components/cart";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F0F]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <GallerySection />
      <ProductsSection />
      <TestimonialsSection />
      <BookingSection />
      <Footer />
      <Cart />
    </main>
  );
}
