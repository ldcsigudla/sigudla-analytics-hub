import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ContactModal } from "./ContactModal";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToProjects = () => {
    setIsMobileMenuOpen(false);
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
    setIsMobileMenuOpen(false);
    navigate("/data-tools");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              onClick={() => navigate("/")}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">LS</span>
              </div>
              <span className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Lungelo Sigudla
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={scrollToProjects}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Projects
              </button>
              
              <button 
                onClick={downloadCV}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Resume
              </button>
              
              <button 
                onClick={openAnalyticTools}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
              >
                Tools
              </button>
              
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="h-11 px-6 text-sm font-semibold tracking-wide rounded-none bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              <button 
                onClick={scrollToProjects}
                className="text-left py-3 text-lg font-medium text-foreground border-b border-border"
              >
                Projects
              </button>
              
              <button 
                onClick={downloadCV}
                className="text-left py-3 text-lg font-medium text-foreground border-b border-border"
              >
                Resume
              </button>
              
              <button 
                onClick={openAnalyticTools}
                className="text-left py-3 text-lg font-medium text-foreground border-b border-border"
              >
                Tools
              </button>
              
              <Button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsContactModalOpen(true);
                }}
                className="mt-4 h-14 text-base font-semibold tracking-wide rounded-none bg-primary text-primary-foreground"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </nav>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
