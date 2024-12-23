'use client';

import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Projects() {
 const [selectedProject, setSelectedProject] = useState(null);

 // Project data array containing all project information
 const projects = [
  {
   title:
    'Optimising Square Root Count Sort using Message Passing Interface (MPI)',
   description:
    'This study focuses on enhancing the Square Root Counting Sort (SRCS) algorithm by integrating parallel processing techniques using the Message Passing Interface (MPI). The improved algorithm, Parallel SRCS, leverages multiple cores in modern computing systems to address the limitations of sequential SRCS in handling large datasets. Experimental results demonstrated that Parallel SRCS significantly outperforms traditional SRCS, Radix Sort, and Introspective Sort in both fixed-random and reverse-sorted datasets. On average, Parallel SRCS achieved performance improvements of 102.91% in fixed-random datasets and 124.22% in reverse-sorted datasets compared to SRCS. These findings highlight the efficiency and scalability of Parallel SRCS, making it highly suitable for big data applications.',
   image: '/Eportfolio/images/MPI.png',
   technologies: ['C++', 'MPI', 'Parrallel processing', 'Sorting algorithms'],
   ProjectLink: 'https://github.com/RigelKukoy/OptimizedSRCS',
  },
  {
   title: 'Sherlock vs Moriarty: goes to CDO Visual Novel',
   description:
    "Sherlock vs. Moriarty is an engaging visual novel where you step into the classic rivalry between the legendary detective Sherlock Holmes and the cunning Professor Moriarty. Built with the Ren'Py Visual Novel Engine, the game blends immersive storytelling, challenging fights, and impactful player choices that shape the outcome of this timeless battle of intellects",
   image: '/Eportfolio/images/Sherlock.jpg',
   technologies: ['Python', "Ren'Py"],
   ProjectLink: 'https://github.com/RigelKukoy/SherlockVsMoriartyVN',
  },
  {
   title: 'Visual Notes',
   description:
    'Visual Notes is a user-friendly app designed to connect busy individuals with trusted taskers for on-demand services like cleaning, shopping, and repairs. Leveraging AI-powered task matching, the platform ensures efficient, secure, and transparent service delivery while fostering trust and professionalism. /n The app addresses the challenges of work-life balance and service accessibility in the Philippines, providing clients with a reliable way to outsource tasks and freelancers with a flexible platform to earn. By bridging the gap between those in need of assistance and those offering their expertise, PagChore supports the growing gig economy, creating a productive ecosystem for all stakeholders.',
   image: '/Eportfolio/images/VisualNotes.png',
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

 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
   {
    breakpoint: 1280,
    settings: {
     slidesToShow: 2,
    },
   },
   {
    breakpoint: 768,
    settings: {
     slidesToShow: 1,
    },
   },
  ],
 };

 return (
  <section id="projects" className="py-20 bg-gray-50">
   <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">
     Featured Projects
    </h2>

    <div className="relative">
     <Slider {...settings}>
      {projects.map((project, index) => (
       <div key={index}>
        <ProjectCard {...project} onClick={() => setSelectedProject(project)} />
       </div>
      ))}
     </Slider>
    </div>
   </div>

   <ProjectModal
    project={selectedProject}
    isOpen={!!selectedProject}
    onClose={() => setSelectedProject(null)}
   />
  </section>
 );
}
