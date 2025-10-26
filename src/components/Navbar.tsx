import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

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

  const openAnalyticTools = () => {
    window.location.href = "https://lungelosigudla.github.io/analytic-toolbelt/";
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="text-base font-medium tracking-tight">
              Lungelo Sigudla
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <Button variant="ghost" onClick={scrollToProjects} className="text-sm">
                Projects
              </Button>
              
              <Button variant="ghost" onClick={() => setIsContactModalOpen(true)} className="text-sm">
                Contact
              </Button>
              
              <Button variant="ghost" onClick={openAnalyticTools} className="text-sm">
                Tools
              </Button>
              
              <Button variant="ghost" onClick={downloadCV} className="text-sm">
                CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}