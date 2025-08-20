import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  imageContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ 
  number, 
  title, 
  description, 
  features, 
  ctaText, 
  imageContent,
  className = "",
  style
}: ServiceCardProps) => {
  return (
    <div className={`group relative bg-surface/40 backdrop-blur-sm border border-border/30 rounded-3xl p-8 hover:bg-surface/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${className}`} style={style}>
      <div className="grid md:grid-cols-2 gap-8 items-center min-h-[300px]">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Features List */}
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-text-secondary text-sm">→</span>
                <span className="text-text-secondary text-sm font-medium tracking-wide">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          {/* Service Number and Title */}
          <div className="space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              {number}. {title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <Button 
            variant="hero" 
            className="rounded-full px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform"
            onClick={() => console.log(`${ctaText} clicked`)}
          >
            {ctaText}
          </Button>
        </div>

        {/* Right Content - Visual */}
        <div className="flex items-center justify-center">
          {imageContent}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;