'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // EmailJS integration would go here
    // For now, we'll simulate success
    
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-4">
            Get in <span className="text-ed24-orange">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help! Contact us via call, WhatsApp, or fill out the form below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-ed24-purple mb-6 font-heading">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ed24-orange focus:ring-2 focus:ring-ed24-orange/20 outline-none transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ed24-orange focus:ring-2 focus:ring-ed24-orange/20 outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ed24-orange focus:ring-2 focus:ring-ed24-orange/20 outline-none transition-all"
                  placeholder="9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-ed24-orange focus:ring-2 focus:ring-ed24-orange/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-2 bg-ed24-purple hover:bg-opacity-90 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="w-5 h-5" />
                </button>
                
                <a
                  href="https://wa.me/919377002424"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Chat on WhatsApp
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="bg-ed24-orange/10 rounded-xl p-6 border-l-4 border-ed24-orange">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-ed24-orange rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p className="text-gray-600 text-sm">Call us now</p>
                </div>
              </div>
              <a href="tel:9377002424" className="text-ed24-purple font-semibold text-lg hover:text-ed24-orange transition-colors">
                9377002424
              </a>
            </div>

            {/* Email */}
            <div className="bg-ed24-purple/10 rounded-xl p-6 border-l-4 border-ed24-purple">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-ed24-purple rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p className="text-gray-600 text-sm">Write to us</p>
                </div>
              </div>
              <a href="mailto:contacted24@gmail.com" className="text-ed24-purple font-semibold text-lg hover:text-ed24-orange transition-colors">
                contacted24@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-khaki/20 rounded-xl p-6 border-l-4 border-ed24-khaki">
              <div className="flex items-start gap-4 mb-3">
                <div className="w-12 h-12 bg-ed24-khaki rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-ed24-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Address</h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    SF-3,4 & 6, Second Floor, Satyam Complex,<br />
                    Near Samarpan Bungalows BRTS stop,<br />
                    Bopal - Ghuma Main Road, Bopal,<br />
                    Ahmedabad, Gujarat - 380058
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-gray-100 rounded-xl p-6 border-l-4 border-gray-400">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-400 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Timings</h3>
                  <p className="text-gray-600">Monday - Saturday: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1234567890!2d72.4567!3d23.0123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAwJzQ0LjMiTiA3MsKwMjcnMjQuMiJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

