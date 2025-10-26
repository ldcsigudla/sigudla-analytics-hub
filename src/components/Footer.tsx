import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3">
              <div className="text-sm font-medium">Lungelo Don Sigudla</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>lungelosigudla@gmail.com</div>
                <div>+27 83-426-7848</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/lungelodon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              
              <a
                href="https://linkedin.com/in/lungelosigudla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}