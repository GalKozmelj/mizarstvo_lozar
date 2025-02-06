import dynamic from 'next/dynamic';

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
