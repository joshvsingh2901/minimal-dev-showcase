
import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Joshveer Singh Chhabra | Portfolio";

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all fade-in sections
    document.querySelectorAll('.fade-in-section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <div className="fade-in-section">
          <About />
        </div>
        
        <div className="fade-in-section">
          <Experience />
        </div>
        
        <div className="fade-in-section">
          <Projects />
        </div>
        
        <div className="fade-in-section">
          <Skills />
        </div>
        
        <div className="fade-in-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Index;
