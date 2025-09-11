import React from "react";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { ModernButton } from "@/components/ui/modern-button";

const Certificates = () => {
  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Professional-level certification demonstrating expertise in designing distributed applications on AWS",
      credentialId: "AWS-123456789",
      url: "#",
      level: "Professional"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Validates ability to design, build, and deploy applications on Google Cloud Platform",
      credentialId: "GCP-987654321",
      url: "#",
      level: "Professional"
    },
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Meta (Facebook)",
      date: "2022",
      description: "Comprehensive program covering React, JavaScript, HTML/CSS, and modern development practices",
      credentialId: "META-456789123",
      url: "#",
      level: "Professional"
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2022",
      description: "Demonstrates proficiency in MongoDB database design, queries, and application development",
      credentialId: "MONGO-789123456",
      url: "#",
      level: "Associate"
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker",
      date: "2022",
      description: "Validates skills in containerization, Docker fundamentals, and container orchestration",
      credentialId: "DOCKER-123789456",
      url: "#",
      level: "Associate"
    },
    {
      title: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2021",
      description: "Demonstrates ability to perform responsibilities of Kubernetes administrators",
      credentialId: "CKA-456123789",
      url: "#",
      level: "Professional"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Professional':
        return 'bg-primary/10 text-primary';
      case 'Associate':
        return 'bg-secondary/10 text-secondary-foreground';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Certificates</h1>
            <p className="text-xl text-muted-foreground">
              Professional certifications and achievements that validate my expertise
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass rounded-xl p-6 text-center animate-scale-in">
              <Award className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Total Certificates</div>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Professional Level</div>
            </div>
            <div className="glass rounded-xl p-6 text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-2xl font-bold text-primary">2023</div>
              <div className="text-sm text-muted-foreground">Latest Achievement</div>
            </div>
          </div>

          {/* Certificates Grid */}
          <div className="space-y-6">
            {certificates.map((cert, index) => (
              <div 
                key={cert.credentialId}
                className="glass rounded-xl p-8 animate-slide-in hover:shadow-large smooth-transition"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Certificate Icon/Badge */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getLevelColor(cert.level)}`}>
                          {cert.level}
                        </span>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {cert.date}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="text-sm text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                      <ModernButton variant="ghost" size="sm" asChild>
                        <a href={cert.url} className="flex items-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Certificate
                        </a>
                      </ModernButton>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="glass rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Continuous Learning</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I believe in continuous improvement and staying updated with the latest technologies. 
                Currently pursuing additional certifications in cloud architecture and machine learning.
              </p>
              <ModernButton>View Learning Progress</ModernButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;