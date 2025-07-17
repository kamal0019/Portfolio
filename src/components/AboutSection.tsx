import { Code, Database, Globe, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in React.js, Node.js, and modern frameworks"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Proficient in MongoDB, MySQL, SQLite, and Prisma"
    },
    {
      icon: Globe,
      title: "AI & Automation",
      description: "Built AI-powered solutions with OpenAI and workflow automation"
    },
    {
      icon: Zap,
      title: "Team Collaboration",
      description: "Strong team adaptability and enthusiastic contributor"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a Computer Science Engineering student at JECRC University with a passion for 
              creating impactful software solutions. I excel in problem-solving and collaboration within team environments, 
              always seeking opportunities to contribute to organizational success through innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey in tech is driven by enthusiasm for effective communication and collaboration. 
                I focus on delivering impactful solutions using modern technologies like React.js, Node.js, 
                and various database management systems including MongoDB and SQL-based systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me enjoying cricket, exploring meaningful cinema, 
                or contributing to community initiatives like blood donation drives and school sports events.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardContent className="p-6 text-center">
                    <highlight.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;