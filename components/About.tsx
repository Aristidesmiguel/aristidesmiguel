"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Rocket, Target, Zap } from "lucide-react";
import { Button } from "./ui/button";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Foco em boas práticas e código mantível",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas",
  },
  {
    icon: Target,
    title: "Resultados",
    description: "Projetos entregues com qualidade",
  },
  {
    icon: Zap,
    title: "Aprendizado",
    description: "Evolução técnica constante",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-[#22d3ee] text-sm font-medium tracking-wider uppercase mb-4 block">
              Sobre Mim
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Transformando ideias em{" "}
              <span className="text-[#22d3ee]">experiências digitais</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
              }
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#22d3ee]/20 to-[#22d3ee]/20 blur-xl" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#22d3ee] to-[#22d3ee] opacity-50" />

                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#070b14] shadow-2xl">
                  <img
                    src="./eu.jpeg"
                    alt="Aristides Miguel"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="absolute -bottom-2 -right-2 px-4 py-2 rounded-full bg-[#22d3ee]  text-sm font-medium shadow-lg"
                >
                  Front-End Dev
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um desenvolvedor web front-end apaixonado por criar
                interfaces que combinam{" "}
                <span className="text-[#22d3ee] font-medium">
                  design elegante
                </span>{" "}
                com{" "}
                <span className="text-[#22d3ee] font-medium">
                  funcionalidade robusta
                </span>
                .
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com foco em{" "}
                <span className="text-[#22d3ee] font-medium">React</span> e{" "}
                <span className="text-[#22d3ee] font-medium">Next.js</span>,
                desenvolvo aplicações modernas que proporcionam experiências de
                utilizador excepcionais. Cada projeto é uma oportunidade de
                aprender e entregar soluções de qualidade.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que o código de qualidade é aquele que resolve
                problemas reais de forma eficiente, mantível e escalável. Estou
                constantemente a evoluir as minhas competências para acompanhar
                as melhores práticas do mercado.
              </p>
              <a download href="Aristide Miguel.pdf">
                <Button className="bg-[#22d3ee] hover:bg-[#22d3ee]/80 cursor-pointer">
                  Baixar CV
                </Button>
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-[#0b1220] border border-[#1f2937] card-hover group text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-[#22d3ee]/10 flex items-center justify-center mb-4 group-hover:bg-[#22d3ee]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#22d3ee]" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
