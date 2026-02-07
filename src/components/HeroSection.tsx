import { ArrowRight, Award, Building2, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Construction site with heavy machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber/20 border border-amber/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="w-5 h-5 text-amber" />
            <span className="text-amber font-medium text-sm">
              39+ Years of Excellence in Western Rajasthan
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-slide-up">
            Building Western Rajasthan
            <span className="block text-amber mt-2">For Over 39 Years</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Trusted Infrastructure & Earthwork Experts delivering large-scale construction, 
            excavation and earthwork projects with precision, reliability, and experience.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#contact")}
              className="group"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#about")}
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber mb-1">39+</div>
              <div className="text-primary-foreground/70 text-sm">Years Experience</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber mb-1">100+</div>
              <div className="text-primary-foreground/70 text-sm">Projects Delivered</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber mb-1">50+</div>
              <div className="text-primary-foreground/70 text-sm">Machinery Fleet</div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-4 text-center">
              <div className="text-3xl md:text-4xl font-bold text-amber mb-1">100%</div>
              <div className="text-primary-foreground/70 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-amber rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
