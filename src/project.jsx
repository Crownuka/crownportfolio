const projects = [
  {
    title: 'Crownuka E-Commerce Catalog',
    summary: 'A live shopping catalog built with React, fast filtering, and clean product presentation.',
    url: 'https://crownukaecommercecatalog.netlify.app/',
  },
  {
    title: 'Crownuka Movie Site',
    summary: 'A movie browsing experience with dynamic navigation, searchable content, and polished UI.',
    url: 'https://crownuka-moviesite.netlify.app/',
  },
]

export default function Project() {
  const handleVisit = (url) => window.open(url, '_blank')

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <article
          key={project.title}
          className="group rounded-[32px] border border-white/10 bg-[#140726]/80 p-8 shadow-[0_40px_120px_rgba(88,41,178,0.12)] transition duration-700 ease-out motion-safe:hover:-translate-y-4 motion-safe:hover:shadow-[0_50px_160px_rgba(88,41,178,0.28)] hover:border-violet-400/30 hover:bg-white/5"
          data-scroll-reveal
          style={{ transitionDelay: `${index * 120}ms` }}
          data-cursor-target
        >
          <p className="text-sm uppercase tracking-[0.28em] text-violet-300/80">Live Project</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">{project.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/70">{project.summary}</p>
          <button
            onClick={() => handleVisit(project.url)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-violet-400"
            data-cursor-target
          >
            View Live Site
          </button>
        </article>
      ))}
    </div>
  )
}
