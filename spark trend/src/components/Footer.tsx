import { Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const handleSocialClick = (platform: string) => {
    console.log(`${platform} clicked`);
    // Add your social media navigation logic here
  };

  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <button
              onClick={() => handleSocialClick('Twitter')}
              className="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-text-secondary group-hover:text-primary-foreground transition-colors duration-300" />
            </button>
            <button
              onClick={() => handleSocialClick('LinkedIn')}
              className="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-text-secondary group-hover:text-primary-foreground transition-colors duration-300" />
            </button>
            <button
              onClick={() => handleSocialClick('Instagram')}
              className="w-12 h-12 bg-surface rounded-full flex items-center justify-center hover:bg-brand-orange transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-text-secondary group-hover:text-primary-foreground transition-colors duration-300" />
            </button>
          </div>

          {/* Build a project text */}
          <div className="text-center">
            <p className="text-text-secondary text-sm">
              Build a project? <span className="text-brand-orange font-medium">agency site</span>
            </p>
            <p className="text-text-secondary text-sm mt-1">
              with Partner
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-border w-full">
            <p className="text-text-secondary text-sm">
              © Built Since 2020. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;