import React from "react";
import { ModernButton } from "@/components/ui/modern-button";
import { Download, MapPin, Mail, Phone, Globe } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Resume</h1>
            <ModernButton className="px-6 py-3">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </ModernButton>
          </div>

          {/* Contact Info */}
          <div className="glass rounded-xl p-8 mb-8 animate-scale-in">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Lihini Apsara</h2>
              <p className="text-xl text-muted-foreground">Software Engineering Student</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">apsaralihini11@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">078 676 7329</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Panadura, Sri Lanka</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-primary" />
                <span className="text-sm">www.lihiniapsara.com</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="glass rounded-xl p-8 mb-8 animate-slide-in">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a software engineering student, I am dedicated to creating innovative solutions that drive business success.
              With a strong foundation in React, Node.js, and modern web technologies, I specialize in building dynamic and user-friendly web applications.
              I am passionate about continuous learning and thrive in collaborative environments where I can contribute to impactful projects.
              Let's collaborate and bring your ideas to life!
            </p>
          </div>

          

          {/* Education */}
          <div className="glass rounded-xl p-8 mb-8 animate-slide-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6">
                <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
                <p className="text-primary font-medium">Stanford University • 2016 - 2020</p>
                <p className="text-muted-foreground text-sm mt-1">GPA: 3.9/4.0 • Summa Cum Laude</p>
              </div>
              <div className="border-l-2 border-primary/30 pl-6">
                <h4 className="text-lg font-semibold">Full Stack Web Development Bootcamp</h4>
                <p className="text-primary font-medium">General Assembly • 2020</p>
                <p className="text-muted-foreground text-sm mt-1">Intensive 12-week program</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="glass rounded-xl p-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Technical Skills</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-primary">Programming Languages</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">JS</span>
                    </div>
                    <span className="text-sm">JavaScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TS</span>
                    </div>
                    <span className="text-sm">TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">Py</span>
                    </div>
                    <span className="text-sm">Python</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Frontend</h4>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• React.js & Next.js</li>
                  <li>• Vue.js & Nuxt.js</li>
                  <li>• Tailwind CSS & SASS</li>
                  <li>• Material-UI & Chakra UI</li>
                  <li>• Redux & Zustand</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-primary">Backend & Database</h4>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Node.js & Express</li>
                  <li>• Python & Django</li>
                  <li>• PostgreSQL & MongoDB</li>
                  <li>• REST APIs & GraphQL</li>
                  <li>• Supabase & Firebase</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border-light">
              <h4 className="font-semibold mb-4 text-primary">Tools & Platforms</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
                <div>• Git & GitHub</div>
                <div>• Docker & Kubernetes</div>
                <div>• AWS & Vercel</div>
                <div>• Figma & Adobe XD</div>
                <div>• Jest & Cypress</div>
                <div>• Linux & macOS</div>
                <div>• Jira & Slack</div>
                <div>• VS Code & WebStorm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;