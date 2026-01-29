import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImagePositionEditor } from "@/components/ImagePositionEditor";
import { useAuth } from "@/hooks/useAuth";
import headshotImage from "/assets/headshot.png";
import { Settings2, ArrowDown, Download } from "lucide-react";
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
    
    // Simulate a brief delay for better UX
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
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50 dark:from-background dark:via-background dark:to-background" />
      
      {/* Floating Decorative Orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-[15%] w-96 h-96 bg-purple-400/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-[20%] w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-[10%] w-48 h-48 bg-pink-400/10 rounded-full blur-3xl animate-pulse" />
      
      {/* Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image with Glow Effect */}
          <div className="mb-10 relative inline-block">
            {/* Outer glow ring */}
            <div className="absolute inset-0 w-60 h-60 mx-auto rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 blur-md opacity-40 scale-105" />
            
            {/* Inner ring */}
            <div className="relative w-60 h-60 mx-auto rounded-full p-1 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500">
              <img
                src={headshotImage}
                alt="Lungelo Don Sigudla"
                className="w-full h-full rounded-full object-cover shadow-2xl bg-background"
                style={{
                  objectPosition: `${imagePosition.x}% ${imagePosition.y}%`,
                }}
              />
            </div>
            
            {isAdmin && (
              <Button
                size="icon"
                variant="secondary"
                className="absolute bottom-2 right-2 rounded-full shadow-lg z-20"
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

          {/* Name with Gradient */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Lungelo Don </span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Sigudla</span>
          </h1>

          {/* Role Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">Data Scientist • ML Engineer • Analytics Expert</span>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-2xl mx-auto">
            I transform complex data into clear insights that drive meaningful business decisions.
          </p>
          
          <p className="text-lg text-muted-foreground/80 mb-10">
            Specializing in advanced analytics, machine learning, and data visualization
          </p>

          {/* Glassmorphic CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects} 
              size="lg" 
              className="text-lg px-8 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={downloadCV} 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 rounded-full glassmorphic-button hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
