
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 relative glass border-t border-foreground/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-mono font-semibold mb-3 text-cyber-green">
              A<span className="text-cyber-pink">.</span>Datt
            </h3>
            <p className="text-sm text-foreground/70">
              &copy; {currentYear} Akhilesh Datt. All rights reserved.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="mb-8 md:mb-0 text-center">
            <p className="text-sm text-foreground/70 mb-2">
              Jalandhar, Punjab, India
            </p>
            <a 
              href="mailto:akhileshdatt093@gmail.com" 
              className="text-sm text-cyber-pink hover:underline"
              aria-label="Email me"
            >
              akhileshdatt093@gmail.com
            </a>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/Akhilesh-Datt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass-card hover:bg-cyber-pink/10 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-cyber-pink" />
            </a>
            <a 
              href="https://linkedin.com/in/Profile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 glass-card hover:bg-cyber-pink/10 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-cyber-pink" />
            </a>
            <a 
              href="mailto:akhileshdatt093@gmail.com"
              className="p-2 glass-card hover:bg-cyber-pink/10 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-cyber-pink" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 glass-card rounded-full hover:bg-cyber-pink/20 transition-all"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-cyber-pink" />
      </button>
    </footer>
  );
};

export default Footer;
