import { database, ref, set } from '@/lib/firebase';

export const useBellRinger = () => {
  const ringBell = async () => {
    try {
      const bellRef = ref(database, 'dinner-bell/status');
      await set(bellRef, {
        isRinging: true,
        timestamp: new Date().toISOString(),
        ringId: Date.now() // Unique ID for each ring
      });

      // Clear the ringing status after 5 seconds
      setTimeout(async () => {
        await set(bellRef, {
          isRinging: false,
          timestamp: new Date().toISOString()
        });
      }, 5000);

      return true;
    } catch (error) {
      console.error('Failed to ring bell:', error);
      return false;
    }
  };

  return { ringBell };
};