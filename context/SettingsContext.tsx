import { createContext, useContext, useState } from 'react';
import { MMKV } from 'react-native-mmkv';

export type TColors = string;
export type TFonts = 'sans' | 'serif' | 'mono';
export type TTimer = 'pomodoro' | 'shortBreak' | 'longBreak';

export type TSettingsState = {
  timers: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  themeFont: TFonts;
  themeColor: TColors;
};

const storage = new MMKV();

const initialState: TSettingsState = {
  timers: {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
  },
  themeFont: 'sans',
  themeColor: '#F87070',
};

type TSettingsContext = TSettingsState & {
  setSettings(prev: TSettingsState): void;
  setThemeColor(color: TColors): void;
  setThemeFont(fontName: TFonts): void;
  setTimerDuration(timer: TTimer, duration: number): void;
};

const SettingsContext = createContext<TSettingsContext | null>(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === null) throw new Error('Settings context is not defined.');
  return context;
}

export function SettingsContextProvider({ children }: { children: React.ReactNode }) {
  let storedState: TSettingsState | undefined;
  if (storage.contains('settings')) {
    const settingsJson = storage.getString('settings')!;
    storedState = JSON.parse(settingsJson);
  }

  const [settingsState, setSettingsState] = useState<TSettingsState>(storedState ? storedState : initialState);

  function setThemeColor(color: TColors) {
    setSettingsState(prev => ({ ...prev, selectedColor: color }));
  }

  function setThemeFont(fontName: TFonts) {
    setSettingsState(prev => ({ ...prev, selectedFont: fontName }));
  }

  function setTimerDuration(timer: TTimer, duration: number) {
    setSettingsState(prev => ({ ...prev, timers: { ...prev.timers, [timer]: duration } }));
  }

  function setSettings(newSettings: TSettingsState) {
    setSettingsState(newSettings);
    storage.set('settings', JSON.stringify(newSettings));
  }

  return (
    <SettingsContext.Provider
      value={{
        ...settingsState,
        setSettings,
        setThemeColor,
        setThemeFont,
        setTimerDuration,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
