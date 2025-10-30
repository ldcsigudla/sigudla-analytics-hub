import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

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
    navigate("/data-tools");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-foreground">
              Lungelo Sigudla
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <Button variant="ghost" onClick={downloadCV}>
                Download CV
              </Button>
              
              <Button variant="ghost" onClick={scrollToProjects}>
                View My Projects
              </Button>
              
              <Button variant="ghost" onClick={() => setIsContactModalOpen(true)}>
                Get in Touch
              </Button>
              
              <Button variant="ghost" onClick={openAnalyticTools}>
                Access My Data Software Tools
              </Button>
              
              <Avatar 
                className="cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => navigate("/auth")}
              >
                <AvatarFallback>
                  <User className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
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