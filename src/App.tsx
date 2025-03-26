import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Timeline from './components/Timeline';
import Partners from './components/Partners';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BackToTop />
      <Navbar />
      <Hero />
      <Products />
      <WhatWeDo />
      <WhyChooseUs />
      <Timeline />
      <AboutUs />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
