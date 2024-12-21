import ContactForm from './ContactForm';

export default function Contact() {
 return (
  <section id="contact" className="relative py-20 w-full">
   <div className="absolute inset-0 w-full">
    <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50">
     <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
     <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
     <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>
   </div>

   <div className="relative max-w-4xl mx-auto px-4">
    <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Get In Touch
     </h2>
     <p className="text-gray-600 text-center mb-12">
      I'm currently open for opportunities. Whether you have a question or just
      want to say hi, I'll try my best to get back to you!
     </p>
     <ContactForm />
    </div>
   </div>
  </section>
 );
}
