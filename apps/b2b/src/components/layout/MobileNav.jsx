import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { X, Phone, Mail, ExternalLink } from 'lucide-react'
import { NAV_LINKS, SITE } from '../../config/site'

export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />
      <aside className={`fixed top-0 right-0 z-[70] h-full w-80 max-w-full bg-[#0D1527] border-l border-[#243058] transition-transform duration-400 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#243058]">
            <img src="/logo.png" alt="Amstela" className="h-7 w-auto brightness-0 invert" />
            <button onClick={onClose} className="p-2 text-[#5A6480] hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center py-3 border-b border-[#243058]/60 font-serif text-xl font-light transition-colors duration-200 ${
                    isActive ? 'text-[#B8862A]' : 'text-[#8B96B0] hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="px-6 pb-4">
            <Link
              to="/catalogue"
              onClick={onClose}
              className="flex items-center justify-center w-full py-3.5 bg-[#B8862A] text-white font-sans text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#8B6420] transition-colors"
            >
              Request Catalogue
            </Link>
          </div>

          <div className="px-6 py-4 border-t border-[#243058] space-y-3">
            <a href={`tel:${SITE.phone}`} className="flex items-center gap-3 text-sm text-[#5A6480] hover:text-[#B8862A] transition-colors">
              <Phone size={14} /> {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-sm text-[#5A6480] hover:text-[#B8862A] transition-colors">
              <Mail size={14} /> {SITE.email}
            </a>
            <a href={SITE.b2cUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-xs text-[#5A6480] hover:text-[#B8862A] transition-colors">
              <ExternalLink size={13} /> View Consumer Site
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
