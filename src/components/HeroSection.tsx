import { Button } from "@/components/ui/button";
import { Download, Shield, Zap, Smartphone } from "lucide-react";
import heroImage from "@/assets/browser-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-samos-light/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--samos-blue)_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--samos-cyan)_0%,_transparent_50%)] opacity-10" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-samos-blue/10 to-samos-cyan/10 backdrop-blur-sm border border-samos-blue/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-samos-blue" />
                <span className="text-sm font-medium text-samos-blue">Privacy-First Browsing</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Meet </span>
                <span className="gradient-text">SAMOS</span>
                <br />
                <span className="text-foreground">Browser</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Experience the web like never before. Fast, secure, and private browsing 
                with cutting-edge technology and seamless sync across all your devices.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download for Free
              </Button>
              <Button variant="outline" size="lg" className="border-samos-blue/20 hover:border-samos-blue text-samos-blue hover:bg-samos-blue/5">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-samos-blue">3x</div>
                <div className="text-sm text-muted-foreground">Faster Loading</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-samos-cyan">100%</div>
                <div className="text-sm text-muted-foreground">Private</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-samos-blue">50M+</div>
                <div className="text-sm text-muted-foreground">Trackers Blocked</div>
              </div>
            </div>
          </div>

          {/* Browser Mockup */}
          <div className="relative animate-float">
            <div className="browser-mockup rounded-xl p-6 shadow-glow">
              <img 
                src={heroImage} 
                alt="SAMOS Browser Interface" 
                className="w-full h-auto rounded-lg shadow-card"
              />
            </div>
            
            {/* Floating Features */}
            <div className="absolute -top-4 -right-4 bg-card border border-samos-cyan/20 rounded-lg p-3 shadow-card animate-glow">
              <Zap className="w-6 h-6 text-samos-cyan" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-samos-blue/20 rounded-lg p-3 shadow-card">
              <Smartphone className="w-6 h-6 text-samos-blue" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;