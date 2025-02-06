
// src/components/Products.js
'use client';

export default function Products() {
  return (
    <section id="products" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Naši Izdelki</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="https://assets.wfcdn.com/im/37702069/resize-h800-w800%5Ecompr-r85/3049/304930441/Farmhouse+Coffee+Table%2C+Modern+Simple+Oak+Center+Table%2C+Industrial+Minimalist+Rectangle+Living+Room+Table%2C+Wood+And+Metal+Small+Coffee+Tea+Table+For+Home+Office+Bedroom+Kitchen%2C+Rustic+Oak%2C+39+In.jpg" alt="Izdelek 1" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Lesena miza</h3>
              <p>Elegantna in trpežna miza iz masivnega lesa.</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4vy6K5g0cduURWjLCaUe1IX2n8YVmHaVsjM0_mrL1BT6RvggxnAD6eJKbQXsRicxDup4&usqp=CAU" alt="Izdelek 2" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Kuhinjski set</h3>
              <p>Moderen kuhinjski set z vrhunskim dizajnom.</p>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img src="https://www.maros.si/assets/shop_product/italianske-garderobne-omare-novamobili-9.JPG" alt="Izdelek 3" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Omara po meri</h3>
              <p>Prostorna omara z dovršenimi detajli.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
