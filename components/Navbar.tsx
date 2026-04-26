'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '#producto', label: 'Producto' },
  { href: '#caracteristicas', label: 'Características' },
  { href: '#lineas', label: 'Líneas' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-gradient">Auxi</span>
            <span className="text-white">Pata</span>
          </span>
          <span className="hidden sm:block text-xs text-gray-500 font-medium mt-1">🇵🇪 Lima, Perú</span>
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {LINKS.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#precios"
            className="hidden sm:inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-bold px-4 py-2 rounded-full transition-colors"
          >
            Comprar ahora
          </a>
          <button
            className="md:hidden text-gray-400 hover:text-white p-1"
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-brand-card border-t border-brand-border px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {LINKS.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-300 hover:text-white text-sm font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#precios"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 rounded-full transition-colors"
              >
                Comprar ahora
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
