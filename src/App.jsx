import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import TermsAndConditions from './pages/TermsAndConditions'
import NotFound from './pages/NotFound'

// Service Pages
import BusinessCards from './pages/services/BusinessCards'
import WallMurals from './pages/services/WallMurals'
import Signs from './pages/services/Signs'
import VehicleWraps from './pages/services/VehicleWraps'
import WindowGraphics from './pages/services/WindowGraphics'
import GarmentPrinting from './pages/services/GarmentPrinting'
import PaperPrinting from './pages/services/PaperPrinting'
import CaledonPrinting from './pages/services/CaledonPrinting'
import TorontoPrinting from './pages/services/TorontoPrinting'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            
            {/* Service Pages */}
            <Route path="services/business-cards" element={<BusinessCards />} />
            <Route path="services/wall-murals" element={<WallMurals />} />
            <Route path="services/signs" element={<Signs />} />
            <Route path="services/vehicle-wraps" element={<VehicleWraps />} />
            <Route path="services/window-graphics" element={<WindowGraphics />} />
            <Route path="services/garment-printing" element={<GarmentPrinting />} />
            <Route path="services/paper-printing" element={<PaperPrinting />} />
            
            {/* Local SEO Pages */}
            <Route path="services/caledon-printing" element={<CaledonPrinting />} />
            <Route path="services/toronto-printing" element={<TorontoPrinting />} />
            
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="terms" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  )
}

export default App
