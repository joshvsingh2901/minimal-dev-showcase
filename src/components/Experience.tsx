
import { useState } from 'react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Co-Founder",
    company: "Lemur Leads",
    location: "Brampton, ON",
    date: "July 2023 - Aug. 2023",
    description: [
      "Analyzed market trends and financial metrics, securing four clients and generating 500 CAD in revenue by tailoring pitches to youthful consumer insights.",
      "Conducted client acquisition research via cold calling, email outreach, and in-person visits, increasing customer base by 400% (tracked via client onboarding records).",
      "Supported website development projects using Wix and Shopify, delivering functional sites for three small businesses."
    ]
  },
  {
    title: "Co-Lead, Tutoring Club",
    company: "St. Edmund Campion Secondary School",
    location: "Brampton, ON",
    date: "Sept. 2023 - June 2024",
    description: [
      "Promoted tutoring services at Parent Teacher Interviews and Grade 8 Nights, achieving record tutee sign-ups and increasing participation by 30% (measured by sign-up records).",
      "Managed scheduling and data tracking for 50+ tutors, ensuring 100% session coverage (verified by scheduling logs) through efficient project coordination.",
      "Tutored Maths, Accounting, and Physics, improving student grades by an average of 15% (assessed via grade reports) by adapting to diverse learning needs."
    ]
  },
  {
    title: "Accounting Intern",
    company: "Jagesh Dang, CGA",
    location: "Brampton, ON",
    date: "June 2024 - Aug. 2024",
    description: [
      "Analyzed and processed 100+ income and expense entries monthly with 100% accuracy (confirmed by audit checks) using QuickBooks and Excel, supporting financial reporting.",
      "Managed payroll and accounts receivable/payable, reducing processing time by 20% (measured by time tracking) through optimized workflows.",
      "Collaborated with senior accountants in a fast-paced environment, enhancing communication to meet tight deadlines."
    ]
  },
  {
    title: "Badminton Team Captain",
    company: "St. Edmund Campion Secondary School",
    location: "Brampton, ON",
    date: "Sept. 2022 - June 2024",
    description: [
      "Led team to ROPSAA finals for two consecutive years, achieving top 5 ranking by organizing drills and tournaments.",
      "Coordinated practice sessions and matches for 15 players, improving team performance by 25% (evaluated by match win rates) through strategic planning with coach.",
      "Earned Best Male Badminton Athlete award, demonstrating discipline and pressure performance in high-stakes matches."
    ]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-4">
            <span className="text-accent font-mono">02.</span>
            Where I've Worked
            <span className="h-[1px] bg-border w-full max-w-[300px]"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="border-l-2 border-border md:border-l-0 md:border-l-0 md:border-l-0 md:border-0">
            {experiences.map((exp, index) => (
              <button
                key={index}
                className={`block text-left py-3 px-4 w-full transition-colors ${
                  activeTab === index 
                    ? 'text-accent border-l-2 border-accent -ml-[2px] md:border-l-0 md:ml-0 md:border-b-2' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {exp.company.split(',')[0]}
              </button>
            ))}
          </div>
          
          <div className="md:col-span-3">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`space-y-4 ${activeTab === index ? 'block' : 'hidden'}`}
              >
                <h3 className="text-xl font-medium">
                  {exp.title} <span className="text-accent">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground font-mono">
                  {exp.date} | {exp.location}
                </p>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="pl-6 relative">
                      <span className="absolute left-0 top-2 w-2 h-2 bg-accent/70 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
