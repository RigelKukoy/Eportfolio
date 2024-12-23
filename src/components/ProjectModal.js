export default function ProjectModal({ project, isOpen, onClose }) {
 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 backdrop-blur-sm">
   <div className="min-h-screen px-4 text-center">
    <div className="fixed inset-0" onClick={onClose}></div>

    {/* Modal container */}
    <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
     {/* Header */}
     <div className="border-b border-gray-200 px-6 py-4">
      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
     </div>

     {/* Body */}
     <div className="px-6 py-4">
      <div className="relative w-full aspect-video mb-6">
       <img
        src={project.image}
        alt={project.title}
        className="rounded-lg object-cover w-full h-full"
       />
      </div>

      <div className="prose max-w-none mb-6">
       <p className="text-gray-600">{project.description}</p>
      </div>

      <div>
       <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
       <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
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

     {/* Footer */}
     <div className="border-t border-gray-200 px-6 py-4">
      <div className="flex justify-end gap-4">
       <button
        onClick={onClose}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
       >
        Close
       </button>
       <a
        href={project.ProjectLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600"
       >
        View Project
       </a>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
