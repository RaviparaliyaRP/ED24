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
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
    >
      <div className="p-6 space-y-4">
        {/* Icon */}
        <div className={`w-16 h-16 ${course.color} rounded-lg flex items-center justify-center`}>
          <IconComponent className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 font-heading">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm">
          {course.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-ed24-orange mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="tel:9377002424"
          className="flex items-center justify-center gap-2 bg-ed24-purple hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
        >
          <Phone className="w-4 h-4" />
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

