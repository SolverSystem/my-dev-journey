import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
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
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Real projects built to solve practical problems. Each one taught me something new.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.problem}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">{project.solution}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-4 group-hover:border-primary group-hover:text-primary"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
