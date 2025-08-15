import { Button } from "@/components/ui/button";
import { Bell, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const DinnerBellButton = () => {
  const [isRinging, setIsRinging] = useState(false);
  const [justRang, setJustRang] = useState(false);

  const handleRingBell = async () => {
    if (isRinging) return;
    
    setIsRinging(true);
    
    // Show immediate feedback
    toast({
      title: "🔔 Dinner Bell Ringing!",
      description: "Nithin will be notified that dinner is ready.",
    });

    // Simulate bell ringing animation
    setTimeout(() => {
      setIsRinging(false);
      setJustRang(true);
      
      // Reset the "just rang" state after 3 seconds
      setTimeout(() => {
        setJustRang(false);
      }, 3000);
    }, 800);
  };

  return (
    <div className="relative">
      <Button
        onClick={handleRingBell}
        disabled={isRinging}
        variant="dinnerBell"
        size="xl"
        className={`
          relative overflow-hidden
          ${isRinging ? 'animate-bell-ring' : ''}
          ${justRang ? 'animate-glow-pulse' : ''}
        `}
      >
        <div className="flex items-center justify-center gap-4">
          {justRang ? (
            <CheckCircle className="h-8 w-8" />
          ) : (
            <Bell className={`h-8 w-8 ${isRinging ? 'animate-bell-ring' : ''}`} />
          )}
          <span className="text-2xl font-bold">
            {isRinging 
              ? "Ringing..." 
              : justRang 
                ? "Notification Sent!" 
                : "Ring Dinner Bell"
            }
          </span>
        </div>
        
        {/* Ripple effect */}
        {isRinging && (
          <div className="absolute inset-0 bg-primary-glow/20 animate-ping rounded-full" />
        )}
      </Button>
    </div>
  );
};

export default DinnerBellButton;