import { useEffect } from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { toast } from '@/hooks/use-toast';

const NotificationListener = () => {
  const { permission, showNotification, listenForBellRings } = useNotifications();

  useEffect(() => {
    if (permission !== 'granted') return;

    const playBellSound = () => {
      // Create audio element for bell sound
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmIVBy2F0PHegzoIGGu9');
      audio.volume = 0.8;
      audio.play().catch(console.error);
    };

    const handleBellRing = () => {
      // Show notification
      showNotification('🔔 Dinner is Ready!', {
        body: 'Mom is calling you for dinner',
        tag: 'dinner-bell',
        requireInteraction: true
      });

      // Play sound
      playBellSound();

      // Show toast for immediate feedback
      toast({
        title: "🔔 Dinner Bell!",
        description: "Mom is calling you for dinner",
      });
    };

    // Listen for bell rings
    const unsubscribe = listenForBellRings(handleBellRing);

    return unsubscribe;
  }, [permission, showNotification, listenForBellRings]);

  return null;
};

export default NotificationListener;