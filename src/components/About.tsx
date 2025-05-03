
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-4">
            <span className="text-accent font-mono">01.</span>
            About Me
            <span className="h-[1px] bg-border w-full max-w-[300px]"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <p>
              Hello! I'm Joshveer, a dual-degree student pursuing Computer Science at the University of Waterloo and Business Administration at Wilfrid Laurier University. My educational journey combines technical expertise with business acumen.
            </p>
            
            <p>
              I have hands-on experience in entrepreneurship as a Co-Founder of Lemur Leads, where I've helped secure clients and generate revenue by analyzing market trends and tailoring pitches to consumer insights. My experience spans client acquisition, website development, and project coordination.
            </p>
            
            <p>
              Beyond my professional work, I've served as a Co-Lead for a tutoring club and as Badminton Team Captain, demonstrating my leadership abilities and dedication to community involvement. I'm also passionate about sustainable initiatives through my volunteer work with Youth in Action-Credit Connections.
            </p>
            
            <p>
              I'm constantly looking to apply my diverse skill set to create innovative solutions and drive meaningful impact.
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-md overflow-hidden border-2 border-accent p-2 relative z-10">
              <img 
                src="/lovable-uploads/6956dff7-1309-4db9-a0a3-30197ed69309.png" 
                alt="Joshveer Singh Chhabra" 
                className="rounded grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full border-2 border-accent rounded-md -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
