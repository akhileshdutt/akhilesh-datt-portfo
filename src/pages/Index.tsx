
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { useToast } from '@/hooks/use-toast';
import { ThreeScene } from '@/components/ThreeScene';

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();
  
  // Client-side only code
  useEffect(() => {
    setIsMounted(true);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe all elements with the animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // CV file preparation
  useEffect(() => {
    // Create URL for CV file
    console.log('CV file prepared for download');
    
    // Show a toast when the page is fully loaded
    if (isMounted) {
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my projects and skills.",
      });
    }
  }, [isMounted, toast]);

  // Don't render anything during SSR or first render
  if (!isMounted) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black">
        <div className="animate-pulse text-cyber-pink text-xl">Loading portfolio...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-foreground overflow-hidden">
      {isMounted && <ParticleBackground />}
      <ThreeScene />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
