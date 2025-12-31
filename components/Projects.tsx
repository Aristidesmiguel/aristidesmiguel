"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, GripHorizontal, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [  
  {
    title: "Task Manager",
    description: "Aplicação de gestão de tarefas para organização intuitiva de projetos.",
    technologies: ["React", "TypeScript", "Firebase"],
    icon: GripHorizontal,
    image: "p1.png",
    demoUrl: "https://my-tasks-bay.vercel.app/",
    codeUrl: "https://github.com/Aristidesmiguel/My-tasks",
  },
  {
    title: "PetShop",
    description: "Somos uma petshop dedicada ao bem-estar do seu animal de estimação. Oferecemos produtos de qualidade, serviços de higiene e cuidados especializados para garantir saúde, conforto e felicidade ao seu pet.",
    technologies: ["HTML", "CSS"],
    image: "p2.png",
    icon: Wifi,
    demoUrl: "https://aristidesmiguel.github.io/petShop/",
    codeUrl: "https://github.com/Aristidesmiguel/petShop",
  },
  {
    title: "Biblioteca Nacional",
    description: "Projeto desenvolvido para a Biblioteca Nacional com o objetivo de modernizar o acesso ao acervo, facilitando a consulta, reserva e gestão de livros através de uma plataforma digital intuitiva, segura e de fácil utilização.",
    technologies: ["React", "TypeScript", "Firebase", "API google Books"],
    image: "p3.png",
    icon: Wifi,
    demoUrl: "#",
    codeUrl: "https://github.com/Aristidesmiguel/bibliotecaNacional",
  },
];



const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="my-40 relative">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-[#22d3ee] text-sm font-medium tracking-wider uppercase mb-4 block">
              Portfólio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Projetos <span className="text-[#22d3ee]">em destaque</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes, demonstrando competências técnicas e soluções práticas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative p-2.5"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#22d3ee]/10 to-[#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-[#0b1220] border border-[#1f2937] card-hover h-full flex flex-col">
          
                 { project.image ? (
                    <div className="rounded-2xl mb-1 group-hover:scale-95 transition-transform duration-300">
                      <img className="rounded-2xl" src={project.image} />
                    </div>
                 ) : (
                   <div className="w-14 h-14 rounded-xl bg-[#22d3ee]/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                 ) }

                  {/* Content */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-[#22d3ee] bg-[#22d3ee]/10 rounded-full "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="default" size="sm" asChild className="flex-1">
                      <a  href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
