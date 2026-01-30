import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
interface Project {
  id: number;
  title: string;
  description: string;
  github: string;
  project?: string;
  download?: string;
  image: string;
  borderColor: string;
  githubBg: string;
  projectBg: string;
  downloadBg: string;
  videoId?: string;
}

interface ProjectCarousel3DProps {
  projects: Project[];
  onProjectClick: (projectId: number) => void;
  onGithubClick: (url: string) => void;
}

export function ProjectCarousel3D({ projects, onProjectClick, onGithubClick }: ProjectCarousel3DProps) {
  const [currentRotation, setCurrentRotation] = useState(0);
  const totalProjects = projects.length;
  const angleStep = 360 / totalProjects;
  const radius = 550; // Reduced for better visibility

  const rotateNext = () => {
    setCurrentRotation((prev) => prev - angleStep);
  };

  const rotatePrev = () => {
    setCurrentRotation((prev) => prev + angleStep);
  };

  const goToSlide = (index: number) => {
    setCurrentRotation(-angleStep * index);
  };

  const getCurrentIndex = () => {
    const normalized = (((-currentRotation % 360) + 360) % 360);
    const index = Math.round(normalized / angleStep) % totalProjects;
    return index;
  };

  const currentIndex = getCurrentIndex();

  return (
    <div className="relative w-full py-16">
      {/* Navigation Buttons */}
      <button
        onClick={rotatePrev}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 z-50 bg-card hover:bg-accent border border-border rounded-full p-4 transition-all duration-300 hover:scale-105 shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-5 h-5 text-foreground" />
      </button>

      <button
        onClick={rotateNext}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 z-50 bg-card hover:bg-accent border border-border rounded-full p-4 transition-all duration-300 hover:scale-105 shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-5 h-5 text-foreground" />
      </button>

      {/* 3D Carousel Scene */}
      <div 
        className="w-full flex justify-center items-center"
        style={{ 
          minHeight: "520px",
          perspective: "1200px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* 3D Carousel Container */}
        <div
          className="relative"
          style={{
            width: "320px",
            height: "420px",
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentRotation}deg)`,
            transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {projects.map((project, index) => {
            const angle = angleStep * index;
            const isActive = index === currentIndex;

            return (
              <div
                key={project.id}
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <Card 
                  className={`group transition-all duration-300 border h-full bg-card ${
                    isActive 
                      ? "cursor-pointer shadow-2xl border-primary/30" 
                      : "pointer-events-none opacity-50 border-border"
                  }`}
                  style={{
                    width: "320px",
                    height: "420px",
                    transformStyle: "preserve-3d",
                    transform: isActive ? "scale(1)" : "scale(0.85)",
                  }}
                >
                  <CardHeader className="p-4">
                    <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center mb-3 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mt-2">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="p-4 pt-0">
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('https://github.com/lungelodon', '_blank');
                        }}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs h-9"
                        disabled={!isActive}
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                        GitHub
                      </Button>
                      
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          onProjectClick(project.id);
                        }}
                        variant="default"
                        size="sm"
                        className="w-full text-xs h-9"
                        disabled={!isActive}
                      >
                        <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                        Report
                      </Button>
                      
                      {project.download && (
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.download, '_blank');
                          }}
                          variant="outline"
                          size="sm"
                          className="w-full text-xs h-9"
                          disabled={!isActive}
                        >
                          <Download className="w-3.5 h-3.5 mr-1.5" />
                          Download
                        </Button>
                      )}

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          toast.info("Still working on it! 🎬", {
                            description: "Video is currently being edited. Please keep an eye out for updates!",
                            duration: 4000,
                          });
                        }}
                        variant="outline"
                        size="sm"
                        className="w-full text-xs h-9 border-destructive/30 text-destructive hover:bg-destructive/10"
                        disabled={!isActive}
                      >
                        <svg className="w-3.5 h-3.5 mr-1.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        Video
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
