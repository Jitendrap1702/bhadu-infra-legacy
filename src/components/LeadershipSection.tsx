import { User } from "lucide-react";
import dungarJiImg from "@/assets/dungar-ji-bhadu2.jpeg"
import dineshImg from "@/assets/dinesh-bhadu2.jpeg"


const directors = [
  {
    name: "Dungar Ram Bhadu",
    role: "Founder & Director",
    bio: "With nearly four decades of experience in the construction and infrastructure industry, Dungar Ram Bhadu has been the driving force behind Bhadu Infra's growth and reputation in Western Rajasthan. His deep understanding of infrastructure development, commitment to quality, and strong work ethics have laid the foundation of trust that Bhadu Infra is known for today.",
    img_url: dungarJiImg,
  },
  {
    name: "Dinesh Bhadu",
    role: "Director",
    bio: "Dinesh Bhadu plays a key role in managing operations, project execution, and strategic growth at Bhadu Infra. With a modern outlook and hands-on involvement in large-scale projects, he ensures efficient delivery, adoption of new technologies, and consistent client satisfaction.",
    img_url: dineshImg,
  },
];

const LeadershipSection = () => {
  return (
    <section id="leadership" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            Leadership
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Our
            <span className="text-amber"> Directors</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The visionary leaders who have built Bhadu Infra into Western Rajasthan's 
            most trusted infrastructure company.
          </p>
        </div>

        {/* Directors */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {directors.map((director, index) => (
            <div
              key={index}
              className="bg-card shadow-card rounded-2xl p-8 border border-border hover-lift"
            >
              <div className="flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="w-78 h-78 flex items-center justify-center mb-6">
                  {/* <User className="w-12 h-12 text-muted-foreground" /> */}
                  <img
                    src={director.img_url}
                    alt={director.name}
                    className="w-28 h-28  rounded-lg"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                  {director.name}
                </h3>
                <span className="text-amber font-semibold text-sm uppercase tracking-wider mb-4">
                  {director.role}
                </span>

                {/* Divider */}
                <div className="w-16 h-1 bg-amber/30 rounded-full mb-6" />

                {/* Bio */}
                <p className="text-muted-foreground leading-relaxed">
                  {director.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
