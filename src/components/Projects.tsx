
import { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, ExternalLink, X, CheckCircle, Radio } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  features?: string[];
  technology?: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website featuring interactive 3D elements, smooth animations, and a sleek dark theme. Built with React, Three.js, TailwindCSS and Typescript for a cybersecurity enthusiast and web developer.",
    image: "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2874&auto=format&fit=crop",
    tags: ["React", "Three.js", "TailwindCSS", "TypeScript"],
    features: [
      "Interactive 3D objects using Three.js and React Three Fiber",
      "Dark mode with pink and black theme",
      "Responsive design for all device sizes",
      "Animated section transitions",
      "Glass-morphic UI elements",
      "Working contact form",
      "Project showcase with modal details",
      "Skills and experience timeline"
    ],
    technology: "Built with React, TypeScript, TailwindCSS, Three.js, React Three Fiber, Shadcn/UI components, and Formspree for the contact form.",
    githubUrl: "https://github.com/Akhilesh-Datt",
    liveUrl: "https://akhilesh-datt.vercel.app",
  },
  {
    id: 2,
    title: "Sundown Studio",
    description: "Developed a pixel-perfect clone of the Sundown Studio website using HTML, CSS, JavaScript, and React, ensuring high design fidelity and accurate client vision representation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Akhilesh-Datt",
    liveUrl: "https://sundown-akhileshdutts-projects.vercel.app/",
  },
  {
    id: 3,
    title: "Password Strength Checker",
    description: "Developed a real-time password strength evaluator using JavaScript, categorizing passwords based on length, complexity (8+ characters, 3+ types), and crack time predictions to enhance security awareness.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    tags: ["JavaScript", "Security", "UI Design"],
    githubUrl: "https://github.com/Akhilesh-Datt",
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const viewAllProjects = () => {
    window.open('https://github.com/akhileshdutt?tab=repositories', '_blank');
  };

  const viewProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section 
      id="projects" 
      className="py-20 px-6 relative bg-gradient-to-b from-background to-background/70"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-cyber-pink text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-cyber-pink mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card group overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                
                {/* Project Links */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-cyber-pink/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-cyber-pink/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-pink transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-2 py-1 glass-card text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Details Button */}
                <Button
                  variant="ghost"
                  className="text-cyber-pink hover:bg-cyber-pink/10 p-0 h-auto text-sm font-medium"
                  onClick={() => viewProjectDetails(project)}
                >
                  View Details <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            className="border-cyber-pink/30 hover:bg-cyber-pink/10"
            onClick={viewAllProjects}
          >
            View All Projects <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl glass-card p-6 md:p-8 animate-fade-in max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-gradient">{selectedProject.title}</h2>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={closeProjectDetails}
                className="hover:bg-cyber-pink/10"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="mb-6 rounded-lg overflow-hidden">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <p className="text-foreground/80 mb-6">{selectedProject.description}</p>
            
            {selectedProject.features && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-cyber-pink shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedProject.technology && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Technology Stack</h3>
                <p className="text-foreground/80">{selectedProject.technology}</p>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 glass-card text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <a 
                href={selectedProject.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-cyber-pink hover:bg-cyber-pink/90">
                  <Github className="mr-2 h-4 w-4" /> View Code
                </Button>
              </a>
              
              {selectedProject.liveUrl && (
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-cyber-pink/30 hover:bg-cyber-pink/10">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
