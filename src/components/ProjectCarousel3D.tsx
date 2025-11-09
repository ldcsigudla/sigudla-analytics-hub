import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const getCardStyle = (index: number, totalSlides: number) => {
    const diff = index - selectedIndex;
    const normalizedDiff = diff > totalSlides / 2 ? diff - totalSlides : diff < -totalSlides / 2 ? diff + totalSlides : diff;
    
    const isCenter = normalizedDiff === 0;
    const absDistance = Math.abs(normalizedDiff);
    
    // Calculate circular angle
    const angle = normalizedDiff * (360 / Math.max(totalSlides, 5));
    
    // Scale: center is largest
    const scale = isCenter ? 1 : Math.max(0.65, 1 - absDistance * 0.15);
    
    // Circular 3D positioning
    const rotateY = angle;
    const translateZ = 350; // Radius of the circle - reduced for better visibility
    
    // Opacity: center is fully visible
    const opacity = isCenter ? 1 : Math.max(0.35, 1 - absDistance * 0.25);
    
    // Blur for depth of field
    const blur = isCenter ? 0 : absDistance * 2;

    return {
      transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      zIndex: isCenter ? 10 : Math.max(1, 10 - absDistance),
    };
  };

  return (
    <div className="relative w-full py-20">
      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background border-2 border-primary/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:border-primary shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6 text-primary" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/80 backdrop-blur-sm hover:bg-background border-2 border-primary/30 rounded-full p-3 transition-all duration-300 hover:scale-110 hover:border-primary shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6 text-primary" />
      </button>

      {/* 3D Scene Container with Perspective */}
      <div 
        style={{
          perspective: "1500px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Bird's Eye View Tilt Container */}
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-15deg)",
          }}
        >
          {/* Embla Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div 
              className="flex"
              style={{
                transformStyle: "preserve-3d",
                minHeight: "800px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {projects.map((project, index) => {
                const style = getCardStyle(index, projects.length);
                const isCenter = index === selectedIndex;

                return (
                  <div
                    key={project.id}
                    className="flex-shrink-0"
                    style={{
                      flexBasis: "450px",
                      transformStyle: "preserve-3d",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ...style,
                    }}
                  >
                    <Card 
                      className={`group hover:shadow-2xl transition-all duration-300 border-2 ${project.borderColor}/20 hover:${project.borderColor}/60 ${
                        isCenter ? "cursor-pointer" : "pointer-events-none"
                      }`}
                      style={{
                        width: "400px",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <CardHeader>
                        <div className="w-full h-56 bg-muted rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                        <CardDescription className="text-muted-foreground line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardFooter>
                        <div className="grid grid-cols-2 gap-2 w-full">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              onGithubClick(project.github);
                            }}
                            variant="outline"
                            size="sm"
                            className={`w-full rounded-full ${project.githubBg}`}
                            disabled={!isCenter}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </Button>
                          
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              onProjectClick(project.id);
                            }}
                            variant="outline"
                            size="sm"
                            className={`w-full rounded-full ${project.projectBg}`}
                            disabled={!isCenter}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
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
                              className={`w-full rounded-full ${project.downloadBg}`}
                              disabled={!isCenter}
                            >
                              <Download className="w-4 h-4 mr-2" />
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
                            className="w-full rounded-full bg-red-600/10 hover:bg-red-600/20 border-red-600/30 text-red-600 hover:text-red-700"
                            disabled={!isCenter}
                          >
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            Presentation Video
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex 
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
