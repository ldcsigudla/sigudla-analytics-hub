import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePositionEditor } from "@/components/ImagePositionEditor";
import { useAuth } from "@/hooks/useAuth";
import headshotImage from "/assets/headshot.png";
import dataPatternBg from "/assets/data-pattern-bg.png";
import { Settings2, MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";

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
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Professional ID Layout - No overlay */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
            
            {/* Left: Profile Image with Frame */}
            <div className="relative flex-shrink-0">
              <div className="relative">
                {/* Outer decorative frame */}
                <div className="absolute -inset-3 bg-gradient-to-br from-primary/40 via-primary/20 to-primary/40 rounded-lg" />
                {/* Inner frame */}
                <div className="absolute -inset-1.5 bg-background rounded-lg" />
                {/* Image container */}
                <div className="relative w-56 h-72 md:w-64 md:h-80 overflow-hidden rounded-lg border-4 border-primary/50 shadow-2xl">
                  <img
                    src={headshotImage}
                    alt="Lungelo Don Sigudla"
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: `${imagePosition.x}% ${imagePosition.y}%`,
                    }}
                  />
                </div>
                {isAdmin && (
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute -bottom-2 -right-2 rounded-full shadow-lg z-10"
                    onClick={() => setIsEditorOpen(true)}
                  >
                    <Settings2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Right: Profile Information */}
            <div className="flex-1 text-center lg:text-left">
                {/* Name */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <span className="text-foreground">Lungelo Don</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary font-semibold mb-6 tracking-wide">
                  DATA SCIENTIST & ANALYST
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-6" />

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                      <p className="text-foreground font-medium">Johannesburg, South Africa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Expertise</p>
                      <p className="text-foreground font-medium">ML, Analytics & Visualization</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Education</p>
                      <p className="text-foreground font-medium">BSc Computer Science</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">Contact</p>
                      <p className="text-foreground font-medium">Available for opportunities</p>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                  I transform complex data into clear insights that drive meaningful business decisions. 
                  Specializing in advanced analytics, machine learning, and data visualization.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button onClick={scrollToProjects} size="lg" className="text-lg px-8">
                    View My Projects
                  </Button>
                  
                  <Button onClick={downloadCV} variant="outline" size="lg" className="text-lg px-8">
                    Download CV
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImagePositionEditor
        imageSrc={headshotImage}
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        onSave={setImagePosition}
        initialPosition={imagePosition}
      />
    </section>
  );
}