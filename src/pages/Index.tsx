import { Bell } from "lucide-react";
import DinnerBellButton from "@/components/DinnerBellButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
      {/* Header */}
      <header className="pt-8 pb-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Bell className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold text-foreground">Dinner Bell</h1>
        </div>
        <p className="text-muted-foreground text-lg">
          One-click family notification system
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 text-foreground">
              Ready to call Nithin for dinner?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Press the button below to instantly notify Nithin that dinner is ready. 
              He'll receive a loud notification on his phone, even if it's locked.
            </p>
          </div>

          <DinnerBellButton />

          <div className="mt-8 text-sm text-muted-foreground">
            <p>✨ Works instantly • 🔔 Loud notification • 📱 Even when phone is locked</p>
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
