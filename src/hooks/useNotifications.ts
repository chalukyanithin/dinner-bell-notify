import { useState, useEffect } from 'react';
import { database, ref, onValue, off } from '@/lib/firebase';

export const useNotifications = () => {
  const [permission, setPermission] = useState<NotificationPermission>('default');
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    setIsSupported('Notification' in window);
    if ('Notification' in window) {
      setPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if (!isSupported) return false;
    
    const result = await Notification.requestPermission();
    setPermission(result);
    return result === 'granted';
  };

  const showNotification = (title: string, options?: NotificationOptions) => {
    if (permission === 'granted') {
      const notification = new Notification(title, {
        icon: '/favicon.ico',
        badge: '/favicon.ico',
        requireInteraction: true,
        ...options
      });

      // Auto close after 10 seconds
      setTimeout(() => notification.close(), 10000);
      
      return notification;
    }
  };

  const listenForBellRings = (onBellRing: () => void) => {
    const bellRef = ref(database, 'dinner-bell/status');
    
    const unsubscribe = onValue(bellRef, (snapshot) => {
      const data = snapshot.val();
      if (data?.isRinging && data?.timestamp) {
        const ringTime = new Date(data.timestamp);
        const now = new Date();
        
        // Only trigger if the ring happened in the last 30 seconds
        if (now.getTime() - ringTime.getTime() < 30000) {
          onBellRing();
        }
      }
    });

    return () => off(bellRef, 'value', unsubscribe);
  };

  return {
    permission,
    isSupported,
    requestPermission,
    showNotification,
    listenForBellRings
  };
};