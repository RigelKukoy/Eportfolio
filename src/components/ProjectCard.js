import Image from 'next/image';

export default function ProjectCard({
 title,
 description,
 image,
 technologies,
 ProjectLink,
}) {
 return (
  <div className="w-full bg-white rounded-lg overflow-hidden transform transition-all duration-300 shadow-lg hover:scale-[1.02] active:scale-[0.98] border border-green-100 cursor-pointer">
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
   </div>
  </div>
 );
}
