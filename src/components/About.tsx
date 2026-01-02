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
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
        
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          I am learning web development and basic automation by building real-world projects.
          My focus is on solving practical problems with simple, clear logic and modern tools.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-6">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
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
