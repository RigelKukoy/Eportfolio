"use client";
import Image from "next/image";
import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { withBasePath } from "../lib/basePath";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.84 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 290,
      damping: 24,
      mass: 0.85,
    },
  },
  exit: {
    opacity: 0,
    y: 24,
    scale: 0.93,
    transition: { duration: 0.22, ease: 'easeIn' },
  },
};

const contentStagger = {
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const contentItem = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open to prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-50 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 sm:backdrop-blur-sm"
            variants={overlayVariants}
            onClick={onClose}
          />

          {/* Centering wrapper */}
          <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6 pointer-events-none">
            {/* Modal container — wider to match cinematic cards */}
            <motion.div
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] pointer-events-auto border border-gray-100"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Green accent bar at top */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-500 to-green-600 z-10" />

              {/* Header */}
              <div className="flex items-center justify-between p-5 md:p-6 border-b border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-black pr-8 leading-tight">
                  {project.title}
                </h3>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-black rounded-full hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Body — staggered content reveal */}
              <motion.div
                className="flex-1 overflow-y-auto p-5 md:p-8"
                variants={contentStagger}
                initial="hidden"
                animate="visible"
              >
                <div className="space-y-6">
                  {/* Image container with aspect ratio */}
                  <motion.div
                    className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-50"
                    variants={contentItem}
                  >
                    <Image
                      src={withBasePath(project.image)}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      quality={90}
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.div className="prose max-w-none" variants={contentItem}>
                    <p className="text-gray-500 whitespace-pre-wrap leading-relaxed text-base">
                      {project.description}
                    </p>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div variants={contentItem}>
                    <h4 className="font-semibold text-black mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3.5 py-1.5 text-sm font-medium bg-green-50 text-green-700 rounded-full border border-green-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="border-t border-gray-100 p-5 md:p-6"
                variants={contentItem}
              >
                <div className="flex justify-end gap-3">
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 text-sm font-medium text-gray-600 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    Close
                  </button>
                  <a
                    href={project.ProjectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-green-500 rounded-full hover:bg-green-600 transition-all duration-300 hover:shadow-md hover:shadow-green-500/20 hover-shimmer"
                  >
                    View Project
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
