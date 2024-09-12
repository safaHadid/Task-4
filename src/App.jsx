import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs'
import Contact from './components/Contact/Contact'
import Doctors from './components/Doctors/Doctors'
import Emergency from './components/Emergency/Emergency'
import Footer from './components/Footer/Footer'
import FrequentlyQuestions from './components/FrequentlyQuestions/FrequentlyQuestions'
import InfoDetails from './components/InfoDetails/InfoDetails'
import Pricing from './components/Pricing/Pricing'
import Gallery from './components/Gallery/Gallery'
import Features from './components/Features/Features'
import FeaturesCards from './components/FeaturesCards/FeaturesCards'
import Hero from './components/Hero/Hero'
import ServicesCards from './components/ServicesCards/ServicesCards'
import Deparments from './components/Deparments/Deparments'
import Appointment from './components/Appointment/Appointment'
import Navbar from './components/NavBar/NavBar'
import Testimonials from './components/Testimonials/Testimonials'

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesCards />
      <Emergency />
      <AboutUs />
      <InfoDetails />
      <Features />
      <ServicesCards />
      <Appointment />
      <Deparments />
      <Testimonials />
      <Doctors />
      <Gallery />
      <Pricing />
      <FrequentlyQuestions />
      <Contact />
      <Footer />
    </>
  )
}

export default App
