'use client'

import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-ed24-purple text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <div className="bg-white p-2 rounded-lg mb-3 inline-block">
              <Image 
                src="/images/ed24-logo.jpeg" 
                alt="ED24 Logo" 
                width={100}
                height={35}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Education for Everyone - Bopal's oldest and trusted one-stop skill development center.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📞 9377002424</p>
              <p>✉️ contacted24@gmail.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#courses" className="hover:text-ed24-orange transition-colors">Courses</a></li>
              <li><a href="#about" className="hover:text-ed24-orange transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-ed24-orange transition-colors">Contact</a></li>
              <li><a href="#advantages" className="hover:text-ed24-orange transition-colors">Advantages</a></li>
              <li><a href="#contact" className="hover:text-ed24-orange transition-colors">Career Counselling</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Spoken English</li>
              <li>IELTS/PTE Coaching</li>
              <li>Tally Training</li>
              <li>Computer Courses</li>
              <li>Personality Development</li>
              <li>Corporate Training</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-ed24-orange rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-ed24-orange rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-ed24-orange rounded-lg flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-ed24-orange rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Find us on LocalEye -<br />
              Gujarat's #1 Business Directory
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2025 ED24 Education Institute. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-300">
              <a href="#" className="hover:text-ed24-orange transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-ed24-orange transition-colors">Terms of Service</a>
            </div>
          </div>
          <p className="text-center text-gray-400 text-xs mt-4">
            Trusted and Oldest ONE-STOP education hub in Bopal, Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  )
}

