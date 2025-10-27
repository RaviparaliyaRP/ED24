import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'ED24 - Best Education Institute in Bopal | Spoken English, IELTS, Tally, Computer Courses',
  description: 'ED24 - Bopal\'s oldest and trusted one-stop skill development center. Expert coaching for Spoken English, IELTS/PTE/TOEFL, Tally, Computer Courses, Personality Development & Career Counselling. ISO Certified.',
  keywords: 'ED24, education institute Bopal, spoken English, IELTS coaching, Tally training, computer courses, personality development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

