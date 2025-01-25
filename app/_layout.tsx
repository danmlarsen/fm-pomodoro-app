import { SettingsContextProvider } from '@/context/SettingsContext';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <SettingsContextProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SettingsContextProvider>
  );
}
