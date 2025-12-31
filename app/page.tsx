import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import Technologies from "@/components/Tec";

export default function Home() {
  return (
    <>
      <Header />
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
}
