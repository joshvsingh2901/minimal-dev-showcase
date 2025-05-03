
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container">
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="text-accent-foreground font-mono mb-2">Hi, my name is</p>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Joshveer Singh Chhabra.
          </h1>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build things for the web.
          </h2>
        </div>
        
        <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <p className="max-w-2xl text-muted-foreground mb-8">
            I'm a Computer Science and Business Administration student with experience in web development, client acquisition, and project coordination. Currently focused on building accessible, user-friendly digital experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
          <a 
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            View My Work
            <ArrowRight size={16} />
          </a>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:joshvsingh2901@gmail.com" 
              className="p-2 border border-border rounded-full hover:border-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/joshveer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-full hover:border-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 border border-border rounded-full hover:border-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
