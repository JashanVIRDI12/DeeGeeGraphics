import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, ArrowRight, Clock } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-3xl font-black tracking-tight mb-4" style={{ color: '#0F172A' }}>
                Dee Gee Graphics
              </h3>
              <p className="text-lg leading-relaxed max-w-md" style={{ color: '#64748B' }}>
                Creating extraordinary visual experiences that elevate your brand and captivate your audience.
              </p>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-black" style={{ color: '#0F172A' }}>Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-xl border-2 focus:outline-none transition-all"
                    style={{ 
                      borderColor: '#E2E8F0',
                      backgroundColor: '#FFFFFF',
                      color: '#0F172A'
                    }}
                  />
                  <button className="px-6 py-3 rounded-xl font-black transition-all duration-300 hover:scale-105" style={{ backgroundColor: '#0F172A', color: '#FFFFFF' }}>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-black mb-6" style={{ color: '#0F172A' }}>Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to="/" 
                    className="group flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    <span className="w-0 h-0.5 group-hover:w-4 transition-all duration-300" style={{ backgroundColor: '#0F172A' }}></span>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/services" 
                    className="group flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    <span className="w-0 h-0.5 group-hover:w-4 transition-all duration-300" style={{ backgroundColor: '#0F172A' }}></span>
                    <span>Services</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/projects" 
                    className="group flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    <span className="w-0 h-0.5 group-hover:w-4 transition-all duration-300" style={{ backgroundColor: '#0F172A' }}></span>
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="group flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    <span className="w-0 h-0.5 group-hover:w-4 transition-all duration-300" style={{ backgroundColor: '#0F172A' }}></span>
                    <span>About Us</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="group flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: '#64748B' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
                  >
                    <span className="w-0 h-0.5 group-hover:w-4 transition-all duration-300" style={{ backgroundColor: '#0F172A' }}></span>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-black mb-6" style={{ color: '#0F172A' }}>Get In Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:info@deegeegraphics.com" className="flex items-start space-x-3 group">
                    <div className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#E2E8F0' }}>
                      <Mail className="w-4 h-4" style={{ color: '#0F172A' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#64748B' }}>Email</p>
                      <p className="font-bold text-sm" style={{ color: '#0F172A' }}>info@deegeegraphics.com</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="tel:+16475497017" className="flex items-start space-x-3 group">
                    <div className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#E2E8F0' }}>
                      <Phone className="w-4 h-4" style={{ color: '#0F172A' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#64748B' }}>Phone</p>
                      <p className="font-bold text-sm" style={{ color: '#0F172A' }}>(647) 549-7017</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://maps.google.com/?q=12545+Coleraine+Drive,+Unit+9,+Caledon+ON+L7E+3B5" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                    <div className="p-2 rounded-lg transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#E2E8F0' }}>
                      <MapPin className="w-4 h-4" style={{ color: '#0F172A' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#64748B' }}>Location</p>
                      <p className="font-bold text-sm" style={{ color: '#0F172A' }}>12545 Coleraine Drive, Unit 9<br />Caledon ON L7E 3B5</p>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start space-x-3">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: '#E2E8F0' }}>
                      <Clock className="w-4 h-4" style={{ color: '#0F172A' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold" style={{ color: '#64748B' }}>Hours</p>
                      <p className="font-bold text-sm" style={{ color: '#0F172A' }}>Opening Soon</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t-2 flex flex-col md:flex-row justify-between items-center gap-6" style={{ borderColor: '#E2E8F0' }}>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm font-semibold" style={{ color: '#64748B' }}>
                &copy; {new Date().getFullYear()} Dee Gee Graphics. All rights reserved.
              </p>
              <Link 
                to="/terms" 
                className="text-sm font-semibold transition-colors hover:underline"
                style={{ color: '#64748B' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0F172A'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#64748B'}
              >
                Terms & Conditions
              </Link>
            </div>
            
            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <span className="text-sm font-bold mr-2" style={{ color: '#0F172A' }}>Follow Us:</span>
              <a
                href="https://www.instagram.com/deegeegraphics/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition-all duration-300 hover:scale-110"
                style={{ backgroundColor: '#0F172A' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#64748B'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
