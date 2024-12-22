export default function About() {
 const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Git',
  'Python',
 ];

 return (
  <section id="about" className=" w-full py-20 px-10 bg-MintGreen">
   <div className="max-w-4xl mx-auto ">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
    <div className="space-y-6 text-gray-600">
     <p>
      Hello! I&apos;m Rigel Ray O. Cabaya, a Computer Science student from the
      University of Science and Technology of the Philippines.💻 I&apos;m
      passionate about exploring the world of technology, from learning
      algorithms 🧠 to building innovative projects that solve real problems. 🚀
     </p>

     <p>
      I'm particularly interested in web development, where I enjoy creating
      beautiful and functional web experiences. Whether I&apos;m collaborating
      with a people🤝 or tackling coding challenges 🖥️, I enjoy turning ideas
      into practical solutions. As someone who believes in constant learning 📚,
      I aim to grow with every project I take on and contribute meaningfully to
      the tech world. 🌐
     </p>

     <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
       Skills & Technologies
      </h3>
      <div className="flex flex-wrap gap-3">
       {skills.map((skill, index) => (
        <span
         key={index}
         className="px-4 py-2 bg-green-50 rounded-full text-sm text-gray-700"
        >
         {skill}
        </span>
       ))}
      </div>
     </div>

     <div>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Education</h3>
      <div className="space-y-4">
       <div>
        <h4 className="text-lg text-green-600">
         University of Science and Technology if the Philippines
        </h4>
        <p className="text-gray-700">Bachelor&apos;s in Computer Science</p>
        <p className="text-gray-500">2022 - Present</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
