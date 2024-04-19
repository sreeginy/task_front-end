import React from 'react'
import TopNavigation from './components/TopNavigation/TopNavigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Frame499 from './components/Frame499/Frame499';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



const App = () => {
  return (

    <Router>

    <div>

      <TopNavigation />
      <Hero />
      <About />
      <Frame499 />
      <FAQs />
      <Footer />

    </div>
    
    </Router>

  )
}

export default App

