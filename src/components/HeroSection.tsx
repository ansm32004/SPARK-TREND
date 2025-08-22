import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import MobileNavigation from "@/components/MobileNavigation";
import heroBg from "@/assets/hero-bg.png";
import logoImage from "@/assets/logo.png";
import lenovoLogo from "@/assets/brand-logos/lenovo.svg";
import wowLogo from "@/assets/brand-logos/wow.svg";
import groheLogo from "@/assets/brand-logos/grohe.svg";
import hyattLogo from "@/assets/brand-logos/hyatt.svg";

const HeroSection = () => {
  useEffect(() => {
    // Cal.com initialization with proper TypeScript handling
    try {
      const initCalCom = () => {
        const script = document.createElement('script');
        script.src = 'https://app.cal.com/embed/embed.js';
        script.async = true;
        script.onload = () => {
          // Initialize Cal.com after script loads
          if (typeof window !== 'undefined' && (window as any).Cal) {
            (window as any).Cal("init", "30min", { origin: "https://app.cal.com" });
            (window as any).Cal.ns["30min"]("ui", { 
              hideEventTypeDetails: false, 
              layout: "month_view" 
            });
          }
        };
        document.head.appendChild(script);
      };

      // Only initialize if not already loaded
      if (!(window as any).Cal) {
        initCalCom();
      }
    } catch (error) {
      console.warn('Cal.com initialization failed:', error);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
      <div className="rounded-2xl sm:rounded-3xl border border-border/70 bg-background/50 backdrop-blur-sm overflow-hidden relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 rounded-2xl sm:rounded-3xl"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        
        {/* Integrated Navigation */}
        <MobileNavigation logoImage={logoImage} />
        
        {/* Hero Content */}
        <section className="min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex flex-col justify-center relative">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center py-8 sm:py-12 lg:py-16">
            <div className="px-4 sm:px-6 lg:px-8 text-left relative z-10 max-w-6xl mx-auto w-full">
              {/* Main Headline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight sm:leading-relaxed mb-8 sm:mb-12 lg:mb-16 tracking-tight">
                <span className="block hero-text mb-1 sm:mb-2">BUILD POWERFUL AGENCY SITES</span>
                <span className="block hero-text mb-1 sm:mb-2">WITH CUTTING-EDGE DESIGN</span>
                <span className="block hero-text">AND MARKETING SOLUTIONS</span>
              </h1>

              {/* CTA Buttons */}
              <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 items-start mb-12 sm:mb-16 lg:mb-20">
                <Button size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full xs:w-auto">
                  Discovery call
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 sm:w-[18px] sm:h-[18px]"
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
                <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full w-full xs:w-auto">
                  Reach out
                </Button>
              </div>
            </div>
          </div>

          {/* Logo Carousel at Bottom */}
          <div className="relative z-10 pb-6 sm:pb-8 lg:pb-12 mt-auto">
            <LogoCarousel />
          </div>
        </section>
      </div>
    </div>
  );
};

const LogoCarousel = () => {
  const logos = [
    { src: lenovoLogo, alt: "Lenovo", width: "w-16 sm:w-18 lg:w-20" },
    { src: wowLogo, alt: "WOW", width: "w-12 sm:w-14 lg:w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-16 sm:w-18 lg:w-20" },
    { src: hyattLogo, alt: "HYATT", width: "w-16 sm:w-18 lg:w-20" },
    { src: lenovoLogo, alt: "Lenovo", width: "w-16 sm:w-18 lg:w-20" },
    { src: wowLogo, alt: "WOW", width: "w-12 sm:w-14 lg:w-16" },
    { src: groheLogo, alt: "GROHE", width: "w-16 sm:w-18 lg:w-20" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="overflow-hidden border-t border-border/30 pt-4 sm:pt-6 lg:pt-8 relative">
        {/* Left shadow fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        
        {/* Right shadow fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div className="relative">
          <div className="flex space-x-8 sm:space-x-12 lg:space-x-16 items-center logo-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-4 sm:h-5 lg:h-6 flex items-center justify-center flex-shrink-0`}
              >
                <img src={logo.src} alt={logo.alt} className="h-full object-contain" draggable="false" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection