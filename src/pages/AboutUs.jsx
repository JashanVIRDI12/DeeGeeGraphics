import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Users, Target, Heart, Award, Lightbulb, Rocket, ArrowRight, CheckCircle } from 'lucide-react'
import Squares from '../components/Squares'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function AboutUs() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const storyRef = useRef(null)

  useEffect(() => {
    // Set GSAP defaults
    gsap.defaults({
      ease: 'power2.out',
      duration: 0.6
    })

    // Hero Animation
    const tl = gsap.timeline({ delay: 0.1 })
    
    // Title animation
    const titleChars = titleRef.current.querySelectorAll('.char')
    tl.fromTo(titleChars,
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
      }
    )

    // Subtitle animation with 3D effect
    tl.fromTo(subtitleRef.current,
      { 
        y: 50, 
        opacity: 0,
        scale: 0.8,
        rotationX: 45,
        z: -100,
        transformOrigin: '50% 50%',
        transformPerspective: 1000
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        rotationX: 0,
        z: 0,
        duration: 0.7,
        ease: 'back.out(1.5)',
        force3D: true
      },
      '-=0.4'
    )

    // Description animation with depth
    tl.fromTo(descriptionRef.current,
      { 
        y: 40, 
        opacity: 0,
        rotationX: 30,
        z: -80,
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

    // Value cards animation
    const valueCards = gsap.utils.toArray('.value-card')
    valueCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          y: 60,
          rotationX: -15,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          delay: (index % 3) * 0.15
        }
      )
    })

    // Stats animation
    const stats = gsap.utils.toArray('.stat-item')
    stats.forEach((stat, index) => {
      gsap.fromTo(stat,
        {
          opacity: 0,
          scale: 0.5
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          },
          delay: index * 0.1
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new creative possibilities',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every detail of our work',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with clients to achieve shared success',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on the quality of our deliverables',
    },
    {
      icon: Rocket,
      title: 'Growth',
      description: 'We help our clients grow and achieve their business goals',
    },
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DeeGee Graphics",
    "description": "Learn about DeeGee Graphics, a professional printing and design company serving Caledon, Toronto, and Ontario. Discover our mission, values, and commitment to quality.",
    "url": "https://deegeegraphics.com/about",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "DeeGee Graphics",
      "description": "Professional printing and design services serving Caledon, Toronto, and all of Ontario",
      "telephone": "+16475497017",
      "email": "info@deegeegraphics.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12545 Coleraine Drive, Unit 9",
        "addressLocality": "Caledon",
        "addressRegion": "ON",
        "postalCode": "L7E 3B5",
        "addressCountry": "CA"
      },
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    }
  }

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about DeeGee Graphics, your trusted partner for professional printing and design services serving Caledon, Toronto, and Ontario. Discover our story, mission, values, and commitment to excellence. Open 7 days a week."
        keywords="about DeeGee Graphics, printing company Caledon, printing company Toronto, design company Ontario, our story, printing services mission, Caledon business, Ontario printing company"
        canonicalUrl="/about"
        structuredData={structuredData}
      />
      <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden pt-32 pb-20" style={{ perspective: '1500px', backgroundColor: '#0F172A' }}>
        {/* Animated Squares Background */}
        <div className="absolute inset-0 z-0 opacity-[0.08]">
          <Squares 
            speed={0.3}
            squareSize={50}
            direction='diagonal'
            borderColor='#F9FAFB'
            hoverFillColor='#64748B'
          />
        </div>
        
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white">
                <div className="mb-4">
                  <span className="char inline-block">A</span>
                  <span className="char inline-block">b</span>
                  <span className="char inline-block">o</span>
                  <span className="char inline-block">u</span>
                  <span className="char inline-block">t</span>
                  <span className="char inline-block mr-4"> </span>
                  <span className="char inline-block">U</span>
                  <span className="char inline-block">s</span>
                </div>
              </h1>
            </div>
            
            {/* Description */}
            <div>
              <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-bold text-white mb-4">
                Bringing Ideas to Life, One Design at a Time
              </h2>
              <p ref={descriptionRef} className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-400">
                At Dee Gee Graphics, we craft eye-catching prints and signage that elevate your business presence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div ref={storyRef}>
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#0F172A' }}>
                Who We Are
              </h2>
              <div className="space-y-6 text-lg leading-relaxed" style={{ color: '#64748B' }}>
                <p>
                  At Dee Gee Graphics, we are committed to delivering top-quality printing, branding, and signage solutions across Ontario. With a strong passion for creativity and precision, we have built a reputation for providing businesses with eye-catching, durable, and professional prints that make an impact.
                </p>
                <p>
                  From custom signage and storefront displays to garment printing, decals, and safety labels, we offer a wide range of services tailored to meet your unique branding needs. Whether you're a small business looking to enhance your visibility or a large enterprise in need of consistent, high-quality prints, we ensure every project is handled with care, expertise, and attention to detail.
                </p>
                <p>
                  What sets us apart is our customer-first approach—we work closely with clients to understand their vision, offering personalized solutions that align with their business goals. Using state-of-the-art technology and high-grade materials, we guarantee precision, durability, and stunning designs that leave a lasting impression.
                </p>
                <p>
                  Proudly serving businesses across Ontario, Dee Gee Graphics is your go-to partner for all things printing. Let's bring your ideas to life with creativity, quality, and reliability. Your brand deserves to stand out—let's make it happen!
                </p>
              </div>

              {/* Key Points */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0F172A' }} />
                  <span className="text-lg" style={{ color: '#64748B' }}>Customer-first approach with personalized solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0F172A' }} />
                  <span className="text-lg" style={{ color: '#64748B' }}>State-of-the-art technology and high-grade materials</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0F172A' }} />
                  <span className="text-lg" style={{ color: '#64748B' }}>Proudly serving businesses across Ontario</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/office.jpg"
                  alt="Our workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">24/7</div>
              <div className="text-lg text-gray-400 font-semibold">Customer Support</div>
            </div>
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">100%</div>
              <div className="text-lg text-gray-400 font-semibold">Quality Guaranteed</div>
            </div>
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">Fast</div>
              <div className="text-lg text-gray-400 font-semibold">Turnaround Time</div>
            </div>
            <div className="stat-item flex flex-col items-center justify-center">
              <div className="text-5xl md:text-6xl font-black text-white mb-3">Premium</div>
              <div className="text-lg text-gray-400 font-semibold">Materials</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: '#0F172A' }}>
              Our Core Values
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#64748B' }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card group relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl p-8"
                style={{ backgroundColor: '#FFFFFF', border: '2px solid rgba(226, 232, 240, 0.8)' }}
              >
                <div className="mb-6 inline-block p-4 rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6" style={{ background: 'linear-gradient(135deg, #0F172A, #1E293B)' }}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3" style={{ color: '#0F172A' }}>{value.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden" style={{ backgroundColor: '#0F172A' }}>
        {/* Animated Squares Background */}
        <div className="absolute inset-0 opacity-[0.08]">
          <Squares 
            speed={0.2}
            squareSize={50}
            direction='up'
            borderColor='#F9FAFB'
            hoverFillColor='#64748B'
          />
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Let's Work
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Together</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? Get in touch with us today and let's create something amazing together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
              <span>Contact Us</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link to="/projects" className="group border-2 px-12 py-6 rounded-full font-black text-xl text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white hover:text-black" style={{ borderColor: '#F9FAFB' }}>
              <span>View Our Work</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default AboutUs
