import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, AlertCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SEO from '../components/SEO'

function NotFound() {
  const numberRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    // Animate 404 number
    if (numberRef.current) {
      gsap.fromTo(numberRef.current.children,
        { 
          y: -100, 
          opacity: 0,
          scale: 0.5,
          rotation: -180
        },
        { 
          y: 0, 
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'elastic.out(1, 0.5)'
        }
      )
    }

    // Animate content
    if (contentRef.current) {
      gsap.fromTo(contentRef.current.children,
        { 
          y: 50, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.5,
          ease: 'power2.out'
        }
      )
    }
  }, [])

  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist. Return to Dee Gee Graphics homepage to explore our graphic design, printing, and branding services."
        noindex={true}
      />
      
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#0F172A' }}></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#0F172A', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full opacity-10 animate-pulse" style={{ backgroundColor: '#0F172A', animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          {/* 404 Number */}
          <div ref={numberRef} className="flex justify-center items-center mb-8 space-x-4">
            <span className="text-9xl md:text-[200px] font-black leading-none" style={{ color: '#0F172A' }}>4</span>
            <div className="relative">
              <div className="w-24 h-24 md:w-40 md:h-40 rounded-full flex items-center justify-center" style={{ backgroundColor: '#0F172A' }}>
                <AlertCircle className="w-12 h-12 md:w-20 md:h-20 text-white" />
              </div>
            </div>
            <span className="text-9xl md:text-[200px] font-black leading-none" style={{ color: '#0F172A' }}>4</span>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#0F172A' }}>
              Oops! Page Not Found
            </h1>
            
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
              The page you're looking for seems to have wandered off. Don't worry, even the best designs need a little navigation help sometimes!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                to="/"
                className="group flex items-center space-x-2 px-8 py-4 rounded-xl font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#0F172A' }}
              >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>

              <Link
                to="/services"
                className="group flex items-center space-x-2 px-8 py-4 rounded-xl font-black transition-all duration-300 hover:scale-105 border-2"
                style={{ 
                  borderColor: '#0F172A',
                  color: '#0F172A',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0F172A'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = '#0F172A'
                }}
              >
                <Search className="w-5 h-5" />
                <span>Explore Services</span>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="pt-12">
              <p className="text-sm font-bold mb-4" style={{ color: '#64748B' }}>
                Or try these popular pages:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/projects"
                  className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#E2E8F0',
                    color: '#0F172A'
                  }}
                >
                  Projects
                </Link>
                <Link
                  to="/about"
                  className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#E2E8F0',
                    color: '#0F172A'
                  }}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: '#E2E8F0',
                    color: '#0F172A'
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
