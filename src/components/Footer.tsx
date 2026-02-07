import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                {/* <span className="font-heading font-bold text-primary text-xl">BI</span> */}
                <img
                  src={"Bhadu_Infra_LOGO-removebg-preview.png"}
                  alt="Logo"
                />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-primary-foreground">
                  Bhadu Infra
                </span>
                <span className="block text-xs text-primary-foreground/60 tracking-wider">
                  INFRASTRUCTURE & EARTHWORK
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Building Western Rajasthan for over 39 years. Trusted infrastructure and 
              earthwork experts delivering large-scale construction projects with precision 
              and reliability.
            </p>
            <div className="flex items-center gap-2 text-amber font-semibold">
              <span className="w-8 h-0.5 bg-amber" />
              39+ Years of Excellence
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Leadership", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-amber transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>
                Near AIIMS Jodhpur<br />
                Basni Phase 2, Jodhpur
              </li>
              <li>
                <a href="mailto:bhaduinfra@gmail.com" className="hover:text-amber transition-colors">
                  bhaduinfra@gmail.com
                </a>
              </li>
              <li>+91 8888880149</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Bhadu Infra. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-amber transition-colors text-sm"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
