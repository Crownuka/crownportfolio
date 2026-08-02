import { useRef, useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Skills from './skills'
import Project from './project'
import Footer from './footer'

function App() {
  const [showAboutDetail, setShowAboutDetail] = useState(false)
  const detailRef = useRef(null)

  const toggleAboutDetail = () => {
    setShowAboutDetail((current) => {
      const next = !current
      if (!current) {
        setTimeout(() => {
          detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
      return next
    })
  }

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
          <section id="about-detail" ref={detailRef} className="mt-24 rounded-[32px] border border-white/10 bg-[#10071c]/70 p-8 shadow-[0_40px_120px_rgba(88,41,178,0.12)] sm:p-10">
            <div className="max-w-3xl space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">About Queen Uka</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Transitioning from Law to Frontend Development</h2>
              <p className="text-base leading-8 text-white/70 sm:text-lg">
                I am Queen Uka, a frontend developer building polished, user-friendly web experiences.
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

        <section id="skills" className="mt-24">
          <div className="mt-6">
            <Skills />
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="mt-6">
            <Project />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
