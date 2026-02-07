import {
  Pickaxe,
  Truck,
  Route,
  Building,
  Home,
  Factory,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Pickaxe,
    title: "Earthwork & Excavation",
    description:
      "Comprehensive excavation, grading, and earthmoving services for projects of any scale with precision and efficiency.",
  },
  {
    icon: Truck,
    title: "Heavy Machinery Services",
    description:
      "State-of-the-art fleet of excavators, tippers, rollers, and graders operated by experienced professionals.",
  },
  {
    icon: Route,
    title: "Road & Infrastructure",
    description:
      "Complete road construction and infrastructure development including highways, bridges, and public utilities.",
  },
  {
    icon: Building,
    title: "Commercial Construction",
    description:
      "Building modern commercial complexes, malls, and office spaces with contemporary architecture and quality.",
  },
  {
    icon: Home,
    title: "Residential Projects",
    description:
      "Developing quality residential buildings and housing complexes with attention to comfort and durability.",
  },
  {
    icon: Factory,
    title: "Industrial Projects",
    description:
      "Constructing industrial facilities, warehouses, and manufacturing units with robust infrastructure.",
  },
  {
    icon: Landmark,
    title: "Government & PWD Projects",
    description:
      "Trusted partner for government contracts including PWD, RIICO, and Railway infrastructure projects.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Infrastructure
            <span className="text-amber"> Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From earthwork to commercial construction, we offer end-to-end infrastructure 
            services backed by 39+ years of experience and a commitment to excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-card hover-lift border border-border transition-all duration-300 hover:border-amber/50"
            >
              <div className="w-14 h-14 bg-amber/10 group-hover:bg-amber/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                <service.icon className="w-7 h-7 text-amber" />
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto">
            Let's discuss how Bhadu Infra can bring your infrastructure vision to life 
            with our expertise and reliable execution.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-amber text-primary font-bold px-8 py-4 rounded-lg hover:bg-amber-light transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
