import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <p className="text-primary font-medium mb-4 tracking-wide">
          Hi, I'm a Developer
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          I Build Simple Web Apps & Automation Systems
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Learning by building real projects using HTML, CSS, JavaScript and AI tools
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
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
