import { Button } from "@/components/ui/button";
import { Download, Apple, Smartphone, Monitor } from "lucide-react";

const platforms = [
  {
    icon: Monitor,
    name: "Windows",
    description: "Windows 10 or later",
    version: "v2.1.0"
  },
  {
    icon: Apple,
    name: "macOS",
    description: "macOS 11.0 or later",
    version: "v2.1.0"
  },
  {
    icon: Smartphone,
    name: "Mobile",
    description: "iOS & Android",
    version: "Coming Soon"
  }
];

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-gradient-to-b from-samos-light/20 to-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Download </span>
            <span className="gradient-text">SAMOS Browser</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start browsing faster, safer, and more privately. Available for all your devices.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border/50 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-samos-blue/10 to-samos-cyan/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <platform.icon className="w-8 h-8 text-samos-blue" />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {platform.name}
              </h3>
              
              <p className="text-muted-foreground mb-2">
                {platform.description}
              </p>
              
              <p className="text-sm text-samos-blue font-medium mb-6">
                {platform.version}
              </p>
              
              <Button 
                variant={platform.version === "Coming Soon" ? "outline" : "hero"} 
                className="w-full"
                disabled={platform.version === "Coming Soon"}
              >
                <Download className="w-4 h-4 mr-2" />
                {platform.version === "Coming Soon" ? "Coming Soon" : "Download"}
              </Button>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center bg-gradient-to-r from-samos-blue/5 to-samos-cyan/5 rounded-2xl p-12 border border-samos-blue/10">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready to experience the future of browsing?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of users who have already made the switch to faster, 
            more secure browsing with SAMOS Browser.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="shadow-button">
              <Download className="w-5 h-5 mr-2" />
              Download Now - Free
            </Button>
            <Button variant="outline" size="lg" className="border-samos-blue/20 hover:border-samos-blue text-samos-blue hover:bg-samos-blue/5">
              View Release Notes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;