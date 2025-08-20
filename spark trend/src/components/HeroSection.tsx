import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";
import lenovoLogo from "@/assets/brand-logos/lenovo.svg";
import wowLogo from "@/assets/brand-logos/wow.svg";
import groheLogo from "@/assets/brand-logos/grohe.svg";
import hyattLogo from "@/assets/brand-logos/hyatt.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20 pb-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-16">
        <div className="container mx-auto px-8 text-left relative z-10 max-w-5xl">
          {/* Main Headline */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-16 tracking-tight">
            <span className="block hero-text mb-2">WE HELP YOU FIND WHAT'S OFF,</span>
            <span className="block hero-text mb-2">RETHINK WHAT MATTERS,</span>
            <span className="block hero-text">AND SCALE WHAT WORKS</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start mb-20">
            <Button size="lg" className="text-base px-8 py-4 rounded-full">
              Discovery call
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-4 rounded-full">
              Reach out
            </Button>
          </div>
        </div>
      </div>

      {/* Logo Carousel at Bottom */}
      <div className="relative z-10 pb-12 mt-auto">
        <LogoCarousel />
      </div>
    </section>
  );
};

const LogoCarousel = () => {
  const logos = [
    { src: lenovoLogo, alt: "Lenovo", width: "w-20" },
    { src: wowLogo, alt: "WOW", width: "w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-20" },
    { src: hyattLogo, alt: "HYATT", width: "w-20" },
    { src: lenovoLogo, alt: "Lenovo", width: "w-20" },
    { src: wowLogo, alt: "WOW", width: "w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-20" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="overflow-hidden border-t border-border/30 pt-8">
      <div className="relative">
        <div className="flex space-x-16 items-center">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.width} h-6 flex items-center justify-center flex-shrink-0`}
            >
              <img src={logo.src} alt={logo.alt} className="h-full object-contain" draggable="false" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection