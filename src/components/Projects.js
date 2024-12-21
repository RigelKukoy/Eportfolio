import ProjectCard from './ProjectCard';

export default function Projects() {
 const projects = [
  {
   title: 'Project 1',
   description:
    'A detailed description of your first project. Explain what problem it solves and what technologies you used.',
   image: '/project1.jpg', // Add project image to public folder
   technologies: ['React', 'Next.js', 'Tailwind CSS'],
   githubLink: 'https://github.com/yourusername/project1',
   liveLink: 'https://project1.com',
  },
  {
   title: 'Project 2',
   description:
    'Description of your second project. Highlight the key features and your role in development.',
   image: '/project2.jpg',
   technologies: ['TypeScript', 'Node.js', 'MongoDB'],
   githubLink: 'https://github.com/yourusername/project2',
  },
 ];

 return (
  <section id="projects" className="py-20">
   <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 mb-12">
     Featured Projects
    </h2>
    <div className="space-y-20">
     {projects.map((project, index) => (
      <ProjectCard key={index} {...project} />
     ))}
    </div>
   </div>
  </section>
 );
}
