
import { Github, ExternalLink } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Website Development Projects",
    description: "Delivered functional websites for three small businesses using Wix and Shopify platforms. Implemented responsive designs, e-commerce functionality, and custom branding elements to meet client requirements.",
    tags: ["Wix", "Shopify", "Web Development", "UI/UX Design"],
    github: "https://github.com",
    demo: "https://www.lemurleads.com"
  },
  {
    title: "Tutoring Management System",
    description: "Built a system to manage scheduling and data tracking for 50+ tutors, ensuring 100% session coverage. Implemented features for resource allocation, student-tutor matching, and progress tracking.",
    tags: ["Project Management", "Data Tracking", "Google Suite"],
    github: "https://github.com"
  },
  {
    title: "Financial Reporting Tool",
    description: "Developed a tool using QuickBooks and Excel for processing 100+ income and expense entries monthly. Automated reporting workflows, reducing processing time by 20%.",
    tags: ["QuickBooks", "Excel", "Financial Analysis", "Automation"],
    github: "https://github.com"
  },
  {
    title: "Birdhouse Project",
    description: "Designed and built a sustainable birdhouse using recycled materials within budget constraints. Project earned a Certificate of Recognition from Canada Service Corps.",
    tags: ["Sustainable Design", "Project Planning", "Recycled Materials"],
    github: "https://github.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-4">
            <span className="text-accent font-mono">03.</span>
            Some Things I've Built
            <span className="h-[1px] bg-border w-full max-w-[300px]"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-muted-foreground hover:text-accent transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1 text-muted-foreground hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs font-mono py-1 px-2 bg-secondary text-secondary-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            View More Projects
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
