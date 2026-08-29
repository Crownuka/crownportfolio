const skills = [
  { title: 'HTML5', icon: 'html' },
  { title: 'CSS3', icon: 'css' },
  { title: 'JavaScript', icon: 'javascript' },
  { title: 'React', icon: 'react' },
  { title: 'Tailwind CSS', icon: 'tailwind' },
  { title: 'Git', icon: 'git' },
  { title: 'GitHub', icon: 'github' },
  { title: 'Figma', icon: 'figma' },
  { title: 'Node.js', icon: 'node' },
  { title: 'Express', icon: 'express' },
  { title: 'Postman', icon: 'postman' },
  { title: 'Railway', icon: 'railway' },
]

function TechLogo({ name }) {
  const sharedProps = {
    viewBox: '0 0 64 64',
    preserveAspectRatio: 'xMidYMid meet',
    className: 'h-16 w-16 object-contain sm:h-[4.25rem] sm:w-[4.25rem] md:h-[5rem] md:w-[5rem] transition duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-95',
    role: 'img',
    'aria-hidden': 'true',
    style: { objectFit: 'contain' },
  }

  const biggerOutlineProps = {
    ...sharedProps,
    className: 'h-[4.15rem] w-[4.15rem] object-contain sm:h-[4.6rem] sm:w-[4.6rem] md:h-[5.4rem] md:w-[5.4rem] transition duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-95',
  }

  const smallerSolidProps = {
    ...sharedProps,
    className: 'h-[3.5rem] w-[3.5rem] object-contain sm:h-[4rem] sm:w-[4rem] md:h-[4.7rem] md:w-[4.7rem] transition duration-300 ease-out group-hover:scale-105 group-hover:opacity-100 opacity-95',
  }

  const officialImgProps = {
    alt: '',
    className: 'h-full w-full object-contain',
    loading: 'lazy',
    style: { background: 'transparent' },
  }

  switch (name) {
    case 'html':
      return (
        <div {...sharedProps} className={sharedProps.className}>
          <img src="https://cdn.simpleicons.org/html5/F97316" {...officialImgProps} />
        </div>
      )
    case 'css':
      return (
        <div {...sharedProps} className={sharedProps.className}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" {...officialImgProps} />
        </div>
      )
    case 'javascript':
      return (
        <div {...smallerSolidProps} className={smallerSolidProps.className}>
          <img src="https://cdn.simpleicons.org/javascript/F7DF1E" {...officialImgProps} />
        </div>
      )
    case 'react':
      return (
        <svg {...biggerOutlineProps}>
          <circle cx="32" cy="32" r="4.5" fill="#67E8F9" />
          <g stroke="#67E8F9" strokeWidth="2.3" fill="none" strokeLinecap="round">
            <ellipse cx="32" cy="32" rx="18" ry="8" transform="rotate(0 32 32)" />
            <ellipse cx="32" cy="32" rx="18" ry="8" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="18" ry="8" transform="rotate(120 32 32)" />
          </g>
        </svg>
      )
    case 'tailwind':
      return (
        <svg {...biggerOutlineProps}>
          <path d="M19 45c3-7 7.2-10.5 12-10.5 5.5 0 8.3 3.7 10.3 6.4 2 2.7 3.8 6.1 9.7 6.1-2.7 6.4-7.5 10.8-15 10.8-8.7 0-15.6-6.7-17-12.8Zm13-21c2.8-6.5 7.3-9.7 13.5-9.7 5.8 0 9.5 2.7 11.5 4.4 2-2.5 5.7-4.4 10.5-4.4-2.6 8.2-8.2 15.9-19.5 15.9-8.4 0-14.1-4.8-15.9-9.3Z" fill="#38BDF8" />
        </svg>
      )
    case 'git':
      return (
        <div {...smallerSolidProps} className={smallerSolidProps.className}>
          <img src="https://cdn.simpleicons.org/git/F1502F" {...officialImgProps} />
        </div>
      )
    case 'github':
      return (
        <svg {...smallerSolidProps}>
          <path d="M32 10c-12.4 0-22 9.8-22 22 0 9.7 6.3 17.9 15 20.8.8.1 1.1-.3 1.1-.8v-3.1c-6.1 1.3-7.4-2.9-7.4-2.9-1-2.6-2.4-3.3-2.4-3.3-2-.1 0-.1 0-.1 2.2.2 3.4 2.3 3.4 2.3 2 3.4 5.2 2.4 6.4 1.8.2-1.5.8-2.6 1.4-3.2-4.9-.6-10.1-2.5-10.1-10.9 0-2.4.8-4.4 2.3-5.9-.2-.7-1-2.9.2-6 0 0 1.9-.6 6.1 2.3 1.8-.5 3.6-.7 5.5-.7 1.9 0 3.7.2 5.5.7 4.2-2.9 6.1-2.3 6.1-2.3 1.2 3.1.4 5.3.2 6 1.4 1.5 2.3 3.5 2.3 5.9 0 8.4-5.2 10.3-10.1 10.9.8.7 1.5 2.1 1.5 4.2v6.3c0 .5.3.9 1.1.8C47.7 49.9 54 41.7 54 32c0-12.2-9.6-22-22-22Z" fill="#F8FAFC" />
        </svg>
      )
    case 'figma':
      return (
        <svg {...smallerSolidProps}>
          <path d="M24 10c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6s-2.7-6-6-6h-4c-3.3 0-6 2.7-6 6Zm0 12c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6s-2.7-6-6-6h-4c-3.3 0-6 2.7-6 6Zm0 12c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6 0-3.3-2.7-6-6-6h-4c-3.3 0-6 2.7-6 6Z" fill="#F9A8D4" />
          <path d="M18 16c0-3.3 2.7-6 6-6h4v12h-4c-3.3 0-6-2.7-6-6Zm0 12c0-3.3 2.7-6 6-6h4v12h-4c-3.3 0-6-2.7-6-6Zm0 12c0-3.3 2.7-6 6-6h4v12h-4c-3.3 0-6-2.7-6-6Z" fill="#F97316" />
          <path d="M42 16c0-3.3-2.7-6-6-6h-4v12h4c3.3 0 6-2.7 6-6ZM42 28c0-3.3-2.7-6-6-6h-4v12h4c3.3 0 6-2.7 6-6ZM42 40c0-3.3-2.7-6-6-6h-4v12h4c3.3 0 6-2.7 6-6Z" fill="#60A5FA" />
        </svg>
      )
    case 'node':
      return (
        <div {...smallerSolidProps} className={smallerSolidProps.className}>
          <img src="https://cdn.simpleicons.org/nodedotjs/22C55E" {...officialImgProps} />
        </div>
      )
    case 'express':
      return (
        <div {...smallerSolidProps} className={smallerSolidProps.className}>
          <img src="https://cdn.simpleicons.org/express/FFFFFF" {...officialImgProps} />
        </div>
      )
    case 'postman':
      return (
        <div {...smallerSolidProps} className={smallerSolidProps.className}>
          <img src="https://cdn.simpleicons.org/postman/FF6C37" {...officialImgProps} />
        </div>
      )
    case 'railway':
      return (
        <div {...smallerSolidProps} className={smallerSolidProps.className}>
          <img src="https://cdn.simpleicons.org/railway/FFFFFF" {...officialImgProps} />
        </div>
      )
    default:
      return null
  }
}

export default function Skills() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {skills.map(({ title, icon }, index) => (
        <article
          key={title}
          className="group flex flex-col items-center justify-center gap-3 p-2 text-center transition duration-300 ease-out hover:opacity-100"
          data-scroll-reveal
          style={{ transitionDelay: `${index * 80}ms` }}
          data-cursor-target
          aria-label={title}
        >
          <TechLogo name={icon} />
          <span className="text-sm font-bold tracking-[0.08em] text-white/90 uppercase">{title}</span>
        </article>
      ))}
    </div>
  )
}
