import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Lungelo Don Sigudla</h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <span className="text-muted-foreground">lungelosigudla@gmail.com</span>
            <span className="text-muted-foreground">+27 83-426-7848</span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <a
              href="https://github.com/lungelodon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            
            <a
              href="https://linkedin.com/in/lungelosigudla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Lungelo Don Sigudla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}