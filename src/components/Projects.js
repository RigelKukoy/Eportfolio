'use client';

import ProjectCard from './ProjectCard';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import Image from 'next/image';

export default function Projects() {
 // Project data array containing all project information
 const projects = [
  {
   title:
    'Optimising Square Root Count Sort using Message Passing Interface (MPI)',
   description:
    'This study focuses on enhancing the Square Root Counting Sort (SRCS) algorithm by integrating parallel processing techniques using the Message Passing Interface (MPI). The improved algorithm, Parallel SRCS, leverages multiple cores in modern computing systems to address the limitations of sequential SRCS in handling large datasets. Experimental results demonstrated that Parallel SRCS significantly outperforms traditional SRCS, Radix Sort, and Introspective Sort in both fixed-random and reverse-sorted datasets. On average, Parallel SRCS achieved performance improvements of 102.91% in fixed-random datasets and 124.22% in reverse-sorted datasets compared to SRCS. These findings highlight the efficiency and scalability of Parallel SRCS, making it highly suitable for big data applications.',
   image: '/public/images/MPI.png',
   technologies: ['C++', 'MPI', 'Parrallel processing', 'Sorting algorithms'],
   ProjectLink: 'https://github.com/RigelKukoy/OptimizedSRCS',
  },
  {
   title: 'Sherlock vs Moriarty: goes to CDO Visual Novel',
   description:
    "Sherlock vs. Moriarty is an engaging visual novel where you step into the classic rivalry between the legendary detective Sherlock Holmes and the cunning Professor Moriarty. Built with the Ren'Py Visual Novel Engine, the game blends immersive storytelling, challenging fights, and impactful player choices that shape the outcome of this timeless battle of intellects",
   image: '/public/images/Sherlock.jpg',
   technologies: ['Python', "Ren'Py"],
   ProjectLink: 'https://github.com/RigelKukoy/SherlockVsMoriartyVN',
  },
  {
   title: 'Visual Notes',
   description:
    'Visual Notes is a user-friendly app designed to connect busy individuals with trusted taskers for on-demand services like cleaning, shopping, and repairs. Leveraging AI-powered task matching, the platform ensures efficient, secure, and transparent service delivery while fostering trust and professionalism. /n The app addresses the challenges of work-life balance and service accessibility in the Philippines, providing clients with a reliable way to outsource tasks and freelancers with a flexible platform to earn. By bridging the gap between those in need of assistance and those offering their expertise, PagChore supports the growing gig economy, creating a productive ecosystem for all stakeholders.',
   image: '/public/images/VisualNotes.png',
   technologies: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'Supabase',
    'OpenAI',
    'PostgreSQL',
   ],
   ProjectLink: 'https://github.com/Illamapalooza/visualnote-ai',
  },
 ];

 const [openModal, setOpenModal] = useState(false);
 const [selectedProject, setSelectedProject] = useState(null);

 const handleProjectClick = (project) => {
  setSelectedProject(project);
  setOpenModal(true);
 };

 return (
  <>
   <section id="projects" className="py-20">
    <div className="max-w-6xl mx-auto">
     <h2 className="text-3xl font-bold text-gray-800 mb-12">
      Featured Projects
     </h2>
     <div className="space-y-20">
      {projects.map((project, index) => (
       <div key={index} onClick={() => handleProjectClick(project)}>
        <ProjectCard {...project} />
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Project details modal */}
   <Modal
    className="backdrop-blur-md bg-black bg-opacity-75 !p-0 fixed inset-0"
    dismissible
    show={openModal}
    onClose={() => setOpenModal(false)}
    size="4xl"
    position="center"
   >
    <div className="fixed inset-0 overflow-y-auto">
     <div className="flex min-h-full items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg flex flex-col max-h-[calc(100vh-1rem)]">
       <Modal.Header className="border-b border-gray-200 p-3 sm:p-4 flex-shrink-0">
        <h3 className="text-base sm:text-lg font-semibold break-words">
         {selectedProject?.title}
        </h3>
       </Modal.Header>

       <Modal.Body className="p-3 sm:p-4 overflow-y-auto">
        <div className="space-y-3 sm:space-y-4">
         <div className="relative w-full aspect-[16/10] sm:aspect-video bg-gray-100 rounded-lg">
          {selectedProject?.image && (
           <Image
            src={selectedProject.image}
            alt={selectedProject.title}
            fill
            className="object-contain rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
           />
          )}
         </div>

         <div className="prose prose-sm sm:prose-base max-w-none">
          <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
           {selectedProject?.description}
          </p>
         </div>

         <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
           Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
           {selectedProject?.technologies.map((tech, index) => (
            <span
             key={index}
             className="px-2.5 py-1 text-xs bg-green-50 text-gray-700 rounded-full"
            >
             {tech}
            </span>
           ))}
          </div>
         </div>
        </div>
       </Modal.Body>

       <Modal.Footer className="border-t border-gray-200 p-3 sm:p-4 flex-shrink-0">
        <a
         href={selectedProject?.ProjectLink}
         target="_blank"
         rel="noopener noreferrer"
         className="block w-full px-3 sm:px-4 py-2 bg-green-500 text-white text-center rounded hover:bg-green-600 transition-colors text-sm sm:text-base"
        >
         View Project
        </a>
       </Modal.Footer>
      </div>
     </div>
    </div>
   </Modal>
  </>
 );
}
