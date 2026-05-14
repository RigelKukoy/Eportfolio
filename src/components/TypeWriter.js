'use client';
import { TypeAnimation } from 'react-type-animation';

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        "Hi, I'm Rigel Ray O. Cabaya",
        2000,
        "I'm a Software Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      className="font-bold text-black"
      style={{ fontSize: 'inherit' }}
      repeat={Infinity}
    />
  );
}
