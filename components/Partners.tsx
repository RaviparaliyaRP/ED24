'use client'

import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Tally Education',
    description: 'Authorized Partner for Tally Prime Training and Certification',
    logo: '🧾'
  },
  {
    name: 'IDP Education',
    description: 'Expert Coaching for IELTS, PTE, TOEFL & CELPIP',
    logo: '🎓'
  },
  {
    name: 'AICSM',
    description: 'Only Authorized AICSM Training Center in Bopal',
    logo: '🏆'
  }
]

export default function Partners() {
  return (
    <section className="py-20 bg-white">
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
            Our Authorized <span className="text-ed24-orange">Partners</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proudly associated with leading educational certification bodies
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-gradient-to-br from-ed24-purple/5 to-ed24-orange/5 rounded-2xl p-8 border-2 border-gray-100 hover:border-ed24-orange transition-all duration-300 text-center"
            >
              <div className="text-6xl mb-4">{partner.logo}</div>
              <div className="bg-ed24-orange text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                AUTHORIZED PARTNER
              </div>
              <h3 className="text-2xl font-bold text-ed24-purple mb-3 font-heading">
                {partner.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

