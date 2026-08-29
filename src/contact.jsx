export default function Contact() {
  return (
    <div className="rounded-[32px] border border-white/10 bg-[#12051f]/80 p-10 shadow-[0_40px_120px_rgba(139,92,246,0.16)]">
      <p className="text-sm uppercase tracking-[0.32em] text-violet-300/80">Contact</p>
      <h2 className="mt-5 text-3xl font-semibold text-white">I’m currently looking to join a cross-functional team.</h2>
      <p className="mt-4 max-w-2xl text-base leading-8 text-white/70">
        Reach out to discuss product systems, front-end architecture, or building premium purple-brand experiences.
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/80">
        <a href="mailto:queenuka30@gmail.com" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">
          queenuka30@gmail.com
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">
          GitHub
        </a>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-5 py-3 transition hover:bg-white/10">
          LinkedIn
        </a>
      </div>
    </div>
  )
}
