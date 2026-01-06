'use client'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ClickSpark from '@/components/ClickSpark'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined' && window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      })
    }

    // Add loaded class
    document.body.classList.add('loaded')
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ClickSpark
        sparkColor='#ff8c42'
        sparkSize={12}
        sparkRadius={20}
        sparkCount={10}
        duration={500}
        easing='ease-out'
      />
    </>
  )
}
