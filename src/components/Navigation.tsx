import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-samos-blue to-samos-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl text-foreground">SAMOS Browser</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
              Download
            </a>
            <a href="#support" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button variant="hero" size="sm" className="hidden sm:flex">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="hero" size="icon" className="sm:hidden">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;