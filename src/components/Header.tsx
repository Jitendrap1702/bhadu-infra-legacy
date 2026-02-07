import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Leadership", href: "#leadership" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      {/* Top bar */}
      <div className="hidden md:block bg-navy-dark py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber" />
              +91 8888880149
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber" />
              bhaduinfra@gmail.com
            </span>
          </div>
          <div className="text-primary-foreground/80">
            39+ Years of Excellence in Infrastructure
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center">
              {/* <span className="font-heading font-bold text-primary text-xl">BI</span> */}
              <img
                  src={"Bhadu_Infra_LOGO-removebg-preview.png"}
                  alt="Logo"
                />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-primary-foreground">
                Bhadu Infra
              </span>
              <span className="block text-xs text-primary-foreground/60 tracking-wider">
                INFRASTRUCTURE & EARTHWORK
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-primary-foreground/80 hover:text-amber transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="hero"
              // onClick={() => scrollToSection("#contact")}
              onClick={() => window.open(`https://wa.me/918888880149?text=${encodeURIComponent("Hello, \nI would like to get a quotation for my construction project.")}`, '_blank')}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-primary-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/10">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground/80 hover:text-amber transition-colors font-medium py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button
                variant="hero"
                className="mt-4 w-full"
                // onClick={() => scrollToSection("#contact")}
                onClick={() => window.open(`https://wa.me/918888880149?text=${"Hey Vikram"}`, '_blank')}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
