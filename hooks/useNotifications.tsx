import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';

export default function useNotifications() {
  const [notificationSound, setNotificationSound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    async function unload() {
      await unloadNotificationSound();
    }
    return () => {
      unload();
    };
  }, []);

  async function playNotificationSound() {
    const { sound } = await Audio.Sound.createAsync(require('@/assets/sounds/notification.mp3'), { shouldPlay: true });
    setNotificationSound(sound);
    await sound.playAsync();
  }

  async function unloadNotificationSound() {
    if (notificationSound) {
      await notificationSound.unloadAsync();
    }
  }

  return { playNotificationSound };
}
