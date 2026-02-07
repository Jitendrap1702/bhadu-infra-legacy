import { CheckCircle, Target, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Trust",
    description: "Building lasting relationships through transparency and integrity",
  },
  {
    icon: Target,
    title: "Quality",
    description: "Delivering excellence in every project, big or small",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "On-time delivery with consistent performance",
  },
];

const highlights = [
  "39+ years of construction industry experience",
  "Trusted by Government & Private sector clients",
  "Family-run, legacy-driven organization",
  "Leaders in Western Rajasthan infrastructure",
  "State-of-the-art machinery fleet",
  "Government approved contractor",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            39 Years of Building
            <span className="text-amber"> Trust & Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            For nearly four decades, Bhadu Infra has been the cornerstone of infrastructure 
            development in Western Rajasthan. Our journey from a humble beginning to becoming 
            the region's most trusted construction partner reflects our commitment to quality 
            and reliability.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Story */}
          <div className="space-y-6">
            <p className="text-foreground text-lg leading-relaxed">
              Founded with a vision to transform Western Rajasthan's infrastructure landscape, 
              Bhadu Infra has grown into a powerhouse of construction excellence. Our expertise 
              spans earthwork, heavy machinery operations, and comprehensive infrastructure 
              development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We take pride in our state-of-the-art machinery fleet and a team of experienced 
              professionals who bring decades of collective expertise to every project. From 
              government PWD projects to private commercial developments, we deliver with 
              precision and dedication.
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card shadow-card rounded-xl p-6 hover-lift border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-amber/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-7 h-7 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="bg-primary rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber mb-2">1985</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Established
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber mb-2">100+</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Projects
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber mb-2">50+</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Machinery
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-amber mb-2">∞</div>
              <div className="text-primary-foreground/70 text-sm uppercase tracking-wider">
                Commitment
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
