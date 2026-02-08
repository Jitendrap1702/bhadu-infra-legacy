import {
  Award,
  CheckCircle2,
  Clock,
  Truck,
  ShieldCheck,
  MapPin,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "41+ Years Experience",
    description: "Nearly four decades of proven expertise in infrastructure development",
  },
  {
    icon: CheckCircle2,
    title: "100+ Successful Projects",
    description: "Track record of delivering projects on time and within budget",
  },
  {
    icon: Truck,
    title: "Large Machinery Fleet",
    description: "State-of-the-art equipment for any scale of construction work",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Commitment to meeting deadlines without compromising quality",
  },
  {
    icon: ShieldCheck,
    title: "Government Approved",
    description: "Trusted contractor for government and public sector projects",
  },
  {
    icon: MapPin,
    title: "Regional Leadership",
    description: "Strong presence and network across Rajasthan",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            The Bhadu Infra
            <span className="text-amber"> Advantage</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            What sets us apart as Western Rajasthan's most trusted infrastructure partner
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-14 h-14 bg-amber/20 rounded-xl flex items-center justify-center mb-5">
                <reason.icon className="w-7 h-7 text-amber" />
              </div>
              <h3 className="font-heading font-bold text-xl text-primary-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
