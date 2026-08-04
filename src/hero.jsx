import heroImg from './assets/bestPic.jpeg'

export default function Hero({ onLearnMore, isAboutOpen }) {
  return (
    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center animate-fade-up" data-scroll-reveal>
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-violet-300/80">
          I AM QUEEN! a software developer.
        </p>
        <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-white transition duration-500 sm:text-6xl">
          I build responsive web experiences.
        </h1>
        <p className="max-w-xl text-base leading-8 text-white/70 transition duration-500 sm:text-lg">
          I design modern interfaces with fast interactions, accessible layouts, and maintainable code for real web products.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onLearnMore}
            className="inline-flex w-full items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 active:-translate-y-0.5 focus-visible:-translate-y-0.5 hover:bg-violet-400 sm:w-auto"
            data-cursor-target
          >
            {isAboutOpen ? 'Hide details' : 'Learn More'}
          </button>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[420px] justify-center">
        <div className="relative overflow-hidden rounded-full border border-white/10 bg-[#130b26]/70 p-1 transition duration-500 hover:-translate-y-1 active:-translate-y-0.5 hover:shadow-[0_40px_120px_rgba(139,92,246,0.22)]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500/35 via-fuchsia-500/25 to-transparent blur-2xl" />
          <img
            src={heroImg}
            alt="Profile"
            className="relative h-72 w-72 rounded-full object-cover transition duration-500 hover:scale-[1.02] active:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  )
}
