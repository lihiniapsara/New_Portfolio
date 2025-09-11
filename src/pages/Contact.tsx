import React, { useState } from "react";
import { ModernInput } from "@/components/ui/modern-input";
import { ModernButton } from "@/components/ui/modern-button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <h2 className="text-2xl font-bold mb-8 gradient-text">Let's Connect</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                <div className="glass rounded-xl p-6 flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">apsaralihini11@gmail</p>
                  </div>
                </div>
                
                <div className="glass rounded-xl p-6 flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">078 676 7329</p>
                  </div>
                </div>
                
                <div className="glass rounded-xl p-6 flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">Panadura, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="glass rounded-xl p-4 hover:shadow-medium smooth-transition">
                    <Github className="w-6 h-6 text-primary" />
                  </a>
                  <a href="#" className="glass rounded-xl p-4 hover:shadow-medium smooth-transition">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </a>
                  <a href="#" className="glass rounded-xl p-4 hover:shadow-medium smooth-transition">
                    <Twitter className="w-6 h-6 text-primary" />
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="glass rounded-xl p-6 mt-8">
                <h3 className="font-semibold mb-3">Availability</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently available for freelance projects and new opportunities. 
                  Feel free to reach out if you'd like to work together!
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-3 h-3 bg-success rounded-full mr-3 animate-pulse"></div>
                  <span className="text-sm text-success font-medium">Available for work</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <ModernInput
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <ModernInput
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <ModernInput
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[120px] resize-none glass border-glass-border focus:border-primary smooth-transition"
                    required
                  />
                  
                  <ModernButton 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </ModernButton>
                </form>
              </div>

              {/* Response Time */}
              <div className="glass rounded-xl p-6 mt-6">
                <h3 className="font-semibold mb-3">Response Time</h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via phone or email directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;