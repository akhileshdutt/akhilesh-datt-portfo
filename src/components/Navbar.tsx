
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 20);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-6 md:px-12 py-4 
        ${scrolled ? 'glass backdrop-blur-lg bg-background/80' : 'bg-transparent'}`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <h1 className="text-xl md:text-2xl font-mono font-semibold text-cyber-green">
            <span className="text-cyber-pink">Akhilesh</span>Datt
          </h1>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('home')} 
            className="text-foreground/80 hover:text-cyber-pink transition-all">
            Home
          </button>
          <button onClick={() => scrollToSection('projects')} 
            className="text-foreground/80 hover:text-cyber-pink transition-all">
            Projects
          </button>
          <button onClick={() => scrollToSection('skills')} 
            className="text-foreground/80 hover:text-cyber-pink transition-all">
            Skills
          </button>
          <button onClick={() => scrollToSection('experience')} 
            className="text-foreground/80 hover:text-cyber-pink transition-all">
            Experience
          </button>
          <button onClick={() => scrollToSection('contact')} 
            className="text-foreground/80 hover:text-cyber-pink transition-all">
            Contact
          </button>
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="mr-2"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass mt-4 rounded-xl p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} 
              className="text-foreground/80 hover:text-cyber-pink transition-all p-2">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} 
              className="text-foreground/80 hover:text-cyber-pink transition-all p-2">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} 
              className="text-foreground/80 hover:text-cyber-pink transition-all p-2">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} 
              className="text-foreground/80 hover:text-cyber-pink transition-all p-2">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} 
              className="text-foreground/80 hover:text-cyber-pink transition-all p-2">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
