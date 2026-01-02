import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "Basic Business Automation",
    whoFor: "Small business owners",
    problem: "Manual replies, missed leads, repetitive follow-ups waste time.",
    solution: "I build simple automation systems that handle basic tasks automatically.",
    outcome: "Saves time and reduces manual effort.",
  },
  {
    icon: Globe,
    title: "Simple Web Tools",
    whoFor: "Individuals and small teams",
    problem: "No lightweight tools for daily needs.",
    solution: "I build small web apps like trackers, forms, and utility tools.",
    outcome: "Fast, simple, and easy-to-use tools.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Services
        </h2>
        <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Simple solutions for real problems. No overcomplicated systems.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-primary text-sm">
                  For: {service.whoFor}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{service.problem}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Solution</p>
                  <p className="text-sm text-muted-foreground">{service.solution}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm text-primary font-medium">✓ {service.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
