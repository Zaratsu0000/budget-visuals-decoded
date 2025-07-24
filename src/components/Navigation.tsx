import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "FinMap", href: "/finmap" },
    { 
      label: "Departments", 
      href: "/departments",
      dropdown: [
        { label: "Defence", href: "/departments/defence" },
        { label: "Education", href: "/departments/education" },
        { label: "Health", href: "/departments/health" },
        { label: "Railways", href: "/departments/railways" },
        { label: "Infrastructure", href: "/departments/infrastructure" },
      ]
    },
    { 
      label: "Subsidies", 
      href: "/subsidies",
      dropdown: [
        { label: "Food Subsidies", href: "/subsidies/food" },
        { label: "Fertilizer Subsidies", href: "/subsidies/fertilizer" },
        { label: "Fuel Subsidies", href: "/subsidies/fuel" },
        { label: "Employment Schemes", href: "/subsidies/employment" },
      ]
    },
    { label: "Resources", href: "/resources" },
    { label: "Taxes", href: "/taxes" },
    { label: "Compare", href: "/compare" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-saffron rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">₹</span>
            </div>
            <span className="text-xl font-bold text-primary">Budget 2025</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium relative group">
                    <span className="nav-link-hover">{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background/95 backdrop-blur-md border border-border shadow-lg">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.label} asChild>
                        <a
                          href={dropdownItem.href}
                          className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                        >
                          {dropdownItem.label}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium nav-link-hover"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-in-left z-40">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;