import { useState } from "react";
import { Heart, Users, Home, GraduationCap, Utensils, Briefcase } from "lucide-react";

const SubsidiesSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);

  const majorPrograms = [
    {
      id: 1,
      title: "PM-KISAN",
      category: "Agriculture",
      allocation: "₹60,000 Cr",
      beneficiaries: "11 Cr Farmers",
      description: "Direct income support scheme providing ₹6,000 annually to small and marginal farmers for purchasing agricultural inputs and meeting financial needs.",
      status: "Active",
      icon: Utensils,
      iconColor: "text-green-600",
      bgColor: "bg-green-600/10"
    },
    {
      id: 2,
      title: "Ayushman Bharat",
      category: "Healthcare",
      allocation: "₹7,200 Cr",
      beneficiaries: "12 Cr Families",
      description: "World's largest health insurance scheme providing ₹5 lakh coverage per family annually for secondary and tertiary care hospitalization.",
      status: "Expanded",
      icon: Heart,
      iconColor: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      id: 3,
      title: "PM Ujjwala Yojana",
      category: "Energy",
      allocation: "₹2,800 Cr",
      beneficiaries: "9.6 Cr Women",
      description: "Clean cooking fuel initiative providing free LPG connections to women from Below Poverty Line households across rural and urban areas.",
      status: "Enhanced",
      icon: Home,
      iconColor: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 4,
      title: "Education Scholarships",
      category: "Education",
      allocation: "₹38,000 Cr",
      beneficiaries: "4.1 Cr Students",
      description: "Comprehensive scholarship programs supporting students from disadvantaged communities in pursuing quality education from pre-matric to post-graduate levels.",
      status: "Ongoing",
      icon: GraduationCap,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-600/10"
    },
    {
      id: 5,
      title: "PM Awas Yojana",
      category: "Housing",
      allocation: "₹79,590 Cr",
      beneficiaries: "2.95 Cr Families",
      description: "Housing for All mission providing pucca houses with basic amenities to rural families and affordable housing solutions in urban areas.",
      status: "Phase II",
      icon: Home,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-600/10"
    },
    {
      id: 6,
      title: "MGNREGA",
      category: "Employment",
      allocation: "₹73,000 Cr",
      beneficiaries: "26 Cr Workers",
      description: "Rural employment guarantee scheme providing at least 100 days of wage employment to every household willing to do unskilled manual work.",
      status: "Enhanced",
      icon: Briefcase,
      iconColor: "text-teal-600",
      bgColor: "bg-teal-600/10"
    }
  ];

  const displayedPrograms = majorPrograms.slice(0, 6);

  return (
    <section id="subsidies" className="py-20 bg-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Welfare & Subsidy Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Government initiatives for social welfare and economic support across various sectors
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-primary">Major Programs</h3>
          </div>

          <div className="flex overflow-x-auto space-x-4 md:space-x-6 pb-6 scrollbar-hide">
            {displayedPrograms.map((program, index) => (
              <div
                key={program.id}
                className="flex-shrink-0 w-72 md:w-80 bg-gradient-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer group animate-fade-in border border-border/50 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setSelectedProgram(program.id)}
                onMouseLeave={() => setSelectedProgram(null)}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${program.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <program.icon className={`w-5 h-5 md:w-6 md:h-6 ${program.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-primary group-hover:text-saffron transition-colors text-sm md:text-base truncate">
                        {program.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{program.category}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3 md:mb-4">
                    <div className="text-xl md:text-2xl font-bold text-saffron mb-1">{program.allocation}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{program.beneficiaries}</div>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-3 group-hover:text-foreground transition-colors">
                    {program.description}
                  </p>

                  <div className="mt-3 md:mt-4 flex items-center justify-between">
                    <span className={`px-2 md:px-3 py-1 text-xs font-semibold rounded-full ${program.bgColor} ${program.iconColor}`}>
                      {program.status}
                    </span>
                    <div className="text-xs text-muted-foreground hidden md:block">
                      Hover to expand
                    </div>
                  </div>
                </div>

                {/* Expanded Card Overlay */}
                {selectedProgram === program.id && (
                  <div className="absolute inset-0 bg-gradient-card rounded-xl shadow-2xl border border-border z-10 p-4 md:p-6 transform scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg ${program.bgColor} flex items-center justify-center`}>
                        <program.icon className={`w-5 h-5 md:w-6 md:h-6 ${program.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-primary text-sm md:text-base">{program.title}</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">{program.category}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-xl md:text-2xl font-bold text-saffron mb-1">{program.allocation}</div>
                      <div className="text-xs md:text-sm text-muted-foreground">{program.beneficiaries}</div>
                    </div>

                    <p className="text-xs md:text-sm text-foreground leading-relaxed mb-4">
                      {program.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 md:px-3 py-1 text-xs font-semibold rounded-full ${program.bgColor} ${program.iconColor}`}>
                        {program.status}
                      </span>
                      <span className="px-2 md:px-3 py-1 text-xs font-semibold rounded-full bg-green/10 text-green">
                        Active Program
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="/subsidies"
              className="inline-block bg-gradient-saffron text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              View All Programs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubsidiesSection;