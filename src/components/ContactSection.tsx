import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "prajapatkamal2106@gmail.com",
      href: "mailto:prajapatkamal2106@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7073411422",
      href: "tel:+917073411422"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Jaipur, Rajasthan",
      href: "#"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a collaborator on an exciting project, 
                  need help with a technical challenge, or just want to network with 
                  fellow developers, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {info.title}
                          </h4>
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border shadow-elegant animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Project Collaboration"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Hi Kamal, I'd love to discuss..."
                      required
                      rows={6}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;