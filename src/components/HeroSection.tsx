import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground">Kamal Prajapat</span>
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Computer Science Student
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Enthusiastic Computer Science student with strong problem-solving skills and proficiency in multiple programming languages. Seeking opportunities to apply technical expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
         <div className="flex justify-center space-x-6 mb-12">
  <a href="https://github.com/kamal0019" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
      <Github size={24} />
    </Button>
  </a>

  <a href="https://www.linkedin.com/in/kamalprajapat1" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
      <Linkedin size={24} />
    </Button>
  </a>

  <a href="mailto:prajapatkamal2106@gmail.com" target="_blank" rel="noopener noreferrer">
    <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
      <Mail size={24} />
    </Button>
  </a>
</div>


          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => scrollToSection("#about")}
              className="hover:text-primary"
            >
              <ArrowDown size={24} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
