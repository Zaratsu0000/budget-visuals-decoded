import { useState } from "react";
import { Download, ExternalLink, FileText, BarChart3, Calendar, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Resource {
  id: string;
  title: string;
  type: "PDF" | "Excel" | "Link";
  size?: string;
  description: string;
  category: string;
  date: string;
  icon: any;
  url: string;
}

const ResourcesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const resources: Resource[] = [
    {
      id: "budget-speech",
      title: "Budget Speech 2025",
      type: "PDF",
      size: "2.1 MB",
      description: "Complete Finance Minister's budget speech with detailed policy announcements",
      category: "Official Documents",
      date: "Feb 1, 2025",
      icon: FileText,
      url: "#"
    },
    {
      id: "expenditure-budget",
      title: "Expenditure Budget Vol. 1",
      type: "PDF",
      size: "15.3 MB",
      description: "Detailed expenditure analysis across all ministries and departments",
      category: "Budget Documents",
      date: "Feb 1, 2025",
      icon: BarChart3,
      url: "#"
    },
    {
      id: "revenue-receipts",
      title: "Receipt Budget",
      type: "PDF",
      size: "8.7 MB",
      description: "Revenue receipts, tax proposals, and collection estimates",
      category: "Budget Documents",
      date: "Feb 1, 2025",
      icon: FileText,
      url: "#"
    },
    {
      id: "economic-survey",
      title: "Economic Survey 2024-25",
      type: "PDF",
      size: "12.4 MB",
      description: "Comprehensive economic analysis and policy recommendations",
      category: "Economic Reports",
      date: "Jan 31, 2025",
      icon: BarChart3,
      url: "#"
    },
    {
      id: "union-budget-glance",
      title: "Budget at a Glance",
      type: "PDF",
      size: "1.8 MB",
      description: "Quick overview of budget highlights and key statistics",
      category: "Summary Documents",
      date: "Feb 1, 2025",
      icon: FileText,
      url: "#"
    },
    {
      id: "finmin-website",
      title: "Ministry of Finance Portal",
      type: "Link",
      description: "Official website with latest updates and detailed budget information",
      category: "Government Portals",
      date: "Updated Daily",
      icon: ExternalLink,
      url: "https://finmin.nic.in"
    }
  ];

  const additionalResources: Resource[] = [
    {
      id: "budget-2024",
      title: "Budget 2024 Archive",
      type: "PDF",
      size: "18.2 MB",
      description: "Previous year's budget documents for comparison",
      category: "Historical Data",
      date: "Feb 1, 2024",
      icon: Calendar,
      url: "#"
    },
    {
      id: "budget-2023",
      title: "Budget 2023 Archive",
      type: "PDF",
      size: "16.8 MB",
      description: "Budget documents from 2023 for trend analysis",
      category: "Historical Data",
      date: "Feb 1, 2023",
      icon: Calendar,
      url: "#"
    },
    {
      id: "sectoral-analysis",
      title: "Sectoral Budget Analysis",
      type: "Excel",
      size: "3.2 MB",
      description: "Detailed sector-wise allocation and growth analysis",
      category: "Analytical Reports",
      date: "Feb 2, 2025",
      icon: BarChart3,
      url: "#"
    },
    {
      id: "state-wise-allocation",
      title: "State-wise Fund Allocation",
      type: "Excel",
      size: "2.8 MB",
      description: "Central fund allocation breakdown by states and UTs",
      category: "Analytical Reports",
      date: "Feb 2, 2025",
      icon: BarChart3,
      url: "#"
    }
  ];

  const displayedResources = showMore ? [...resources, ...additionalResources] : resources;

  const getTypeColor = (type: string) => {
    const colors = {
      PDF: "bg-red-100 text-red-700",
      Excel: "bg-green-100 text-green-700",
      Link: "bg-blue-100 text-blue-700"
    };
    return colors[type as keyof typeof colors] || "bg-gray-100 text-gray-700";
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      "Official Documents": "text-saffron",
      "Budget Documents": "text-navy",
      "Economic Reports": "text-green",
      "Summary Documents": "text-purple-600",
      "Government Portals": "text-blue-600",
      "Historical Data": "text-gray-600",
      "Analytical Reports": "text-orange-600"
    };
    return colors[category as keyof typeof colors] || "text-primary";
  };

  return (
    <section id="resources" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Resources & Documents</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access official budget documents, reports, and related resources from the Government of India
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Categories Filter */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center">
            {Array.from(new Set(displayedResources.map(r => r.category))).map((category) => (
              <span
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-full bg-white shadow-sm border ${getCategoryColor(category)}`}
              >
                {category}
              </span>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/30 rounded-lg flex items-center justify-center">
                    <resource.icon className={`w-6 h-6 ${getCategoryColor(resource.category)}`} />
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </span>
                    {resource.size && (
                      <span className="text-xs text-muted-foreground">{resource.size}</span>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-saffron transition-colors">
                  {resource.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">{resource.category}</div>
                    <div className="text-xs font-medium text-foreground">{resource.date}</div>
                  </div>
                  
                  <Button
                    size="sm"
                    className="bg-gradient-saffron text-white hover:opacity-90 transition-opacity"
                  >
                    {resource.type === "Link" ? (
                      <>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && (
            <div className="text-center">
              <Button
                onClick={() => setShowMore(true)}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Plus className="w-4 h-4 mr-2" />
                Show More Resources
              </Button>
            </div>
          )}

          {/* Quick Links */}
          <div className="mt-16 bg-gradient-card rounded-xl p-8 shadow-card">
            <h3 className="text-2xl font-bold text-primary mb-6 text-center">Quick Access Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="https://indiabudget.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-accent/30 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-saffron group-hover:text-primary" />
                <span className="font-medium">India Budget Portal</span>
              </a>
              <a
                href="https://finmin.nic.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-accent/30 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-saffron group-hover:text-primary" />
                <span className="font-medium">Finance Ministry</span>
              </a>
              <a
                href="https://mospi.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-accent/30 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-saffron group-hover:text-primary" />
                <span className="font-medium">Statistics Ministry</span>
              </a>
              <a
                href="https://rbi.org.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-accent/30 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-saffron group-hover:text-primary" />
                <span className="font-medium">Reserve Bank</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;