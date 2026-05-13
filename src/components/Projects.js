"use client";

import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data array containing all project information
  const projects = [
    {
      title: "PrepPulse",
      description:
        "PrepPulse is a full-stack preparation and schedule management app built to help users stay on top of exams, meetings, and personal goals. Users can create schedules with tasks, track completion progress automatically calculated via PostgreSQL database triggers, and attach reference links and resources to each schedule. A live real-time countdown timer displays the time remaining to each event down to the second, while a responsive card grid with sorting by date or progress and a soft-delete archive system keeps everything organized.",
      image: "/images/PrepPulse.png",
      technologies: [
        "React",
        "Tailwind CSS",
        "Express.js",
        "PostgreSQL",
        "Docker",
      ],
      ProjectLink: "https://github.com/RigelKukoy/PrepPulse",
    },
    {
      title:
        "Optimising Square Root Count Sort using Message Passing Interface (MPI)",
      description:
        "This study focuses on enhancing the Square Root Counting Sort (SRCS) algorithm by integrating parallel processing techniques using the Message Passing Interface (MPI). The improved algorithm, Parallel SRCS, leverages multiple cores in modern computing systems to address the limitations of sequential SRCS in handling large datasets. Experimental results demonstrated that Parallel SRCS significantly outperforms traditional SRCS, Radix Sort, and Introspective Sort in both fixed-random and reverse-sorted datasets. On average, Parallel SRCS achieved performance improvements of 102.91% in fixed-random datasets and 124.22% in reverse-sorted datasets compared to SRCS. These findings highlight the efficiency and scalability of Parallel SRCS, making it highly suitable for big data applications.",
      image: "/images/MPI.png",
      technologies: [
        "C++",
        "MPI",
        "Parrallel processing",
        "Sorting algorithms",
      ],
      ProjectLink: "https://github.com/RigelKukoy/OptimizedSRCS",
    },
    {
      title: "Sherlock vs Moriarty: goes to CDO Visual Novel",
      description:
        "Sherlock vs. Moriarty is an engaging visual novel where you step into the classic rivalry between the legendary detective Sherlock Holmes and the cunning Professor Moriarty. Built with the Ren'Py Visual Novel Engine, the game blends immersive storytelling, challenging fights, and impactful player choices that shape the outcome of this timeless battle of intellects",
      image: "/images/Sherlock.jpg",
      technologies: ["Python", "Ren'Py"],
      ProjectLink: "https://github.com/RigelKukoy/SherlockVsMoriartyVN",
    },
    {
      title: "Visual Notes",
      description:
        "Visual Notes is a user-friendly app designed to connect busy individuals with trusted taskers for on-demand services like cleaning, shopping, and repairs. Leveraging AI-powered task matching, the platform ensures efficient, secure, and transparent service delivery while fostering trust and professionalism. /n The app addresses the challenges of work-life balance and service accessibility in the Philippines, providing clients with a reliable way to outsource tasks and freelancers with a flexible platform to earn. By bridging the gap between those in need of assistance and those offering their expertise, PagChore supports the growing gig economy, creating a productive ecosystem for all stakeholders.",
      image: "/images/VisualNotes.png",
      technologies: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Supabase",
        "OpenAI",
        "PostgreSQL",
      ],
      ProjectLink: "https://github.com/Illamapalooza/visualnote-ai",
    },
  ];

  return (
    <section id="projects" className="py-32 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Cinematic section header */}
        <ScrollReveal>
          <div className="max-w-5xl mx-auto text-center mb-20 md:mb-28">
            <div className="section-accent mx-auto"></div>
            <h2
              className="font-bold text-black tracking-tight mt-4"
              style={{ fontSize: 'var(--heading-section)' }}
            >
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-xl mx-auto">
              A curated selection of work spanning algorithms, interactive storytelling, and AI-powered applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Massive cinematic cards — single column, 70-80% width */}
        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={0.1} direction="up">
              <div className="group relative max-w-4xl mx-auto z-10">
                {/* Decorative project index number */}
                <div 
                  className="absolute -top-10 -left-4 md:-top-16 md:-left-12 project-index select-none z-20 opacity-80 md:opacity-100 drop-shadow-md pointer-events-none" 
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                <ProjectCard
                  {...project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            </ScrollReveal>
          ))}
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
