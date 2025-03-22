
import { useEffect, useRef } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';
import { Terminal, Code, Database, Shield, Server } from 'lucide-react';

interface Skill {
  category: string;
  skills: Array<{ name: string; level: number }>;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  {
    category: "Programming & Web Development",
    skills: [
      { name: "C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 85 },
      { name: "Node.js", level: 80 },
    ],
    icon: <Code className="h-6 w-6" />,
    color: "#0ea5e9"
  },
  {
    category: "Database & Cloud Computing",
    skills: [
      { name: "MySQL", level: 80 },
      { name: "AWS", level: 70 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 65 },
      { name: "SQL", level: 85 },
    ],
    icon: <Database className="h-6 w-6" />,
    color: "#10b981"
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Network Security", level: 80 },
      { name: "Ethical Hacking", level: 70 },
      { name: "Cryptography", level: 65 },
      { name: "Security Auditing", level: 75 },
    ],
    icon: <Shield className="h-6 w-6" />,
    color: "#8b5cf6"
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Teamwork", level: 90 },
      { name: "Adaptability", level: 85 },
      { name: "Project Management", level: 80 },
      { name: "Problem Solving", level: 90 },
    ],
    icon: <Terminal className="h-6 w-6" />,
    color: "#ec4899"
  },
];

// Data for the radar chart
const radarData = [
  { subject: 'JavaScript', A: 90, fullMark: 100 },
  { subject: 'React', A: 85, fullMark: 100 },
  { subject: 'Node.js', A: 80, fullMark: 100 },
  { subject: 'Python', A: 75, fullMark: 100 },
  { subject: 'Cybersecurity', A: 80, fullMark: 100 },
  { subject: 'Cloud', A: 70, fullMark: 100 },
  { subject: 'SQL', A: 85, fullMark: 100 },
];

const Skills = () => {
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
      id="skills" 
      className="py-20 px-6 relative"
    >
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-cyber-green text-sm uppercase tracking-widest">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Skills & Proficiency
          </h2>
          <div className="w-20 h-1 bg-cyber-green mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Radar Chart */}
          <div className="glass-card p-6 h-80 md:h-96">
            <h3 className="text-xl font-semibold mb-4 text-center">Skill Overview</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: 'rgba(255, 255, 255, 0.7)', fontSize: 12 }} 
                />
                <Radar 
                  name="Skills" 
                  dataKey="A" 
                  stroke="#0ea5e9" 
                  fill="#0ea5e9" 
                  fillOpacity={0.3} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Skills List */}
          <div className="space-y-8">
            {skills.map((category, i) => (
              <div key={i} className="glass-card p-6 transition-all hover:shadow-lg">
                <div className="flex items-center mb-4">
                  <div 
                    className="p-2 rounded-full mr-3" 
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{skill.name}</span>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`, 
                            backgroundColor: category.color,
                            animation: 'animate-shimmer'
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
