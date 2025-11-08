import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import headshotImage from "@/assets/headshot.png";

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToProjects = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const projectsSection = document.getElementById("projects");
      projectsSection?.scrollIntoView({ behavior: "smooth" });
    }
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/20 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Avatar className="w-10 h-10 border-2 border-primary">
                <AvatarImage src={headshotImage} alt="Lungelo Sigudla" className="object-cover" />
                <AvatarFallback className="bg-primary text-white">LS</AvatarFallback>
              </Avatar>
              <span className="text-xl font-bold text-foreground">
                Lungelo Sigudla
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                onClick={scrollToProjects}
                className="rounded-full bg-background/30 backdrop-blur-md text-foreground hover:text-foreground hover:bg-background/50 font-medium border border-border/30 hover:border-border/60 transition-all px-6"
              >
                Projects
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={downloadCV}
                className="rounded-full bg-background/30 backdrop-blur-md text-foreground hover:text-foreground hover:bg-background/50 font-medium border border-border/30 hover:border-border/60 transition-all px-6"
              >
                Download CV
              </Button>
              
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold border-0 shadow-lg hover:shadow-xl transition-all px-6"
              >
                Contact
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={openAnalyticTools}
                className="rounded-full bg-background/30 backdrop-blur-md text-foreground hover:text-foreground hover:bg-background/50 font-medium border border-border/30 hover:border-border/60 transition-all px-6"
              >
                Access My Data Tools
              </Button>
              
              <Avatar 
                className="cursor-pointer hover:ring-2 hover:ring-primary transition-all"
                onClick={() => navigate("/auth")}
              >
                <AvatarFallback className="bg-primary text-white">
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