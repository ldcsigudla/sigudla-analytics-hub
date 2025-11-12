import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download, Github, ChevronLeft, ChevronRight } from "lucide-react";

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
  const angleStep = 360 / totalProjects; // Degrees between each card
  const radius = 880; // Distance from center (translateZ value) - increased to prevent overlap

  const rotateNext = () => {
    setCurrentRotation((prev) => prev - angleStep);
  };

  const rotatePrev = () => {
    setCurrentRotation((prev) => prev + angleStep);
  };

  const goToSlide = (index: number) => {
    setCurrentRotation(-angleStep * index);
  };

  // Calculate which card is currently at front (closest to 0 degrees)
  const getCurrentIndex = () => {
    const normalized = (((-currentRotation % 360) + 360) % 360);
    const index = Math.round(normalized / angleStep) % totalProjects;
    return index;
  };

  const currentIndex = getCurrentIndex();

  return (
    <div className="relative w-full py-20">
      {/* Navigation Buttons */}
      <button
        onClick={rotatePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm hover:bg-background border-2 border-primary/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:border-primary shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>

      <button
        onClick={rotateNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/80 backdrop-blur-sm hover:bg-background border-2 border-primary/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:border-primary shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* 3D Carousel Scene */}
      <div 
        className="w-full flex justify-center items-center"
        style={{ 
          minHeight: "700px",
          perspective: "1500px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* 3D Carousel Container - This rotates */}
        <div
          className="relative"
          style={{
            width: "200px",
            height: "300px",
            transformStyle: "preserve-3d",
            transform: `rotateY(${currentRotation}deg)`,
            transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Individual Cards */}
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
                  className={`group hover:shadow-2xl transition-all duration-300 border-2 h-full ${project.borderColor}/20 hover:${project.borderColor}/60 ${
                    isActive ? "cursor-pointer" : "pointer-events-none opacity-70"
                  }`}
                  style={{
                    width: "100%",
                    height: "100%",
                    transformStyle: "preserve-3d",
                    transform: isActive ? "scale(1.05)" : "scale(0.95)",
                  }}
                >
                  <CardHeader className="p-2">
                    <div className="w-full h-24 bg-muted rounded-md flex items-center justify-center mb-1.5 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <CardTitle className="text-sm font-semibold leading-tight">{project.title}</CardTitle>
                    <CardDescription className="text-[10px] text-muted-foreground line-clamp-2 leading-tight">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardFooter className="p-2 pt-0">
                    <div className="grid grid-cols-2 gap-0.5 w-full">
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          onGithubClick(project.github);
                        }}
                        variant="outline"
                        size="sm"
                        className={`w-full rounded-full text-[9px] px-1 h-5 ${project.githubBg}`}
                        disabled={!isActive}
                      >
                        <Github className="w-2.5 h-2.5 mr-0.5" />
                        GitHub
                      </Button>
                      
                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          onProjectClick(project.id);
                        }}
                        variant="outline"
                        size="sm"
                        className={`w-full rounded-full text-[9px] px-1 h-5 ${project.projectBg}`}
                        disabled={!isActive}
                      >
                        <ExternalLink className="w-2.5 h-2.5 mr-0.5" />
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
                          className={`w-full rounded-full text-[9px] px-1 h-5 ${project.downloadBg}`}
                          disabled={!isActive}
                        >
                          <Download className="w-2.5 h-2.5 mr-0.5" />
                          Download
                        </Button>
                      )}

                      <Button
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://youtube.com/watch?v=${project.videoId || 'dQw4w9WgXcQ'}`, '_blank');
                        }}
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full text-[9px] px-1 h-5 bg-red-600/10 hover:bg-red-600/20 border-red-600/30 text-red-600 hover:text-red-700"
                        disabled={!isActive}
                      >
                        <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="currentColor">
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
