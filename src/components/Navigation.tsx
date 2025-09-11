import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react";
import { ModernButton } from "@/components/ui/modern-button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Resume", path: "/resume" },
    { name: "Projects", path: "/projects" },
    { name: "Certificates", path: "/certificates" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `smooth-transition hover:text-primary ${
                    isActive ? "text-primary font-medium" : "text-foreground/80"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            
            <ModernButton
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="ml-4"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </ModernButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ModernButton
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </ModernButton>
            
            <ModernButton
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </ModernButton>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg smooth-transition ${
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-foreground/80 hover:bg-muted/50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;