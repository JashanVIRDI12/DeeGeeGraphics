import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building, Users, Zap, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react'
import Squares from '../../components/Squares'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function TorontoPrinting() {
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

  const torontoFeatures = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Downtown Toronto Service",
      description: "Serving Toronto's business district and corporate clients with professional printing services and downtown delivery."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "GTA Coverage",
      description: "Comprehensive printing services across the Greater Toronto Area including Mississauga, Brampton, and Markham."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rush Orders",
      description: "Same-day and express printing services for urgent Toronto business needs and last-minute projects."
    }
  ]

  const torontoServices = [
    {
      name: "Business Cards Printing Toronto",
      description: "Professional business cards for Toronto professionals and corporate clients",
      areas: ["Downtown Toronto", "North York", "Scarborough", "Etobicoke"],
      image: "photo-1586953208448-b95a79798f07"
    },
    {
      name: "Corporate Signs Toronto", 
      description: "Professional signage solutions for Toronto businesses and corporate offices",
      areas: ["Financial District", "Entertainment District", "King West", "Liberty Village"],
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      name: "Vehicle Wraps Toronto",
      description: "Commercial vehicle wraps and fleet graphics for Toronto businesses",
      areas: ["Vaughan", "Richmond Hill", "Thornhill", "Woodbridge"],
      image: "photo-1634128221889-7e994fb8fb34"
    },
    {
      name: "Large Format Printing Toronto",
      description: "Wide format printing and banners for Toronto events and trade shows",
      areas: ["Exhibition Place", "Metro Toronto Convention Centre", "Harbourfront", "Distillery District"],
      image: "photo-1540575467063-178a50c2df87"
    },
    {
      name: "Corporate Apparel Toronto",
      description: "Custom corporate clothing and uniforms for Toronto businesses",
      areas: ["Mississauga", "Brampton", "Oakville", "Burlington"],
      image: "photo-1441986300917-64674bd600d8"
    },
    {
      name: "Marketing Materials Toronto",
      description: "Professional brochures, flyers, and marketing collateral for Toronto campaigns",
      areas: ["Markham", "Ajax", "Pickering", "Whitby"],
      image: "photo-1486406146926-c627a92ad1ab"
    }
  ]

  const torontoIndustries = [
    {
      title: "Financial Services",
      description: "Professional printing for banks, investment firms, and financial institutions",
      services: ["Annual reports", "Corporate stationery", "Marketing materials", "Compliance documents"]
    },
    {
      title: "Real Estate",
      description: "Marketing materials and signage for Toronto real estate professionals",
      services: ["Property brochures", "For sale signs", "Business cards", "Marketing packages"]
    },
    {
      title: "Healthcare",
      description: "Professional printing for hospitals, clinics, and healthcare providers",
      services: ["Patient forms", "Informational brochures", "Signage", "Appointment cards"]
    },
    {
      title: "Technology",
      description: "Modern printing solutions for Toronto's tech companies and startups",
      services: ["Pitch decks", "Corporate materials", "Trade show displays", "Product sheets"]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DeeGee Graphics - Toronto Printing Services",
    "description": "Professional printing services in Toronto, Ontario. Business cards, corporate signs, vehicle wraps, and commercial printing for Toronto businesses and GTA.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.6532",
      "longitude": "-79.3832"
    },
    "areaServed": [
      "Toronto", "North York", "Scarborough", "Etobicoke", "Downtown Toronto", 
      "Mississauga", "Brampton", "Vaughan", "Markham", "Richmond Hill", "GTA"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Toronto Printing Services",
      "itemListElement": torontoServices.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.name,
          "areaServed": service.areas
        }
      }))
    }
  }

  return (
    <>
      <SEO 
        title="Printing Services Toronto | Business Cards | Corporate Signs | Vehicle Wraps | GTA"
        description="Professional printing services in Toronto and GTA. Business cards printing, corporate signs, vehicle wraps, large format printing. Serving downtown Toronto, North York, Scarborough, Etobicoke, Mississauga."
        keywords="printing services Toronto, business cards Toronto, corporate signs Toronto, vehicle wraps Toronto, printing GTA, commercial printing Toronto, printing downtown Toronto, printing North York, printing Mississauga, Toronto printing company"
        canonicalUrl="/services/toronto-printing"
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
                      {'Toronto'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'Printing Services'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="whitespace-nowrap">
                      {'Toronto'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'Printing Services'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                  </div>
                </h1>
              </div>
              
              <p ref={descriptionRef} className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: '#64748B' }}>
                Professional printing services in Toronto and the Greater Toronto Area. Serving downtown Toronto, North York, Scarborough, Etobicoke, Mississauga, and surrounding areas with premium quality printing solutions for businesses and organizations.
              </p>
              
              <div ref={ctaRef} className="flex justify-center">
                <button 
                  className="group text-white px-10 py-5 rounded-full font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" 
                  style={{ backgroundColor: '#0F172A' }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} 
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  onClick={() => document.querySelector('#toronto-services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>View Toronto Services</span>
                  <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Toronto Features Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Toronto's Premier Printing Partner
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Professional printing services designed for Toronto's fast-paced business environment
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {torontoFeatures.map((feature, index) => (
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

        {/* Toronto Services Section */}
        <section id="toronto-services" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Toronto & GTA Printing Services
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Comprehensive printing solutions for Toronto businesses and the Greater Toronto Area
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {torontoServices.map((service, index) => (
                <div key={index} className="feature-card group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 h-full" style={{ 
                    backgroundColor: '#F9FAFB',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>

                    <div className="p-8">
                      <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                        {service.name}
                      </h3>
                      <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>
                        {service.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="font-bold text-sm mb-2" style={{ color: '#0F172A' }}>Serving Areas:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.areas.map((area, areaIndex) => (
                            <span key={areaIndex} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#E2E8F0', color: '#475569' }}>
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Industries We Serve in Toronto
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Specialized printing solutions for Toronto's diverse business sectors
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {torontoIndustries.map((industry, index) => (
                <div key={index} className="feature-card">
                  <div className="p-8 rounded-3xl shadow-2xl h-full" style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>
                    <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                      {industry.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>
                      {industry.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm" style={{ color: '#64748B' }}>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GTA Coverage Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Greater Toronto Area Coverage
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Professional printing services delivered throughout the GTA
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Downtown Toronto", "North York", "Scarborough", "Etobicoke", "Mississauga", "Brampton",
                "Vaughan", "Markham", "Richmond Hill", "Thornhill", "Oakville", "Burlington",
                "Ajax", "Pickering", "Whitby", "Oshawa", "Milton", "Georgetown"
              ].map((area, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: '#F9FAFB', border: '2px solid rgba(226, 232, 240, 0.8)' }}>
                    <Building className="w-6 h-6 mx-auto mb-2" style={{ color: '#0F172A' }} />
                    <h3 className="text-lg font-black" style={{ color: '#0F172A' }}>
                      {area}
                    </h3>
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
                Ready to Elevate Your
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Toronto Business?</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Get professional printing services in Toronto and the GTA. Contact us today for competitive pricing and exceptional service for all your business printing needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                <span>Get Toronto Quote</span>
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

export default TorontoPrinting
