'use client'

import { motion } from 'framer-motion'
import { Award, Users, Calendar, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Award, label: 'ISO 9001 Certified', value: 'Certified', color: 'text-ed24-orange' },
  { icon: Users, label: 'Trusted by Students', value: '4.8★', subValue: '910+ Reviews' },
  { icon: Calendar, label: 'Years of Excellence', value: '25+', subValue: 'Since 2006' },
  { icon: CheckCircle, label: 'Success Rate', value: '100%', subValue: 'Guaranteed Learning' },
]

const features = [
  'AC Classrooms',
  'Biometric Attendance',
  'CCTV Surveillance',
  'AV Training Equipment',
  'Limited Batch Size',
  'Personal Attention'
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-6">
              About <span className="text-ed24-orange">ED24</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Education is the most powerful weapon which you can use to change the world.
            </p>
            <p className="text-gray-700 mb-6">
              ED24 was born out of sheer passion and efforts of its highly educated promoters to give back to society by providing affordable, quality education opportunities for everyone. We help individuals rekindle the star within them and enhance their skills.
            </p>
            <p className="text-gray-700 mb-8">
              We are the oldest and leading one-stop education hub in Bopal, providing short-term skill development, multi-disciplinary training, and government-approved certificate courses at affordable fees.
            </p>

            {/* Services List */}
            <div className="bg-ed24-khaki/20 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-ed24-purple mb-3 text-lg">Services Offered:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-ed24-orange flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <p className="text-sm text-gray-600">
              <strong className="text-ed24-purple">Services:</strong> Spoken English Masterclass | 
              Expert IELTS Coaching & VISA Consultancy | Tally Training & Certification | 
              Government Recognised Certificate and Diploma Computer Courses | 
              Personality Development Soft Skills Training | Career Counselling | 
              School & College Training | Corporate Training
            </p>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-xl border-2 border-gray-100 hover:border-ed24-orange/30 hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <IconComponent className={`w-8 h-8 ${stat.color} mb-3`} />
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  {stat.subValue && (
                    <div className="text-sm text-gray-600 mb-2">{stat.subValue}</div>
                  )}
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-16 text-center bg-gradient-to-br from-ed24-purple via-purple-800 to-ed24-orange rounded-3xl p-10 md:p-12 text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">
            Welcome to ED24 - Education for Everyone
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're a school student, college student, working professional, 
            job seeker, or homemaker - we have the perfect course for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/919377002424"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ed24-purple px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join ED24 Today
            </a>
            <a
              href="tel:9377002424"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Call Now: 9377002424
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

