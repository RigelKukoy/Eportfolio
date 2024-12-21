'use client';
import { useState } from 'react';

export default function ContactForm() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
 });
 const [submitted, setSubmitted] = useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const response = await fetch('https://formspree.io/f/movvadrn', {
    method: 'POST',
    headers: {
     'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   });

   if (response.ok) {
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000); // Reset success message after 5 seconds
   }
  } catch (error) {
   console.error('Error submitting form:', error);
  }
 };

 return (
  <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
   {submitted && (
    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
     Thank you for your message! I'll get back to you soon.
    </div>
   )}

   <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
     Name
    </label>
    <input
     type="text"
     id="name"
     name="name"
     className="mt-1 block w-full rounded-md bg-white border border-gray-200 text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
     required
     value={formData.name}
     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    />
   </div>

   <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
     Email
    </label>
    <input
     type="email"
     id="email"
     name="email"
     className="mt-1 block w-full rounded-md bg-white border border-gray-200 text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
     required
     value={formData.email}
     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
    />
   </div>

   <div>
    <label
     htmlFor="message"
     className="block text-sm font-medium text-gray-700"
    >
     Message
    </label>
    <textarea
     id="message"
     name="message"
     rows="4"
     className="mt-1 block w-full rounded-md bg-white border border-gray-200 text-gray-900 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
     required
     value={formData.message}
     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
    ></textarea>
   </div>

   <button
    type="submit"
    className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white disabled:opacity-50"
    disabled={submitted}
   >
    {submitted ? 'Sent!' : 'Send Message'}
   </button>
  </form>
 );
}
