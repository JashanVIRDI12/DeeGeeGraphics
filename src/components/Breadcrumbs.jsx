import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

function Breadcrumbs() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null
  }

  // Create breadcrumb items
  const breadcrumbItems = [
    {
      name: 'Home',
      path: '/',
    },
    ...pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')
      return {
        name: formattedName,
        path: routeTo,
      }
    }),
  ]

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': `https://deegeegraphics.com${item.path}`,
    })),
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="py-4 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1

            return (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}
                {isLast ? (
                  <span className="font-semibold text-gray-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                  >
                    {index === 0 && <Home className="w-4 h-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumbs
