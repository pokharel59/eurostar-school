import { About } from './components/about'
import { Facilities } from './components/facilities'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import { Navigation } from './components/navigation'
import { PrincipalMessage } from './components/principal-message'
import { Stats } from './components/stats'
import { Activities } from './components/activities'
import { Testimonials } from './components/testimonials'
import { FAQs } from './components/faqs'
import { Gallery } from './components/gallery'
import { EnrollmentForm } from './components/enrollment-form'

function App() {

  return (
    <>
    <div className="min-h-screen bg-white ">
      <Navigation /> 
      <Hero />
      <Stats />
      <About />
      <Facilities />
      <PrincipalMessage />
      <Activities />
      <Testimonials />
      <FAQs />
      <Gallery />
      <EnrollmentForm /> 
      <Footer />
    </div>
    </>
  )
}

export default App
