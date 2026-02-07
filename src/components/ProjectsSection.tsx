import { ExternalLink } from "lucide-react";
// import mallImg from "@/assets/project-mall.jpg";
import mallImg from "@/assets/project-mall.jpg";
import hospitalImg from "@/assets/project-hospital.jpeg";
import arihantImg from "@/assets/Project_Arihant_Jodhpur.jpeg"
import riicoImg from "@/assets/Project_RIICO.png"
import railwayImg from "@/assets/Project_Railways.jpeg"
import pwdImg from "@/assets/Project_PWD.jpeg"

const projects = [
  {
    image: mallImg,
    name: "Indiabulls Mall",
    category: "Commercial",
    description: "Major commercial complex with modern retail infrastructure",
  },
  {
    image: hospitalImg,
    name: "Medipulse Hospital",
    category: "Healthcare",
    description: "State-of-the-art multi-specialty hospital construction",
  },
  {
    image: arihantImg,
    name: "Arihant Building",
    category: "Commercial",
    description: "Premium commercial building with contemporary design",
  },
  {
    image: railwayImg,
    name: "Indian Railway Projects",
    category: "Government",
    description: "Railway infrastructure development across Western Rajasthan",
  },
  {
    image: pwdImg,
    name: "PWD Road Projects",
    category: "Infrastructure",
    description: "Major road construction projects for Public Works Department",
  },
  {
    image: riicoImg,
    name: "RIICO Jodhpur",
    category: "Industrial",
    description: "Industrial infrastructure development for RIICO projects",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key Projects &
            <span className="text-amber"> Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse into our portfolio of successful projects that showcase our 
            capabilities and commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden shadow-card hover-lift border border-border"
            >
              <div className="relative h-48 bg-primary overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary to-navy-dark flex items-center justify-center">
                    <span className="font-heading font-bold text-3xl text-amber/30">
                      {project.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber text-primary text-xs font-bold px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-bold text-xl text-foreground mb-2 group-hover:text-amber transition-colors">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
