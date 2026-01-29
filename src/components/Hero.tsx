import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePositionEditor } from "@/components/ImagePositionEditor";
import { useAuth } from "@/hooks/useAuth";
import headshotImage from "/assets/headshot.png";
import { Settings2, ArrowRight, FileDown } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
  const { isAdmin } = useAuth();
  const [imagePosition, setImagePosition] = useState({ x: 50, y: 25 });
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const toastId = toast.loading("Preparing download...");
    
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/assets/Lungelo_Don_Sigudla_CV.pdf";
      link.download = "Lungelo_Don_Sigudla_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success("CV downloaded successfully!", { id: toastId });
    }, 800);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Overline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary font-medium tracking-[0.2em] text-sm uppercase">
                Data Scientist
              </span>
            </div>
            
            {/* Name - Large Typography */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-8">
              <span className="block text-foreground">Lungelo</span>
              <span className="block text-foreground">Don</span>
              <span className="block text-primary">Sigudla</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
              I transform complex data into strategic insights that drive 
              meaningful business decisions and measurable growth.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProjects} 
                size="lg" 
                className="h-14 px-8 text-base font-semibold tracking-wide rounded-none bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                View Projects
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={downloadCV} 
                variant="outline" 
                size="lg" 
                className="h-14 px-8 text-base font-semibold tracking-wide rounded-none border-2 border-foreground/20 hover:border-primary hover:text-primary transition-all"
              >
                <FileDown className="mr-3 h-5 w-5" />
                Download CV
              </Button>
            </div>
            
            {/* Stats Row */}
            <div className="flex gap-12 mt-16 pt-8 border-t border-border">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">ML</div>
                <div className="text-sm text-muted-foreground mt-1">Specialist</div>
              </div>
            </div>
          </div>
          
          {/* Right - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Frame accent */}
              <div className="absolute -inset-4 border border-primary/30" />
              <div className="absolute -inset-8 border border-border" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <img
                  src={headshotImage}
                  alt="Lungelo Don Sigudla"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  style={{
                    objectPosition: `${imagePosition.x}% ${imagePosition.y}%`,
                  }}
                />
                
                {/* Overlay accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {isAdmin && (
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-4 right-4 rounded-none"
                    onClick={() => setIsEditorOpen(true)}
                  >
                    <Settings2 className="h-4 w-4" />
                  </Button>
                )}
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
