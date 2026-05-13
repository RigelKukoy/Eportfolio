'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const handleScroll = (e, href) => {
    // Let native CSS smooth scrolling handle the scroll, just close the mobile menu
    setIsOpen(false);
  };

  // Scroll-aware shadow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'contact'];
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${id}`);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 inset-x-0 z-50 sm:top-4 pointer-events-none flex justify-center"
    >
      <motion.div
        layout
        className={`pointer-events-auto w-full sm:w-auto sm:max-w-2xl overflow-hidden transition-colors duration-500 rounded-none sm:rounded-full ${
          scrolled || isOpen ? 'bg-white/95 backdrop-blur-xl shadow-md sm:glass-pill-scrolled sm:shadow-lg sm:shadow-black/5' : 'bg-white/70 backdrop-blur-md sm:glass-pill sm:shadow-sm'
        }`}
      >
        {/* Mobile Header (Only visible on small screens) */}
        <div className="sm:hidden flex items-center justify-between px-6 py-4">
          <div className="font-bold text-base tracking-wide text-gray-900">
            {navLinks.find((link) => link.href === activeSection)?.label || 'Portfolio'}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 focus:outline-none flex flex-col justify-center items-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-gray-900 block rounded-full origin-center transition-transform"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-[2px] bg-gray-900 block rounded-full transition-opacity"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-[2px] bg-gray-900 block rounded-full origin-center transition-transform"
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="sm:hidden flex flex-col px-4 pb-4 gap-1 border-t border-gray-100"
            >
              {navLinks.map(({ href, label }) => {
                const isActive = activeSection === href;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleScroll(e, href)}
                    className={`px-4 py-3 rounded-xl text-[15px] font-semibold tracking-wide transition-colors ${
                      isActive
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu (Hidden on mobile) */}
        <div className="hidden sm:flex items-center justify-center gap-2 p-2">
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleScroll(e, href)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-600 hover:text-black'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator-desktop"
                    className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-md shadow-green-500/20"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </a>
            );
          })}
        </div>
      </motion.div>
    </motion.nav>
  );
}
