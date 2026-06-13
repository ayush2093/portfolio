import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.08]" />

      <motion.div
        className="absolute -top-44 -right-24 w-[28rem] h-[28rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.28) 0%, transparent 68%)" }}
        animate={{
          x: [0, 90, 0],
          y: [0, 65, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -left-24 w-[24rem] h-[24rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(var(--secondary) / 0.24) 0%, transparent 70%)" }}
        animate={{
          x: [0, -110, 0],
          y: [0, -55, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[42%] left-[47%] w-[26rem] h-[26rem] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, hsl(34 90% 58% / 0.18) 0%, transparent 72%)" }}
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {[...Array(14)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "hsl(var(--primary) / 0.45)" : "hsl(var(--secondary) / 0.4)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.45,
          }}
          animate={{
            y: [0, -45, 0],
            x: [0, (Math.random() - 0.5) * 20, 0],
            opacity: [0.2, 0.65, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
