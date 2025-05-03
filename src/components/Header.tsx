
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold font-mono">
          Joshveer.dev
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <a href="#about" className="text-sm hover:text-accent transition-colors">About</a>
            </li>
            <li>
              <a href="#experience" className="text-sm hover:text-accent transition-colors">Experience</a>
            </li>
            <li>
              <a href="#projects" className="text-sm hover:text-accent transition-colors">Projects</a>
            </li>
            <li>
              <a href="#skills" className="text-sm hover:text-accent transition-colors">Skills</a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t">
          <ul className="container py-4 flex flex-col space-y-4">
            <li>
              <a href="#about" className="block py-2" onClick={toggleMenu}>About</a>
            </li>
            <li>
              <a href="#experience" className="block py-2" onClick={toggleMenu}>Experience</a>
            </li>
            <li>
              <a href="#projects" className="block py-2" onClick={toggleMenu}>Projects</a>
            </li>
            <li>
              <a href="#skills" className="block py-2" onClick={toggleMenu}>Skills</a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="block py-2 px-4 bg-primary text-primary-foreground rounded-md w-fit"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
