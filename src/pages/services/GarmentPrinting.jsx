import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shirt, Palette, Award, ArrowRight, Mail, Phone, CheckCircle } from 'lucide-react'
import Squares from '../../components/Squares'
import SEO from '../../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function GarmentPrinting() {
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
      icon: <Shirt className="w-8 h-8" />,
      title: "T-Shirt Printing",
      description: "High-quality t-shirt printing with vibrant colors and durable finishes. Perfect for events, promotions, and branding."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Designs",
      description: "Professional design services for custom apparel. From logos to artwork, we bring your vision to life."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Premium garment printing using the latest techniques and highest quality materials for lasting results."
    }
  ]

  const garmentTypes = [
    {
      name: "T-Shirt Printing",
      description: "Custom t-shirt printing for businesses, events, and personal use",
      features: ["Screen printing", "Digital printing", "Vinyl heat transfer", "Embroidery options"],
      image: "photo-1521572163474-6864f9cf17ab"
    },
    {
      name: "Hoodie Printing", 
      description: "Professional hoodie printing with custom designs and logos",
      features: ["Pullover hoodies", "Zip-up hoodies", "Premium materials", "Custom colors"],
      image: "photo-1556821840-3a63f95609a7"
    },
    {
      name: "Polo Shirts",
      description: "Corporate polo shirts with embroidered logos and professional appearance",
      features: ["Embroidered logos", "Corporate colors", "Various sizes", "Bulk pricing"],
      image: "photo-1594633312681-425c7b97ccd1"
    },
    {
      name: "Uniforms",
      description: "Custom uniforms for businesses, teams, and organizations",
      features: ["Work uniforms", "Team jerseys", "Name tags", "Logo placement"],
      image: "photo-1503341504253-dff4815485f1"
    },
    {
      name: "Promotional Apparel",
      description: "Branded promotional clothing for marketing and events",
      features: ["Trade show apparel", "Event t-shirts", "Giveaway items", "Brand merchandise"],
      image: "photo-1441986300917-64674bd600d8"
    },
    {
      name: "Sports Apparel",
      description: "Custom sports apparel for teams and athletic organizations",
      features: ["Team jerseys", "Athletic wear", "Performance fabrics", "Number printing"],
      image: "photo-1571019613454-1cb2f99b2d8b"
    }
  ]

  const printingMethods = [
    {
      name: "Screen Printing",
      description: "Traditional screen printing for large quantities with vibrant, long-lasting results",
      bestFor: "Large orders, simple designs, solid colors",
      benefits: ["Cost effective for bulk", "Vibrant colors", "Durable finish", "Professional quality"]
    },
    {
      name: "Digital Printing",
      description: "Modern digital printing perfect for detailed designs and small quantities",
      bestFor: "Small orders, complex designs, photo prints",
      benefits: ["No setup costs", "Full color printing", "Quick turnaround", "Detailed graphics"]
    },
    {
      name: "Heat Transfer Vinyl",
      description: "Precision cut vinyl applied with heat for crisp, professional results",
      bestFor: "Names, numbers, simple logos",
      benefits: ["Precise cutting", "Solid colors", "Durable application", "Quick production"]
    },
    {
      name: "Embroidery",
      description: "Premium embroidered logos and designs for a professional, upscale appearance",
      bestFor: "Corporate wear, uniforms, premium items",
      benefits: ["Premium appearance", "Very durable", "Professional look", "Texture appeal"]
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Garment Printing and T-Shirt Printing",
    "description": "Professional garment printing services in Caledon and Toronto. Custom t-shirt printing, hoodie printing, uniforms, and promotional apparel with various printing methods.",
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
      "name": "Garment Printing Services",
      "itemListElement": garmentTypes.map(garment => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": garment.name
        }
      }))
    }
  }

  return (
    <>
      <SEO 
        title="T-Shirt Printing & Garment Printing | Custom Hoodies | Uniforms | Caledon & Toronto"
        description="Professional t-shirt printing and garment printing in Caledon and Toronto. Custom hoodies, uniforms, promotional apparel. Screen printing, embroidery, and digital printing services."
        keywords="t-shirt printing, tshirt printing, hoodie printing, garment printing, custom t-shirts, custom hoodies, uniforms, promotional apparel, screen printing, embroidery, t-shirt printing Caledon, t-shirt printing Toronto"
        canonicalUrl="/services/garment-printing"
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
                      {'T-Shirt Printing'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'& Garments'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <div className="whitespace-nowrap">
                      {'T-Shirt Printing'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                    <div className="whitespace-nowrap">
                      {'& Garments'.split('').map((char, index) => (
                        <span key={index} className="char inline-block">{char === ' ' ? '\u00A0' : char}</span>
                      ))}
                    </div>
                  </div>
                </h1>
              </div>
              
              <p ref={descriptionRef} className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: '#64748B' }}>
                Professional t-shirt printing and garment printing services in Caledon and Toronto. Custom hoodies, uniforms, promotional apparel with screen printing, embroidery, and digital printing options.
              </p>
              
              <div ref={ctaRef} className="flex justify-center">
                <button 
                  className="group text-white px-10 py-5 rounded-full font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" 
                  style={{ backgroundColor: '#0F172A' }} 
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} 
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                  onClick={() => document.querySelector('#garments-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <span>View Garment Options</span>
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
                Why Choose Our Garment Printing?
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Professional apparel printing services with unmatched quality and service
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

        {/* Garment Types Section */}
        <section id="garments-section" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Custom Garment Printing Services
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Professional apparel printing for businesses, events, and personal use
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {garmentTypes.map((garment, index) => (
                <div key={index} className="feature-card group">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 h-full" style={{ 
                    backgroundColor: '#F9FAFB',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>

                    <div className="p-8">
                      <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                        {garment.name}
                      </h3>
                      <p className="text-base leading-relaxed mb-6" style={{ color: '#64748B' }}>
                        {garment.description}
                      </p>
                      <ul className="space-y-2">
                        {garment.features.map((feature, featureIndex) => (
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

        {/* Printing Methods Section */}
        <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black mb-6" style={{ color: '#0F172A' }}>
                Printing Methods
              </h2>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
                Choose the perfect printing method for your custom apparel needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {printingMethods.map((method, index) => (
                <div key={index} className="feature-card">
                  <div className="p-8 rounded-3xl shadow-2xl h-full" style={{ 
                    backgroundColor: '#FFFFFF',
                    border: '2px solid rgba(226, 232, 240, 0.8)'
                  }}>
                    <h3 className="text-2xl font-black mb-4" style={{ color: '#0F172A' }}>
                      {method.name}
                    </h3>
                    <p className="text-base leading-relaxed mb-4" style={{ color: '#64748B' }}>
                      {method.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="font-bold text-sm mb-2" style={{ color: '#0F172A' }}>Best For:</h4>
                      <p className="text-sm" style={{ color: '#64748B' }}>{method.bestFor}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {method.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm" style={{ color: '#64748B' }}>{benefit}</span>
                        </div>
                      ))}
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
                Ready for Custom
                <br />
                <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Apparel Printing?</span>
              </h2>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Get professional t-shirt printing and garment printing in Caledon and Toronto. Contact us today for a free quote on your custom apparel project.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                <span>Get Free Quote</span>
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

export default GarmentPrinting
