import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FileText, ArrowLeft, Shield, AlertCircle, CheckCircle, Mail } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SEO from '../components/SEO'

gsap.registerPlugin(ScrollTrigger)

function TermsAndConditions() {
  const headerRef = useRef(null)
  const sectionsRef = useRef(null)

  useEffect(() => {
    // Animate header
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children,
        { 
          y: 50, 
          opacity: 0
        },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out'
        }
      )
    }

    // Animate sections on scroll
    if (sectionsRef.current) {
      const sections = sectionsRef.current.querySelectorAll('.terms-section')
      sections.forEach((section) => {
        gsap.fromTo(section,
          { 
            y: 30, 
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        )
      })
    }
  }, [])

  return (
    <>
      <SEO 
        title="Terms and Conditions"
        description="Read the terms and conditions for using Dee Gee Graphics services. Learn about our policies, service agreements, and legal information."
        keywords="terms and conditions, service agreement, legal, policies, Dee Gee Graphics"
      />
      
      <div className="min-h-screen" style={{ backgroundColor: '#F9FAFB' }}>
        {/* Header Section */}
        <div className="relative overflow-hidden py-20 md:py-32" style={{ backgroundColor: '#0F172A' }}>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div ref={headerRef} className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <FileText className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6">
              Terms & Conditions
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Please read these terms and conditions carefully before using our services
            </p>

            <p className="text-sm text-gray-400 mt-6">
              Last Updated: November 8, 2025
            </p>

            <Link
              to="/"
              className="inline-flex items-center space-x-2 mt-8 px-6 py-3 rounded-xl font-bold text-white border-2 border-white/20 transition-all duration-300 hover:bg-white/10"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div ref={sectionsRef} className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24">
          {/* Introduction */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#E2E8F0' }}>
                <Shield className="w-6 h-6" style={{ color: '#0F172A' }} />
              </div>
              <div>
                <h2 className="text-2xl font-black mb-2" style={{ color: '#0F172A' }}>
                  Agreement to Terms
                </h2>
              </div>
            </div>
            <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
              By accessing and using the services provided by Dee Gee Graphics ("we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.
            </p>
          </div>

          {/* Services */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              1. Services
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                Dee Gee Graphics provides graphic design, printing, branding, and related creative services. Our services include but are not limited to:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#0F172A' }} />
                  <span style={{ color: '#64748B' }}>Custom graphic design and branding solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#0F172A' }} />
                  <span style={{ color: '#64748B' }}>Printing services including business cards, flyers, and promotional materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#0F172A' }} />
                  <span style={{ color: '#64748B' }}>Vehicle wraps and signage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#0F172A' }} />
                  <span style={{ color: '#64748B' }}>Apparel printing and merchandise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Orders and Payments */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              2. Orders and Payments
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>2.1 Order Acceptance</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  All orders are subject to acceptance by Dee Gee Graphics. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing, or suspected fraudulent activity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>2.2 Pricing</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  All prices are quoted in Canadian Dollars (CAD) and are subject to change without notice. Final pricing will be confirmed in your order quote or invoice.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>2.3 Payment Terms</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Payment is required before work begins unless otherwise agreed upon in writing. We accept various payment methods including credit cards, e-transfers, and bank transfers. A deposit may be required for large orders.
                </p>
              </div>
            </div>
          </div>

          {/* Design and Proofs */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              3. Design Process and Proofs
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>3.1 Design Revisions</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Our design packages include a specified number of revision rounds. Additional revisions beyond the agreed-upon number may incur extra charges.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>3.2 Proof Approval</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  You are responsible for reviewing and approving all proofs before production begins. Once approved, we are not responsible for errors that were present in the approved proof. Please carefully check spelling, grammar, layout, and all other details.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>3.3 File Formats</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Final design files will be delivered in formats agreed upon at the start of the project. Additional file format conversions may be subject to additional fees.
                </p>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              4. Intellectual Property Rights
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>4.1 Ownership</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Upon full payment, you will own the rights to the final approved designs for your specified use. Dee Gee Graphics retains the right to use completed work in our portfolio and marketing materials unless otherwise agreed in writing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>4.2 Client-Provided Materials</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  You warrant that any materials, images, or content you provide do not infringe on any third-party rights. You agree to indemnify Dee Gee Graphics against any claims arising from the use of materials you provide.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>4.3 Stock Resources</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  We may use stock photos, fonts, and other resources in our designs. These resources are licensed for commercial use, and their usage is subject to the terms of their respective licenses.
                </p>
              </div>
            </div>
          </div>

          {/* Production and Delivery */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              5. Production and Delivery
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>5.1 Turnaround Times</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Estimated turnaround times are provided as guidelines and are not guaranteed. Actual delivery times may vary based on project complexity, revision requests, and production schedules.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>5.2 Rush Orders</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Rush orders may be available for an additional fee, subject to our current workload and production capacity.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>5.3 Shipping</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Shipping costs are additional unless otherwise stated. We are not responsible for delays caused by shipping carriers or customs processes.
                </p>
              </div>
            </div>
          </div>

          {/* Quality and Returns */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              6. Quality Assurance and Returns
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>6.1 Quality Standards</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  We strive to maintain the highest quality standards in all our work. However, slight variations in color, finish, or appearance may occur due to the nature of printing and production processes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>6.2 Defects and Errors</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  If you receive defective products or if we made an error in production, please notify us within 7 days of receipt. We will reprint or correct the issue at no additional charge. We are not responsible for errors in approved proofs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#0F172A' }}>6.3 Refunds and Cancellations</h3>
                <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                  Custom design work and printed materials are non-refundable once production has begun. Cancellations must be made in writing before production starts. Deposits are non-refundable.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              7. Limitation of Liability
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                Dee Gee Graphics shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to our services. Our total liability shall not exceed the amount paid for the specific service in question.
              </p>
              <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
                We are not responsible for any business losses, lost profits, or damages resulting from delays, errors, or defects in our services beyond the cost of reprinting or correcting the specific item.
              </p>
            </div>
          </div>

          {/* Confidentiality */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              8. Confidentiality
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
              We respect your privacy and will keep all client information confidential. We will not share your designs, business information, or personal data with third parties except as necessary to complete your project (e.g., with printing vendors) or as required by law.
            </p>
          </div>

          {/* Changes to Terms */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              9. Changes to Terms
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
              We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
            </p>
          </div>

          {/* Governing Law */}
          <div className="terms-section mb-12 p-8 rounded-2xl" style={{ backgroundColor: '#FFFFFF' }}>
            <h2 className="text-2xl font-black mb-6" style={{ color: '#0F172A' }}>
              10. Governing Law
            </h2>
            <p className="text-base leading-relaxed" style={{ color: '#64748B' }}>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of Ontario, Canada. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.
            </p>
          </div>

          {/* Contact Information */}
          <div className="terms-section p-8 rounded-2xl" style={{ backgroundColor: '#0F172A' }}>
            <div className="flex items-start space-x-4 mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black mb-2 text-white">
                  Questions About Our Terms?
                </h2>
                <p className="text-base leading-relaxed text-gray-300 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-white font-bold">
                    Email: <a href="mailto:info@deegeegraphics.com" className="underline hover:text-gray-300 transition-colors">info@deegeegraphics.com</a>
                  </p>
                  <p className="text-white font-bold">
                    Phone: <a href="tel:+16475497017" className="underline hover:text-gray-300 transition-colors">(647) 549-7017</a>
                  </p>
                  <p className="text-white font-bold">
                    Address: 12545 Coleraine Drive, Unit 9, Caledon ON L7E 3B5
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl font-black text-white transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: '#0F172A' }}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Return to Home</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default TermsAndConditions
