import { Mail, MessageCircle, GitBranch, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0516]/95 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-6 text-white/70 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-violet-300/80">Built By</p>
          <p className="mt-3 text-base text-white">Built by Queen Uka</p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-white/70">
          <a href="mailto:queenuka30@gmail.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm transition hover:text-white">
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a href="https://wa.me/2348078159936" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm transition hover:text-white">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm transition hover:text-white">
            <GitBranch className="h-4 w-4" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/ezenwanyi-uka-046a29a7/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm transition hover:text-white">
            <ExternalLink className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
