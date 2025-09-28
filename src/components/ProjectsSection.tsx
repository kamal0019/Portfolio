import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Role-Based Admin Dashboard",
      description: "Developed a full-stack dashboard using React.js and Node.js with role-based access for Admin, Accountant, and Customer. Integrated Clerk Authentication for secure login and protected routes. Admin can manage users, Accountant handles transactions, Customer can view data. Used MongoDB for storing user and role-based access data.",
      image: project1,
      technologies: ["React.js", "Node.js", "MongoDB", "Clerk Authentication"],
      liveUrl: "https://officexmangement.vercel.app/login",
      githubUrl: "https://github.com/kamal0019/OfficeXMangement",
      featured: true
    },
    {
      title: "WhatsApp Bot for Bill Automation (AI + Twilio)",
      description: "Built an AI-powered WhatsApp bot using n8n, OpenAI, and Twilio API. Automated bill generation and dispatch for e-commerce orders. Integrated workflows in n8n for real-time responses and billing logic. Enabled users to request invoices, get payment status, and receive confirmations instantly.",
      image: project2,
      technologies: ["n8n", "OpenAI", "Twilio API", "Node.js"],
      liveUrl: "https://whatsapp-bill-automation.vercel.app/",
      githubUrl: "https://github.com/kamal0019/WhatsApp-Bill-Automation",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating technical skills and creative problem-solving
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover:shadow-elegant transition-all duration-300 animate-slide-up overflow-hidden ${
                  project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={project.featured ? 'lg:order-2' : ''}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>

                <div className={`p-6 ${project.featured ? 'lg:order-1 lg:flex lg:flex-col lg:justify-center' : ''}`}>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">
                          <ExternalLink size={16} className="mr-2" />
                          Live Demo
                        </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                          <Github size={16} className="mr-2" />
                          Source Code
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
