import CategoriesSection from './components/landing/categoriesSection'
import Footer from './components/landing/Footer'
import Hero from './components/landing/hero'
import PortfolioSection from './components/landing/portfolioSection'
import ProcessSection from './components/landing/processSection'
import ServicesSection from './components/landing/servicesection'
import TestimonialsSection from './components/landing/testimonialSection'
import WhyChooseSection from './components/landing/whychooseSection'

function App() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <CategoriesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <Footer />
    </>
  )
}

export default App
