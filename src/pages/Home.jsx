import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Globe, Sticker, ShieldCheck, Shirt, Printer, Store, Award, Target, Heart, Zap, Mail, Phone, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lottie from 'lottie-react'
import businessGrowthAnimation from '/Business Growth.json'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)
  const servicesRef = useRef(null)
  const whyUsRef = useRef(null)
  const featuredRef = useRef(null)

  useEffect(() => {
    // Set GSAP defaults for smoother animations
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    // Epic Hero Animation Sequence with 3D transforms
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

    // Subtitle with 3D wave effect
    tl.fromTo(subtitleRef.current.children,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.5,
        rotationY: 90,
        transformOrigin: '50% 50%',
        transformPerspective: 800
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'back.out(1.7)',
        force3D: true
      },
      '-=0.4'
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

    // CTA buttons with smooth bounce
    tl.fromTo(ctaRef.current.children,
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
        stagger: 0.08,
        ease: 'back.out(1.5)',
        force3D: true
      },
      '-=0.2'
    )

    // Floating elements - no animation

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

    // Why Us Section - Grid Animation
    gsap.utils.toArray('.why-card').forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50,
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
          delay: index * 0.15
        }
      )
    })

    // Featured Work - 3D Cube Reveal
    gsap.utils.toArray('.featured-item').forEach((item, index) => {
      gsap.fromTo(item,
        {
          scale: 0.3,
          opacity: 0,
          rotationY: 180,
          rotationX: 90,
          z: -400,
          transformOrigin: '50% 50%',
          transformPerspective: 1500
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 1,
          ease: 'back.out(1.5)',
          force3D: true,
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          delay: index * 0.15
        }
      )

      // 3D hover effect for featured items
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          scale: 1.05,
          rotationY: 10,
          rotationX: -10,
          z: 30,
          duration: 0.4,
          ease: 'power2.out',
          force3D: true
        })
      })

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          z: 0,
          duration: 0.4,
          ease: 'power2.out',
          force3D: true
        })
      })
    })

    // Section headers - 3D depth reveal
    gsap.utils.toArray('.section-header').forEach(header => {
      gsap.fromTo(header,
        {
          y: 60,
          opacity: 0,
          rotationX: 90,
          z: -150,
          transformOrigin: '50% 50%',
          transformPerspective: 1000
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          z: 0,
          duration: 0.8,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  const services = [
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Design",
      description: "Modern, responsive websites that captivate your audience and drive results.",
      image: "/webdesign.jpg"
    },
    {
      icon: <Sticker className="w-10 h-10" />,
      title: "Decals",
      description: "Custom decals and stickers for branding, promotions, and personal use.",
      image: "/decals.jpg"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Safety Labels",
      description: "Professional safety labels that meet industry standards and regulations.",
      image: "/safetylabel.jpg"
    },
    {
      icon: <Shirt className="w-10 h-10" />,
      title: "Garment Printing",
      description: "High-quality custom apparel printing for businesses and events.",
      image: "/garmentprinting.jpg"
    },
    {
      icon: <Printer className="w-10 h-10" />,
      title: "Printing Services",
      description: "Comprehensive printing solutions from business cards to large format.",
      image: "/printingservices.jpg"
    },
    {
      icon: <Store className="w-10 h-10" />,
      title: "Store Front Signs",
      description: "Eye-catching storefront signage that attracts customers and builds brand presence.",
      image: "/storefront.jpg"
    }
  ]

  const whyUs = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Expertise and Experience",
      description: "With years of industry experience, our team delivers creative and technical excellence in every project. We have helped businesses across sectors achieve outstanding results."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Tailored Solutions",
      description: "Every business is unique. We customize our services to suit your specific needs, ensuring your brand stands out with designs that align with your goals."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Customer Satisfaction",
      description: "We focus on delivering high-quality results and exceeding expectations, ensuring you're always happy with the final outcome and your project runs smoothly."
    }
  ]

  const featuredWorks = [
    { id: 1, image: 'sample1.png', title: 'Brand Identity Design' },
    { id: 2, image: 'sample3.png', title: 'Custom Printing Project' },
    { id: 3, image: 'sample2.png', title: 'Storefront Signage' }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1500px', backgroundColor: '#F9FAFB' }}>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#1E293B 1px, transparent 1px), linear-gradient(90deg, #1E293B 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full py-12 sm:py-16 md:py-20 pb-20 sm:pb-24 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Main Title with Character Animation */}
              <div ref={titleRef} className="mt-8 sm:mt-12 md:mt-16 mb-2 sm:mb-3">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight" style={{ color: '#0F172A', marginBottom: '-0.1em' }}>
                  <span className="char inline-block">D</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">G</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">e</span>
                </h1>
              </div>
              
              {/* Subtitle */}
              <div ref={subtitleRef} className="mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black leading-none">
                  <span className="inline-block" style={{ color: '#0F172A' }}>Graphics</span>
                </h2>
              </div>

              {/* Lottie Animation - Mobile Only */}
              <div className="lg:hidden relative flex items-center justify-center mb-8 sm:mb-10">
                {/* Blurry background effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(100, 116, 139, 0.4), rgba(15, 23, 42, 0.2))' }}></div>
                </div>
                
                <div className="relative w-full max-w-xs sm:max-w-sm mx-auto rounded-3xl overflow-hidden border-4 border-slate-800">
                  <Lottie 
                    animationData={businessGrowthAnimation} 
                    loop={true}
                    autoplay={true}
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              {/* Description */}
              <p ref={descriptionRef} className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: '#64748B' }}>
                Delivering high-quality design, printing, and branding solutions that are tailored to your unique business goals, ensuring your brand stands out with creativity, precision, and exceptional craftsmanship in every project.
              </p>
              
              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="group text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 justify-center" style={{ backgroundColor: '#0F172A' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}>
                  <span>Get Started</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
                
                <button className="group border-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 justify-center" style={{ borderColor: '#0F172A', color: '#0F172A', backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0F172A'; e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0F172A'; }}>
                  <span>View Our Work</span>
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Column - Lottie Animation - Desktop Only */}
            <div className="hidden lg:flex relative items-center justify-end">
              {/* Blurry background effect */}
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="w-96 h-96 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(100, 116, 139, 0.4), rgba(15, 23, 42, 0.2))' }}></div>
              </div>
              
              <div className="relative w-full max-w-lg ml-auto rounded-3xl overflow-hidden border-4 border-slate-800">
                <Lottie 
                  animationData={businessGrowthAnimation} 
                  loop={true}
                  autoplay={true}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll to Explore Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-xs sm:text-sm font-bold mb-2" style={{ color: '#64748B' }}>Scroll to Explore</span>
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: '#64748B' }} />
          </div>
        </div>
      </section>

      {/* Services Section - Stacked Cards Design */}
      <section ref={servicesRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 section-header">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6" style={{ color: '#0F172A' }}>
              Our Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#64748B' }}>
              Comprehensive creative solutions tailored to elevate your brand
            </p>
          </div>
          
          {/* Stacked Cards Container */}
          <div className="relative" style={{ minHeight: 'auto' }}>
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card mb-6 sm:mb-8 lg:sticky"
                style={{ 
                  top: `${80 + index * 40}px`,
                  zIndex: services.length - index
                }}
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02] cursor-pointer group" style={{ 
                  backgroundColor: '#FFFFFF', 
                  border: '1px solid rgba(226, 232, 240, 0.8)',
                  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.1), 0 0 0 1px rgba(15, 23, 42, 0.05)'
                }}>
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))' }}></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-6 sm:p-8 md:p-12 lg:p-16">
                    <div className="flex flex-col md:flex-row items-start gap-6 sm:gap-8">
                      {/* Icon */}
                      <div className="flex-shrink-0 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 icon-box" style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)' }}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <h3 className="service-title text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 transition-colors duration-300" style={{ color: '#0F172A' }}>
                          {service.title}
                        </h3>
                        <p className="service-desc text-base sm:text-lg leading-relaxed transition-colors duration-300" style={{ color: '#64748B' }}>
                          {service.description}
                        </p>
                      </div>

                      {/* Number Badge */}
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center font-black text-lg sm:text-xl md:text-2xl transition-all duration-500 number-badge" style={{ backgroundColor: '#E2E8F0', color: '#0F172A' }}>
                        {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Style */}
                  <style jsx>{`
                    .group:hover .icon-box {
                      background: linear-gradient(135deg, #FFFFFF, #F9FAFB) !important;
                    }
                    .group:hover .icon-box div {
                      color: #0F172A !important;
                    }
                    .group:hover .service-title {
                      color: #FFFFFF !important;
                    }
                    .group:hover .service-desc {
                      color: #E5E7EB !important;
                    }
                    .group:hover .number-badge {
                      background-color: #FFFFFF !important;
                      color: #0F172A !important;
                    }
                  `}</style>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Modern Minimal Design */}
      <section ref={whyUsRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-6">
              Why Choose Us?
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed text-gray-400">
              Three reasons that set us apart from the rest
            </p>
          </div>
          
          {/* Vertical List with Large Numbers */}
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {whyUs.map((item, index) => (
              <div 
                key={index} 
                className="why-card"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12 items-start">
                  {/* Large Number */}
                  <div className="flex-shrink-0">
                    <div className="text-7xl sm:text-8xl md:text-9xl font-black leading-none opacity-20 text-white">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2 md:pt-4">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Divider Line - except for last item */}
                {index < whyUs.length - 1 && (
                  <div className="mt-12 sm:mt-16 md:mt-20 h-px w-full" style={{ backgroundColor: 'rgba(249, 250, 251, 0.1)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={featuredRef} className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 section-header">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6" style={{ color: '#0F172A' }}>
              Featured Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#64748B' }}>
              Explore our recent projects and creative solutions
            </p>
          </div>
          
          {/* Featured Work Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredWorks.map((work) => (
              <div key={work.id} className="featured-item group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transition-all duration-500 md:hover:scale-105" style={{ 
                  border: '2px sm:border-3 solid rgba(30, 41, 59, 0.5)',
                  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)'
                }}>
                  <div className="aspect-square bg-white flex items-center justify-center">
                    <img 
                      src={`/${work.image}`} 
                      alt={work.title}
                      className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.parentElement.innerHTML = `<div class="flex flex-col items-center justify-center h-full"><div class="text-6xl font-black mb-4" style="color: #64748B">${work.id}</div><div class="text-gray-600 font-semibold">Sample ${work.id}</div></div>`
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6 md:p-8">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white">{work.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          {/* Main Content */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Amazing Together</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to elevate your brand? Get in touch with us today and let's bring your vision to life with creativity and precision.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
            <button className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105 w-full sm:w-auto" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
              <span>Start Your Project</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="group border-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white hover:text-black w-full sm:w-auto" style={{ borderColor: '#F9FAFB' }}>
              <span>View Our Work</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center pt-8 sm:pt-12 border-t" style={{ borderColor: 'rgba(249, 250, 251, 0.1)' }}>
            <a href="mailto:info@deegeegraphics.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">info@deegeegraphics.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
