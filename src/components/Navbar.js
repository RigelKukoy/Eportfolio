'use client';
import { useState } from 'react';

export default function Navbar() {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <nav className="fixed w-full z-50 bg-CustomWhite/50 backdrop-blur-sm border-b border-green-100">
   <div className="container mx-auto px-4">
    {/* Navigation container */}
    <div className="flex items-center justify-between h-16">
     {/* Logo */}
     <span className="text-gray-800 text-xl font-bold">Portfolio</span>

     {/* Desktop navigation links */}
     <div className="hidden md:flex space-x-8">
      <a
       href="#home"
       className="text-gray-600 hover:text-green-500 transition-colors"
      >
       Home
      </a>
      <a
       href="#about"
       className="text-gray-600 hover:text-green-500 transition-colors"
      >
       About
      </a>
      <a
       href="#projects"
       className="text-gray-600 hover:text-green-500 transition-colors"
      >
       Projects
      </a>
      <a
       href="#contact"
       className="text-gray-600 hover:text-green-500 transition-colors"
      >
       Contact
      </a>
     </div>

     {/* Mobile menu toggle */}
     <button
      className="md:hidden text-gray-300"
      onClick={() => setIsOpen(!isOpen)}
     >
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       {isOpen ? (
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M6 18L18 6M6 6l12 12"
        />
       ) : (
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M4 6h16M4 12h16M4 18h16"
        />
       )}
      </svg>
     </button>
    </div>

    {/* Mobile menu dropdown */}
    {isOpen && (
     <div className="md:hidden">
      <div className="flex flex-col space-y-4 px-2 pt-2 pb-3">
       <a href="#home" className="text-gray-300 hover:text-orange-500">
        Home
       </a>
       <a href="#about" className="text-gray-300 hover:text-orange-500">
        About
       </a>
       <a href="#projects" className="text-gray-300 hover:text-orange-500">
        Projects
       </a>
       <a href="#contact" className="text-gray-300 hover:text-orange-500">
        Contact
       </a>
      </div>
     </div>
    )}
   </div>
  </nav>
 );
}
