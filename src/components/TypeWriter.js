'use client';
import { TypeAnimation } from 'react-type-animation';

// Only the variable part is animated — "Hi, I'm" lives as a static block
// in Hero.js so it never causes layout reflow.
export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        "Rigel Ray O. Cabaya",
        2500,
        "a Fullstack Developer",
        1500,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: 'inherit' }}
      repeat={Infinity}
    />
  );
}
