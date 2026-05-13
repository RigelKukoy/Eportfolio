'use client';
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// Form field configuration
const inputFields = [
  { name: 'name', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
];

// Hoisted outside component to avoid re-creation on every render
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Form handlers
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/movvadrn', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = useCallback((e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <motion.form
      {...fadeIn}
      className="space-y-5 max-w-2xl mx-auto"
      onSubmit={handleSubmit}
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 text-sm text-green-700 bg-green-50 rounded-xl border border-green-100"
        >
          Thank you for your message! I&apos;ll get back to you soon.
        </motion.div>
      )}

      {inputFields.map(({ name, type, label }) => (
        <div key={name} className="input-focus-line">
          <label className="block text-sm font-medium text-gray-500 mb-1.5">{label}</label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            className="block w-full rounded-xl bg-gray-50 border border-gray-100 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all duration-300 text-base"
            required
          />
        </div>
      ))}

      <div className="input-focus-line">
        <label className="block text-sm font-medium text-gray-500 mb-1.5">Message</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-xl bg-gray-50 border border-gray-100 text-black px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-400 transition-all duration-300 resize-none text-base"
          required
        />
      </div>

      <motion.button
        type="submit"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-4 py-3.5 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 disabled:opacity-50 font-medium text-base hover-shimmer"
        disabled={submitted}
      >
        {submitted ? 'Sent!' : 'Send Message'}
      </motion.button>
    </motion.form>
  );
}
