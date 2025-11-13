import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Globe, Sticker, ShieldCheck, Shirt, Printer, Store, Award, Target, Heart, Zap, Mail, Phone, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Squares from '../components/Squares'
import SEO from '../components/SEO'
import { allReviewsSchema } from '../data/reviews'
import { faqSchema } from '../data/faq'

gsap.registerPlugin(ScrollTrigger)

function Home() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const titleMobileRef = useRef(null)
  const subtitleMobileRef = useRef(null)
  const descriptionRef = useRef(null)
  const ctaRef = useRef(null)
  const servicesRef = useRef(null)
  const whyUsRef = useRef(null)
  const featuredRef = useRef(null)
  const lottieRef = useRef(null)
  const lottieDesktopRef = useRef(null)

  useEffect(() => {
    // Set GSAP defaults for smoother animations
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    // Epic Hero Animation Sequence with 3D transforms
    const tl = gsap.timeline({ delay: 0.1 })
    
    // Animated title - 3D flip effect (Desktop)
    const titleChars = titleRef.current?.querySelectorAll('.char')
    if (titleChars && titleChars.length > 0) {
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

      // Subtitle with 3D wave effect (Desktop)
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
    }

    // Animated title - Mobile (appears after Lottie)
    const titleMobileChars = titleMobileRef.current?.querySelectorAll('.char-mobile')
    if (titleMobileChars && titleMobileChars.length > 0) {
      tl.fromTo(titleMobileChars,
        { 
          y: 100, 
          opacity: 0, 
          rotationX: -90,
          z: -200,
          transformOrigin: '50% 50%',
          transformPerspective: 1000
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          z: 0,
          duration: 0.8,
          stagger: 0.04,
          ease: 'back.out(1.5)',
          force3D: true
        },
        '-=0.6'
      )

      // Subtitle - Mobile
      tl.fromTo(subtitleMobileRef.current.children,
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
    }

    // Description with 3D depth (Desktop only)
    if (descriptionRef.current) {
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
      '-=0.5'
      )
    }

    // CTA buttons - Simple smooth fade-in
    tl.fromTo(ctaRef.current.children,
      { 
        y: 30, 
        opacity: 0
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      },
      '-=0.3'
    )

    // Info div animations - Mobile
    if (lottieRef.current) {
      const mobileCards = lottieRef.current.querySelectorAll('.info-stat')
      tl.fromTo(lottieRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 30
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.3)'
        },
        '-=0.4'
      )
      
      // Stagger animation for each stat
      gsap.fromTo(mobileCards,
        {
          opacity: 0,
          scale: 0.8,
          y: 20
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.5)',
          delay: 0.3
        }
      )
    }

    // Info div animations - Desktop
    if (lottieDesktopRef.current) {
      const desktopCards = lottieDesktopRef.current.querySelectorAll('.info-item')
      tl.fromTo(lottieDesktopRef.current,
        {
          opacity: 0,
          x: 50,
          scale: 0.95
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out'
        },
        '-=0.5'
      )
      
      // Stagger animation for each item
      gsap.fromTo(desktopCards,
        {
          opacity: 0,
          x: 30,
          rotationY: -15
        },
        {
          opacity: 1,
          x: 0,
          rotationY: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'back.out(1.3)',
          delay: 0.4
        }
      )
      
      // Continuous subtle animation for icons
      const icons = lottieDesktopRef.current.querySelectorAll('.info-icon')
      icons.forEach((icon, index) => {
        gsap.to(icon, {
          y: -5,
          duration: 1.5 + (index * 0.2),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: index * 0.3
        })
      })
    }

    // Floating elements - no animation

    // Services Section - Stacked Card Reveal Animation
    const serviceCards = gsap.utils.toArray('.service-card')
    
    if (serviceCards.length > 0) {
      // Set initial state immediately to prevent flash
      gsap.set(serviceCards, {
        opacity: 0,
        y: 100,
        scale: 0.9
      })
      
      serviceCards.forEach((card, index) => {
        gsap.to(card,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              end: 'top 20%',
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
      icon: <Printer className="w-10 h-10" />,
      title: "Printing Services",
      description: "Comprehensive printing solutions from business cards to large format.",
      image: "/printingservices.jpg"
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
      icon: <Store className="w-10 h-10" />,
      title: "Store Front Signs",
      description: "Eye-catching storefront signage that attracts customers and builds brand presence.",
      image: "/storefront.jpg"
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Website Design",
      description: "Modern, responsive websites that captivate your audience and drive results.",
      image: "/webdesign.jpg"
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

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "DeeGee Graphics",
      "image": "https://deegeegraphics.com/og-image.jpg",
      "description": "Professional printing, design, and branding solutions serving Caledon, Toronto, and all of Ontario. Specializing in printing services, decals, safety labels, garment printing, storefront signs, and website design.",
      "url": "https://deegeegraphics.com",
      "telephone": "+16475497017",
      "email": "info@deegeegraphics.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12545 Coleraine Drive, Unit 9",
        "addressLocality": "Caledon",
        "addressRegion": "ON",
        "postalCode": "L7E 3B5",
        "addressCountry": "CA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.8847,
        "longitude": -79.8638
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Caledon"
        },
        {
          "@type": "City",
          "name": "Toronto"
        },
        {
          "@type": "State",
          "name": "Ontario"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": allReviewsSchema,
      "sameAs": [
        "https://www.instagram.com/deegeegraphics/",
        "https://share.google/T54us6MDjM8G3FadE"
      ]
    },
    faqSchema
  ]

  return (
    <>
      <SEO 
        title="Home"
        description="DeeGee Graphics offers professional printing, design, and branding solutions serving Caledon, Toronto, and all of Ontario. Specializing in printing services, decals, safety labels, garment printing, storefront signs, and website design. Open 7 days a week, 9 AM - 5 PM. ⭐ 4.9/5 rating with 47+ reviews."
        keywords="printing services Caledon, printing services Toronto, graphic design Ontario, decals printing, safety labels, garment printing, storefront signs, website design, branding solutions, custom printing, Toronto printing company, Ontario printing services"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ perspective: '1500px', backgroundColor: '#F9FAFB' }}>
        {/* Animated Squares Background */}
        <div className="absolute inset-0 z-0 opacity-[0.15]">
          <Squares 
            speed={0.3}
            squareSize={50}
            direction='diagonal'
            borderColor='#1E293B'
            hoverFillColor='#0F172A'
          />
        </div>
        
        <div className="relative z-10 px-6 sm:px-8 md:px-10 lg:px-12 max-w-7xl mx-auto w-full pt-24 sm:pt-28 md:pt-32 pb-20 sm:pb-24 md:pb-28">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Main Title with Character Animation - Desktop Only */}
              <div ref={titleRef} className="hidden lg:block mb-2 sm:mb-3">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight" style={{ marginBottom: '-0.1em', color: '#0F172A' }}>
                  <span className="char inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>D</span>
                  <span className="char inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                  <span className="char inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                  <span className="char inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>G</span>
                  <span className="char inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                  <span className="char inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                </h1>
              </div>
              
              {/* Subtitle - Desktop Only */}
              <div ref={subtitleRef} className="hidden lg:block mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black leading-none">
                  <span className="inline-block bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', color: '#0F172A' }}>Graphics</span>
                </h2>
              </div>

              {/* Main Title with Character Animation - Mobile Only (Below SVG) */}
              <div ref={titleMobileRef} className="lg:hidden mb-2 sm:mb-3">
                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight" style={{ marginBottom: '-0.1em', color: '#0F172A' }}>
                  <span className="char-mobile inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>D</span>
                  <span className="char-mobile inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                  <span className="char-mobile inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                  <span className="char-mobile inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>G</span>
                  <span className="char-mobile inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                  <span className="char-mobile inline-block bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>e</span>
                </h1>
              </div>
              
              {/* Subtitle - Mobile Only (Below SVG) */}
              <div ref={subtitleMobileRef} className="lg:hidden mb-6 sm:mb-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-none">
                  <span className="inline-block bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text', color: '#0F172A' }}>Graphics</span>
                </h2>
              </div>

              {/* Info Card - Mobile Only (Below Graphics) */}
              <div ref={lottieRef} className="lg:hidden relative mb-8 sm:mb-10 px-2">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-xl" style={{ border: '2px solid rgba(226, 232, 240, 0.8)' }}>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="info-stat text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>100+</div>
                      <div className="text-xs sm:text-sm font-bold leading-tight" style={{ color: '#64748B' }}>Projects Done</div>
                    </div>
                    <div className="info-stat text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>100%</div>
                      <div className="text-xs sm:text-sm font-bold leading-tight" style={{ color: '#64748B' }}>Satisfaction</div>
                    </div>
                    <div className="info-stat text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>Fast</div>
                      <div className="text-xs sm:text-sm font-bold leading-tight" style={{ color: '#64748B' }}>Delivery</div>
                    </div>
                    <div className="info-stat text-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                      <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-1 sm:mb-2 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>7 Days</div>
                      <div className="text-xs sm:text-sm font-bold leading-tight" style={{ color: '#64748B' }}>Support</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Description - Desktop Only */}
              <p ref={descriptionRef} className="hidden lg:block text-base sm:text-lg md:text-xl mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0" style={{ color: '#64748B' }}>
                Delivering high-quality design, printing, and branding solutions that are tailored to your unique business goals, ensuring your brand stands out with creativity, precision, and exceptional craftsmanship in every project.
              </p>
              
              {/* CTA Buttons */}
              <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link to="/services" className="group text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 justify-center" style={{ backgroundColor: '#0F172A' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1E293B'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0F172A'}>
                  <span>Our Services</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <Link to="/projects" className="group border-3 px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-full font-black text-base sm:text-lg transition-all duration-300 flex items-center space-x-2 justify-center" style={{ borderColor: '#0F172A', color: '#0F172A', backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0F172A'; e.currentTarget.style.color = '#FFFFFF'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#0F172A'; }}>
                  <span>View Our Work</span>
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column - Info Card - Desktop Only */}
            <div ref={lottieDesktopRef} className="hidden lg:flex relative items-center justify-end">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl w-full max-w-md" style={{ border: '2px solid rgba(226, 232, 240, 0.8)' }}>
                <div className="space-y-6">
                  <div className="info-item flex items-center space-x-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                    <div className="info-icon flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: '#0F172A' }}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-black mb-1 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>100+</div>
                      <div className="text-base font-bold" style={{ color: '#64748B' }}>Projects Completed</div>
                    </div>
                  </div>
                  <div className="info-item flex items-center space-x-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                    <div className="info-icon flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: '#0F172A' }}>
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-black mb-1 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>100%</div>
                      <div className="text-base font-bold" style={{ color: '#64748B' }}>Client Satisfaction</div>
                    </div>
                  </div>
                  <div className="info-item flex items-center space-x-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                    <div className="info-icon flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: '#0F172A' }}>
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-black mb-1 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>Fast</div>
                      <div className="text-base font-bold" style={{ color: '#64748B' }}>Delivery Time</div>
                    </div>
                  </div>
                  <div className="info-item flex items-center space-x-5 p-5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105" style={{ backgroundColor: 'rgba(15, 23, 42, 0.03)' }}>
                    <div className="info-icon flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: '#0F172A' }}>
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-4xl font-black mb-1 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text" style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>7 Days</div>
                      <div className="text-base font-bold" style={{ color: '#64748B' }}>Weekly Support</div>
                    </div>
                  </div>
                </div>
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
      <section ref={servicesRef} className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
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
                  zIndex: services.length - index,
                  opacity: 0
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
      <section ref={whyUsRef} className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12">
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
      <section ref={featuredRef} className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
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
      <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 md:px-10 lg:px-12 relative z-10">
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
            <Link to="/contact" className="group px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105 w-full sm:w-auto" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
              <span>Start Your Project</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link to="/projects" className="group border-2 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-full font-black text-base sm:text-lg md:text-xl text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white hover:text-black w-full sm:w-auto" style={{ borderColor: '#F9FAFB' }}>
              <span>View Our Work</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center items-center pt-8 sm:pt-12 border-t" style={{ borderColor: 'rgba(249, 250, 251, 0.1)' }}>
            <a href="mailto:info@deegeegraphics.com" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">info@deegeegraphics.com</span>
            </a>
            <a href="tel:+16475497017" className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">(647) 549-7017</span>
            </a>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Home
