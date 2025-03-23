import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageSlider from './components/ImageSlider';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Designs</h2>
          <ImageSlider />
        </div>
      </section>
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;