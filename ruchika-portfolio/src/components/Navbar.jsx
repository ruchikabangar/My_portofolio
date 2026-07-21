import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks } from '../data/portfolioData.js'
import useActiveSection from '../hooks/useActiveSection.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useActiveSection(navLinks.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300`}
        aria-label="Primary"
      >
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-glow' : 'bg-transparent'
          }`}
        >
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
            className="flex items-center gap-2 font-display font-semibold text-lg text-ink-primary"
          >
            <Code2 className="w-5 h-5 text-cyan-signal" aria-hidden="true" />
            <span>
              Ruchika<span className="text-cyan-signal">.</span>
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1 font-mono text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.id)
                  }}
                  className={`relative px-3 py-2 rounded-lg transition-colors duration-200 ${
                    activeId === link.id
                      ? 'text-cyan-signal'
                      : 'text-ink-muted hover:text-ink-primary'
                  }`}
                >
                  {activeId === link.id && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-lg bg-cyan-signal/10 border border-cyan-signal/20"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-ink-primary hover:bg-white/5"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden mt-2"
            >
              <ul className="glass rounded-2xl p-3 flex flex-col gap-1 font-mono text-sm">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.id)
                      }}
                      className={`block px-4 py-3 rounded-xl transition-colors ${
                        activeId === link.id
                          ? 'text-cyan-signal bg-cyan-signal/10'
                          : 'text-ink-muted hover:text-ink-primary hover:bg-white/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
