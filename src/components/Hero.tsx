
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      window.scrollTo({
        top: projectsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/CV-Akhilesh-Datt.pdf'; // Path to CV
    link.download = 'Akhilesh-Datt-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center items-center pt-20 pb-10 px-6 relative">
      <div 
        ref={sectionRef}
        className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 animate-on-scroll z-10"
      >
        {/* Profile Image & Details */}
        <div className="w-full lg:w-2/5 flex flex-col items-center lg:items-start">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-pink via-cyber-purple to-cyber-green blur-md opacity-70 group-hover:opacity-90 transition-opacity animate-rotate-slow"></div>
            <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-2 border-cyber-pink p-1 glass-card relative z-10 shadow-xl">
              <img 
                src="/lovable-uploads/c25eec6c-e2ee-471a-8308-aab75da29118.png" 
                alt="Akhilesh Datt" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-cyber-pink flex items-center justify-center animate-pulse z-20">
              <span className="text-white text-xs font-bold">Pro</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <a 
              href="https://github.com/Akhilesh-Datt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass-card hover:bg-cyber-pink/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 text-cyber-pink" />
            </a>
            <a 
              href="https://linkedin.com/in/akhilesh-datt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass-card hover:bg-cyber-pink/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 text-cyber-pink" />
            </a>
          </div>
          
          <Button 
            className="px-6 py-2 glass-card hover:bg-cyber-pink/20 border-cyber-pink/50"
            variant="outline"
            onClick={downloadCV}
          >
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
        
        {/* Text Content */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-mono text-cyber-green mb-3 animate-pulse">
            <span className="inline-block">Hello, I'm</span>
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
            Akhilesh Datt
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-6 max-w-2xl">
            A passionate <span className="text-cyber-pink">cybersecurity expert</span> and 
            <span className="text-cyber-green"> web developer</span> with a focus on building secure, 
            elegant, and user-friendly digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
            <span className="px-3 py-1 text-sm glass-card text-cyber-pink">
              Cybersecurity
            </span>
            <span className="px-3 py-1 text-sm glass-card text-cyber-green">
              Full Stack
            </span>
            <span className="px-3 py-1 text-sm glass-card text-cyber-purple">
              UX/UI Design
            </span>
            <span className="px-3 py-1 text-sm glass-card text-cyber-pink">
              Cloud Computing
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="bg-cyber-pink hover:bg-cyber-pink/90 text-white"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="border-cyber-pink/30 hover:bg-cyber-pink/10"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce-slow z-10"
        onClick={scrollToProjects}
      >
        <ChevronDown className="w-8 h-8 text-cyber-pink" />
      </div>
    </section>
  );
};

export default Hero;
