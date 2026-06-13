
import { memo } from "react";
import { Code, Users, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Scalable Code",
      description: "Building maintainable, efficient, and production-ready systems",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Engineering",
      description: "Strong communication with a team-first development mindset",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results-Driven",
      description: "Focused on delivering impactful and high-quality solutions",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="text-center mb-12 animate-fade-in">
          <span className="section-kicker mb-4">Profile</span>

          
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Turning ideas into scalable and impactful digital solutions
          </p>
        </div>

      
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="p-6 glass-effect rounded-2xl hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-5 max-w-5xl mx-auto">
          
  
          <Card className="glass-effect rounded-2xl p-7 sm:p-8">
            <p className="text-lg leading-relaxed text-foreground/90 mb-4">
              I’m a B.Tech Computer Science & Engineering student passionate about building innovative and impactful solutions.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-4">
              Through my academic journey and hands-on projects, I’ve developed scalable, user-centric applications while collaborating with diverse teams.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I enjoy solving real-world problems using modern technologies and continuously improving my skills by exploring new tools and best practices.
            </p>


            <p className="mt-5 font-semibold text-primary">
              💡 I don’t just write code — I build solutions that solve real problems.
            </p>
          </Card>

          <Card className="glass-effect rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">What drives me</h3>

              <p className="text-muted-foreground leading-relaxed">
                I’m driven by clarity, strong fundamentals, and a product-first mindset.
                Every project is an opportunity to optimize performance, enhance user experience,
                and build scalable systems that deliver real impact.
              </p>
            </div>

          
            <div className="mt-6">
              <div className="text-xs text-muted-foreground mb-1">
                Continuous Growth
              </div>
              <div className="h-1.5 rounded-full bg-gradient-to-r from-primary via-secondary to-primary/60" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default memo(About);