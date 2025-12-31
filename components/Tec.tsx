"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technologies = [
  {
    name: "React",
    icon: "react.png",
    color: "from-cyan-500/20 to-cyan-500/5",
    description: "Biblioteca JavaScript para interfaces",
  },
  {
    name: "Next.js",
    text: "▲",
    color: "from-foreground/20 to-foreground/5",
    description: "Framework React para produção",
  },
  {
    name: "JavaScript",
    icon: "js.png",
    description: "ES6+ moderno e funcional",
  },
  {
    name: "Tailwind CSS",
    icon: "css.png",
    description: "Utility-first CSS framework",
  },
  {
    name: "Firebase",
    text: "🔥",
    description: "Backend as a Service",
  },
  {
    name: "Git & GitHub",
    icon: "github.png",
    description: "Controlo de versão",
  },
  {
    name: "TypeScript",
    icon: "type.png",
    description: "Superset do JavaScript",
  },
];

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologias" className="my-40 relative bg-[#0b1220]/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-[#22d3ee]  text-sm font-medium tracking-wider uppercase mb-4 block">
              Stack
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Tecnologias que <span className="text-[#22d3ee]">domino</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ferramentas e tecnologias que utilizo para transformar ideias em produtos digitais de alta qualidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-2.5"
              >
                <div className={`absolute inset-0  rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="relative p-6 h-60 md:p-8 rounded-2xl bg-[#0b1220] border border-[#1f2937] card-hover text-center">
                  <div className="mb-4 flex justify-center text-center items-center group-hover:scale-110 transition-transform duration-300">
                    <img className="w-1/2 h-1/2" src={tech.icon} /> 
                  </div>
                  <div className="text-8xl  flex justify-center items-center text-center group-hover:scale-110 transition-transform duration-300">
                      {tech.text}
                    </div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
