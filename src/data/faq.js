// Frequently Asked Questions for DeeGee Graphics
// Used for FAQ schema markup and potential FAQ page

export const faqs = [
  {
    id: 1,
    question: "What areas do you serve?",
    answer: "DeeGee Graphics proudly serves Caledon, Toronto, and all of Ontario. We offer both in-person consultations and remote services to accommodate clients throughout the province."
  },
  {
    id: 2,
    question: "What are your business hours?",
    answer: "We are open 7 days a week from 9:00 AM to 5:00 PM. For urgent projects or special requests, please contact us directly to discuss availability."
  },
  {
    id: 3,
    question: "What printing services do you offer?",
    answer: "We offer a comprehensive range of printing services including decals and stickers, safety labels, garment printing (t-shirts, hoodies, uniforms), storefront signs and banners, business cards, brochures, posters, and custom promotional materials."
  },
  {
    id: 4,
    question: "How long does it take to complete a printing project?",
    answer: "Turnaround time varies depending on the project scope and complexity. Standard orders typically take 3-5 business days, while rush orders can be accommodated in 24-48 hours. We'll provide a specific timeline during your consultation."
  },
  {
    id: 5,
    question: "Do you offer design services?",
    answer: "Yes! Our team includes experienced graphic designers who can help bring your vision to life. We offer logo design, branding packages, website design, and custom artwork for all printing projects."
  },
  {
    id: 6,
    question: "What is your minimum order quantity?",
    answer: "We accommodate orders of all sizes, from single custom pieces to large bulk orders. There's no minimum order quantity - whether you need one decal or one thousand, we're here to help."
  },
  {
    id: 7,
    question: "Can I see a proof before printing?",
    answer: "Absolutely! We provide digital proofs for all projects before going to print. This ensures you're completely satisfied with the design, colors, and layout. We'll make any necessary revisions until you're happy with the final proof."
  },
  {
    id: 8,
    question: "What file formats do you accept?",
    answer: "We accept a wide variety of file formats including PDF, AI, EPS, PSD, PNG, JPG, and more. If you're unsure about your file format, just send it to us and we'll let you know if it works or help you convert it."
  },
  {
    id: 9,
    question: "Do you offer installation services for signs?",
    answer: "Yes, we provide professional installation services for storefront signs, banners, and vehicle graphics. Our experienced installation team ensures your signage is properly mounted and looks perfect."
  },
  {
    id: 10,
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including cash, credit cards (Visa, Mastercard, American Express), debit cards, e-transfers, and for established business clients, we offer net payment terms."
  },
  {
    id: 11,
    question: "Can you match specific colors for my brand?",
    answer: "Yes! We use professional color matching systems including Pantone colors to ensure your brand colors are reproduced accurately across all printed materials."
  },
  {
    id: 12,
    question: "Do you offer eco-friendly printing options?",
    answer: "Yes, we offer environmentally friendly printing options including recycled paper stocks, eco-solvent inks, and sustainable materials. Ask us about green printing solutions for your project."
  },
  {
    id: 13,
    question: "How do I get a quote?",
    answer: "Getting a quote is easy! You can contact us through our website contact form, call us at (647) 549-7017, or email us at info@deegeegraphics.com. Provide details about your project and we'll get back to you promptly with a competitive quote."
  }
];

// Generate FAQ schema for structured data
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};
