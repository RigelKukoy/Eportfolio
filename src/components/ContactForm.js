'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Form field configuration
const inputFields = [
 { name: 'name', type: 'text', label: 'Name' },
 { name: 'email', type: 'email', label: 'Email' },
];

export default function ContactForm() {
 const [formData, setFormData] = useState({ name: '', email: '', message: '' });
 const [submitted, setSubmitted] = useState(false);

 // Animation configurations
 const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
 };

 const hoverScale = {
  whileHover: { scale: 1.01 },
  transition: { duration: 0.2 },
 };

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

 const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 return (
  <motion.form
   {...fadeIn}
   className="space-y-6 max-w-2xl mx-auto"
   onSubmit={handleSubmit}
  >
   {submitted && (
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     className="p-4 text-sm text-green-700 bg-green-100 rounded-lg"
    >
     Thank you for your message! I&apos;ll get back to you soon.
    </motion.div>
   )}

   {inputFields.map(({ name, type, label }) => (
    <motion.div key={name} {...hoverScale}>
     <label className="block text-sm font-medium text-gray-700">{label}</label>
     <input
      type={type}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      className="mt-1 block w-full rounded-md bg-white border border-gray-200 text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      required
     />
    </motion.div>
   ))}

   <motion.div {...hoverScale}>
    <label className="block text-sm font-medium text-gray-700">Message</label>
    <textarea
     name="message"
     rows="4"
     value={formData.message}
     onChange={handleChange}
     className="mt-1 block w-full rounded-md bg-white border border-gray-200 text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
     required
    />
   </motion.div>

   <motion.button
    type="submit"
    whileTap={{ scale: 0.98 }}
    className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
    disabled={submitted}
   >
    {submitted ? 'Sent!' : 'Send Message'}
   </motion.button>
  </motion.form>
 );
}
