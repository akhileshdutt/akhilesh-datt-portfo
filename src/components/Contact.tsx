
import { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);
      formData.append('to', 'akhileshdatt093@gmail.com');
      
      // Use a public email sending service (like Formspree, EmailJS, etc)
      const response = await fetch('https://formspree.io/f/moqgvvwa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          duration: 5000,
        });
        
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div 
        ref={sectionRef}
        className="container mx-auto animate-on-scroll"
      >
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-cyber-pink text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-cyber-pink mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Let's talk</h3>
            <p className="text-foreground/70 mb-8">
              Feel free to reach out for collaborations, project inquiries, 
              or just to say hello. I'd love to hear from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 glass-card rounded-full mr-4">
                  <Mail className="h-5 w-5 text-cyber-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/70 mb-1">Email</h4>
                  <a 
                    href="mailto:akhileshdatt093@gmail.com" 
                    className="text-cyber-pink hover:underline"
                  >
                    akhileshdatt093@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 glass-card rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-cyber-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/70 mb-1">Location</h4>
                  <p>Jalandhar, Punjab, India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 glass-card rounded-full mr-4">
                  <Phone className="h-5 w-5 text-cyber-pink" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground/70 mb-1">Phone</h4>
                  <a 
                    href="tel:+919118871435" 
                    className="text-cyber-pink hover:underline"
                  >
                    +91 9118871435
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  required
                  className="bg-background/50 border-foreground/10 focus:border-cyber-pink focus-visible:ring-1 focus-visible:ring-cyber-pink"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john.doe@example.com"
                  required
                  className="bg-background/50 border-foreground/10 focus:border-cyber-pink focus-visible:ring-1 focus-visible:ring-cyber-pink"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello, I'd like to discuss a project..."
                  required
                  rows={4}
                  className="bg-background/50 border-foreground/10 focus:border-cyber-pink focus-visible:ring-1 focus-visible:ring-cyber-pink resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-cyber-pink hover:bg-cyber-pink/90 text-white flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className={`h-4 w-4 ${isSubmitting ? 'animate-pulse' : 'animate-none'}`} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
