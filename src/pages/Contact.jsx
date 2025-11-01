import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../config/emailjs.config'
import Squares from '../components/Squares'

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
  const [loading, setLoading] = useState(false)

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
    setLoading(true)
    
    // Template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      subject: formData.subject,
      message: formData.message,
      to_email: 'info@deegeegraphics.com'
    }
    
    // Send email using EmailJS
    emailjs.send(
      emailjsConfig.serviceID, 
      emailjsConfig.templateID, 
      templateParams, 
      emailjsConfig.publicKey
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        setLoading(false)
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
        }, 5000)
      })
      .catch((error) => {
        console.error('FAILED...', error)
        setLoading(false)
        alert('Failed to send message. Please try again or contact us directly at info@deegeegraphics.com')
      })
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
      content: '12545 Coleraine Drive, Unit 9, Caledon ON L7E 3B5',
      link: 'https://maps.google.com/?q=12545+Coleraine+Drive,+Unit+9,+Caledon+ON+L7E+3B5',
    },
  ]

  return (
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
                  <span className="char inline-block">G</span>
                  <span className="char inline-block">e</span>
                  <span className="char inline-block">t</span>
                  <span className="char inline-block mr-4"> </span>
                  <span className="char inline-block">I</span>
                  <span className="char inline-block">n</span>
                </div>
                <div className="text-white md:bg-gradient-to-r md:from-gray-300 md:to-white md:bg-clip-text md:text-transparent">
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
              
              {loading && (
                <div 
                  className="mb-6 p-6 rounded-2xl shadow-xl relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
                    animation: 'slideIn 0.5s ease-out'
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="loader"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-black text-white mb-1">Sending your message...</h3>
                      <p className="text-gray-300 text-sm font-medium">
                        Please wait a moment
                      </p>
                    </div>
                  </div>
                  <style>{`
                    .loader {
                      width: 32px;
                      height: 32px;
                      border: 4px solid rgba(255, 255, 255, 0.2);
                      border-top-color: #ffffff;
                      border-radius: 50%;
                      animation: spin 0.8s linear infinite;
                    }
                    @keyframes spin {
                      to { transform: rotate(360deg); }
                    }
                  `}</style>
                </div>
              )}

              {submitted && (
                <div 
                  className="mb-6 p-6 rounded-2xl shadow-2xl animate-slideIn relative overflow-hidden"
                  style={{ 
                    background: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
                    animation: 'slideIn 0.5s ease-out, pulse 2s ease-in-out infinite'
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-50"></div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-white mb-1">Message Sent Successfully! 🎉</h3>
                      <p className="text-white text-sm font-medium opacity-90">
                        Thank you for reaching out! We'll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                  <style>{`
                    @keyframes slideIn {
                      from {
                        transform: translateY(-20px);
                        opacity: 0;
                      }
                      to {
                        transform: translateY(0);
                        opacity: 1;
                      }
                    }
                    @keyframes pulse {
                      0%, 100% {
                        box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                      }
                      50% {
                        box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
                      }
                    }
                  `}</style>
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
                  disabled={loading}
                  className="w-full text-white font-black py-5 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{ backgroundColor: '#0F172A' }}
                >
                  {loading ? (
                    <>
                      <div className="loader-small mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-6 h-6" />
                    </>
                  )}
                  <style>{`
                    .loader-small {
                      width: 20px;
                      height: 20px;
                      border: 3px solid rgba(255, 255, 255, 0.3);
                      border-top-color: #ffffff;
                      border-radius: 50%;
                      animation: spin 0.6s linear infinite;
                    }
                  `}</style>
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

          {/* Google Maps Section */}
          <div className="mt-16 bg-white rounded-3xl shadow-2xl overflow-hidden" style={{ border: '2px solid rgba(226, 232, 240, 0.8)' }}>
            <div className="p-6 md:p-8 border-b-2" style={{ borderColor: '#E2E8F0' }}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-2" style={{ color: '#0F172A' }}>Find Us on the Map</h3>
                  <p className="text-base font-medium" style={{ color: '#64748B' }}>12545 Coleraine Drive, Unit 9, Caledon ON L7E 3B5</p>
                </div>
                <a
                  href="https://maps.google.com/?q=12545+Coleraine+Drive,+Unit+9,+Caledon+ON+L7E+3B5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 px-6 py-3 rounded-full font-black text-white transition-all duration-300 hover:shadow-xl transform hover:scale-105"
                  style={{ backgroundColor: '#0F172A' }}
                >
                  <MapPin className="w-5 h-5" />
                  <span>Open in Maps</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="relative w-full h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2873.8!2d-79.8638!3d43.8847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2s12545%20Coleraine%20Dr%20%239%2C%20Caledon%2C%20ON%20L7E%203B5!5e0!3m2!1sen!2sca!4v1730472067000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DeeGee Graphics Location - 12545 Coleraine Dr #9, Caledon"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
