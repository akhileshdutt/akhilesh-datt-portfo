
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Sundown Studio",
    description: "Developed a pixel-perfect clone of the Sundown Studio website using HTML, CSS, JavaScript, and React, ensuring high design fidelity and accurate client vision representation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    githubUrl: "https://github.com/Akhilesh-Datt",
  },
  {
    id: 2,
    title: "Portfolio",
    description: "Developed a fully responsive and interactive personal portfolio website using HTML, CSS, and JavaScript, showcasing technical skills and design proficiency.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    tags: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Akhilesh-Datt",
    liveUrl: "https://portfolio-Akhilesh-Datt.netlify.app",
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
          <span className="text-cyber-blue text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-cyber-blue mx-auto mt-4 rounded-full"></div>
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
                    className="w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-cyber-blue/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-full glass hover:bg-cyber-blue/30 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyber-blue transition-colors">
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
                  className="text-cyber-blue hover:bg-cyber-blue/10 p-0 h-auto text-sm font-medium"
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
            className="border-cyber-blue/30 hover:bg-cyber-blue/10"
          >
            View All Projects <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
