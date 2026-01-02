import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32">
      <div className="max-w-3xl text-center">
        <p className="text-primary font-semibold mb-5 tracking-wide text-sm uppercase">
          Hi, I'm a Developer
        </p>
        <h1 className="font-bold text-foreground mb-8">
          I Build Simple Web Apps & Automation Systems
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Learning by building real projects using HTML, CSS, JavaScript and AI tools
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group bg-primary-gradient hover:opacity-90 transition-opacity rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/25"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="rounded-xl px-8 py-6 text-base font-semibold border-border hover:border-primary/50 hover:bg-card transition-all"
          >
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
