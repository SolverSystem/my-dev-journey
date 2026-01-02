import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:jkhprof1234@gmail.com?subject=${subject}&body=${body}`;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the message.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 section-alt">
      <div className="max-w-xl mx-auto">
        <h2 className="text-foreground mb-4 text-center">
          Get In Touch
        </h2>
        <div className="accent-line mb-6 mx-auto" />
        <p className="text-muted-foreground mb-14 text-center text-lg leading-relaxed">
          Interested in working together or discussing a project?
        </p>

        <div className="card-elevated p-8">
          <div className="text-center mb-8">
            <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Contact Me</h3>
            <p className="text-muted-foreground text-sm">
              Email me directly at{" "}
              <a
                href="mailto:jkhprof1234@gmail.com"
                className="text-primary hover:underline font-semibold"
              >
                jkhprof1234@gmail.com
              </a>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background border-border focus:border-primary rounded-lg h-12 px-4"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background border-border focus:border-primary rounded-lg h-12 px-4"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="bg-background border-border focus:border-primary resize-none rounded-lg px-4 py-3"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary-gradient hover:opacity-90 transition-opacity rounded-xl h-12 text-base font-semibold shadow-lg shadow-primary/25"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
