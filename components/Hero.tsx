"use client";

import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen scroll-smooth flex items-center justify-center overflow-hidden">
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#070b14]/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-[#22d3ee]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22d3ee]/5 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundColor: "#020617",
          backgroundImage: `
            linear-gradient(#22d3ee 1px, transparent 1px),
            linear-gradient(90deg, #22d3ee 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22d3ee]/10 border border-[#22d3ee]/20 text-[#22d3ee] text-sm font-medium">
              <span className="w-2 h-2 bg-[#22d3ee] rounded-full animate-pulse" />
              Disponível para novos projetos
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-[#f8fafc]"
          >
            Olá, sou <span className="text-[#22d3ee]">Aristide Miguel</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#9ca3af] font-heading font-medium mb-4"
          >
            Desenvolvedor Web Front-End
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-[#9ca3af] max-w-2xl mx-auto mb-10"
          >
            Construo interfaces modernas, responsivas e performáticas com{" "}
            <span className="text-[#22d3ee] font-medium">React</span>,{" "}
            <span className="text-[#22d3ee] font-medium">Next.js</span> e{" "}
            <span className="text-[#22d3ee] font-medium">Tailwind CSS</span>
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              className="bg-[#22d3ee] text-[#020617] shadow hover:shadow-[#22d3ee]  hover:bg-[#22d3ee]/90"
            >
              <a href="#projetos">
                <Briefcase className="w-5 h-5" />
                Ver Projetos
              </a>
            </Button>

            <Button
              asChild
              className="bg-[#111827] text-[#f8fafc] border border-[#1f2937] hover:bg-[#1f2937]"
            >
              <a href="#contacto">
                <Mail className="w-5 h-5" />
                Entrar em Contacto
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute translate-y-3/1 bottom-10 left-1/2 -translate-x-1/2"
        >
          <a
            href="#sobre"
            className="flex flex-col items-center gap-2 text-[#9ca3af] hover:text-[#22d3ee] transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
