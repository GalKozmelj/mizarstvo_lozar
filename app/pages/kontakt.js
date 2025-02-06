
// pages/kontakt.js
export default function Contact() {
    return (
      <section>
        <h2 className="text-3xl font-bold mb-4">Kontaktirajte nas</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Vaše ime" className="w-full p-2 border rounded" required />
          <input type="email" placeholder="Vaš e-mail" className="w-full p-2 border rounded" required />
          <textarea placeholder="Vaše sporočilo" className="w-full p-2 border rounded" rows="4" required></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Pošlji</button>
        </form>
      </section>
    );
  }
  