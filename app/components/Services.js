
// src/components/Services.js
'use client';

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Naše Storitve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold">Razrez lesa</h3>
            <p>Prilagojene storitve po vaših željah.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold">Izdelava po meri</h3>
            <p>Kakovostna izdelava s poudarkom na detajlih.</p>
          </div>
          <div className="p-4 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold">Montaža in dostava</h3>
            <p>Hitro in zanesljivo na vašo lokacijo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
