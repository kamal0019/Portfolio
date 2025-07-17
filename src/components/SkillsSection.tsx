import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "JavaScript"]
    },
    {
      title: "Database Management Systems",
      skills: ["MySQL", "SQLite", "MongoDB", "Prisma"]
    },
    {
      title: "Development Environments",
      skills: ["VS Code", "Eclipse IDE", "Jupyter Notebook", "IntelliJ IDEA"]
    },
    {
      title: "Interpersonal Skills",
      skills: ["Team Collaboration", "Enthusiastic Contributor", "Team Adaptability", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit built through coursework, personal projects, and hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;