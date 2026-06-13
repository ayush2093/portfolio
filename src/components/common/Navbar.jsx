import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/images/profile.png";

// Throttle utility function
const throttle = (func, delay) => {
  let timeoutId;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (Date.now() - lastRan >= delay) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, delay - (Date.now() - lastRan));
    }
  };
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
    const sections = ["home", "about", "skills", "projects", "achievements", "education", "contact"];
    const current = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Highlights", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="section-shell">
        <div
          className={`mx-auto flex items-center justify-between rounded-2xl border px-4 py-2 sm:px-5 transition-all duration-500 ${
            isScrolled
              ? "glass-effect border-border/90 shadow-[0_12px_40px_hsl(203_60%_4%_/_0.45)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
          >
            <div className="relative rounded-full p-[2px] bg-gradient-to-br from-primary/90 to-secondary/90">
              <img
                src={profileImg}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover bg-background transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <span className="hidden sm:inline text-lg font-semibold text-foreground/95 group-hover:text-primary transition-colors">
              Ayush Singh
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2 rounded-xl border border-border/70 bg-card/50 px-2 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-[0_10px_20px_hsl(var(--primary)_/_0.35)]"
                      : "text-foreground/80 hover:bg-card hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="glass-effect rounded-2xl p-3 space-y-1.5 border-border/90">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`block py-2.5 px-4 text-sm font-medium rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:text-foreground hover:bg-card"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
