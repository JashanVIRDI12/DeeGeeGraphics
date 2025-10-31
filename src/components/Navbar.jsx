import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Simple scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl shadow-2xl border-b border-white/10'
          : 'backdrop-blur-xl'
      }`}
      style={{ backgroundColor: '#0F172A' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-black text-[#F9FAFB] tracking-tight group-hover:text-gray-300 transition-colors">
              Dee Gee Graphics
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-[#F9FAFB] text-[#0F172A]'
                    : 'text-[#F9FAFB] hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden md:block bg-[#F9FAFB] text-[#0F172A] px-8 py-3 rounded-full font-black hover:bg-gray-200 transition-all duration-300"
          >
            Get Quote
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl hover:bg-white/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
          />

          {/* Menu Panel */}
          <div className="fixed top-20 left-0 right-0 backdrop-blur-xl border-t border-white/10 z-50 md:hidden" style={{ backgroundColor: '#0F172A' }}>
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
                    location.pathname === link.path
                      ? 'bg-[#F9FAFB] text-[#0F172A]'
                      : 'text-[#F9FAFB] hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-[#F9FAFB] text-[#0F172A] text-center px-6 py-4 rounded-xl font-black mt-4"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar
