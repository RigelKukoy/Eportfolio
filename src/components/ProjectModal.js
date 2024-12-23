export default function ProjectModal({ project, isOpen, onClose }) {
 if (!isOpen) return null;

 return (
  <div className="fixed inset-0 z-50 overflow-hidden bg-black bg-opacity-75 backdrop-blur-sm">
   <div className="fixed inset-0 flex items-center justify-center p-4 sm:p-6">
    {/* Close overlay */}
    <div className="absolute inset-0" onClick={onClose}></div>

    {/* Modal container */}
    <div
     className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
     onClick={(e) => e.stopPropagation()}
    >
     {/* Header */}
     <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 pr-8">
       {project.title}
      </h3>
      <button
       onClick={onClose}
       className="p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100"
       aria-label="Close modal"
      >
       <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M6 18L18 6M6 6l12 12"
        />
       </svg>
      </button>
     </div>

     {/* Body */}
     <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-4">
       {/* Image container with aspect ratio */}
       <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
        <img
         src={project.image}
         alt={project.title}
         className="w-full h-full object-cover"
        />
       </div>

       {/* Description */}
       <div className="prose max-w-none">
        <p className="text-gray-600 whitespace-pre-wrap">
         {project.description}
        </p>
       </div>

       {/* Technologies */}
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
     </div>

     {/* Footer */}
     <div className="border-t border-gray-200 p-4">
      <div className="flex justify-end gap-3">
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
