'use client'

import { motion } from 'framer-motion'
import { 
  Languages, 
  User, 
  GraduationCap, 
  Calculator, 
  Monitor, 
  Target, 
  Users, 
  Briefcase,
  Phone
} from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const courses = [
  {
    icon: Languages,
    title: 'Spoken English + Complete Grammar',
    description: 'Overcome fear and master public speaking with step-by-step training - Basic to Advanced.',
    features: [
      '360° Training (Listening, Reading, Speaking, Writing)',
      'Grammar, Phonetics, Vocabulary, Idioms',
      'Group Discussions & Public Speaking',
      'Personal attention & small batch size'
    ],
    color: 'bg-blue-500'
  },
  {
    icon: User,
    title: 'Personality Development',
    description: 'Develop confidence, charisma, and self-awareness through holistic personality enhancement.',
    features: [
      'Magnetic personality building',
      'Inner & outer self transformation',
      'Soft skills integration',
      'Communication excellence'
    ],
    color: 'bg-purple-500'
  },
  {
    icon: GraduationCap,
    title: 'IELTS / PTE / TOEFL / CELPIP',
    description: 'Authorized partner of IDP Education. Expert coaching with proven strategies.',
    features: [
      'Experienced trainers (25+ years)',
      'Individual improvement plan',
      'Grammar + Vocabulary support',
      'VISA consultancy included'
    ],
    color: 'bg-green-500'
  },
  {
    icon: Calculator,
    title: 'Tally Prime with TDS & GST',
    description: 'Bopal\'s ONLY Authorized Tally Education Center. Get certified with industry-recognized training.',
    features: [
      'Original Tally Prime License',
      'Tally Certified Trainers',
      'Digital Certificate + Job Portal',
      'TDS & GST training included'
    ],
    color: 'bg-orange-500'
  },
  {
    icon: Monitor,
    title: 'Computer Education',
    description: 'Government-approved Certificate & Diploma courses in computer training.',
    features: [
      'CCC, MS Office, Graphic Design',
      'Advanced Excel, CAD',
      'C/C++, Java, Python, PHP',
      'Website Design & Development'
    ],
    color: 'bg-indigo-500'
  },
  {
    icon: Target,
    title: 'Career Counselling',
    description: 'Discover your ideal career path with guidance from certified counsellors.',
    features: [
      'Career assessments',
      'For students & professionals',
      'Abroad studies guidance',
      'Partnered with INITIO'
    ],
    color: 'bg-pink-500'
  },
  {
    icon: Users,
    title: 'Campus to Corporate',
    description: 'Bridge the gap between campus and corporate success with soft skills training.',
    features: [
      'Leadership development',
      'Teamwork & collaboration',
      'Communication excellence',
      'College student focused'
    ],
    color: 'bg-red-500'
  },
  {
    icon: Briefcase,
    title: 'Corporate Training',
    description: 'Boost employee productivity with sales, soft skills, and leadership training.',
    features: [
      'Effective sales training',
      'Customer experience management',
      'Time management & stress relief',
      'Conflict resolution'
    ],
    color: 'bg-teal-500'
  }
]

function CourseCard({ course, index }: { course: typeof courses[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const IconComponent = course.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-ed24-orange/30 group"
    >
      <div className="p-8 space-y-5 bg-gradient-to-br from-white to-gray-50 hover:from-white hover:to-ed24-orange/5 transition-all duration-300">
        {/* Icon with gradient */}
        <div className={`w-20 h-20 ${course.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
          <IconComponent className="w-10 h-10 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 font-heading group-hover:text-ed24-purple transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-base leading-relaxed">
          {course.description}
        </p>

        {/* Features with better design */}
        <ul className="space-y-3">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
              <div className="mt-1 w-1.5 h-1.5 bg-ed24-orange rounded-full flex-shrink-0"></div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA with improved design */}
        <a
          href="tel:9377002424"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-ed24-purple to-ed24-orange hover:from-ed24-orange hover:to-ed24-purple text-white px-6 py-3 rounded-xl transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg hover:scale-105 transform"
        >
          <Phone className="w-5 h-5" />
          Call ED24
        </a>
      </div>
    </motion.div>
  )
}

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-gray-50">
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
            Our <span className="text-ed24-orange">Courses</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From spoken English to professional certifications, we offer comprehensive skill development programs
          </p>
        </motion.div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

