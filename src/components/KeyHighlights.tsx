import { CheckCircle, TrendingUp, Zap, Users, Shield, Leaf } from "lucide-react";
import { useState, useEffect } from "react";

const KeyHighlights = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('highlights');
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = section.offsetHeight;
        
        // Calculate progress based on section visibility
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + sectionHeight)));
        setScrollProgress(progress);
        
        // Calculate active highlight based on scroll position
        const highlightIndex = Math.floor(progress * highlights.length);
        setActiveHighlight(Math.min(highlightIndex, highlights.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const highlights = [
    {
      id: 1,
      icon: TrendingUp,
      title: "Economic Growth Focus",
      description: "GDP growth target of 6.5-7% with increased infrastructure spending and industrial development initiatives.",
      year: "2025",
      category: "Economic Policy"
    },
    {
      id: 2,
      icon: Zap,
      title: "Digital India Acceleration",
      description: "₹24,000 crores allocated for digital infrastructure, including 5G rollout and digital governance initiatives.",
      year: "2025",
      category: "Technology"
    },
    {
      id: 3,
      icon: Users,
      title: "Employment Generation",
      description: "New schemes targeting 1 crore job creation through skill development and industrial expansion programs.",
      year: "2025",
      category: "Employment"
    },
    {
      id: 4,
      icon: Shield,
      title: "Healthcare Strengthening",
      description: "Expansion of Ayushman Bharat with additional 5 crore families and new medical colleges in tier-2 cities.",
      year: "2025",
      category: "Healthcare"
    },
    {
      id: 5,
      icon: Leaf,
      title: "Green Energy Transition",
      description: "₹35,000 crores for renewable energy projects and electric vehicle infrastructure development.",
      year: "2025",
      category: "Environment"
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "Tax Reforms",
      description: "Simplified tax structure with increased basic exemption limit and new tax slabs for middle-class relief.",
      year: "2025",
      category: "Taxation"
    }
  ];

  const getIconColor = (category: string) => {
    const colors = {
      "Economic Policy": "text-saffron",
      "Technology": "text-blue-500",
      "Employment": "text-green",
      "Healthcare": "text-red-500",
      "Environment": "text-green-600",
      "Taxation": "text-purple-500"
    };
    return colors[category as keyof typeof colors] || "text-primary";
  };

  const getBgColor = (category: string) => {
    const colors = {
      "Economic Policy": "bg-saffron/10",
      "Technology": "bg-blue-500/10",
      "Employment": "bg-green/10",
      "Healthcare": "bg-red-500/10",
      "Environment": "bg-green-600/10",
      "Taxation": "bg-purple-500/10"
    };
    return colors[category as keyof typeof colors] || "bg-primary/10";
  };

  return (
    <section id="highlights" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Key Policy Highlights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Major policy announcements and strategic initiatives outlined in Union Budget 2025
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-saffron via-green to-navy"></div>
            
            {/* Progress Line */}
            <div 
              className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-saffron/80 via-green/80 to-navy/80 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {highlights.map((highlight, index) => (
                <div
                  key={highlight.id}
                  className="relative flex items-start space-x-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-20 w-16 h-16 rounded-full ${getBgColor(highlight.category)} ${
                    activeHighlight >= index ? 'ring-4 ring-offset-2 ring-offset-background shadow-2xl scale-110' : 'shadow-lg'
                  } ${
                    activeHighlight === index ? `shadow-${highlight.category.toLowerCase().replace(' ', '-')}-glow` : ''
                  } flex items-center justify-center transition-all duration-500 ease-out border-2 border-background`}>
                    <highlight.icon className={`w-8 h-8 ${getIconColor(highlight.category)} ${
                      activeHighlight >= index ? 'animate-pulse' : ''
                    } transition-all duration-300`} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary">{highlight.title}</h3>
                      <div className="flex items-center space-x-3 mt-2 md:mt-0">
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getBgColor(highlight.category)} ${getIconColor(highlight.category)}`}>
                          {highlight.category}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">
                          {highlight.year}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="flex space-x-1">
                        {[1, 2, 3, 4].map((step) => (
                          <div
                            key={step}
                            className={`w-2 h-2 rounded-full ${
                              step <= 2 ? 'bg-green' : 'bg-muted'
                            }`}
                          ></div>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">Policy Development</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Statistics */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
              <div className="text-3xl font-bold text-saffron mb-2">₹45.03L Cr</div>
              <div className="text-sm text-muted-foreground">Total Budget Size</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
              <div className="text-3xl font-bold text-green mb-2">6.5-7%</div>
              <div className="text-sm text-muted-foreground">GDP Growth Target</div>
            </div>
            <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
              <div className="text-3xl font-bold text-navy mb-2">4.9%</div>
              <div className="text-sm text-muted-foreground">Fiscal Deficit Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;