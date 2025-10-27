'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzZDM3NDUiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMzAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="inline-flex items-center gap-2 text-ed24-orange font-bold text-sm sm:text-lg md:text-xl tracking-wider uppercase px-3 sm:px-4 py-1.5 sm:py-2 bg-ed24-orange/10 backdrop-blur-sm rounded-full border border-ed24-orange/30 mx-2"
          >
            <span className="w-2 h-2 bg-ed24-orange rounded-full"></span>
            SKILL • RESKILL • UPSKILL
            <span className="w-2 h-2 bg-ed24-orange rounded-full"></span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white font-heading leading-tight px-4"
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              An investment in knowledge
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ed24-orange to-yellow-400">
              pays the best interest.
            </span>
          </motion.h1>

          {/* Quote Attribution */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="text-gray-300 text-lg italic"
          >
            — Benjamin Franklin
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 px-4"
          >
            <a
              href="https://wa.me/919377002424"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-ed24-orange to-orange-500 hover:from-orange-500 hover:to-ed24-orange text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 flex items-center gap-2 sm:gap-3 hover:scale-105 transform w-full sm:w-auto justify-center"
            >
              Join ED24
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="tel:9377002424"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/50 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:border-white w-full sm:w-auto text-center"
            >
              Call Now
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-8"
          >
            {['ISO Certified', 'Govt. Approved', 'Since 2006'].map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/90"
              >
                <CheckCircle className="w-5 h-5 text-ed24-orange" />
                <span className="font-medium">{badge}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

    </section>
  )
}

