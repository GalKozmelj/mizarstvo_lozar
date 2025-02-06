// src/components/Footer.js
'use client';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white text-center p-4">
      <p>&copy; {new Date().getFullYear()} Tone Lozar s.p. Vse pravice pridržane.</p>
    </footer>
  );
}
