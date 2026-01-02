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
    <section id="services" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-foreground mb-4">
          Services
        </h2>
        <div className="accent-line mb-6" />
        <p className="text-muted-foreground mb-14 max-w-2xl text-lg leading-relaxed">
          Simple solutions for real problems. No overcomplicated systems.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="card-elevated p-8 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-primary text-sm font-medium mb-6">
                For: {service.whoFor}
              </p>
              
              <div className="space-y-5">
                <div>
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">Problem</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground/80 uppercase tracking-wide mb-2">Solution</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.solution}</p>
                </div>
                <div className="pt-5 border-t border-border">
                  <p className="text-sm text-primary font-semibold flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center text-xs">✓</span>
                    {service.outcome}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
