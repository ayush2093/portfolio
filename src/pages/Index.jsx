import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/common/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  const sections = [
    { id: "home", label: "Launch", component: Hero },
    { id: "about", label: "Identity", component: About },
    { id: "skills", label: "Stack", component: Skills },
    { id: "projects", label: "Build", component: Projects },
    { id: "achievements", label: "Proof", component: Achievements },
    { id: "education", label: "Journey", component: Education },
    { id: "contact", label: "Connect", component: Contact },
  ];

  return (
    <div className="min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[70] bg-gradient-to-r from-secondary via-primary to-secondary origin-left"
        style={{ scaleX: progress }}
      />

      <div className="hidden xl:block pointer-events-none fixed left-10 top-1/2 -translate-y-1/2 z-40">
        <div className="relative w-[2px] h-[56vh] bg-border/70">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-secondary"
            style={{ scaleY: progress, transformOrigin: "top" }}
          />
        </div>
      </div>

      <Navbar />

      {sections.map((entry, index) => {
        const SectionComponent = entry.component;
        return (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, y: 54, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <motion.div
              className="hidden lg:flex absolute right-5 top-8 z-20 items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="w-2 h-2 rounded-full bg-primary/80 shadow-[0_0_16px_hsl(var(--primary)_/_0.9)]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80">{entry.label}</span>
            </motion.div>

            <motion.div
              className="pointer-events-none absolute inset-x-0 -top-8 h-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-border/80 to-transparent" />
            </motion.div>

            <SectionComponent />

            {index < sections.length - 1 && (
              <motion.div
                className="pointer-events-none relative h-16 sm:h-20"
                initial={{ opacity: 0, scaleX: 0.7 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, amount: 0.65 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-secondary/60 via-primary/60 to-transparent" />
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 w-3 h-3 rounded-full bg-primary/80"
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            )}
          </motion.div>
        );
      })}

      <Footer />
    </div>
  );
};

export default Index;
