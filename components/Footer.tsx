"use client";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-2 border-t border-[#1f2937]">
      <div className="">
        <div className="flex flex-col md:flex-row items-center justify-around gap-4">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Aristide Miguel
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Aristidesmiguel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-[#22d3ee]/20 flex items-center justify-center text-muted-foreground hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aristides-miguel-06234136a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-[#22d3ee]/20 flex items-center justify-center text-muted-foreground hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              href="miguelaristides21@gmail.com"
              className="w-7 h-7 rounded-lg bg-[#22d3ee]/20 flex items-center justify-center text-muted-foreground hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
