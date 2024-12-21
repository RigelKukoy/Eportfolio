'use client';
import { TypeAnimation } from 'react-type-animation';

export default function TypeWriter() {
 return (
  <TypeAnimation
   sequence={[
    "Hi, I'm Rigel Ray O. Cabaya",
    2000,
    "I'm a Computer Science Student",
    1000,
   ]}
   wrapper="span"
   speed={50}
   className="text-4xl md:text-6xl font-bold text-gray-800"
   repeat={Infinity}
  />
 );
}
