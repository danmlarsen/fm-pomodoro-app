import { SettingsContextProvider } from '@/context/SettingsContext';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

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
