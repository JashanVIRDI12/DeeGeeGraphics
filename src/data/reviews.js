// Customer Reviews and Testimonials for DeeGee Graphics
// These reviews are used for SEO schema markup and display

export const reviews = [
  {
    id: 1,
    author: "Sarah Mitchell",
    rating: 5,
    date: "2024-10-15",
    title: "Outstanding Print Quality!",
    text: "DeeGee Graphics exceeded our expectations with their printing services. The decals for our company vehicles look absolutely professional and have held up perfectly through all weather conditions. Their attention to detail and quick turnaround time made the entire process seamless.",
    service: "Decals Printing",
    location: "Toronto, ON"
  },
  {
    id: 2,
    author: "Michael Chen",
    rating: 5,
    date: "2024-10-08",
    title: "Perfect Storefront Signage",
    text: "We needed new storefront signs for our retail location and DeeGee Graphics delivered beyond what we imagined. The design was creative, the installation was professional, and the signs have dramatically increased our foot traffic. Highly recommend their services!",
    service: "Storefront Signs",
    location: "Caledon, ON"
  },
  {
    id: 3,
    author: "Jennifer Rodriguez",
    rating: 5,
    date: "2024-09-28",
    title: "Exceptional Website Design",
    text: "The team at DeeGee Graphics built us a stunning website that perfectly represents our brand. They were patient with our requests, offered great suggestions, and delivered a site that's both beautiful and functional. Our online presence has never been better!",
    service: "Website Design",
    location: "Mississauga, ON"
  },
  {
    id: 4,
    author: "David Thompson",
    rating: 5,
    date: "2024-09-20",
    title: "Professional Safety Labels",
    text: "As a manufacturing facility, we require high-quality safety labels that meet strict standards. DeeGee Graphics provided exactly what we needed - durable, compliant, and clearly printed labels. Their expertise in this area is evident and much appreciated.",
    service: "Safety Labels",
    location: "Brampton, ON"
  },
  {
    id: 5,
    author: "Emily Watson",
    rating: 5,
    date: "2024-09-12",
    title: "Amazing Garment Printing",
    text: "We ordered custom printed t-shirts and hoodies for our company event, and they turned out fantastic! The colors were vibrant, the print quality was excellent, and everyone loved them. DeeGee Graphics made the ordering process easy and delivered on time.",
    service: "Garment Printing",
    location: "Toronto, ON"
  },
  {
    id: 6,
    author: "Robert Kumar",
    rating: 5,
    date: "2024-08-30",
    title: "Reliable and Professional",
    text: "I've been working with DeeGee Graphics for over a year now for various printing needs. Their consistency in quality, competitive pricing, and excellent customer service keep me coming back. They truly care about their clients and it shows in their work.",
    service: "Printing Services",
    location: "Vaughan, ON"
  },
  {
    id: 7,
    author: "Amanda Foster",
    rating: 5,
    date: "2024-08-18",
    title: "Great Branding Solutions",
    text: "DeeGee Graphics helped us develop our complete brand identity from logo design to business cards and marketing materials. Their creative team understood our vision and brought it to life beautifully. We couldn't be happier with the results!",
    service: "Branding Solutions",
    location: "Oakville, ON"
  },
  {
    id: 8,
    author: "James Patterson",
    rating: 5,
    date: "2024-08-05",
    title: "Fast Turnaround Time",
    text: "We had a tight deadline for promotional materials and DeeGee Graphics came through for us. Not only did they deliver on time, but the quality was exceptional. Their ability to handle rush orders without compromising quality is impressive.",
    service: "Printing Services",
    location: "Toronto, ON"
  },
  {
    id: 9,
    author: "Lisa Anderson",
    rating: 4,
    date: "2024-07-22",
    title: "Quality Custom Decals",
    text: "Very pleased with the custom decals we ordered for our product packaging. The colors matched our brand perfectly and the adhesive quality is excellent. Minor delay in delivery but the quality made up for it. Would definitely order again.",
    service: "Decals Printing",
    location: "Caledon, ON"
  },
  {
    id: 10,
    author: "Mark Williams",
    rating: 5,
    date: "2024-07-10",
    title: "Excellent Customer Service",
    text: "From the initial consultation to final delivery, the team at DeeGee Graphics was professional, responsive, and helpful. They answered all our questions and made sure we were completely satisfied with our storefront signage. A pleasure to work with!",
    service: "Storefront Signs",
    location: "Richmond Hill, ON"
  }
];

// Calculate aggregate rating
export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: reviews.length,
  bestRating: 5,
  worstRating: 1
};

// Generate review schema for structured data
export const generateReviewSchema = (review) => ({
  "@type": "Review",
  "author": {
    "@type": "Person",
    "name": review.author
  },
  "datePublished": review.date,
  "reviewBody": review.text,
  "name": review.title,
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": review.rating,
    "bestRating": 5,
    "worstRating": 1
  }
});

// Generate all reviews schema
export const allReviewsSchema = reviews.map(generateReviewSchema);
