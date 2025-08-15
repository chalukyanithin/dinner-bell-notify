import { Button } from "@/components/ui/button";
import { Bell, CheckCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useBellRinger } from "@/hooks/useBellRinger";

const DinnerBellButton = () => {
  const [isRinging, setIsRinging] = useState(false);
  const [justRang, setJustRang] = useState(false);
  const { ringBell } = useBellRinger();

  const handleRingBell = async () => {
    if (isRinging) return;
    
    setIsRinging(true);
    
    // Ring the bell across all devices
    const success = await ringBell();
    
    if (success) {
      toast({
        title: "🔔 Dinner Bell Ringing!",
        description: "All devices will be notified that dinner is ready.",
      });
    } else {
      toast({
        title: "❌ Connection Error",
        description: "Failed to ring bell. Check your internet connection.",
        variant: "destructive"
      });
    }

    // Animation feedback
    setTimeout(() => {
      setIsRinging(false);
      setJustRang(true);
      
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