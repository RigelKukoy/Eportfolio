'use client';

import Image from 'next/image';
import TypeWriter from './TypeWriter';

export default function Hero() {
 return (
  <section
   id="home"
   className="min-h-screen flex items-center justify-center py-16 relative overflow-hidden"
  >
   {/* Background Design Elements */}
   <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-40 left-10 w-72 h-72 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    <div className="absolute bottom-40 right-10 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

    {/* Grid Pattern */}
    <div className="absolute inset-0 opacity-90 bg-[url('Eportfolio/public/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0.1))]"></div>

    {/* Floating Elements */}
    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-green-400 rounded-full animate-float"></div>
    <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-green-300 rounded-full animate-float animation-delay-2000"></div>
    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-green-200 rounded-full animate-float animation-delay-4000"></div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 items-center relative">
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
