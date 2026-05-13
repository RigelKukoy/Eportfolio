'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  index = 0,
  onClick,
  objectPosition = "object-center",
}) {
  // Force alternate layout for all cards (Sherlock vs Moriarty style)
  const isAlternate = true;

  return (
    <motion.div
      onClick={onClick}
      className="cinematic-card cursor-pointer w-full"
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`flex flex-col ${isAlternate ? 'md:flex-row-reverse' : ''}`}>
        {/* Image Container */}
        <div className={`relative p-4 md:p-6 lg:p-8 ${isAlternate ? 'md:w-1/2' : 'w-full'}`}>
          <div className={`relative rounded-2xl overflow-hidden shadow-sm ${isAlternate ? 'aspect-[4/3] md:aspect-auto md:min-h-[360px] md:h-full' : 'aspect-[16/9]'}`}>
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 896px"
              loading="lazy"
              quality={85}
              className={`object-cover ${objectPosition} transition-transform duration-700 ease-out group-hover:scale-105`}
            />
          </div>
        </div>

        {/* Content area */}
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

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-xs font-medium bg-green-50 text-green-700 rounded-full border border-green-100/80 transition-colors duration-300 group-hover:border-green-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View details indicator */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-1 group-hover:translate-y-0">
            <span className="text-sm font-medium text-green-600">
              View Details
            </span>
            <svg
              className="w-4 h-4 text-green-600 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
