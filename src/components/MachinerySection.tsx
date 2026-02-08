import { Cog } from "lucide-react";
import excavatorImg from "@/assets/machinery-excavator.jpg";
import tippersImg from "@/assets/machinery-tippers.jpg";
import rollerImg from "@/assets/machinery-roller.jpg";

const machinery = [
  {
    image: excavatorImg,
    name: "Excavators",
    description: "Heavy-duty excavators for precise digging and earthmoving operations",
  },
  {
    image: tippersImg,
    name: "Tippers & Dump Trucks",
    description: "Large fleet of tippers for efficient material transportation",
  },
  {
    image: rollerImg,
    name: "Road Rollers",
    description: "Compaction equipment for road construction and surface finishing",
  },
];

const equipmentList = [
  "Excavators",
  "Tippers",
  "Poclains",
  "Road Rollers",
  "RMC Millers",
  "Graders",
  "Loaders",
  "Bulldozers",
];

const MachinerySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            Our Fleet
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            State-of-the-Art
            <span className="text-amber"> Machinery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our modern fleet of heavy machinery enables us to handle projects of any scale 
            with efficiency and precision.
          </p>
        </div>

        {/* Machinery Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {machinery.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl shadow-card hover-lift bg-card border border-border"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-xl text-primary-foreground">
                  {item.name}
                </h3>
              </div>
              <div className="p-5">
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment List */}
        <div className="bg-muted rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-20 h-20 bg-amber/10 rounded-2xl flex items-center justify-center mb-4">
                <Cog className="w-10 h-10 text-amber" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-foreground mb-3">
                Complete Equipment Fleet
              </h3>
              <p className="text-muted-foreground">
                Our comprehensive machinery fleet is capable of handling projects of any scale 
                with maximum efficiency and minimum downtime.
              </p>
            </div>
            <div className="md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {equipmentList.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-lg px-4 py-3 text-center font-medium text-foreground hover:border-amber/50 hover:bg-amber/5 transition-colors"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MachinerySection;
