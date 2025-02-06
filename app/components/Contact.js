
// src/components/Contact.js
'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-1">Kontaktirajte nas</h2>
        <p className="py-3  mb-3">Kontaktirajte nas lahko preko  041/507-106 ali preko tone.lozar@gmail.com. Lahko pa tudi napišete sporočilo spodaj:</p>
        <form className="bg-white p-6 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700">Ime</label>
            <input type="text" className="w-full p-2 border rounded" placeholder="Vaše ime" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-pošta</label>
            <input type="email" className="w-full p-2 border rounded" placeholder="Vaš e-mail" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Sporočilo</label>
            <textarea className="w-full p-2 border rounded" rows="4" placeholder="Vaše sporočilo"></textarea>
          </div>
          <button type="submit" className="bg-[#333] text-white px-4 py-2 rounded hover:bg-[#111]">Pošlji</button>
        </form>
      </div>
    </section>
  );
}
