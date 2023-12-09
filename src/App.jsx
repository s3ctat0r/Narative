import React from 'react';
import Portfolio from './Pages/Portfolio';
import Home from './Pages/Home';
import Slider from './Components/Slider';
import Schedule from './Pages/Schedule';
import Testimonials from './Pages/Testimonials';
import ContentHeading from './Components/Content_Heading';
import Services from './Pages/Services';
import Footer from './Pages/footer';
import Header from './Components/Header';

function App() {
  return (
    <div className="wraper">
      <Header />
      <Home />
      <Slider />
      <Schedule />
      <div id='Portfolio' className="opening"></div>
      <ContentHeading styles = "portfolio-heading" text = 'PORTFOLIO' index={0} />
      <Portfolio />
      <div id='Testimonials' className="opening"></div>
      <ContentHeading styles = "testimonial-heading" text = 'TESTIMONIALS'  index={1} />
      <Testimonials />
      <div id="Services" className="opening"></div>
      <ContentHeading styles = "Services-heading" text = 'SERVICES'  index={2} />
      <Services />
      
      <Footer />
  </div >
  );
}

export default App;
