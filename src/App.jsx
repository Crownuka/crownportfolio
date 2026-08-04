import { useEffect, useRef, useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Cursor from './Cursor'
import Skills from './skills'
import Project from './project'
import Footer from './footer'

function App() {
  const [showAboutDetail, setShowAboutDetail] = useState(false)
  const detailRef = useRef(null)

  const reveal = () => {
    const revealElements = Array.from(document.querySelectorAll('[data-scroll-reveal]'))

    const isVisible = (element) => {
      const rect = element.getBoundingClientRect()
      return rect.top < window.innerHeight - 50 && rect.bottom > 50
    }

    revealElements.forEach((element) => {
      if (element.classList.contains('scroll-reveal-visible')) return
      if (isVisible(element)) {
        element.classList.add('scroll-reveal-visible')
      }
    })
  }

  const toggleAboutDetail = () => {
    setShowAboutDetail((current) => {
      const next = !current
      if (!current) {
        setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          requestAnimationFrame(reveal)
          window.setTimeout(reveal, 200)
        }, 120)
      }
      return next
    })
  }

  useEffect(() => {
    reveal()
    requestAnimationFrame(reveal)
    const preloadTimeout = window.setTimeout(reveal, 120)

    const handleScroll = () => requestAnimationFrame(reveal)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchmove', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    window.addEventListener('orientationchange', handleScroll)

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('scroll-reveal-visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.15 },
      )

      const revealElements = Array.from(document.querySelectorAll('[data-scroll-reveal]'))
      revealElements.forEach((element) => observer.observe(element))

      return () => {
        observer.disconnect()
        window.clearTimeout(preloadTimeout)
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('touchmove', handleScroll)
        window.removeEventListener('resize', handleScroll)
        window.removeEventListener('orientationchange', handleScroll)
      }
    }

    return () => {
      window.clearTimeout(preloadTimeout)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('orientationchange', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!showAboutDetail) return
    const timeout = window.setTimeout(reveal, 120)
    requestAnimationFrame(reveal)
    return () => window.clearTimeout(timeout)
  }, [showAboutDetail])

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0516] text-white">
      
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[10%] top-20 h-72 w-72 rounded-full bg-purple-900/30 blur-[120px]" />
        <div className="absolute left-[50%] top-28 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[180px]" />
        <div className="absolute right-10 top-[55%] h-80 w-80 rounded-full bg-fuchsia-900/20 blur-[160px]" />
      </div>

      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 pb-24">
        <section id="about" className="pt-24">
          <Hero onLearnMore={toggleAboutDetail} isAboutOpen={showAboutDetail} />
        </section>

        {showAboutDetail && (
          <section id="about-detail" ref={detailRef} className="mt-24 rounded-[32px] border border-white/10 bg-[#10071c]/70 p-8 shadow-[0_40px_120px_rgba(88,41,178,0.12)] sm:p-10" data-scroll-reveal>
            <div className="max-w-3xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">About Queen Uka</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Transitioning from Law to Fullstack Development</h2>
              <p className="text-base leading-8 text-white/70 sm:text-lg">
                I am Queen Uka, a fullstack developer building polished, user-friendly web experiences.
                I transitioned from law to software development because I love solving problems with code,
                building beautiful interfaces, and making websites that feel modern and accessible.
              </p>
              <p className="text-base leading-8 text-white/70 sm:text-lg">
                I focus on React, Tailwind CSS, responsive layouts, and clean component architecture.
                My work is driven by detail, visual polish, and delivering websites that perform well on every device.
              </p>
              <div className="rounded-3xl border border-violet-500/20 bg-[#130b26]/80 p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-violet-300/70">What I Do</p>
                <p className="mt-3 text-base text-white/70 sm:text-lg">
                  I build fast, responsive frontend applications using modern React patterns,
                  clean component structure, and accessible interfaces for every screen size.
                </p>
              </div>
            </div>
          </section>
        )}

        <section id="skills" className="mt-24" data-scroll-reveal>
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">Skills</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Tools and technologies I use
            </h2>
          </div>

          <div className="mt-6">
            <Skills />
          </div>
        </section>

        <section id="projects" className="mt-24" data-scroll-reveal>
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">Projects</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Live work I’ve built
            </h2>
          </div>

          <div className="mt-6">
            <Project />
          </div>
        </section>
      </main>

      <Footer />
      <Cursor />
    </div>
  )
}

export default App
