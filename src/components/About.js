export default function About() {
 const skills = [
  'JavaScript (ES6+)',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Git',
  // Add more skills
 ];

 return (
  <section id="about" className=" w-full py-20 px-10 bg-MintGreen">
   <div className="max-w-4xl mx-auto ">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
    <div className="space-y-6 text-gray-600">
     <p>
      Hello! I'm a passionate frontend developer with a strong foundation in
      modern web technologies. I enjoy creating user-friendly interfaces and
      bringing designs to life through code.
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
        <h4 className="text-lg text-green-600">Your University</h4>
        <p className="text-gray-700">Bachelor's in Computer Science</p>
        <p className="text-gray-500">2019 - 2023</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}
