import { Facebook, Twitter, Youtube, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "FinMap", href: "/finmap" },
    { label: "Departments", href: "/departments" },
    { label: "Subsidies", href: "/subsidies" },
    { label: "Resources", href: "/resources" },
    { label: "Taxes", href: "/taxes" },
    { label: "Compare", href: "/compare" }
  ];

  const departmentLinks = [
    { label: "Defence Budget", href: "/departments/defence" },
    { label: "Education & Skills", href: "/departments/education" },
    { label: "Health & Wellness", href: "/departments/health" },
    { label: "Railways", href: "/departments/railways" },
    { label: "Infrastructure", href: "/departments/infrastructure" },
    { label: "Agriculture", href: "/departments/agriculture" }
  ];

  const analysisLinks = [
    { label: "Budget Analysis", href: "/analysis" },
    { label: "Economic Survey", href: "/economic-survey" },
    { label: "Previous Budgets", href: "/compare/previous" },
    { label: "Sector-wise Analysis", href: "/analysis/sectors" },
    { label: "State Budget Comparison", href: "/compare/states" },
    { label: "Global Comparison", href: "/compare/global" }
  ];

  const governmentPortals = [
    { label: "India Budget Portal", href: "https://indiabudget.gov.in" },
    { label: "Ministry of Finance", href: "https://finmin.nic.in" },
    { label: "Press Information Bureau", href: "https://pib.gov.in" },
    { label: "MyGov India", href: "https://mygov.in" },
    { label: "Digital India", href: "https://digitalindia.gov.in" },
    { label: "Invest India", href: "https://investindia.gov.in" }
  ];

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "Ministry of Finance, North Block, New Delhi - 110001"
    },
    {
      icon: Phone,
      label: "Helpline",
      value: "+91-11-2309-2453"
    },
    {
      icon: Mail,
      label: "Email",
      value: "budget-division@gov.in"
    }
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-saffron rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">₹</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Union Budget 2025</h3>
                <p className="text-sm opacity-80">Government of India</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Official budget visualization portal providing comprehensive insights into India's 
              financial planning and policy initiatives for sustainable economic growth.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-saffron transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Departments</h4>
            <ul className="space-y-3">
              {departmentLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Analysis & Tools */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Analysis & Tools</h4>
            <ul className="space-y-3">
              {analysisLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Government Portals */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Government Portals</h4>
            <ul className="space-y-3">
              {governmentPortals.map((portal) => (
                <li key={portal.label}>
                  <a
                    href={portal.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-saffron transition-all duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {portal.label}
                    </span>
                    <ExternalLink className="w-3 h-3 ml-2 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <info.icon className="w-4 h-4 text-saffron" />
                  </div>
                  <div>
                    <div className="text-sm font-medium opacity-90">{info.label}</div>
                    <div className="text-sm opacity-70 leading-relaxed">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feedback Button */}
            <div className="mt-8">
              <button className="w-full bg-gradient-saffron text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Share Feedback
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm opacity-70">
              © 2025 Government of India. All rights reserved.
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-saffron transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-saffron transition-colors">
                Terms of Service
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-saffron transition-colors">
                Accessibility
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 hover:text-saffron transition-colors">
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;