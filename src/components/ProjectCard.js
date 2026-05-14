'use client';

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useAnimation,
  useReducedMotion,
} from "framer-motion";

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

  // Plain div for scroll tracking — zero transforms here.
  // perspective on this element creates the 3-D rendering context for
  // the child's rotateX without causing the circular getBoundingClientRect loop.
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // ── Single spring on raw progress — one MotionValue ticking per frame ──────
  const springCfg = { stiffness: 90, damping: 26 };
  const smoothProgress = useSpring(scrollYProgress, springCfg);

  // All transforms derived from the same smoothed value (composite-only).
  const y       = useTransform(smoothProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [0, -56, 0]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [6, 0, -6]);
  const scale   = useTransform(smoothProgress, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [0.93, 1.04, 0.93]);

  // Shadow opacity animates composite-only (opacity on a div, not box-shadow on the card).
  const shadowRaisedOpacity = useTransform(smoothProgress, [0, 0.5, 1], prefersReducedMotion ? [0, 0, 0] : [0, 1, 0]);
  const shadowBaseOpacity   = useTransform(smoothProgress, [0, 0.5, 1], prefersReducedMotion ? [1, 1, 1] : [1, 0, 1]);

  // ── Click animation ───────────────────────────────────────────────────────
  const clickControls = useAnimation();
  const ringControls  = useAnimation();

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

  return (
    // Layer 0 — scroll tracking + 3-D perspective context. NO transforms here.
    <div
      ref={scrollRef}
      className="w-full"
      style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
    >
      {/* Layer 1 — all scroll-driven 3-D transforms live here */}
      <motion.div
        style={{ y, rotateX, scale, position: "relative" }}
        className="w-full rounded-[1.5rem]"
      >
        {/* Static base shadow — fades out as card rises */}
        <motion.div
          className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
          style={{
            opacity: shadowBaseOpacity,
            boxShadow: "0 2px 12px 0px rgba(0,0,0,0.06)",
          }}
        />
        {/* Raised shadow — fades in as card peaks */}
        <motion.div
          className="absolute inset-0 rounded-[1.5rem] pointer-events-none"
          style={{
            opacity: shadowRaisedOpacity,
            boxShadow: "0 48px 80px 0px rgba(0,0,0,0.20), 0 20px 48px 0px rgba(34,197,94,0.16)",
          }}
        />

        {/* Layer 2 — click interaction + scale punch */}
        <motion.div
          animate={clickControls}
          onClick={handleClick}
          className="cursor-pointer w-full relative"
        >
          {/* Green ring — sibling of cinematic-card so it isn't clipped by overflow:hidden */}
          <motion.div
            className="absolute inset-0 rounded-[1.5rem] border-2 border-green-400 pointer-events-none z-20"
            initial={{ scale: 1, opacity: 0 }}
            animate={ringControls}
          />

          {/* cinematic-card has no box-shadow; shadow divs on Layer 1 own it */}
          <div className="cinematic-card w-full">
            <div className={`flex flex-col ${isAlternate ? 'md:flex-row-reverse' : ''}`}>

              {/* Image */}
              <div className={`relative p-4 md:p-6 lg:p-8 ${isAlternate ? 'md:w-1/2' : 'w-full'}`}>
                <div className={`relative rounded-2xl overflow-hidden shadow-sm ${isAlternate ? 'aspect-[4/3] md:aspect-auto md:min-h-[360px] md:h-full' : 'aspect-[16/9]'}`}>
                  <Image
                    src={image}
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
    </div>
  );
}
