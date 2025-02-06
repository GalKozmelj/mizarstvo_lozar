'use client';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Map from './components/Maps';

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Products />
        <Gallery />
        <Contact />
        <Map />
      </main>
      <Footer />
    </div>
  );
}