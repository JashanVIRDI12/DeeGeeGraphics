import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ChevronDown } from 'lucide-react'
import Squares from '../components/Squares'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const descriptionRef = useRef(null)
  const galleryRef = useRef(null)

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

    // Gallery items with simple fade-in effect
    const galleryItems = gsap.utils.toArray('.gallery-item')
    
    galleryItems.forEach((item, index) => {
      // Simple fade-in animation
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          delay: (index % 3) * 0.05
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  const projects = [
    {
      id: 1,
      title: 'Creative Project 01',
      category: 'Design',
      image: '/087488bd-f505-49d4-84d3-7c66c63692aa.JPG',
      description: 'Innovative design solutions'
    },
    {
      id: 2,
      title: 'Creative Project 02',
      category: 'Branding',
      image: '/1329f8c8-9d6d-4305-ae9d-684408ebf352.JPG',
      description: 'Brand identity excellence'
    },
    {
      id: 3,
      title: 'Creative Project 03',
      category: 'Graphics',
      image: '/34d5f942-1423-402a-bb26-4d8966051b5f.JPG',
      description: 'Visual storytelling mastery'
    },
    {
      id: 4,
      title: 'Creative Project 04',
      category: 'Print',
      image: '/3aee8b8e-2e10-41b4-ab07-84688decf3ce.JPG',
      description: 'Premium print solutions'
    },
    {
      id: 5,
      title: 'Creative Project 05',
      category: 'Design',
      image: '/90963de1-577d-49a4-9954-786ac219b2a9.JPG',
      description: 'Modern design approach'
    },
    {
      id: 6,
      title: 'Creative Project 06',
      category: 'Branding',
      image: '/a4b4e1be-01a5-471f-80a2-19944d201879.JPG',
      description: 'Strategic brand development'
    },
    {
      id: 7,
      title: 'Creative Project 07',
      category: 'Graphics',
      image: '/a58d3428-22e2-4a21-a93d-5562fb86fa5c.JPG',
      description: 'Compelling visual content'
    },
    {
      id: 8,
      title: 'Creative Project 08',
      category: 'Print',
      image: '/a6ce223e-e284-407d-b94b-8e4f99ebf07e.JPG',
      description: 'High-quality printing'
    },
    {
      id: 9,
      title: 'Creative Project 09',
      category: 'Design',
      image: '/b0471df1-816a-49ba-80fd-e038bc0da482.JPG',
      description: 'Creative excellence'
    },
    {
      id: 10,
      title: 'Creative Project 10',
      category: 'Branding',
      image: '/bb8bf0bb-0be6-4679-a2b0-47edfc5bde47.JPG',
      description: 'Brand transformation'
    },
    {
      id: 11,
      title: 'Creative Project 11',
      category: 'Graphics',
      image: '/e1a8491d-dd7b-4544-8e6b-572b6db0aab4.JPG',
      description: 'Artistic visual design'
    },
    {
      id: 12,
      title: 'Creative Project 12',
      category: 'Print',
      image: '/f16485df-fa2f-4ea4-be41-6bb127ebb662.JPG',
      description: 'Professional print work'
    },
    {
      id: 13,
      title: 'Creative Project 13',
      category: 'Design',
      image: '/sample1.png',
      description: 'Innovative design solutions'
    },
    {
      id: 14,
      title: 'Creative Project 14',
      category: 'Branding',
      image: '/sample2.png',
      description: 'Brand identity excellence'
    },
    {
      id: 15,
      title: 'Creative Project 15',
      category: 'Graphics',
      image: '/sample3.png',
      description: 'Visual storytelling mastery'
    },
    {
      id: 16,
      title: 'Creative Project 16',
      category: 'Print',
      image: '/sample4.png',
      description: 'Premium print solutions'
    },
    {
      id: 17,
      title: 'Creative Project 17',
      category: 'Design',
      image: '/sample5.png',
      description: 'Modern design approach'
    },
    {
      id: 18,
      title: 'Creative Project 18',
      category: 'Branding',
      image: '/sample6.png',
      description: 'Strategic brand development'
    },
    {
      id: 19,
      title: 'Creative Project 19',
      category: 'Graphics',
      image: '/sample7.png',
      description: 'Compelling visual content'
    },
    {
      id: 20,
      title: 'Creative Project 20',
      category: 'Print',
      image: '/sample8.png',
      description: 'High-quality printing'
    },
    {
      id: 21,
      title: 'Creative Project 21',
      category: 'Design',
      image: '/sample9.png',
      description: 'Creative excellence'
    },
    {
      id: 22,
      title: 'Creative Project 22',
      category: 'Branding',
      image: '/sample10.png',
      description: 'Brand transformation'
    },
    {
      id: 23,
      title: 'Creative Project 23',
      category: 'Graphics',
      image: '/sample11.png',
      description: 'Artistic visual design'
    },
    {
      id: 24,
      title: 'Creative Project 24',
      category: 'Print',
      image: '/sample12.png',
      description: 'Professional print work'
    },
    {
      id: 25,
      title: 'Creative Project 25',
      category: 'Design',
      image: '/sample13.png',
      description: 'Innovative concepts'
    },
    {
      id: 26,
      title: 'Creative Project 26',
      category: 'Branding',
      image: '/sample14.png',
      description: 'Brand identity design'
    },
    {
      id: 27,
      title: 'Creative Project 27',
      category: 'Graphics',
      image: '/sample15.png',
      description: 'Visual communication'
    },
    {
      id: 28,
      title: 'Creative Project 28',
      category: 'Print',
      image: '/sample16.png',
      description: 'Quality print materials'
    },
    {
      id: 29,
      title: 'Creative Project 29',
      category: 'Design',
      image: '/sample17.png',
      description: 'Contemporary design'
    },
    {
      id: 30,
      title: 'Creative Project 30',
      category: 'Branding',
      image: '/sample18.png',
      description: 'Brand strategy'
    },
    {
      id: 31,
      title: 'Creative Project 31',
      category: 'Graphics',
      image: '/sample19.png',
      description: 'Graphic excellence'
    },
    {
      id: 32,
      title: 'Creative Project 32',
      category: 'Print',
      image: '/sample20.png',
      description: 'Print perfection'
    },
    {
      id: 33,
      title: 'Creative Project 33',
      category: 'Design',
      image: '/sample21.png',
      description: 'Design innovation'
    },
    {
      id: 34,
      title: 'Creative Project 34',
      category: 'Branding',
      image: '/sample22.png',
      description: 'Complete branding'
    },
    {
      id: 35,
      title: 'Creative Project 35',
      category: 'Print',
      image: '/11b218b6-0c3f-47ef-81fe-c93fc314ca3a.JPG',
      description: 'Professional printing work'
    },
    {
      id: 36,
      title: 'Creative Project 36',
      category: 'Design',
      image: '/29045466-a67c-4a71-9362-18b8a307bf26.JPG',
      description: 'Creative design solutions'
    },
    {
      id: 37,
      title: 'Creative Project 37',
      category: 'Graphics',
      image: '/482b1329-82b6-4fe9-a29b-c9032552a044.JPG',
      description: 'Visual graphics excellence'
    },
    {
      id: 38,
      title: 'Creative Project 38',
      category: 'Branding',
      image: '/48edeb86-c45f-4155-ab13-d80b67a64a16.JPG',
      description: 'Brand identity development'
    },
    {
      id: 39,
      title: 'Creative Project 39',
      category: 'Print',
      image: '/5584dd67-0b68-402f-b11f-c5dd3e67b50d.JPG',
      description: 'High-quality print materials'
    },
    {
      id: 40,
      title: 'Creative Project 40',
      category: 'Design',
      image: '/8bc04c4e-0735-4bd0-b298-bfd265ab1c17.JPG',
      description: 'Innovative design concepts'
    },
    {
      id: 41,
      title: 'Creative Project 41',
      category: 'Graphics',
      image: '/a16a1551-ab0b-4b26-aeda-b3fcf28b8177.JPG',
      description: 'Compelling visual content'
    },
    {
      id: 42,
      title: 'Creative Project 42',
      category: 'Branding',
      image: '/a251dbba-fd10-40e3-b16e-3b02f57e0d8f.JPG',
      description: 'Strategic brand solutions'
    },
    {
      id: 43,
      title: 'Creative Project 43',
      category: 'Print',
      image: '/a5d51d2c-d505-40c3-90fd-ace42e19c90f.JPG',
      description: 'Premium printing services'
    },
    {
      id: 44,
      title: 'Creative Project 44',
      category: 'Design',
      image: '/d042b0a9-b32c-493b-ba99-b632b8722317.JPG',
      description: 'Modern design approach'
    },
    {
      id: 45,
      title: 'Creative Project 45',
      category: 'Graphics',
      image: '/dab7ec5a-c4fa-4a10-a431-3f528e81e117.JPG',
      description: 'Creative visual design'
    },
    {
      id: 46,
      title: 'Creative Project 46',
      category: 'Branding',
      image: '/dad61946-2a07-49ba-a36e-6aa175248a9e.JPG',
      description: 'Professional branding work'
    },
    {
      id: 47,
      title: 'Creative Project 47',
      category: 'Print',
      image: '/ea869ac8-d5b5-492f-8907-9bed57efe797.JPG',
      description: 'Quality print solutions'
    }
  ]

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DeeGee Graphics - Our Projects Portfolio",
    "description": "Explore our portfolio of printing and design projects including brand identities, custom printing, storefront signage, decals, safety labels, garment printing, and website design projects serving Caledon, Toronto, and Ontario.",
    "url": "https://deegeegraphics.com/projects",
    "provider": {
      "@type": "LocalBusiness",
      "name": "DeeGee Graphics",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "12545 Coleraine Drive, Unit 9",
        "addressLocality": "Caledon",
        "addressRegion": "ON",
        "postalCode": "L7E 3B5",
        "addressCountry": "CA"
      }
    }
  }

  return (
    <>
      <SEO 
        title="Our Projects"
        description="Explore DeeGee Graphics portfolio showcasing our best printing and design work serving Caledon, Toronto, and Ontario. View 30+ completed projects in printing services, decals, safety labels, garment printing, storefront signs, and website design."
        keywords="printing portfolio, design projects, printing examples, custom printing work, DeeGee Graphics portfolio, Caledon printing projects, Toronto printing portfolio, Ontario design work"
        canonicalUrl="/projects"
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
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight">
                <div className="mb-4 text-white">
                  <span className="char inline-block">O</span>
                  <span className="char inline-block">u</span>
                  <span className="char inline-block">r</span>
                  <span className="char inline-block mr-4"> </span>
                  <span className="char inline-block">C</span>
                  <span className="char inline-block">r</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">a</span>
                  <span className="char inline-block">t</span>
                  <span className="char inline-block">i</span>
                  <span className="char inline-block">v</span>
                  <span className="char inline-block">e</span>
                </div>
                <div className="text-gray-300">
                  <span className="char inline-block">P</span>
                  <span className="char inline-block">o</span>
                  <span className="char inline-block">r</span>
                  <span className="char inline-block">t</span>
                  <span className="char inline-block">f</span>
                  <span className="char inline-block">o</span>
                  <span className="char inline-block">l</span>
                  <span className="char inline-block">i</span>
                  <span className="char inline-block">o</span>
                </div>
              </h1>
            </div>
            
            {/* Description */}
            <div>
              <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-bold text-white mb-4">
                A Showcase of Creativity and Precision
              </h2>
              <p ref={descriptionRef} className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-400">
                Discover how our expert team brings ideas to life with visually stunning designs, flawless prints, and standout branding solutions that leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-400 font-semibold mb-2">Scroll to Explore</span>
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Grid Layout - All Same Size */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="gallery-item group"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
                  {/* Image - Fixed Height */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`Project ${project.id}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Subtle Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Number Badge */}
                    <div className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center font-black text-lg transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
                      {project.id}
                    </div>
                  </div>
                </div>
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
            direction='left'
            borderColor='#F9FAFB'
            hoverFillColor='#64748B'
          />
        </div>

        <div className="max-w-5xl mx-auto text-center px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
              Ready to Start
              <br />
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Your Project?</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Let's collaborate and create something extraordinary together. Get in touch with us today!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact" className="group px-12 py-6 rounded-full font-black text-xl transition-all duration-300 flex items-center space-x-3 shadow-2xl hover:shadow-[0_20px_60px_rgba(249,250,251,0.3)] transform hover:scale-105" style={{ backgroundColor: '#F9FAFB', color: '#0F172A' }}>
              <span>Get Started</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link to="/services" className="group border-2 px-12 py-6 rounded-full font-black text-xl text-white transition-all duration-300 flex items-center space-x-3 hover:bg-white hover:text-black" style={{ borderColor: '#F9FAFB' }}>
              <span>Our Services</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Projects
