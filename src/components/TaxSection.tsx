import { Calculator, TrendingUp, Users, Building, Coins } from "lucide-react";

const TaxSection = () => {
  const taxSlabs = [
    {
      category: "Individual Income Tax",
      slabs: [
        { range: "₹0 - ₹3,00,000", rate: "0%", description: "No Tax" },
        { range: "₹3,00,001 - ₹7,00,000", rate: "5%", description: "New regime rate" },
        { range: "₹7,00,001 - ₹10,00,000", rate: "10%", description: "Standard rate" },
        { range: "₹10,00,001 - ₹12,00,000", rate: "15%", description: "Higher income bracket" },
        { range: "₹12,00,001 - ₹15,00,000", rate: "20%", description: "Top bracket" },
        { range: "Above ₹15,00,000", rate: "30%", description: "Maximum rate" },
      ],
      icon: Users,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      category: "Corporate Tax",
      slabs: [
        { range: "Domestic Companies", rate: "30%", description: "Standard corporate rate" },
        { range: "Foreign Companies", rate: "40%", description: "Non-resident companies" },
        { range: "New Manufacturing Companies", rate: "15%", description: "Concessional rate" },
        { range: "Small Companies (Turnover ≤ ₹400 Cr)", rate: "25%", description: "Reduced rate for SMEs" },
      ],
      icon: Building,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  const taxHighlights = [
    {
      title: "Standard Deduction Increase",
      description: "Standard deduction for salaried employees increased from ₹50,000 to ₹75,000",
      impact: "₹6,250 savings per annum",
      icon: TrendingUp,
      color: "text-saffron"
    },
    {
      title: "New Tax Regime Default",
      description: "New tax regime made default with simplified tax structure and no exemptions",
      impact: "Streamlined filing process",
      icon: Calculator,
      color: "text-green"
    },
    {
      title: "Capital Gains Rationalization",
      description: "Long-term capital gains holding period reduced from 2 years to 1 year for financial assets",
      impact: "Improved liquidity",
      icon: Coins,
      color: "text-navy"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Tax Structure & Reforms</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive overview of tax slabs and key reforms in Union Budget 2025
          </p>
        </div>

        {/* Tax Slabs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {taxSlabs.map((category, index) => (
            <div
              key={category.category}
              className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
              </div>

              <div className="space-y-3">
                {category.slabs.map((slab, slabIndex) => (
                  <div
                    key={slabIndex}
                    className="flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-foreground">{slab.range}</div>
                      <div className="text-sm text-muted-foreground">{slab.description}</div>
                    </div>
                    <div className={`text-lg font-bold ${category.color} bg-background px-3 py-1 rounded-full`}>
                      {slab.rate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tax Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {taxHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-gradient-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-background/50 rounded-lg flex items-center justify-center">
                  <highlight.icon className={`w-5 h-5 ${highlight.color}`} />
                </div>
                <h4 className="font-semibold text-primary">{highlight.title}</h4>
              </div>
              
              <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                {highlight.description}
              </p>
              
              <div className={`text-sm font-medium ${highlight.color}`}>
                {highlight.impact}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-saffron mb-2">₹75,000</div>
            <div className="text-sm text-muted-foreground">New Standard Deduction</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-green mb-2">₹3L</div>
            <div className="text-sm text-muted-foreground">Tax Free Income Limit</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-navy mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Max Individual Tax Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl shadow-card">
            <div className="text-2xl font-bold text-purple-500 mb-2">15%</div>
            <div className="text-sm text-muted-foreground">New Manufacturing Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxSection;