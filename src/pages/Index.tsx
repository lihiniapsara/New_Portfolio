import React, { useState } from "react";
import { ModernInput } from "@/components/ui/modern-input";
import { ModernButton } from "@/components/ui/modern-button";
import { useToast } from "@/hooks/use-toast";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import reflectionBg from "@/assets/reflection-bg.jpg";

const Index = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Welcome back!",
      description: "You've successfully signed in to your reflection space.",
    });

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${reflectionBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-surface/60 via-background/40 to-surface-elevated/60 backdrop-blur-[1px]" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-float blur-xl" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-secondary rounded-full opacity-30 animate-float blur-lg" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-accent rounded-full opacity-25 animate-float blur-xl" 
           style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <div className="w-full max-w-md">
          {/* Glass Card Container */}
          <div className="glass rounded-xl p-8 shadow-glass animate-scale-in">
            <div className="w-full max-w-md animate-fade-in">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold gradient-text mb-2">
                  Welcome Back
                </h1>
                <p className="text-muted-foreground">
                  Continue your daily reflection journey
                </p>
              </div>

              <form onSubmit={handleSignIn} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground/60 -translate-y-1/2 z-10" />
                  <ModernInput
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground/60 -translate-y-1/2 z-10" />
                  <ModernInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 hover:text-foreground smooth-transition"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <ModernButton 
                  type="submit" 
                  className="w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Signing in...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </ModernButton>

                <div className="text-center">
                  <ModernButton variant="link" className="text-sm">
                    Forgot your password?
                  </ModernButton>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border-light" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-surface px-3 text-muted-foreground">
                      New to Daily Reflection?
                    </span>
                  </div>
                </div>

                <ModernButton variant="glass" className="w-full">
                  Create Account
                </ModernButton>
              </form>
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-xs text-muted-foreground">
              Take a moment. Breathe. Reflect.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
