import Image from 'next/image';

export default function ProjectCard({
 title,
 description,
 image,
 technologies,
 githubLink,
}) {
 return (
  <div className="w-full bg-white rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border border-green-100">
   <div className="relative aspect-video">
    <Image src={image} alt={title} fill className="object-cover" />
   </div>

   <div className="p-6">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>

    <div className="mb-4">
     <h4 className="text-sm font-semibold text-green-600 mb-2">
      Technologies Used:
     </h4>
     <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
       <span
        key={index}
        className="px-3 py-1 text-sm bg-green-50 text-gray-700 rounded-full"
       >
        {tech}
       </span>
      ))}
     </div>
    </div>

    <div className="flex space-x-4">
     <a
      href={githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
     >
      GitHub
     </a>
    </div>
   </div>
  </div>
 );
}
