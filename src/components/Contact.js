'use client';

import ContactForm from './ContactForm';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 flex items-center justify-center"
    >
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-white"></div>

      <div className="relative w-full max-w-4xl mx-auto px-6 md:px-12">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 shadow-lg shadow-black/[0.03] border border-gray-100 relative overflow-hidden">
            {/* Top accent gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-500 to-green-600"></div>

            <div className="text-center mb-14">
              <div className="section-accent mx-auto"></div>
              <h2
                className="font-bold text-black tracking-tight mb-4"
                style={{ fontSize: 'var(--heading-section)' }}
              >
                Let&apos;s Work Together
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
                I&apos;m currently open for opportunities. Whether you have a question or just
                want to say hi, I&apos;ll try my best to get back to you.
              </p>
            </div>
            <ContactForm />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
