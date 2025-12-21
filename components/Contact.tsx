"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "miguelaristides21@gmail.com",
    href: "miguelaristides21@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/aristides-miguel",
    href: "https://www.linkedin.com/in/aristides-miguel-06234136a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@aristidesmiguel",
    href: "https://github.com/Aristidesmiguel",
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contacto" className="relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-[#22d3ee] text-sm font-medium tracking-wider uppercase mb-4 block">
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Vamos <span className="text-[#22d3ee]">trabalhar juntos</span>?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            Estou disponível para oportunidades de emprego e projetos freelance. 
            Entre em contacto e vamos construir algo incrível.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-[#0b1220] border border-[#1f2937] card-hover"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <link.icon className="w-6 h-6 text-[#22d3ee]" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-1">
                  {link.label}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-[#22d3ee]">
                  {link.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          >
            <h3 className="font-heading text-xl font-bold text-foreground mb-3">
              Recrutador ou cliente?
            </h3>
            <p className="text-muted-foreground mb-6">
              Tenho disponibilidade para novos desafios. Vamos conversar sobre como posso contribuir para o seu projeto ou equipa.
            </p>
            <Button size="lg" asChild>
              <a target="_blank" href="https://wa.me/244951754124">
                Enviar Mensagem
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
