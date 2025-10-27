'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Priya Patel',
    course: 'Spoken English',
    rating: 5,
    text: 'An excellent institute for learning English. The faculties are friendly and professional. I gained so much confidence in speaking English!',
    avatar: '👩'
  },
  {
    name: 'Rahul Shah',
    course: 'Tally Prime',
    rating: 5,
    text: 'Best place for Tally training in Bopal. Certified trainers and real-world projects helped me get my dream job.',
    avatar: '👨'
  },
  {
    name: 'Anjali Desai',
    course: 'IELTS Coaching',
    rating: 5,
    text: 'Got my desired band in IELTS! Expert coaching and individual attention made all the difference. Highly recommended.',
    avatar: '👩'
  }
]

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50">
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
            What Our Students <span className="text-ed24-orange">Say</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="text-6xl font-bold text-ed24-orange font-heading">4.8</div>
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm">Based on 910+ Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-ed24-orange text-ed24-orange" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-ed24-orange/10 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{review.course}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
              <a
            href="https://www.justdial.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ed24-purple hover:text-ed24-orange font-semibold transition-colors underline text-sm sm:text-base"
          >
            Read more reviews on JustDial →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

