import { Shield, Zap, Smartphone, Lock, Globe, Settings } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Privacy Protection",
    description: "Advanced ad blocker and tracker protection keeps your browsing private and secure.",
    color: "text-samos-blue"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized engine delivers 3x faster page loading with smart memory management.",
    color: "text-samos-cyan"
  },
  {
    icon: Smartphone,
    title: "Cross-Device Sync",
    description: "Seamlessly sync bookmarks, passwords, and history across all your devices.",
    color: "text-samos-blue"
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "HTTPS Everywhere and end-to-end encryption protect your data and communications.",
    color: "text-samos-cyan"
  },
  {
    icon: Globe,
    title: "Customizable Search",
    description: "Choose from multiple search engines or use our privacy-focused SAMOS Search.",
    color: "text-samos-blue"
  },
  {
    icon: Settings,
    title: "Personalized Experience",
    description: "Themes, extensions, and customizable interface adapt to your browsing style.",
    color: "text-samos-cyan"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-samos-light/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Powerful Features for </span>
            <span className="gradient-text">Modern Browsing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the web with cutting-edge technology, uncompromising privacy, 
            and performance that adapts to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-card border border-border/50 rounded-xl shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-samos-blue/10 to-samos-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 p-8 bg-gradient-to-r from-samos-blue/5 to-samos-cyan/5 rounded-2xl border border-samos-blue/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">50M+</div>
              <div className="text-sm text-muted-foreground">Trackers Blocked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">3x</div>
              <div className="text-sm text-muted-foreground">Faster Loading</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Private</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Happy Users</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;