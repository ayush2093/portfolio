import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import farmerImg from "@/assets/images/farmerproject.webp";
import zenshinImg from "@/assets/images/zenshin.webp";
import operatingImg from "@/assets/images/operating.webp";
import binaryCrudImg from "@/assets/images/binary-crud.webp";
import ongoingImg from "@/assets/images/ongoing.webp";
import shoecraftifyImg from "@/assets/images/shoecraftify.webp";
import cleanStreetImg from "@/assets/images/cleanstreet.png";

const LIVE_PREVIEW_TITLES = new Set([
  "ShoeCraftify",
  "Clean-Street",
  "Mind-Fullness chat bot",
]);

const Projects = () => {
  const projects = [
    {
      title: "ShoeCraftify",
      description: "Interactive shoe customization platform where users can design and personalize their perfect pair of shoes",
      technologies: ["React", "3D Graphics", "TailwindCSS", "JavaScript"],
      image: shoecraftifyImg,
      codeUrl: "https://github.com/ramkumar-lpu/ShoeCraftify",
      liveUrl: "https://www.ramkumar.app/",
      caseStudySlug: "shoecraftify",
    },
    {
      title:"Clean-Street",
      description: "A web application that allows users to report and track local issues such as potholes, graffiti, and broken streetlights.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      image: cleanStreetImg,
      codeUrl: "https://github.com/Ram9219/CleanStreet",
      liveUrl: "https://infosys.ramkumar.app/",
      caseStudySlug: "cleanstreet",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment integration and admin dashboard",
      technologies: ["HTML", "TAILWINDCSS", "JAVASCRIPT", "PHP", "MYSQL"],
      image: farmerImg,
      codeUrl: "https://github.com/Ram9219/Portal-for-farmers-to-sell-the-produce-at-a-better-rate",
      liveUrl: "https://www.youtube.com/watch?v=Jv1En9n5ueY&t=1s",
    },
    {
      title: "Mind-Fullness chat bot",
      description: "AI-powered chat bot for mental wellness and mindfulness",
      technologies: ["HTML", "TAILWINDCSS", "JAVASCRIPT"],
      image: zenshinImg,
      codeUrl: "https://github.com/Ram9219/Zenshin-GPT",
      liveUrl: "https://zenshin-gpt.vercel.app/",
      caseStudySlug: "mindfullness-chatbot",
    },
    // {
    //   title: "Efficient page replacement algorithms",
    //   description: "A project exploring various page replacement algorithms for operating systems.",
    //   technologies: ["JavaScript", "HTML", "TailwindCSS", "Chart.js"],
    //   image: operatingImg,
    //   codeUrl: "https://github.com/Ram9219/OperatingSystem",
    //   liveUrl: "https://operating-system-chi.vercel.app/",
    // },
    // {
    //   title: "Binary Search Tree CRUD Web Tool",
    //   description: "A web tool for visualizing and interacting with binary search trees.",
    //   technologies: ["JavaScript", "HTML", "TAILWINDCSS"],
    //   image: binaryCrudImg,
    //   codeUrl: "https://github.com/Ram9219/-Binary-Search-Tree-CRUD-Web-Tool",
    //   liveUrl: "https://binary-search-tree-crud-web-tool.vercel.app/",
    // },
    {
      title: "Automated Attendance System (Ongoing)",
      description:
        "Low-cost automated attendance system for rural schools — teachers can take attendance manually or by capturing a single photo of the entire class.",
      technologies: ["REACT", "FACERECOGNITION", "Flask"],
      image: ongoingImg,
      codeUrl: "",
      liveUrl: "",
      status: "Ongoing",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-3 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-10 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Here are some of my recent projects that showcase my skills
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden glass-effect group hover:border-primary/50 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative overflow-hidden ${
                  LIVE_PREVIEW_TITLES.has(project.title) && project.liveUrl
                    ? "aspect-[4/3] sm:aspect-[5/4]"
                    : "aspect-video"
                }`}
              >
                {LIVE_PREVIEW_TITLES.has(project.title) && project.liveUrl ? (
                  <div className="w-full h-full bg-slate-900/90 p-1.5 touch-pan-y">
                    <div className="w-full h-full rounded-md overflow-hidden border border-white/15 shadow-lg">
                      <iframe
                        src={project.liveUrl}
                        title={`${project.title} live preview`}
                        className="w-full h-full bg-white"
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    width="400"
                    height="225"
                    className="w-full h-full object-cover transition-transform duration-300"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">{project.title}</h3>
                  {project.status && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 whitespace-nowrap">
                      {project.status}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs sm:text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                  {project.codeUrl ? (
                    <Button asChild variant="outline" size="sm" className="flex-1">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" className="flex-1" disabled>
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}

                  {project.liveUrl ? (
                    <Button asChild size="sm" className="flex-1 bg-primary hover:bg-primary/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" className="flex-1 bg-primary/60" disabled>
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </Button>
                  )}
                </div>

                {project.caseStudySlug && (
                  <Button asChild variant="secondary" size="sm" className="mt-2 w-full">
                    <Link to={`/case-study/${project.caseStudySlug}`}>Read Case Study</Link>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
