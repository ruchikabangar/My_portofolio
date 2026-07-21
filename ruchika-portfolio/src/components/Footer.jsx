import { Github, Linkedin, Mail } from 'lucide-react'
import { personal } from '../data/portfolioData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {year} {personal.name}. Built with React &amp; Three.js.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personal.links.email}
            className="text-ink-faint hover:text-cyan-signal transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={personal.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-cyan-signal transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={personal.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-cyan-signal transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
