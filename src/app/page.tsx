import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Trajectory from "@/components/Trajectory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#070b14] text-slate-100 selection:bg-blue-600/40 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
