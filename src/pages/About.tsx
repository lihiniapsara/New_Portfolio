import React from "react";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "SQL","Spring Boot",
    "Tailwind CSS", "Figma", "Git", "Docker", "AWS", "MongoDB"
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground">
              Get to know the person behind the code
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Profile */}
            <div className="animate-slide-in">
              <div className="glass rounded-xl p-8">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 animate-float"></div>
                <h2 className="text-2xl font-bold text-center mb-4">Lihini Apsara</h2>
                <p className="text-center text-primary font-medium mb-4">Full Stack Developer</p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm Lihini Apsara, a passionate full stack developer from Panadura.
                  My expertise lies in crafting dynamic and user-friendly web applications that not only look stunning 
                  but also function seamlessly across all devices and platforms.
                </p>
              </div>
            </div>

            {/* Story */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass rounded-xl p-8">
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I thrive on transforming innovative ideas into reality through elegant, clean code and thoughtful user experience design.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether it's designing a sleek new interface or engineering a robust backend solution, 
                  I'm always ready for the next exciting challenge.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Let's join forces and create something extraordinary together.
                </p>
              </div>
            </div>
          </div>

          {/* What I Do */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">What I Do</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Code, title: "Development", desc: "Full-stack web applications" },
                { icon: Palette, title: "UI/UX Design", desc: "Beautiful user interfaces" },
                { icon: Zap, title: "Performance", desc: "Fast, optimized solutions" },
                { icon: Users, title: "Collaboration", desc: "Team-focused approach" },
              ].map((item, index) => (
                <div 
                  key={item.title} 
                  className="glass rounded-xl p-6 text-center animate-scale-in hover:shadow-medium smooth-transition"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Skills & Technologies</h3>
            <div className="glass rounded-xl p-8">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-primary/10 text-primary rounded-full text-sm font-medium animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;