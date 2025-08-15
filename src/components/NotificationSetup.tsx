import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, CheckCircle, AlertCircle } from "lucide-react";
import { useNotifications } from "@/hooks/useNotifications";
import { toast } from "@/hooks/use-toast";

const NotificationSetup = () => {
  const { permission, isSupported, requestPermission } = useNotifications();

  const handleEnableNotifications = async () => {
    const granted = await requestPermission();
    if (granted) {
      toast({
        title: "✅ Notifications Enabled",
        description: "You'll now receive dinner bell alerts!",
      });
    } else {
      toast({
        title: "❌ Notifications Denied",
        description: "Please enable notifications in your browser settings.",
        variant: "destructive"
      });
    }
  };

  if (!isSupported) {
    return (
      <Card className="mb-6 border-destructive">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-destructive" />
            Notifications Not Supported
          </CardTitle>
          <CardDescription>
            Your browser doesn't support notifications. Please use a modern browser.
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  if (permission === 'granted') {
    return (
      <Card className="mb-6 border-success">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-success" />
            Notifications Enabled
          </CardTitle>
          <CardDescription>
            You'll receive alerts when the dinner bell rings!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Enable Notifications
        </CardTitle>
        <CardDescription>
          Allow notifications to receive dinner bell alerts on this device.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleEnableNotifications}
          className="w-full"
          variant="outline"
        >
          Enable Notifications
        </Button>
      </CardContent>
    </Card>
  );
};

export default NotificationSetup;