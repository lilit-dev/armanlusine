import { useEffect } from 'react'
import FirstPage from './components/FirstPage/FirstPage'
import SecondPage from './components/SecondPage/SecondPage'
import ThirdPage from './components/ThirdPage/ThirdPage'
import FourthPage from './components/FourthPage/FourthPage'
import FifthPage from './components/FifthPage/FifthPage'
import SixthPage from './components/SixthPage/SixthPage'
import SeventhPage from './components/SeventhPage/SeventhPage'
import Footer from './components/Footer/Footer'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import './App.css'
import './components/SectionReveal/SectionReveal.css'

function App() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('.app > section, .app > footer'),
    )
    if (sections.length === 0) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion) {
      sections.forEach((section) => section.classList.add('section-reveal--visible'))
      return
    }

    const revealSection = (section: HTMLElement) => {
      section.classList.add('section-reveal--visible')
    }

    const isInView = (section: HTMLElement) => {
      const rect = section.getBoundingClientRect()
      return rect.top < window.innerHeight * 0.88 && rect.bottom > 0
    }

    sections.forEach((section) => {
      section.classList.add('section-reveal')

      if (isInView(section)) {
        revealSection(section)
      }
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealSection(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' },
    )

    sections.forEach((section) => {
      if (!section.classList.contains('section-reveal--visible')) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
      <SixthPage />
      <SeventhPage />
      <Footer />
      <MusicPlayer />
    </div>
  )
}

export default App
