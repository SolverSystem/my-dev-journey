import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Lead Follow-Up System",
    problem: "Coaches manually email every lead — takes 3-4 hours/week.",
    solution: "Automated system — 2-minute response, 24/7, personalized.",
    tools: ["Python", "Gemini API", "Gmail API", "Google Sheets API"],
    status: "Available for free pilot this week",
    demo: "mailto:jkhprof1234@gmail.com",
  },
  {
    title: "Todo Task Manager",
    problem: "People forget daily tasks and need simple tracking.",
    solution: "A simple app to add, complete, and delete tasks.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: "https://todaysworklist.netlify.app/",
  },
  {
    title: "Calculator App",
    problem: "Need quick calculations without heavy apps.",
    solution: "A clean calculator with basic arithmetic functions.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: "https://calculator-c25ade.netlify.app/",
  },
  {
    title: "Quiz App",
    problem: "Learning without interaction is boring.",
    solution: "Interactive quiz with score tracking.",
    tools: ["HTML", "CSS", "JavaScript"],
    demo: "https://quizforbrain.netlify.app/",
  },
  {
    title: "Weather App",
    problem: "Users want instant weather updates for cities.",
    solution: "Fetches live weather data using an API.",
    tools: ["JavaScript", "Weather API", "AI Builder"],
    demo: "https://tempofanycity.lovable.app",
  },
  {
    title: "URL Shortener (Frontend Demo)",
    problem: "Long URLs are hard to share.",
    solution: "Frontend demo that generates short links with copy option.",
    tools: ["JavaScript", "AI Builder"],
    demo: "https://shorturlp.lovable.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-foreground mb-4">
          Projects
        </h2>
        <div className="accent-line mb-6" />
        <p className="text-muted-foreground mb-14 max-w-2xl text-lg leading-relaxed">
          Real projects built to solve practical problems. Each one taught me something new.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className="card-elevated p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.problem}
              </p>
              
              <div className="mb-5">
                <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">Solution</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool) => (
                  <Badge 
                    key={tool} 
                    variant="secondary" 
                    className="text-xs bg-secondary/80 text-secondary-foreground border-0 px-3 py-1"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                className="mt-auto w-full rounded-lg border-border hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ExternalLink className="ml-2 h-3.5 w-3.5" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
