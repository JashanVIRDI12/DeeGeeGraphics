import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CreditCard, Star, CheckCircle, ArrowRight, Mail, Phone } from 'lucide-react'
import Squares from '../../components/Squares'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function BusinessCards() {
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
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality Business Cards",
      description: "High-quality business card printing with premium paper stocks and professional finishes."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Custom Business Card Design",
      description: "Professional business card design services tailored to your brand identity and business needs."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Affordable Business Card Printing",
      description: "Cheap business card printing without compromising on quality. Best prices in Caledon and Toronto."
    }
  ]

  const cardTypes = [
    {
      name: "Standard Business Cards",
      description: "Classic 16pt cardstock with matte or gloss finish",
      features: ["Standard size 3.5\" x 2\"", "Full color printing", "Matte or gloss finish", "Quick turnaround"]
    },
    {
      name: "Premium Business Cards", 
      description: "Thick 32pt cardstock with luxury finishes",
      features: ["Premium 32pt cardstock", "Spot UV coating", "Foil stamping available", "Rounded corners option"]
    },
    {
      name: "Specialty Business Cards",
      description: "Unique materials and finishes for maximum impact",
      features: ["Plastic/PVC cards", "Metal business cards", "Die-cut shapes", "Embossed textures"]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Business Cards Printing",
    "description": "Professional business card printing services in Caledon and Toronto. High-quality, affordable business cards with custom design options.",
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
      "name": "Business Card Printing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Standard Business Cards"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Business Cards"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Specialty Business Cards"
          }
        }
      ]
    }
  }

  return (
    <>
      <SEO 
        title="Business Cards Printing | Professional Business Card Design | Caledon & Toronto"
        description="Premium business cards printing in Caledon and Toronto. Custom business card design, affordable printing, premium quality. Same-day printing available. Get your professional business cards today!"
        keywords="business cards printing, business card design, cheap business cards, professional business cards, business cards Caledon, business cards Toronto, custom business cards, premium business cards, affordable business card printing, business cards near me"
        canonicalUrl="/services/business-cards"
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
                      {'Business Cards'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'Printing'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="whitespace-nowrap">
                      {'Business Cards'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'Printing'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char}</span>
                      ))}
                    </div>
                  </div>
                </h1>
              </div>
              
              <p ref={descriptionRef} className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: '#64748B' }}>
                Professional business cards printing in Caledon and Toronto. Get premium quality business cards with custom design options, affordable pricing, and fast turnaround. Make a lasting first impression with our high-quality business card printing services.
              </p>
              
              <div ref={ctaRef} className="flex justify-center">
                <button 
                  className="group text-white px-10 py-5 rounded-full font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" 
                  style={{ backgroundColor: '#0F172A' }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} 
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  onClick={() => document.querySelector('#business-cards-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>View Business Card Options</span>
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
                Why Choose Our Business Cards Printing?
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Premium business card printing services with unmatched quality and affordability
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

        {/* Business Card Types Section */}
        <section id="business-cards-section" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Business Card Printing Options
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Choose from our wide range of business card printing options to match your brand
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {cardTypes.map((cardType, index) => (
                <div key={index} className="feature-card group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 h-full" style={{ 
                    backgroundColor: '#F9FAFB',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>

                    <div className="p-8">
                      <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                        {cardType.name}
                      </h3>
                      <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>
                        {cardType.description}
                      </p>
                      <ul className="space-y-2">
                        {cardType.features.map((feature, featureIndex) => (
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
                Ready for Professional
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Business Cards?</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Get premium business cards printing in Caledon and Toronto. Contact us today for affordable, high-quality business card printing services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                <span>Get Quote Now</span>
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

export default BusinessCards
