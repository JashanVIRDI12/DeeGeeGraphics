import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Sticker, ShieldCheck, Shirt, Printer, Store, ArrowRight, Mail, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function Services() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)
  const servicesRef = useRef(null)

  useEffect(() => {
    // Set GSAP defaults for smoother animations
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    // Hero Animation Sequence
    const tl = gsap.timeline({ delay: 0.1 })
    
    // Animated title - 3D flip effect
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

    // Description with 3D depth
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

    // CTA button with smooth bounce
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

    // Services Section - Stacked Card Reveal Animation
    const serviceCards = gsap.utils.toArray('.service-card')
    
    if (serviceCards.length > 0) {
      serviceCards.forEach((card, index) => {
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Design",
      description: "Build a stunning, responsive, and user-friendly website tailored to your brand's needs.",
      image: "/webdesign.jpg"
    },
    {
      icon: <Sticker className="w-10 h-10" />,
      title: "Decals",
      description: "Custom commercial decals for vehicles, windows, and walls, enhancing visibility with vibrant, durable designs.",
      image: "/decals.jpg"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Safety Labels",
      description: "High-quality, long-lasting safety labels and vests ensuring compliance and workplace safety.",
      image: "/safetylabel.jpg"
    },
    {
      icon: <Shirt className="w-10 h-10" />,
      title: "Garment Printing",
      description: "Personalized apparel with high-quality printing for branding, events, or promotions.",
      image: "/garmentprinting.jpg"
    },
    {
      icon: <Printer className="w-10 h-10" />,
      title: "Printing Services",
      description: "Premium printing solutions for business cards, brochures, banners, and more.",
      image: "/printingservices.jpg"
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "Store Front Signs",
      description: "Eye-catching storefront signs that enhance your brand's presence and attract customers.",
      image: "/storefront.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ perspective: '1500px', backgroundColor: '#F9FAFB' }}>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title with Character Animation */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight" style={{ color: '#0F172A' }}>
                {/* Mobile: 3 lines, Desktop: 2 lines */}
                <div className="block md:hidden">
                  {/* Line 1: Bringing Your */}
                  <div className="whitespace-nowrap mb-2">
                    <span className="char inline-block">B</span>
                    <span className="char inline-block">r</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block">g</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block">g</span>
                    <span className="char inline-block mr-3"> </span>
                    <span className="char inline-block">Y</span>
                    <span className="char inline-block">o</span>
                    <span className="char inline-block">u</span>
                    <span className="char inline-block">r</span>
                  </div>
                  {/* Line 2: Vision to */}
                  <div className="whitespace-nowrap mb-2">
                    <span className="char inline-block">V</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">s</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">o</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block mr-3"> </span>
                    <span className="char inline-block">t</span>
                    <span className="char inline-block">o</span>
                  </div>
                  {/* Line 3: Print */}
                  <div className="whitespace-nowrap">
                    <span className="char inline-block">P</span>
                    <span className="char inline-block">r</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block">t</span>
                  </div>
                </div>
                
                {/* Desktop: 2 lines */}
                <div className="hidden md:block">
                  <div className="whitespace-nowrap">
                    <span className="char inline-block">B</span>
                    <span className="char inline-block">r</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block">g</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block">g</span>
                    <span className="char inline-block mr-4"> </span>
                    <span className="char inline-block">Y</span>
                    <span className="char inline-block">o</span>
                    <span className="char inline-block">u</span>
                    <span className="char inline-block">r</span>
                    <span className="char inline-block mr-4"> </span>
                    <span className="char inline-block">V</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">s</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">o</span>
                    <span className="char inline-block">n</span>
                  </div>
                  <div className="whitespace-nowrap">
                    <span className="char inline-block">t</span>
                    <span className="char inline-block">o</span>
                    <span className="char inline-block mr-4"> </span>
                    <span className="char inline-block">P</span>
                    <span className="char inline-block">r</span>
                    <span className="char inline-block">i</span>
                    <span className="char inline-block">n</span>
                    <span className="char inline-block">t</span>
                  </div>
                </div>
              </h1>
            </div>
            
            {/* Description */}
            <p ref={descriptionRef} className="text-lg md:text-xl mb-10 leading-relaxed max-w-4xl mx-auto" style={{ color: '#64748B' }}>
              We specialize in delivering top-notch design, printing, and branding services that bring your vision to life. Whether you need custom graphics, high-quality prints, or innovative branding solutions, we ensure precision, creativity, and excellence in every project. Let's craft something remarkable together!
            </p>
            
            {/* CTA Button */}
            <div ref={ctaRef} className="flex justify-center">
              <button 
                className="group text-white px-10 py-5 rounded-full font-black text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2" 
                style={{ backgroundColor: '#0F172A' }} 
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} 
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}
                onClick={() => document.querySelector('#services-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Check Our Services</span>
                <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Grid Layout with Images */}
      <section id="services-section" ref={servicesRef} className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#0F172A' }}>
              Our Services
            </h2>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#64748B' }}>
              Comprehensive creative solutions tailored to elevate your brand
            </p>
          </div>
          
          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 h-full" style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '2px solid rgba(226, 232, 240, 0.8)'
                }}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Number Badge on Image */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Icon */}
                    <div className="mb-6 inline-block p-4 rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)' }}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <h3 className="text-2xl md:text-3xl font-black mb-4 transition-colors duration-300" style={{ color: '#0F172A' }}>
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed transition-colors duration-300" style={{ color: '#64748B' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Main Content */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Bring Your
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Vision to Life?</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get in touch with us today and let's create something remarkable together with precision, creativity, and excellence.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
              <span>Contact Us Now</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <Link to="/projects" className="group border-2 px-12 py-6 rounded-full font-black text-xl text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white hover:text-black" style={{ borderColor: '#F9FAFB' }}>
              <span>View Our Work</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Contact Info */}
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
  )
}

export default Services
