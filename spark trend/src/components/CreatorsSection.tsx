
import React from "react";

const creators = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b4e0?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "David Kim",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "UX Specialist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Michael Brown",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=400&h=400&fit=crop&crop=face",
  },
];

function CreatorsSection() {
  return (
    <section className="py-32 bg-surface/20" id="creators" aria-labelledby="creators-heading">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-brand-orange rounded-full px-8 py-3 mb-8">
            <span className="text-primary-foreground text-sm font-semibold tracking-wide uppercase">
              Creators
            </span>
          </div>
          <h2
            id="creators-heading"
            className="text-3xl md:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight"
          >
            CREATORS WE'VE <span className="hero-text">WORKED WITH</span>
          </h2>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 max-w-6xl mx-auto" role="list">
          {creators.map((creator) => (
            <li key={creator.id} className="group cursor-pointer" tabIndex={0} aria-label={`${creator.name}, ${creator.role}`}>
              <div className="relative overflow-hidden rounded-2xl aspect-square mb-4 bg-surface">
                <img
                  src={creator.image}
                  alt={creator.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={400}
                  height={400}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-text-primary font-semibold text-sm">{creator.name}</h3>
                  <p className="text-text-secondary text-xs">{creator.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CreatorsSection;