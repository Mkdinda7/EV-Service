
import './App.css'
import About from './Components/About/About'
import Banner from './Components/banner/banner'
import CTA from './Components/CTA/CTA'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Nav from './Components/navbar/Nav'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonials/Testimonial'


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
