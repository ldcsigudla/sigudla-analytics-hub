import { Button } from "@/components/ui/button";
import headshotImage from "/assets/headshot.png";
import dataPatternBg from "/assets/data-pattern-bg.png";

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/Lungelo_Don_Sigudla_CV.pdf";
    link.download = "Lungelo_Don_Sigudla_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${dataPatternBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={headshotImage}
              alt="Lungelo Don Sigudla"
              className="w-56 h-56 rounded-full mx-auto object-cover object-[center_25%] shadow-lg"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Lungelo Don </span>
            <span className="text-primary-dark">Sigudla</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed">
            I transform complex data into clear insights that drive meaningful business decisions.
          </p>
          
          <p className="text-lg text-muted-foreground mb-8">
            I specialize in advanced analytics, machine learning, and data visualization
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={scrollToProjects} size="lg" className="text-lg px-8">
              View My Projects
            </Button>
            
            <Button onClick={downloadCV} variant="outline" size="lg" className="text-lg px-8">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}