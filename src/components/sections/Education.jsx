import { memo } from "react";
import { GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "Lovely Professional University (LPU)",
      period: "2023 - 2027",
      description: "Focused on software development, algorithms, and system design",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Tender Heart Senior Secondary School",
      period: "2021 - 2023",
      description: "Science stream with a focus on Physics, Chemistry, and Mathematics",
    },
  ];

  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="text-center mb-12 animate-fade-in">
          <span className="section-kicker mb-4">Journey</span>
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 sm:p-7 glass-effect rounded-2xl hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex gap-4 sm:gap-5">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary mb-2">{edu.institution}</p>
                  <p className="inline-flex rounded-full border border-border/80 px-3 py-1 text-xs text-muted-foreground mb-3">{edu.period}</p>
                  <p className="text-foreground/80 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Education);

