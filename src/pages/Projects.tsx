import React from "react";
import { ModernButton } from "@/components/ui/modern-button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: "bg-gradient-primary",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with real-time updates and team features",
      tech: ["Vue.js", "Express", "Socket.io", "MongoDB"],
      image: "bg-gradient-secondary",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather app with location-based forecasts and interactive maps",
      tech: ["React", "TypeScript", "OpenWeather API"],
      image: "bg-accent",
      github: "#",
      demo: "#"
    },
    {
      title: "Portfolio Website",
      description: "Modern portfolio with dark mode, animations, and responsive design",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "bg-primary",
      github: "#",
      demo: "#"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with rooms, file sharing, and emoji support",
      tech: ["React", "Socket.io", "Node.js", "Redis"],
      image: "bg-secondary",
      github: "#",
      demo: "#"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance tracker with budgeting, charts, and goal setting",
      tech: ["Next.js", "Prisma", "Chart.js", "Auth0"],
      image: "bg-muted",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 animate-scale-in">
          <h2 className="text-2xl font-bold mb-8 gradient-text">Featured Project</h2>
          <div className="glass rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">{projects[0].title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[0].description}. This project showcases advanced full-stack development 
                  skills with modern technologies and best practices.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[0].tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <ModernButton asChild>
                    <a href={projects[0].demo}>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </ModernButton>
                  <ModernButton variant="glass" asChild>
                    <a href={projects[0].github}>
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </ModernButton>
                </div>
              </div>
              <div className={`h-64 rounded-xl ${projects[0].image} animate-float`}></div>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-8 gradient-text">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(1).map((project, index) => (
              <div 
                key={project.title}
                className="glass rounded-xl p-6 hover:shadow-large smooth-transition animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-48 rounded-lg mb-4 ${project.image}`}></div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <ModernButton size="sm" variant="glass" asChild>
                    <a href={project.demo}>
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Demo
                    </a>
                  </ModernButton>
                  <ModernButton size="sm" variant="ghost" asChild>
                    <a href={project.github}>
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </a>
                  </ModernButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;