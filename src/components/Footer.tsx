import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
          {/* Left - CTA */}
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's Work
              <span className="text-primary"> Together</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-md">
              Have a data challenge? Let's discuss how I can help transform your data into actionable insights.
            </p>
          </div>
          
          {/* Right - Contact */}
          <div className="flex flex-col justify-center">
            <a 
              href="mailto:lungelosigudla@gmail.com"
              className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-lg">lungelosigudla@gmail.com</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a 
              href="tel:+27834267848"
              className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="w-5 h-5 flex items-center justify-center text-primary font-bold text-sm">+</span>
                <span className="text-lg">27 83-426-7848</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lungelo Don Sigudla. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/lungelodon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            
            <a
              href="https://linkedin.com/in/lungelosigudla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
