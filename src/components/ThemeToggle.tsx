
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "./ui/toggle";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for user preference in localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Update document class for Tailwind dark mode
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    // Save preference to localStorage
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Toggle 
      pressed={theme === "dark"}
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className="border border-border rounded-full p-2 bg-transparent hover:bg-transparent"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-yellow-300" />
      ) : (
        <Moon size={18} className="text-foreground" />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
