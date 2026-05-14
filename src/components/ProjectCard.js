'use client';

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { withBasePath } from "../lib/basePath";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  index = 0,
  onClick,
  objectPosition = "object-center",
}) {
  const isAlternate = true;
  const prefersReducedMotion = useReducedMotion();

  // Mobile + reduced-motion users skip the hover lift entirely.
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Click feedback
  const clickControls = useAnimation();
  const ringControls = useAnimation();

  const handleClick = async () => {
    ringControls.start({
      scale: [1, 1.07],
      opacity: [0.8, 0],
      transition: { duration: 0.5, ease: "easeOut" },
    });
    await clickControls.start({
      scale: [1, 1.045, 0.965, 1],
      transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
    });
    onClick?.();
  };

  const disableMotion = isMobile || prefersReducedMotion;

  // Reveal-once on scroll into view — no per-frame scroll listeners.
  const revealVariants = disableMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : {
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
    >
      {/* Hover lift via whileHover — composite-only transform, GPU-cheap */}
      <motion.div
        whileHover={disableMotion ? undefined : { y: -8, scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        className="w-full rounded-[1.5rem] relative"
      >
        <motion.div
          animate={clickControls}
          onClick={handleClick}
          className="cursor-pointer w-full relative"
        >
          {/* Green ring on click — sibling of card so it isn't clipped */}
          <motion.div
            className="absolute inset-0 rounded-[1.5rem] border-2 border-green-400 pointer-events-none z-20"
            initial={{ scale: 1, opacity: 0 }}
            animate={ringControls}
          />

          <div className="cinematic-card w-full">
            <div className={`flex flex-col ${isAlternate ? 'md:flex-row-reverse' : ''}`}>

              {/* Image */}
              <div className={`relative p-4 md:p-6 lg:p-8 ${isAlternate ? 'md:w-1/2' : 'w-full'}`}>
                <div className={`relative rounded-2xl overflow-hidden shadow-sm ${isAlternate ? 'aspect-[4/3] md:aspect-auto md:min-h-[360px] md:h-full' : 'aspect-[16/9]'}`}>
                  <Image
                    src={withBasePath(image)}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    loading="lazy"
                    quality={85}
                    className={`object-cover ${objectPosition}`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${isAlternate ? 'md:w-1/2' : 'w-full'}`}>
                <h3
                  className="font-bold text-black leading-tight mb-3"
                  style={{ fontSize: 'var(--heading-card)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 leading-relaxed line-clamp-4 mb-6">
                  {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-100/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-green-600">View Details</span>
                  <svg
                    className="w-4 h-4 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
