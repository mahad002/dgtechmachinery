import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhatWeDo from './components/WhatWeDo';
import WhyChooseUs from './components/WhyChooseUs';
import Timeline from './components/Timeline';
import AboutUs from './components/AboutUs';
import Partners from './components/Partners';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <BackToTop />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="products">
          <Products />
        </section>
        <section id="what-we-do">
          <WhatWeDo />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="partners">
          <Partners />
        </section>
      </main>
      <Footer />
    </div>
  );
}