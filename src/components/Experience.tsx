
import { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Briefcase } from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Meta Frontend & Backend Development & React",
    issuer: "Coursera",
    date: "Dec 2024-Jan 2025",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "Prompt Engineering",
    issuer: "IBM",
    date: "Jan 2025",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "Amazon AWS",
    issuer: "Coursera",
    date: "Dec 2024-Jan 2025",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "Cyber Security",
    issuer: "CyperSchool",
    date: "June-July 2024",
    icon: <Award className="h-5 w-5" />,
  },
];

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  date: string;
}

const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    institution: "Lovely Professional University",
    location: "Jalandhar, Punjab",
    date: "Sep 2022 - present",
  },
  {
    id: 2,
    degree: "Higher Secondary Education (XII)",
    institution: "Lucknow Public School",
    location: "Lucknow, U.P.",
    date: "2021",
  },
];

const Experience = () => {
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
      id="experience" 
      className="py-20 px-6 relative bg-gradient-to-b from-background/70 to-background"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-cyber-purple text-sm uppercase tracking-widest">
            My Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-cyber-purple mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="glass-card p-8">
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-full bg-cyber-green/20 mr-4">
                <GraduationCap className="h-6 w-6 text-cyber-green" />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-cyber-green/30">
              {education.map((item, i) => (
                <div 
                  key={item.id} 
                  className={`relative pb-10 ${i === education.length - 1 ? 'pb-0' : ''}`}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyber-green transform -translate-x-1.5"></div>
                  <div className="glass-card p-6 ml-4">
                    <h4 className="text-lg font-semibold mb-1">{item.degree}</h4>
                    <p className="text-foreground/70 mb-2">{item.institution}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">{item.location}</span>
                      <Badge variant="outline" className="text-xs">{item.date}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div className="glass-card p-8">
            <div className="flex items-center mb-8">
              <div className="p-2 rounded-full bg-cyber-purple/20 mr-4">
                <Briefcase className="h-6 w-6 text-cyber-purple" />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            
            <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-cyber-purple/30">
              {certifications.map((item, i) => (
                <div 
                  key={item.id} 
                  className={`relative pb-10 ${i === certifications.length - 1 ? 'pb-0' : ''}`}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-cyber-purple transform -translate-x-1.5"></div>
                  <div className="glass-card p-6 ml-4">
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <p className="text-foreground/70 mb-2">Issued by: {item.issuer}</p>
                    <Badge variant="outline" className="text-xs">{item.date}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
