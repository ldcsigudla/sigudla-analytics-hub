import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Mail, Phone, Bot } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const navigate = useNavigate();

  const handleChatWithAI = () => {
    onClose();
    // Navigate to AI chat page (to be created)
    navigate("/ai-chat");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <div className="flex items-center justify-between p-6">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <button
            onClick={onClose}
            className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="space-y-4 px-6 pb-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="text-foreground">lungelosigudla@gmail.com</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-primary" />
            <span className="text-foreground">+27 83-426-7848</span>
          </div>

          <div className="pt-4 border-t">
            <Button 
              onClick={handleChatWithAI}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold"
            >
              <Bot className="w-4 h-4 mr-2" />
              Chat to my AI personality (BOT)
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              Chat with AI me for any deeper questions you might have about me
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}