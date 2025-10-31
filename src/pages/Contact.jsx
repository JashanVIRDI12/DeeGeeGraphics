import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

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

    // Bubble container animation
    gsap.fromTo('.contact-bubble',
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.contact-bubble',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )

    // Info cards animation
    const infoCards = gsap.utils.toArray('.info-card')
    infoCards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          opacity: 0,
          scale: 0.8
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.contact-bubble',
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          delay: 0.3 + (index * 0.1)
        }
      )
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@deegeegraphics.com',
      link: 'mailto:info@deegeegraphics.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '(647) 549-7017',
      link: 'tel:+16475497017',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '98 Healy Rd, Bolton, ON',
      link: 'https://maps.google.com/?q=98+Healy+Rd,+Bolton,+ON',
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative flex items-center justify-center overflow-hidden pt-32 pb-20" style={{ perspective: '1500px', backgroundColor: '#0F172A' }}>
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#F9FAFB 1px, transparent 1px), linear-gradient(90deg, #F9FAFB 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full py-20">
          <div className="text-center max-w-5xl mx-auto">
            {/* Main Title */}
            <div ref={titleRef} className="mb-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white">
                <div className="mb-4">
                  <span className="char inline-block">G</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">t</span>
                  <span className="char inline-block mr-4"> </span>
                  <span className="char inline-block">I</span>
                  <span className="char inline-block">n</span>
                </div>
                <div className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">
                  <span className="char inline-block">T</span>
                  <span className="char inline-block">o</span>
                  <span className="char inline-block">u</span>
                  <span className="char inline-block">c</span>
                  <span className="char inline-block">h</span>
                </div>
              </h1>
            </div>
            
            {/* Description */}
            <p ref={descriptionRef} className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-gray-400">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          {/* Contact Form */}
          <div ref={formRef} className="mb-16">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12" style={{ border: '2px solid rgba(226, 232, 240, 0.8)' }}>
              <h2 className="text-3xl md:text-4xl font-black mb-6" style={{ color: '#0F172A' }}>Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 rounded-xl text-white font-semibold" style={{ backgroundColor: '#10B981' }}>
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl transition-all outline-none font-medium"
                    style={{ border: '2px solid #E2E8F0', color: '#0F172A' }}
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl transition-all outline-none font-medium"
                      style={{ border: '2px solid #E2E8F0', color: '#0F172A' }}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 rounded-xl transition-all outline-none font-medium"
                      style={{ border: '2px solid #E2E8F0', color: '#0F172A' }}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 rounded-xl transition-all outline-none font-medium"
                    style={{ border: '2px solid #E2E8F0', color: '#0F172A' }}
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold mb-2" style={{ color: '#0F172A' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-4 rounded-xl transition-all outline-none resize-none font-medium"
                    style={{ border: '2px solid #E2E8F0', color: '#0F172A' }}
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white font-black py-5 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg"
                  style={{ backgroundColor: '#0F172A' }}
                >
                  Send Message
                  <Send className="ml-2 w-6 h-6" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info - Simple Bubble */}
          <div className="contact-bubble mt-16 bg-white rounded-3xl md:rounded-full shadow-2xl py-6 px-6 md:py-8 md:px-12" style={{ border: '2px solid rgba(226, 232, 240, 0.8)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="info-card flex items-center justify-center md:justify-start space-x-4 transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 rounded-xl" style={{ backgroundColor: '#0F172A' }}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm md:text-base font-bold text-center md:text-left" style={{ color: '#64748B' }}>{info.content}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
