
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";

const Index = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Update document title
    document.title = "Joshveer Singh Chhabra | Portfolio";

    // Mark page as loaded
    setPageLoaded(true);

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

    // Add parallax effect to elements with parallax class
    const handleParallax = () => {
      document.querySelectorAll('.parallax').forEach(element => {
        // Properly type the element as HTMLElement to access style property
        const htmlElement = element as HTMLElement;
        const speed = parseFloat(element.getAttribute('data-speed') || '0.1');
        const yPos = window.scrollY * speed;
        htmlElement.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <>
      <LoadingScreen />
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

      {/* Floating elements for visual interest */}
      {pageLoaded && (
        <>
          <div className="fixed top-[10%] left-[5%] w-24 h-24 rounded-full bg-accent/5 animate-float" style={{animationDelay: '0.5s'}}></div>
          <div className="fixed top-[40%] right-[7%] w-32 h-32 rounded-full bg-accent/5 animate-float" style={{animationDelay: '1.2s'}}></div>
          <div className="fixed bottom-[15%] left-[12%] w-16 h-16 rounded-full bg-accent/5 animate-float" style={{animationDelay: '0.8s'}}></div>
        </>
      )}
    </>
  );
};

export default Index;
