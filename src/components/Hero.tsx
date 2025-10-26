import { Button } from "@/components/ui/button";
import headshotImage from "/assets/headshot.png";

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
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <img
            src={headshotImage}
            alt="Lungelo Don Sigudla"
            className="w-32 h-32 rounded-full mx-auto object-cover object-[center_25%] ring-1 ring-border"
          />

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-medium">
              Data insights that drive decisions
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Advanced analytics, machine learning, and visualization for business growth
            </p>
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={scrollToProjects} size="lg" className="px-6">
              View Work
            </Button>
            
            <Button onClick={downloadCV} variant="outline" size="lg" className="px-6">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}