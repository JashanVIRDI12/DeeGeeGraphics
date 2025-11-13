import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Truck, Car, Shield, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react'
import Squares from '../../components/Squares'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function VehicleWraps() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    const tl = gsap.timeline({ delay: 0.1 })
    
    const titleChars = titleRef.current.querySelectorAll('.char')
    tl.fromTo(titleChars,
      { 
        y: 100, 
        opacity: 0, 
        rotationX: -90,
        rotationY: -45,
        z: -200,
        transformOrigin: '50% 50%',
        transformPerspective: 1000
      },
      { 
        y: 0, 
        opacity: 1, 
        rotationX: 0,
        rotationY: 0,
        z: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: 'back.out(1.5)',
        force3D: true
      }
    )

    tl.fromTo(descriptionRef.current,
      { 
        y: 40, 
        opacity: 0,
        rotationX: 45,
        z: -100,
        transformOrigin: '50% 50%',
        transformPerspective: 1000
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        z: 0,
        duration: 0.7,
        ease: 'power3.out',
        force3D: true
      },
      '-=0.3'
    )

    tl.fromTo(ctaRef.current,
      { 
        y: 20, 
        opacity: 0,
        scale: 0.8
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(1.5)',
        force3D: true
      },
      '-=0.2'
    )

    const featureCards = gsap.utils.toArray('.feature-card')
    
    if (featureCards.length > 0) {
      featureCards.forEach((card, index) => {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none'
            },
            delay: index * 0.1
          }
        )
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Professional Vehicle Wraps",
      description: "Transform your vehicles into mobile billboards with high-quality vinyl wraps and professional installation."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Custom Vehicle Graphics",
      description: "Custom vehicle decals and graphics designed to match your brand and marketing objectives."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Paint Protection",
      description: "Premium vinyl wraps protect your vehicle's original paint while providing stunning visual appeal."
    }
  ]

  const wrapTypes = [
    {
      name: "Truck Decals",
      description: "Professional truck decals and graphics for commercial vehicles",
      features: ["Weather resistant vinyl", "Custom design service", "Professional installation", "Fleet discounts"],
      image: "photo-1558618666-fcd25c85cd64"
    },
    {
      name: "Trailer Decals", 
      description: "Eye-catching trailer decals for maximum advertising impact",
      features: ["Large format graphics", "DOT compliant options", "Reflective materials", "Easy maintenance"],
      image: "photo-1601584115197-04ecc0da31d7"
    },
    {
      name: "Van Wrap",
      description: "Complete van wraps that turn your vehicle into a mobile advertisement",
      features: ["Full vehicle coverage", "Partial wrap options", "3M certified materials", "5-year warranty"],
      image: "photo-1449824913935-59a10b8d2000"
    },
    {
      name: "Trailer Wrap",
      description: "Professional trailer wraps for maximum brand exposure on the road",
      features: ["High-impact graphics", "Durable materials", "Professional design", "Installation included"],
      image: "photo-1586953208448-b95a79798f07"
    },
    {
      name: "Car Decals",
      description: "Custom car decals and graphics for personal and business vehicles",
      features: ["Precision cut vinyl", "Easy application", "Removable options", "Color matching"],
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      name: "Fleet Graphics",
      description: "Consistent fleet graphics across all your business vehicles",
      features: ["Brand consistency", "Volume pricing", "Project management", "Installation coordination"],
      image: "photo-1634128221889-7e994fb8fb34"
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Vehicle Wraps and Decals",
    "description": "Professional vehicle wraps and decals in Caledon and Toronto. Truck decals, trailer wraps, van wraps, and custom vehicle graphics for businesses.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DeeGee Graphics",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Caledon",
        "addressRegion": "Ontario",
        "addressCountry": "Canada"
      }
    },
    "areaServed": ["Caledon", "Toronto", "Ontario", "GTA"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vehicle Wraps and Decals Services",
      "itemListElement": wrapTypes.map(wrap => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": wrap.name
        }
      }))
    }
  }

  return (
    <>
      <SEO 
        title="Vehicle Wraps & Decals | Truck Decals | Van Wrap | Trailer Wrap | Caledon & Toronto"
        description="Professional vehicle wraps and decals in Caledon and Toronto. Custom truck decals, trailer wraps, van wraps, and vehicle graphics. Transform your fleet into mobile advertising!"
        keywords="vehicle wraps, truck decals, trailer decals, van wrap, trailer wrap, vehicle graphics, car decals, fleet graphics, vehicle wraps Caledon, vehicle wraps Toronto, mobile advertising, commercial vehicle graphics"
        canonicalUrl="/services/vehicle-wraps"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-black">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ perspective: '1500px', backgroundColor: '#F9FAFB' }}>
          <div className="absolute inset-0 z-0 opacity-[0.15]">
            <Squares 
              speed={0.3}
              squareSize={50}
              direction='diagonal'
              borderColor='#1E293B'
              hoverFillColor='#0F172A'
            />
          </div>
          
          <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full py-20">
            <div className="text-center max-w-5xl mx-auto">
              <div ref={titleRef} className="mb-8">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight" style={{ color: '#0F172A' }}>
                  <div className="block md:hidden">
                    <div className="whitespace-nowrap mb-2">
                      {'Vehicle Wraps'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'& Decals'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="whitespace-nowrap">
                      {'Vehicle Wraps'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'& Decals'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                  </div>
                </h1>
              </div>
              
              <p ref={descriptionRef} className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: '#64748B' }}>
                Professional vehicle wraps and decals in Caledon and Toronto. Transform your trucks, trailers, vans, and cars into powerful mobile advertising with custom vehicle graphics that drive business growth.
              </p>
              
              <div ref={ctaRef} className="flex justify-center">
                <button 
                  className="group text-white px-10 py-5 rounded-full font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" 
                  style={{ backgroundColor: '#0F172A' }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} 
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  onClick={() => document.querySelector('#wraps-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>View Wrap Options</span>
                  <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Why Choose Our Vehicle Wraps?
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Professional vehicle wrap services that turn your fleet into powerful mobile advertising
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="feature-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 h-full p-8" style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>
                    <div className="mb-6 inline-block p-4 rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)' }}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                      {feature.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Wrap Types Section */}
        <section id="wraps-section" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Vehicle Wrap Services
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Complete vehicle wrap solutions for all types of vehicles and fleets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wrapTypes.map((wrap, index) => (
                <div key={index} className="feature-card group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 h-full" style={{ 
                    backgroundColor: '#F9FAFB',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>

                    <div className="p-8">
                      <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                        {wrap.name}
                      </h3>
                      <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>
                        {wrap.description}
                      </p>
                      <ul className="space-y-2">
                        {wrap.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm" style={{ color: '#64748B' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Benefits of Vehicle Wraps
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Why vehicle wraps are the smartest marketing investment for your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Mobile Advertising", description: "Reach thousands of potential customers daily while driving" },
                { title: "Cost Effective", description: "Lower cost per impression than traditional advertising methods" },
                { title: "Paint Protection", description: "Protect your vehicle's original paint from scratches and UV damage" },
                { title: "Professional Image", description: "Present a professional, branded appearance to customers" }
              ].map((benefit, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="p-6 rounded-2xl" style={{ backgroundColor: '#FFFFFF', border: '2px solid rgba(226, 232, 240, 0.8)' }}>
                    <h3 className="text-xl font-black mb-3" style={{ color: '#0F172A' }}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
          <div className="absolute inset-0 opacity-[0.08]">
            <Squares 
              speed={0.2}
              squareSize={50}
              direction='right'
              borderColor='#F9FAFB'
              hoverFillColor='#64748B'
            />
          </div>
          
          <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="mb-12">
              <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                Transform Your Fleet into
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Mobile Advertising</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Get professional vehicle wraps and decals in Caledon and Toronto. Contact us today for a free consultation and custom quote for your fleet.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                <span>Get Free Estimate</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Link>
              
              <Link to="/services" className="group border-2 px-12 py-6 rounded-full font-black text-xl text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white hover:text-black" style={{ borderColor: '#F9FAFB' }}>
                <span>View All Services</span>
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center pt-12 border-t" style={{ borderColor: 'rgba(249, 250, 251, 0.1)' }}>
              <a href="mailto:info@deegeegraphics.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@deegeegraphics.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default VehicleWraps
