import React from "react";
import { ModernButton } from "@/components/ui/modern-button";
import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float blur-lg" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent rounded-full opacity-25 animate-float blur-xl" 
           style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Section */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <p className="text-lg text-muted-foreground mb-2">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="gradient-text">Lihini Apsara</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground mb-6">
                  And I'm a <span className="text-primary font-semibold">Full Stack Developer</span>
                </p>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Passionate about creating innovative web solutions that bridge design and functionality. 
                Specialized in React, Node.js, and modern web technologies.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <ModernButton asChild className="px-8 py-3">
                <Link to="/projects">View My Work</Link>
              </ModernButton>
              <ModernButton variant="glass" asChild className="px-8 py-3">
                <a href="/cv.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </ModernButton>

            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <a 
                href="https://github.com/lihiniapsara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/lihiniapsara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/lihiniapsara" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a 
                href="mailto:lihiniapsara@gmail.com" 
                className="text-muted-foreground hover:text-primary smooth-transition"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Home;