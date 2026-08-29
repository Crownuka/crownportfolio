import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import profilePic from './assets/bestPic.jpeg'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const menuItems = [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'core-stack', label: 'Skills', href: '#core-stack' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    {
      id: 'contact',
      label: 'Contact',
      href: 'mailto:queenuka30@gmail.com?subject=Let%27s%20work%20together',
    },
  ]

  return (
    <header className="relative sticky top-0 z-50 border-b border-white/10 bg-[#0A0516]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.32em] text-white/80">
          <img
            src={profilePic}
            alt="Profile"
            className="h-10 w-10 rounded-full border border-white/15 object-cover shadow-lg shadow-violet-950/40"
          />
          <span>CROWNUKA</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              className="text-sm text-white/70 transition duration-300 ease-out hover:text-white hover:-translate-y-0.5"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition duration-300 ease-out hover:-rotate-3 hover:bg-white/10 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0A0516]/95 py-4 transition-all duration-300 md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-6">
            {menuItems.map(({ id, label, href }) => (
              <a
                key={id}
                href={href}
                className="rounded-3xl px-4 py-3 text-sm text-white/70 transition duration-300 ease-out hover:bg-white/5 hover:text-white hover:-translate-x-0.5"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
