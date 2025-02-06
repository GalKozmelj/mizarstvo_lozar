
// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
<header className="bg-gradient-to-r from-black/90 to-black/30 shadow-md text-white top-0 z-40 backdrop-blur-lg backdrop-opacity-90 absolute w-full">
<nav className="container mx-auto flex justify-between items-center p-4">
        <img className='h-12' src='mizarstvo_lozar.png'></img>
        <ul className="hidden md:flex space-x-4">
            <li>041/507-106</li>
            <li>tone.lozar@gmail.com</li>
            {/* <li><Link href="/izdelki">Izdelki</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li> */}
        </ul>
      </nav>
    </header>
  );
}