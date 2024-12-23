import Image from 'next/image';

export default function ProjectCard({
 title,
 description,
 image,
 technologies,
 onClick,
}) {
 return (
  <div
   onClick={onClick}
   className="relative w-[350px] h-[500px] mx-4 cursor-pointer group"
  >
   {/* Image Container */}
   <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
    <Image
     src={image}
     alt={title}
     fill
     className="object-cover transition-transform duration-300 group-hover:scale-105"
    />

    {/* Overlay with content */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end text-white">
     <h3 className="text-2xl font-bold mb-2">{title}</h3>
     <p className="text-sm text-gray-200 line-clamp-3 mb-4">{description}</p>

     <div>
      <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
      <div className="flex flex-wrap gap-2">
       {technologies.map((tech, index) => (
        <span
         key={index}
         className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full"
        >
         {tech}
        </span>
       ))}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
