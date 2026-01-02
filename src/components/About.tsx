import { Code2, Cpu, Sparkles, FileCode, Palette } from "lucide-react";

const skills = [
  { name: "HTML", icon: FileCode },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: Code2 },
  { name: "Basic Automation", icon: Cpu },
  { name: "AI Tools (Lovable, Bolt)", icon: Sparkles },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-foreground mb-4">
          About Me
        </h2>
        <div className="accent-line mb-10" />
        
        <p className="text-lg md:text-xl text-muted-foreground mb-14 max-w-2xl leading-relaxed">
          I am learning web development and basic automation by building real-world projects.
          My focus is on solving practical problems with simple, clear logic and modern tools.
        </p>

        <h3 className="text-lg font-semibold text-foreground mb-6">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/40 hover:bg-card-elevated transition-all duration-200"
            >
              <skill.icon className="h-4 w-4 text-primary" />
              <span className="text-foreground text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
