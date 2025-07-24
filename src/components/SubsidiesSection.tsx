import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubsidyProgram {
  id: string;
  name: string;
  allocation: string;
  beneficiaries: string;
  description: string;
  videoThumbnail: string;
  details: string[];
}

const SubsidiesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [showMore, setShowMore] = useState(false);

  const subsidyPrograms: SubsidyProgram[] = [
    {
      id: "pmkisan",
      name: "PM-KISAN",
      allocation: "₹60,000 Cr",
      beneficiaries: "11 Cr Farmers",
      description: "Direct income support to small and marginal farmers across India",
      videoThumbnail: "/placeholder.svg",
      details: [
        "₹6,000 per year to eligible farmers",
        "Direct benefit transfer to bank accounts",
        "Support for agricultural inputs",
        "Enhanced farmer welfare programs"
      ]
    },
    {
      id: "ayushman",
      name: "Ayushman Bharat",
      allocation: "₹7,200 Cr",
      beneficiaries: "12 Cr Families",
      description: "Universal health coverage for economically vulnerable families",
      videoThumbnail: "/placeholder.svg",
      details: [
        "₹5 lakh coverage per family per year",
        "Cashless treatment in empaneled hospitals",
        "Secondary and tertiary care coverage",
        "Over 1,900 medical packages covered"
      ]
    },
    {
      id: "ujjwala",
      name: "PM Ujjwala",
      allocation: "₹2,800 Cr",
      beneficiaries: "9.6 Cr Women",
      description: "LPG connections to women from Below Poverty Line households",
      videoThumbnail: "/placeholder.svg",
      details: [
        "Free LPG connections to BPL families",
        "Deposit-free LPG connections",
        "EMI facility for stove and refill",
        "Clean cooking fuel access"
      ]
    },
    {
      id: "scholarship",
      name: "Scholarship Programs",
      allocation: "₹38,000 Cr",
      beneficiaries: "4.1 Cr Students",
      description: "Educational support for students from disadvantaged communities",
      videoThumbnail: "/placeholder.svg",
      details: [
        "Pre-matric and post-matric scholarships",
        "Merit-based scholarship programs",
        "Support for professional courses",
        "Digital scholarship platform"
      ]
    },
    {
      id: "housing",
      name: "PM Awas Yojana",
      allocation: "₹79,590 Cr",
      beneficiaries: "2.95 Cr Families",
      description: "Housing for all mission with affordable housing solutions",
      videoThumbnail: "/placeholder.svg",
      details: [
        "Pucca houses for rural families",
        "Urban housing development",
        "Interest subsidy on home loans",
        "Infrastructure development support"
      ]
    },
    {
      id: "employment",
      name: "MGNREGA",
      allocation: "₹73,000 Cr",
      beneficiaries: "26 Cr Workers",
      description: "Rural employment guarantee scheme providing livelihood security",
      videoThumbnail: "/placeholder.svg",
      details: [
        "100 days guaranteed employment",
        "Wage rate enhancement",
        "Asset creation in rural areas",
        "Women participation over 50%"
      ]
    }
  ];

  const additionalPrograms = [
    { name: "PM Garib Kalyan Anna Yojana", allocation: "₹97,000 Cr" },
    { name: "National Social Assistance Programme", allocation: "₹17,000 Cr" },
    { name: "PM Matru Vandana Yojana", allocation: "₹2,500 Cr" },
    { name: "National Rural Livelihood Mission", allocation: "₹13,000 Cr" }
  ];

  const visibleCards = showMore ? subsidyPrograms : subsidyPrograms.slice(0, 4);

  const scrollLeft = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const scrollRight = () => {
    setCurrentIndex(Math.min(visibleCards.length - 3, currentIndex + 1));
  };

  return (
    <section id="subsidies" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Welfare & Subsidy Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Government initiatives for social welfare and economic support across various sectors
          </p>
        </div>

        {/* Horizontal Scrollable Cards */}
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-primary">Major Programs</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollLeft}
                disabled={currentIndex === 0}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollRight}
                disabled={currentIndex >= visibleCards.length - 3}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out space-x-6"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {visibleCards.map((program) => (
                <div
                  key={program.id}
                  className="flex-shrink-0 w-1/3 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(program.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {hoveredCard === program.id ? (
                    // Expanded View
                    <div className="p-6 h-96">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold text-primary">{program.name}</h4>
                        <div className="w-16 h-16 bg-accent/30 rounded-lg flex items-center justify-center relative overflow-hidden">
                          <img
                            src={program.videoThumbnail}
                            alt={program.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Allocation</div>
                          <div className="text-lg font-semibold text-saffron">{program.allocation}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Beneficiaries</div>
                          <div className="text-lg font-semibold text-green">{program.beneficiaries}</div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">{program.description}</p>

                      <div className="space-y-2">
                        {program.details.map((detail, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-saffron rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Card View
                    <div className="p-6 h-64">
                      <h4 className="text-xl font-bold text-primary mb-3">{program.name}</h4>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-muted-foreground">Allocation</div>
                          <div className="text-lg font-semibold text-saffron">{program.allocation}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Beneficiaries</div>
                          <div className="text-lg font-semibold text-green">{program.beneficiaries}</div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {program.description}
                      </p>

                      <div className="text-xs text-muted-foreground font-medium">
                        Hover to see details →
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* More Button */}
          {!showMore && (
            <div className="text-center mt-8">
              <Button
                onClick={() => setShowMore(true)}
                className="bg-gradient-saffron text-white hover:opacity-90 transition-opacity"
              >
                <Plus className="w-4 h-4 mr-2" />
                Show More Programs
              </Button>
            </div>
          )}

          {/* Additional Programs List */}
          {showMore && (
            <div className="mt-12 bg-card rounded-xl p-6 shadow-card">
              <h3 className="text-xl font-semibold text-primary mb-6">Additional Programs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {additionalPrograms.map((program, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-accent/30 rounded-lg">
                    <span className="font-medium text-foreground">{program.name}</span>
                    <span className="font-semibold text-saffron">{program.allocation}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SubsidiesSection;