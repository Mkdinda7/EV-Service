
import './App.css'
import About from './Components/about/About'
import Banner from './Components/banner/banner'
import CTA from './Components/cta/CTA'
import Features from './Components/features/Features'
import Footer from './Components/footer/Footer'
import Nav from './Components/nav/Nav'
import Services from './Components/services/Services'
import Testimonial from './Components/testimonials/Testimonial'


function App() {
  

  return (
    <div>
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
      <Features/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </div>
  )
}

export default App;
