"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Clock, Scissors, User, MapPin, Phone } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

export default function BookingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <section className="py-24 bg-[#0F0F0F] text-white relative" id="booking" ref={ref}>
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
              <span className="mx-4 text-[#D4AF37] font-semibold tracking-widest uppercase text-sm">Appointments</span>
              <div className="h-px w-8 bg-[#D4AF37]"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your <span className="text-[#D4AF37]">Appointment</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reserve your spot for a premium grooming experience at Barber Bros.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black border border-gray-800 shadow-2xl shadow-[#D4AF37]/5 p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <User className="mr-3 h-6 w-6 text-[#D4AF37]" />
                  Personal Information
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <Input
                      placeholder="John Doe"
                      className="w-full bg-gray-900 border-gray-700 focus:border-[#D4AF37] text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                    <Input
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-gray-900 border-gray-700 focus:border-[#D4AF37] text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                    <Input
                      placeholder="john@example.com"
                      type="email"
                      className="w-full bg-gray-900 border-gray-700 focus:border-[#D4AF37] text-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Scissors className="mr-3 h-6 w-6 text-[#D4AF37]" />
                  Service Details
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Service</label>
                    <Select>
                      <SelectTrigger className="w-full bg-gray-900 border-gray-700 text-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-gray-700 text-white">
                        <SelectItem value="haircut">Precision Haircut</SelectItem>
                        <SelectItem value="shave">Classic Shave</SelectItem>
                        <SelectItem value="beard">Beard Grooming</SelectItem>
                        <SelectItem value="styling">Hair Styling</SelectItem>
                        <SelectItem value="vip">VIP Experience</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal bg-gray-900 border-gray-700 text-white hover:bg-gray-800"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 text-[#D4AF37]" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-gray-900 border-gray-700">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          className="bg-gray-900 text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Preferred Time</label>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#D4AF37] mr-2" />
                      <Select>
                        <SelectTrigger className="w-full bg-gray-900 border-gray-700 text-white">
                          <SelectValue placeholder="Select a time" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-900 border-gray-700 text-white">
                          <SelectItem value="9am">9:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM</SelectItem>
                          <SelectItem value="11am">11:00 AM</SelectItem>
                          <SelectItem value="12pm">12:00 PM</SelectItem>
                          <SelectItem value="1pm">1:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM</SelectItem>
                          <SelectItem value="3pm">3:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM</SelectItem>
                          <SelectItem value="5pm">5:00 PM</SelectItem>
                          <SelectItem value="6pm">6:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <label className="block text-sm font-medium text-gray-400 mb-2">Special Requests (Optional)</label>
              <textarea
                className="w-full min-h-[100px] rounded-md border border-gray-700 bg-gray-900 p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                placeholder="Any specific preferences or requests..."
              ></textarea>
            </div>

            <div className="mt-10">
              <Button className="w-full bg-[#D4AF37] hover:bg-[#D4AF37]/80 text-black font-semibold py-6 text-lg">
                Book Appointment
              </Button>
            </div>

            <div className="mt-6 text-center text-gray-500">
              <p>Need to reschedule? Call us at (555) 123-4567</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="bg-black border border-gray-800 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-400">Mon-Fri: 9AM - 7PM</p>
              <p className="text-gray-400">Sat: 10AM - 6PM</p>
              <p className="text-gray-400">Sun: Closed</p>
            </div>

            <div className="bg-black border border-gray-800 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-400">123 Main Street</p>
              <p className="text-gray-400">Downtown, City</p>
              <p className="text-gray-400">10001</p>
            </div>

            <div className="bg-black border border-gray-800 p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-gray-400">(555) 123-4567</p>
              <p className="text-gray-400">info@barberbros.com</p>
              <p className="text-gray-400">@barberbros</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
