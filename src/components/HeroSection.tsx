import parliamentHero from "@/assets/parliament-hero.jpg";

const HeroSection = () => {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={parliamentHero}
          alt="Indian Parliament"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/50 via-navy/60 to-navy/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Union Budget 2025
        </h1>
        <h2 className="text-2xl md:text-3xl font-light mb-8 animate-fade-in opacity-90">
          Visualised
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in opacity-80">
          Explore India's financial roadmap through interactive charts, detailed breakdowns, 
          and comprehensive analysis of government spending and revenue.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <button className="px-8 py-4 bg-saffron hover:bg-saffron/90 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Budget
          </button>
          <button className="px-8 py-4 border-2 border-white/30 hover:border-white/50 hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
            Download Reports
          </button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-saffron">₹45.03</div>
            <div className="text-sm opacity-80">Lakh Crores Total Budget</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-green">₹26.02</div>
            <div className="text-sm opacity-80">Lakh Crores Revenue</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
            <div className="text-3xl font-bold text-white">₹19.01</div>
            <div className="text-sm opacity-80">Lakh Crores Expenditure</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;