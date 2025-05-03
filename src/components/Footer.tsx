
const Footer = () => {
  return (
    <footer className="py-6 border-t border-border">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Joshveer Singh Chhabra. All rights reserved.
        </div>
        
        <div className="text-xs font-mono text-muted-foreground">
          Designed & Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
};

export default Footer;
