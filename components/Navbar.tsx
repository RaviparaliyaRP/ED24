'use client'

import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-black/70 backdrop-blur-md border-b-2 border-white/20 shadow-xl'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image 
              src="/images/ed24-logo.jpeg" 
              alt="ED24 Logo" 
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="text-xs text-white/80 font-medium hidden sm:block">
              education for everyone
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('courses')}
              className={`transition-colors font-semibold ${
                isScrolled ? 'text-gray-700 hover:text-ed24-purple' : 'text-white hover:text-ed24-orange'
              }`}
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`transition-colors font-semibold ${
                isScrolled ? 'text-gray-700 hover:text-ed24-purple' : 'text-white hover:text-ed24-orange'
              }`}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`transition-colors font-semibold ${
                isScrolled ? 'text-gray-700 hover:text-ed24-purple' : 'text-white hover:text-ed24-orange'
              }`}
            >
              Contact
            </button>
            
            {/* CTAs */}
            <button
              onClick={() => window.open('https://wa.me/919377002424', '_blank')}
              className="bg-ed24-orange hover:bg-orange-500 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
            >
              Join ED24
            </button>
            <a
              href="tel:9377002424"
              className="flex items-center space-x-2 bg-purple-700 hover:bg-purple-600 text-white px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('courses')}
                className="block w-full text-left text-gray-700 hover:text-ed24-purple transition-colors font-medium py-2"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-700 hover:text-ed24-purple transition-colors font-medium py-2"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-gray-700 hover:text-ed24-purple transition-colors font-medium py-2"
              >
                Contact
              </button>
              <button
                onClick={() => window.open('https://wa.me/919377002424', '_blank')}
                className="w-full bg-ed24-orange hover:bg-orange-500 text-white px-6 py-2 rounded-lg transition-colors font-medium"
              >
                Join ED24
              </button>
              <a
                href="tel:9377002424"
                className="flex items-center space-x-2 text-ed24-purple hover:text-ed24-orange transition-colors font-medium py-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

