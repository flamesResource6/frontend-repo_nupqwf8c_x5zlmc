import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navItems = [
    { label: 'Workshops', href: '#workshops' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 bg-clip-text text-transparent">Ben Rotenberg</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 text-white text-sm font-medium px-4 py-2 shadow hover:opacity-90 transition-opacity">
              Book a call
            </a>
          </nav>
          <button className="md:hidden inline-flex items-center justify-center p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm hover:bg-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-600 text-white text-sm font-medium px-4 py-2 shadow">
                Book a call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
