import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-samos-dark text-samos-light py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-samos-blue to-samos-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl">SAMOS Browser</span>
            </div>
            <p className="text-samos-light/70 text-sm leading-relaxed">
              Privacy-first browsing experience with cutting-edge technology. 
              Built by Samos Global Technologies Inc.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Download</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Features</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Release Notes</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">System Requirements</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">About Us</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Careers</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Press</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Help Center</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-samos-light/70 hover:text-samos-cyan transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-samos-light/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-samos-light/70 text-sm">
            © {currentYear} Samos Global Technologies Inc. All rights reserved.
          </p>
          <div className="text-samos-light/70 text-sm">
            Made with ❤️ for a better web
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;