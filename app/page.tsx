import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Courses from '@/components/Courses'
import About from '@/components/About'
import Advantages from '@/components/Advantages'
import Partners from '@/components/Partners'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <About />
      <Advantages />
      <Partners />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

