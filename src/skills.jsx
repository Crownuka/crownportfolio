import { Code2, LayoutGrid, Smartphone, Zap, GitBranch, Palette } from 'lucide-react'

const skills = [
  {
    title: 'HTML',
    description: 'Semantic structure for accessible, responsive content.',
    icon: Code2,
  },
  {
    title: 'CSS',
    description: 'Modern styles, layout systems, and polished visual design.',
    icon: LayoutGrid,
  },
  {
    title: 'JavaScript',
    description: 'Interactive UI behavior, DOM updates, and browser-first logic.',
    icon: Zap,
  },
  {
    title: 'React',
    description: 'Component-driven apps with clean state and reusable UI.',
    icon: Smartphone,
  },
  {
    title: 'Tailwind CSS',
    description: 'Utility-first styling for rapid responsive layouts and polish.',
    icon: LayoutGrid,
  },
  {
    title: 'Git',
    description: 'Version control, branching, and collaboration workflow.',
    icon: GitBranch,
  },
  {
    title: 'GitHub',
    description: 'Repo management, pull requests, and project collaboration.',
    icon: Code2,
  },
  {
    title: 'Figma',
    description: 'Design systems, UI mockups, and handoff-ready visuals.',
    icon: Palette,
  },
]

export default function Skills() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {skills.map(({ title, description, icon: Icon }, index) => (
        <article
          key={title}
          className="group rounded-[28px] border border-white/10 bg-[#130b26]/70 p-8 shadow-[0_20px_80px_rgba(139,92,246,0.12)] transition duration-700 ease-out motion-safe:hover:-translate-y-3 motion-safe:hover:shadow-[0_50px_140px_rgba(139,92,246,0.24)] hover:border-violet-400/40 hover:bg-white/5"
          data-scroll-reveal
          style={{ transitionDelay: `${index * 80}ms` }}
          data-cursor-target
        >
          <Icon className="mb-5 h-8 w-8 text-violet-300 transition duration-300 group-hover:text-violet-200" />
          <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-7 text-white/70">{description}</p>
        </article>
      ))}
    </div>
  )
}
