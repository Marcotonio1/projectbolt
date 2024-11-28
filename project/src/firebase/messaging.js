import { messaging } from './config';
import { getToken } from 'firebase/messaging';

export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'YOUR_VAPID_KEY'
      });
      return token;
    }
    throw new Error('Notification permission denied');
  } catch (error) {
    console.error('Error requesting notification permission:', error);
    throw error;
  }
};