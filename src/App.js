import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Frame499 from './components/Frame499/Frame499';
import FAQs from './components/FAQs/FAQs';
import Footer from './components/Footer/Footer';
import Consultations from './components/Consultations/Consultations';

const App = () => {
  return (
    <Router>
      <TopNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/get-free-consultation" element={<ConsultationPage />} />
      </Routes>
      <div> 
      <Footer />
      </div>
     
    </Router>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Frame499 />
      <FAQs />
    </>
  );
};

const ConsultationPage = () => {
  return (
    <>
      <TopNavigation />
      <Consultations />
    </>
  );
};

export default App;
