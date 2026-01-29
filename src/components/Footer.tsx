import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/80 via-muted/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name with gradient */}
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Lungelo Don Sigudla
            </span>
          </h3>
          
          {/* Contact info with icons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="mailto:lungelosigudla@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span>lungelosigudla@gmail.com</span>
            </a>
            <a 
              href="tel:+27834267848" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span>+27 83-426-7848</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href="https://github.com/lungelodon"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/in/lungelosigudla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-border hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent mx-auto mb-6" />

          <p className="text-sm text-muted-foreground">
            © 2025 Lungelo Don Sigudla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}