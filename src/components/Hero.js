"use client";

import Image from "next/image";
import TypeWriter from "./TypeWriter";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[60vh] flex items-center justify-center pt-32 pb-8 md:pt-40 md:pb-16 relative overflow-hidden"
    >
      {/* Background Design Elements — blur-3xl is GPU-intensive; hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden sm:block absolute top-40 left-10 w-96 h-96 bg-green-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="hidden sm:block absolute bottom-40 right-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-50/30 rounded-full filter blur-3xl"></div>

        {/* Floating Elements — tiny dots, cheap on all devices */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400/60 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-green-300/60 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-green-200/60 rounded-full animate-float animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-6 md:px-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20 items-center">
          {/* Text content — editorial left side */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="space-y-8">
              <div>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 48 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="h-[3px] rounded-full bg-gradient-to-r from-green-500 to-green-600 mb-6"
                />
                <h1
                  className="font-bold text-black leading-[1.1] tracking-tight"
                  style={{ fontSize: 'var(--heading-hero)' }}
                >
                  {/* Static first line — never reflows, no width/height shift */}
                  <span className="block">Hi, I&apos;m</span>
                  {/* white-space:nowrap locks to 1 line; no overflow:hidden so descenders (g, y, p) aren't clipped */}
                  <span
                    className="block"
                    style={{
                      whiteSpace: 'nowrap',
                      minHeight: '1.15em',
                      fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    }}
                  >
                    <TypeWriter />
                  </span>
                </h1>
              </div>
              <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed">
                Fullstack Developer passionate about creating beautiful and
                functional web experiences
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">
                <motion.a
                  href="#contact"
                  className="w-full sm:w-auto text-center px-8 py-3.5 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover-shimmer"
                  whileTap={{ scale: 0.97 }}
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="w-full sm:w-auto text-center px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:shadow-lg"
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* Profile image — editorial right side with negative space */}
          <ScrollReveal delay={0.3} direction="up">
            <div className="relative flex justify-center md:justify-end">
              <div className="relative">
                {/* Decorative ring behind */}
                <div className="absolute -inset-3 rounded-full border border-green-200/40 animate-glow-pulse" />
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-green-500/30 relative">
                  <Image
                    src="/images/Profile.png"
                    alt="Rigel Ray O. Cabaya"
                    fill
                    priority
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
