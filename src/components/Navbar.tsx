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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div 
              onClick={() => navigate("/")}
              className="text-xl font-bold text-white cursor-pointer hover:text-primary transition-colors"
            >
              Lungelo Sigudla
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={scrollToProjects}
                className="text-white hover:text-primary hover:bg-white/10 font-medium"
              >
                Projects
              </Button>
              
              <Button 
                variant="outline" 
                onClick={downloadCV}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-medium"
              >
                Download CV
              </Button>
              
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-semibold"
              >
                Contact
              </Button>
              
              <Button 
                variant="secondary" 
                onClick={openAnalyticTools}
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 font-semibold"
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