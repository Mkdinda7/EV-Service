
import './App.css'
import About from './Components/about/About'
import Banner from './Components/banner/banner'
import CTA from './Components/download/Download'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Nav from './Components/nav/Nav'
import Services from './Components/Services/Services'
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
