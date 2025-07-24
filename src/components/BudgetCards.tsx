import { useState } from "react";
import { TrendingUp, TrendingDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Department {
  id: string;
  name: string;
  budget: string;
  change: number;
  isIncrease: boolean;
  description: string;
  image: string;
  details: string[];
  keyInitiatives: string[];
}

const BudgetCards = () => {
  const [selectedCard, setSelectedCard] = useState<Department | null>(null);

  const departments: Department[] = [
    {
      id: "defence",
      name: "Defence",
      budget: "₹6.21 Lakh Cr",
      change: 12.8,
      isIncrease: true,
      description: "Strengthening national security with modernization of armed forces and indigenous defense manufacturing.",
      image: "/placeholder.svg",
      details: [
        "Capital outlay increased by 15% for modernization",
        "Focus on Atmanirbhar Bharat in defense",
        "Enhanced border infrastructure development",
        "Cyber security and space defense initiatives"
      ],
      keyInitiatives: [
        "Make in India for defense equipment",
        "Defense corridor development",
        "Modernization of armed forces",
        "Indigenous aircraft and naval systems"
      ]
    },
    {
      id: "railways",
      name: "Railways",
      budget: "₹2.52 Lakh Cr",
      change: 8.5,
      isIncrease: true,
      description: "Massive infrastructure push for modernizing railway networks and improving connectivity across India.",
      image: "/placeholder.svg",
      details: [
        "Vande Bharat trains expansion",
        "High-speed rail corridor development",
        "Station modernization programs",
        "Safety and signaling upgrades"
      ],
      keyInitiatives: [
        "Dedicated freight corridors",
        "Electrification of railway lines",
        "Digital railway initiatives",
        "Green transportation focus"
      ]
    },
    {
      id: "education",
      name: "Education",
      budget: "₹1.12 Lakh Cr",
      change: 6.2,
      isIncrease: true,
      description: "Transforming India's education landscape with digital initiatives and skill development programs.",
      image: "/placeholder.svg",
      details: [
        "Digital University establishment",
        "Skill development programs expansion",
        "Research and innovation funding",
        "Teacher training initiatives"
      ],
      keyInitiatives: [
        "PM SHRI Schools development",
        "National Education Technology Platform",
        "Higher education reforms",
        "Vocational education enhancement"
      ]
    },
    {
      id: "health",
      name: "Health & Family Welfare",
      budget: "₹90,171 Cr",
      change: 2.1,
      isIncrease: false,
      description: "Comprehensive healthcare delivery system strengthening with focus on preventive care and rural health.",
      image: "/placeholder.svg",
      details: [
        "AIIMS expansion across states",
        "Telemedicine infrastructure",
        "Preventive healthcare programs",
        "Medical device manufacturing"
      ],
      keyInitiatives: [
        "Ayushman Bharat expansion",
        "Health and wellness centers",
        "Medical research promotion",
        "Pharmaceutical sector growth"
      ]
    },
    {
      id: "agriculture",
      name: "Agriculture",
      budget: "₹1.25 Lakh Cr",
      change: 4.8,
      isIncrease: true,
      description: "Empowering farmers with technology, infrastructure, and sustainable farming practices for food security.",
      image: "/placeholder.svg",
      details: [
        "PM-KISAN scheme continuation",
        "Crop insurance improvements",
        "Agricultural infrastructure development",
        "Organic farming promotion"
      ],
      keyInitiatives: [
        "Digital agriculture platform",
        "Farmer producer organizations",
        "Agri-tech innovation support",
        "Rural infrastructure development"
      ]
    },
    {
      id: "rural",
      name: "Rural Development",
      budget: "₹1.60 Lakh Cr",
      change: 7.3,
      isIncrease: true,
      description: "Transforming rural India through employment generation, infrastructure development, and digital connectivity.",
      image: "/placeholder.svg",
      details: [
        "MGNREGA allocation increase",
        "Rural housing scheme expansion",
        "Digital connectivity initiatives",
        "Rural entrepreneurship support"
      ],
      keyInitiatives: [
        "Pradhan Mantri Gram Sadak Yojana",
        "Rural water supply programs",
        "Skill development in rural areas",
        "Rural tourism promotion"
      ]
    }
  ];

  const handleCardClick = (department: Department) => {
    setSelectedCard(department);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="departments" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Department-wise Allocation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed breakdown of budget allocation across major government departments and ministries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer transform hover:scale-105 border border-border/50"
              onClick={() => handleCardClick(dept)}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-primary">{dept.name}</h3>
                <div className={`flex items-center space-x-1 text-sm font-semibold ${
                  dept.isIncrease ? 'text-green' : 'text-destructive'
                }`}>
                  {dept.isIncrease ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  <span>{dept.change}%</span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-primary mb-3">{dept.budget}</div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {dept.description}
              </p>
              
              <div className="mt-4 text-xs text-muted-foreground font-medium">
                Click to explore details →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-scale-in">
          <div 
            className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              {/* Image Section */}
              <div className="w-1/2 bg-accent/20 rounded-l-2xl p-8 flex items-center justify-center">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              {/* Content Section */}
              <div className="w-1/2 p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-primary mb-2">{selectedCard.name}</h2>
                    <div className="text-2xl font-bold text-saffron">{selectedCard.budget}</div>
                    <div className={`flex items-center space-x-1 text-sm font-semibold mt-2 ${
                      selectedCard.isIncrease ? 'text-green' : 'text-destructive'
                    }`}>
                      {selectedCard.isIncrease ? (
                        <TrendingUp className="w-4 h-4" />
                      ) : (
                        <TrendingDown className="w-4 h-4" />
                      )}
                      <span>{selectedCard.change}% from last year</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleCloseModal}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {selectedCard.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Key Allocations</h3>
                    <ul className="space-y-2">
                      {selectedCard.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-saffron rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Major Initiatives</h3>
                    <ul className="space-y-2">
                      {selectedCard.keyInitiatives.map((initiative, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{initiative}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BudgetCards;