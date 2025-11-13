import { Helmet } from 'react-helmet-async'

function SEO({ 
  title, 
  description, 
  keywords,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData
}) {
  const siteUrl = 'https://deegeegraphics.com'
  const defaultTitle = 'DeeGee Graphics | Professional Printing & Design Services in Caledon, Toronto & Ontario'
  const defaultDescription = 'DeeGee Graphics offers professional printing, design, and branding solutions serving Caledon, Toronto, and all of Ontario. Specializing in printing services, decals, safety labels, garment printing, storefront signs, and website design. Open 7 days a week, 9 AM - 5 PM.'
  const defaultKeywords = 'printing services Caledon, printing services Toronto, graphic design Ontario, decals printing, safety labels, garment printing, storefront signs, website design, branding solutions, custom printing, DeeGee Graphics, Toronto printing company, Ontario printing services'

  const pageTitle = title ? `${title} | DeeGee Graphics` : defaultTitle
  const pageDescription = description || defaultDescription
  const pageKeywords = keywords || defaultKeywords
  const pageUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
  const imageUrl = `${siteUrl}${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="DeeGee Graphics - Professional Printing Services" />
      <meta property="og:site_name" content="DeeGee Graphics" />
      <meta property="og:locale" content="en_CA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content="DeeGee Graphics - Professional Printing Services" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="author" content="DeeGee Graphics" />
      <meta name="geo.region" content="CA-ON" />
      <meta name="geo.placename" content="Caledon" />
      <meta name="geo.position" content="43.8847;-79.8638" />
      <meta name="ICBM" content="43.8847, -79.8638" />

      {/* Structured Data */}
      {structuredData && (
        Array.isArray(structuredData) ? (
          structuredData.map((data, index) => (
            <script key={index} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )
      )}
    </Helmet>
  )
}

export default SEO
