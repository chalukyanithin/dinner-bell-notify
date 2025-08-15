import { Bell } from "lucide-react";
import DinnerBellButton from "@/components/DinnerBellButton";
import NotificationSetup from "@/components/NotificationSetup";
import NotificationListener from "@/components/NotificationListener";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      <NotificationListener />
      
      {/* Header */}
      <header className="pt-8 pb-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Bell className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Dinner Bell</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Cross-device family notification system
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto space-y-6">
          <NotificationSetup />
          
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Ring the Dinner Bell
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Share this URL with family members. Anyone can ring the bell and 
              everyone will get instant notifications!
            </p>
          </div>

          <DinnerBellButton />

          <div className="text-sm text-muted-foreground">
            <p>✨ Cross-device • 🔔 Loud notifications • 📱 Works when locked</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="pb-8 text-center">
        <p className="text-xs text-muted-foreground">
          Simple family communication made easy
        </p>
      </footer>
    </div>
  );
};

export default Index;
