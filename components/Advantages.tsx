'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Users,
  BadgeCheck,
  GraduationCap,
  Building2,
  Shield,
  Monitor,
  Target,
  Clock,
  CheckCircle
} from 'lucide-react'

const advantages = [
  { icon: Award, title: 'ISO Certified Institute' },
  { icon: Users, title: 'Limited Batch Size' },
  { icon: GraduationCap, title: 'Experienced Trainers' },
  { icon: BadgeCheck, title: 'Govt. Approved Certifications' },
  { icon: Building2, title: 'Fully AC Campus' },
  { icon: Shield, title: '24x7 CCTV Surveillance' },
  { icon: Monitor, title: 'Projector & AV Learning' },
  { icon: Target, title: 'Continuous Assessment' },
  { icon: Clock, title: 'Personal Attention' },
  { icon: CheckCircle, title: 'Quality Education' },
]

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-gray-50 to-ed24-khaki/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-heading mb-4">
            The ED24 <span className="text-ed24-orange">Advantage</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Why thousands of students trust ED24 for their skill development journey
          </p>
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-ed24-orange group cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-ed24-orange/10 rounded-full flex items-center justify-center group-hover:bg-ed24-orange transition-colors">
                    <IconComponent className="w-7 h-7 text-ed24-orange group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-ed24-purple transition-colors">
                    {advantage.title}
                  </h3>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

