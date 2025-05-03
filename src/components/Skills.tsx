
interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Software",
    skills: ["QuickBooks", "Excel (Advanced)", "Wix", "Shopify", "Google Suite"]
  },
  {
    name: "Business Skills",
    skills: ["Financial Analysis", "Data Management", "Client Acquisition", "Digital Marketing", "Website Development", "Project Coordination"]
  },
  {
    name: "Languages",
    skills: ["English", "Hindi", "Punjabi", "Urdu"]
  },
  {
    name: "Programming",
    skills: ["HTML/CSS", "JavaScript", "ReactJS", "TypeScript", "Tailwind CSS"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-4">
            <span className="text-accent font-mono">04.</span>
            My Skills
            <span className="h-[1px] bg-border w-full max-w-[300px]"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-accent">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="py-2 px-3 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
