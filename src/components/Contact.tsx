
import { Mail, Phone, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container max-w-3xl text-center">
        <span className="text-accent font-mono">05. What's Next?</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground mb-8">
          I'm currently looking for new opportunities in software development, data analysis, and project management. Whether you have a question or just want to say hi, I'll do my best to get back to you!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a 
            href="mailto:joshvsingh2901@gmail.com"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
          >
            <Mail size={18} />
            Email Me
          </a>
          
          <a 
            href="https://linkedin.com/in/joshveer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-md transition-colors"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
          <a href="tel:+16475136661" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} />
            +1-647-513-6661
          </a>
          
          <a 
            href="https://www.lemurleads.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <ExternalLink size={16} />
            www.lemurleads.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
