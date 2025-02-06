'use client';  // <-- Add this


import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

const DynamicMap = dynamic(() => import('./components/Maps'), {
  ssr: false,
});

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
        <DynamicMap /> {/* Use dynamically imported map */}
      </main>
      <Footer />
    </div>
  );
}
