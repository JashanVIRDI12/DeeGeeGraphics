import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Star, Clock, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react'
import Squares from '../../components/Squares'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function CaledonPrinting() {
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

  const localFeatures = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Local Caledon Service",
      description: "Proudly serving Caledon and surrounding areas with fast, reliable printing services and local pickup options."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Community Trusted",
      description: "Trusted by Caledon businesses and residents for over 10 years. Your local printing partner you can rely on."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Quick Turnaround",
      description: "Fast local service with same-day and next-day printing options available for urgent Caledon projects."
    }
  ]

  const caledonServices = [
    {
      name: "Business Cards Printing Caledon",
      description: "Professional business cards for Caledon businesses and entrepreneurs",
      areas: ["Bolton", "Inglewood", "Palgrave", "Cheltenham"],
      image: "photo-1586953208448-b95a79798f07"
    },
    {
      name: "Signs and Storefront Signs Caledon", 
      description: "Custom signs and storefront signage for Caledon retail and commercial businesses",
      areas: ["Caledon East", "Caledon Village", "Mayfield", "Terra Cotta"],
      image: "photo-1560472354-b33ff0c44a43"
    },
    {
      name: "Vehicle Wraps Caledon",
      description: "Professional vehicle wraps and decals for Caledon fleet and personal vehicles",
      areas: ["Alton", "Belfountain", "Cataract", "Mono Mills"],
      image: "photo-1634128221889-7e994fb8fb34"
    },
    {
      name: "Wall Murals Caledon",
      description: "Custom wall murals and wide format printing for Caledon homes and businesses",
      areas: ["Sandhill", "Tullamore", "Wildfield", "Campbell's Cross"],
      image: "photo-1540575467063-178a50c2df87"
    },
    {
      name: "T-Shirt Printing Caledon",
      description: "Custom t-shirt and garment printing for Caledon events, teams, and businesses",
      areas: ["Mono", "Orangeville area", "Brampton border", "Mississauga border"],
      image: "photo-1441986300917-64674bd600d8"
    },
    {
      name: "Pamphlets and Brochures Caledon",
      description: "Professional pamphlet and brochure printing for Caledon marketing campaigns",
      areas: ["Georgetown area", "Acton area", "Milton area", "Halton Hills area"],
      image: "photo-1486406146926-c627a92ad1ab"
    }
  ]

  const whyChooseCaledon = [
    {
      title: "Local Knowledge",
      description: "We understand Caledon businesses and community needs",
      benefit: "Personalized service tailored to local market"
    },
    {
      title: "Fast Local Delivery",
      description: "Quick delivery and pickup options throughout Caledon",
      benefit: "Save time with convenient local service"
    },
    {
      title: "Community Support",
      description: "Supporting local Caledon economy and businesses",
      benefit: "Keep your business dollars in the community"
    },
    {
      title: "Competitive Pricing",
      description: "Best printing prices in Caledon and surrounding areas",
      benefit: "Premium quality at affordable local rates"
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "DeeGee Graphics - Caledon Printing Services",
    "description": "Professional printing services in Caledon, Ontario. Business cards, signs, vehicle wraps, t-shirt printing, and commercial printing for Caledon businesses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Caledon",
      "addressRegion": "Ontario",
      "addressCountry": "Canada"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.8361",
      "longitude": "-79.8711"
    },
    "areaServed": [
      "Caledon", "Bolton", "Inglewood", "Palgrave", "Cheltenham", "Caledon East", 
      "Caledon Village", "Mayfield", "Terra Cotta", "Alton", "Belfountain"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Caledon Printing Services",
      "itemListElement": caledonServices.map(service => ({
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
        title="Printing Services Caledon | Business Cards | Signs | Vehicle Wraps | Bolton"
        description="Professional printing services in Caledon, Ontario. Business cards printing, signs, vehicle wraps, t-shirt printing, and commercial printing. Serving Bolton, Inglewood, Palgrave, and all of Caledon."
        keywords="printing services Caledon, business cards Caledon, signs Caledon, vehicle wraps Caledon, t-shirt printing Caledon, printing Bolton, printing Inglewood, printing Palgrave, Caledon printing company, commercial printing Caledon"
        canonicalUrl="/services/caledon-printing"
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
                      {'Caledon'.split('').map((char, index) => (
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
                      {'Caledon'.split('').map((char, index) => (
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
                Your trusted local printing partner in Caledon, Ontario. Professional printing services for businesses and residents in Bolton, Inglewood, Palgrave, and all of Caledon. Fast turnaround, competitive pricing, and exceptional quality.
              </p>
              
              <div ref={ctaRef} className="flex justify-center">
                <button 
                  className="group text-white px-10 py-5 rounded-full font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" 
                  style={{ backgroundColor: '#0F172A' }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} 
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  onClick={() => document.querySelector('#caledon-services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>View Caledon Services</span>
                  <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Features Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Why Choose Caledon's Local Printer?
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Local printing services with the personal touch and community commitment you deserve
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {localFeatures.map((feature, index) => (
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

        {/* Caledon Services Section */}
        <section id="caledon-services" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Caledon Printing Services
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Comprehensive printing solutions for all Caledon communities and businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caledonServices.map((service, index) => (
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

        {/* Why Choose Caledon Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Caledon's Printing Advantage
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Benefits of choosing your local Caledon printing partner
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseCaledon.map((reason, index) => (
                <div key={index} className="feature-card">
                  <div className="p-8 rounded-3xl shadow-2xl h-full" style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>
                    <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                      {reason.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-4" style={{ color: '#64748B' }}>
                      {reason.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-semibold" style={{ color: '#0F172A' }}>{reason.benefit}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Serving All of Caledon
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Professional printing services delivered throughout Caledon and surrounding areas
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Bolton", "Inglewood", "Palgrave", "Cheltenham", "Caledon East", "Caledon Village",
                "Mayfield", "Terra Cotta", "Alton", "Belfountain", "Cataract", "Mono Mills",
                "Sandhill", "Tullamore", "Wildfield", "Campbell's Cross"
              ].map((area, index) => (
                <div key={index} className="feature-card text-center">
                  <div className="p-4 rounded-2xl" style={{ backgroundColor: '#F9FAFB', border: '2px solid rgba(226, 232, 240, 0.8)' }}>
                    <MapPin className="w-6 h-6 mx-auto mb-2" style={{ color: '#0F172A' }} />
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
                Ready to Work with
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Caledon's Best Printer?</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Get professional printing services right here in Caledon. Contact your local printing experts today for fast, reliable, and affordable printing solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                <span>Get Local Quote</span>
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

export default CaledonPrinting
