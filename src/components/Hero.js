'use client';

import Image from 'next/image';
import TypeWriter from './TypeWriter';

export default function Hero() {
 return (
  <section
   id="home"
   className="min-h-screen flex items-center justify-center py-16"
  >
   <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center">
    <div className="space-y-6 pl-10">
     <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
      <TypeWriter />
     </h1>
     <p className="text-xl text-gray-600">
      Frontend Developer passionate about creating beautiful and functional web
      experiences
     </p>
     <div className="flex space-x-4">
      <a
       href="#contact"
       className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
       Contact Me
      </a>
      <a
       href="#projects"
       className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
      >
       View Projects
      </a>
     </div>
    </div>
    <div className="relative">
     <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-green-500 relative">
      <Image
       src="/images/Profile.png"
       alt="Profile"
       fill
       className="object-cover"
      />
     </div>
    </div>
   </div>
  </section>
 );
}
