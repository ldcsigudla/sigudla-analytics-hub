import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePositionEditor } from "@/components/ImagePositionEditor";
import { useAuth } from "@/hooks/useAuth";
import headshotImage from "/assets/headshot.png";
import dataPatternBg from "/assets/data-pattern-bg.png";
import { Settings2 } from "lucide-react";

export function Hero() {
  const { isAdmin } = useAuth();
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 25 });
  const [isEditorOpen, setIsEditorOpen] = useState(false);
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
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-background via-background to-muted/20">
      {/* Subtle geometric background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image - Clean professional frame */}
          <div className="mb-10 relative inline-block">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full" />
              <div className="relative p-1 bg-background rounded-full shadow-2xl">
                <img
                  src={headshotImage}
                  alt="Lungelo Don Sigudla"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
                  style={{
                    objectPosition: `${imagePosition.x}% ${imagePosition.y}%`,
                  }}
                />
              </div>
            </div>
            {isAdmin && (
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-2 right-2 rounded-full shadow-lg"
                onClick={() => setIsEditorOpen(true)}
              >
                <Settings2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <ImagePositionEditor
            imageSrc={headshotImage}
            isOpen={isEditorOpen}
            onClose={() => setIsEditorOpen(false)}
            onSave={setImagePosition}
            initialPosition={imagePosition}
          />

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