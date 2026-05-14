'use client';

import Image from 'next/image';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';
import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { name: 'JavaScript',  logo: '/images/tech/js.svg' },
    { name: 'React.js',    logo: '/images/tech/react.svg' },
    { name: 'Next.js',     logo: '/images/tech/nextjs.svg' },
    { name: 'Tailwind CSS', logo: '/images/tech/tailwind.svg' },
    { name: 'Git',         logo: '/images/tech/git.svg' },
    { name: 'Python',      logo: '/images/tech/python.svg' },
    { name: 'Laravel',     logo: '/images/tech/laravel.svg' },
    { name: 'PHP',         logo: '/images/tech/php.svg' },
  ];

  return (
    <section id="about" className="pt-16 pb-10 md:pt-20 md:pb-12 relative overflow-hidden bg-green-50/60 border-y border-green-100/50">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="mb-16">
            <div className="section-accent"></div>
            <h2
              className="font-bold text-black tracking-tight"
              style={{ fontSize: 'var(--heading-section)' }}
            >
              About Me
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="space-y-8 max-w-3xl">
            <p className="text-gray-500 text-lg leading-relaxed">
              Hello! I&apos;m Rigel Ray O. Cabaya, a Fullstack Developer from the
              University of Science and Technology of the Philippines. I&apos;m
              passionate about exploring the world of technology, from learning
              algorithms to building innovative projects that solve real problems.
            </p>

            <p className="text-gray-500 text-lg leading-relaxed">
              I&apos;m particularly interested in web development, where I enjoy creating
              beautiful and functional web experiences. Whether I&apos;m collaborating
              with people or tackling coding challenges, I enjoy turning ideas
              into practical solutions. As someone who believes in constant learning,
              I aim to grow with every project I take on and contribute meaningfully to
              the tech world.
            </p>
          </div>
        </ScrollReveal>

        {/* Social links */}
        <ScrollReveal delay={0.2}>
          <div className="flex space-x-5 mt-10">
            <motion.a
              href="https://github.com/RigelKukoy"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="p-3 rounded-full bg-green-100 text-green-800 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-sm border border-green-200 hover:border-transparent"
            >
              <FaGithub
                size={24}
                className="transition-colors"
              />
            </motion.a>
            <motion.a
              href="https://ph.linkedin.com/in/rigel-cabaya-345837367"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="p-3 rounded-full bg-green-100 text-green-800 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-sm border border-green-200 hover:border-transparent"
            >
              <FaLinkedin
                size={24}
                className="transition-colors"
              />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/rigelray.cabaya"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="p-3 rounded-full bg-green-100 text-green-800 hover:bg-green-500 hover:text-white transition-colors duration-300 shadow-sm border border-green-200 hover:border-transparent"
            >
              <FaFacebook
                size={24}
                className="transition-colors"
              />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>

      {/* Skills marquee — full-width infinite scroll */}
      <ScrollReveal delay={0.3}>
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-8">
            <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
              Skills & Technologies
            </span>
          </div>

          {/* Marquee container */}
          <div className="relative overflow-hidden py-6">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f5fcf6] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f5fcf6] to-transparent z-10 pointer-events-none" />

            {/* Scrolling track */}
            <div className="marquee-track flex w-max">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex w-max shrink-0" aria-hidden={copy === 1}>
                  {[...skills, ...skills].map((skill, index) => (
                    <span
                      key={`${copy}-${index}`}
                      className="flex-shrink-0 flex items-center gap-3 px-8 py-4 mx-4 text-base font-semibold text-black bg-white rounded-2xl border border-green-100 shadow-sm hover:border-green-300 hover:shadow-md transition-all duration-300 cursor-default select-none"
                    >
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={32}
                        height={32}
                        className="object-contain"
                        unoptimized
                      />
                      {skill.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
