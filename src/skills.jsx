import { Code2, LayoutGrid, Smartphone, Zap } from 'lucide-react'

const skills = [
  {
    title: 'React Component Architecture',
    description: 'Reusable UI components, props-driven logic, and clean React app structure.',
    icon: Code2,
  },
  {
    title: 'Modern JavaScript',
    description: 'ES modules, async/await, DOM interaction, and browser-first frontend logic.',
    icon: Zap,
  },
  {
    title: 'Responsive UI Design',
    description: 'Mobile-first layouts, Tailwind utility styling, and adaptive screen experiences.',
    icon: Smartphone,
  },
  {
    title: 'Tailwind CSS & Visual polish',
    description: 'Tailwind utility styling, typography, spacing, animations, and visual details that make apps feel premium.',
    icon: LayoutGrid,
  },
]

export default function Skills() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {skills.map(({ title, description, icon: Icon }) => (
        <article
          key={title}
          className="rounded-[28px] border border-white/10 bg-[#130b26]/70 p-8 shadow-[0_20px_80px_rgba(139,92,246,0.12)]"
        >
          <Icon className="mb-5 h-8 w-8 text-violet-300" />
          <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm leading-7 text-white/70">{description}</p>
        </article>
      ))}
    </div>
  )
}
