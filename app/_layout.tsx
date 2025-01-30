import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { SettingsContextProvider } from '@/context/SettingsContext';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <SettingsContextProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </SettingsContextProvider>
    </>
  );
}
