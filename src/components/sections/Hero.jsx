import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/images/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-12">
      <div className="absolute inset-0">
        <div className="absolute top-16 -left-16 w-60 h-60 rounded-full bg-secondary/20 blur-3xl animate-float" />
        <div className="absolute bottom-8 -right-14 w-72 h-72 rounded-full bg-primary/25 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div className="space-y-7 animate-fade-in">
            <span className="section-kicker">Portfolio</span>

            <div className="space-y-3">
              <p className="text-lg md:text-xl text-muted-foreground">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text leading-[0.95]">
                Ayush Singh
              </h1>
              <p className="text-2xl md:text-3xl text-foreground/85">Full-Stack Web Developer</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about creating innovative solutions and building scalable applications
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-7">
                <a href="#projects">View Projects</a>
              </Button>

              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl px-7">
                <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-xl border-border/80 bg-card/30">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <Button variant="ghost" size="icon" asChild className="rounded-full border border-border/60 bg-card/30 hover:bg-card">
                <a href="https://github.com/ayush2093" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full border border-border/60 bg-card/30 hover:bg-card">
                <a href="https://www.linkedin.com/in/ayush-singh-622951297/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="rounded-full border border-border/60 bg-card/30 hover:bg-card">
                <a href="mailto:ayushsingh2093@gmail.com" title="Email">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-in">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-primary/20 to-secondary/20" />
            <div className="relative w-[17rem] h-[17rem] sm:w-[20rem] sm:h-[20rem] lg:w-[24rem] lg:h-[24rem] rounded-[2rem] glass-effect border-border/80 p-4 rotate-2">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-primary/15 via-card to-secondary/10 rotate-[-2deg]">
                <img
                  src={profileImg}
                  alt="Ayush Singh"
                  width="240"
                  height="240"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        aria-label="Scroll to about"
        title="Scroll to about"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
