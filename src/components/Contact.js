import ContactForm from './ContactForm';

export default function Contact() {
 return (
  <section id="contact" className="py-20">
   <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
     Get In Touch
    </h2>
    <p className="text-gray-600 text-center mb-12">
     I'm currently open for opportunities. Whether you have a question or just
     want to say hi, I'll try my best to get back to you!
    </p>
    <ContactForm />
   </div>
  </section>
 );
}
