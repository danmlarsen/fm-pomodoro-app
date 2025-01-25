import { createContext, useContext, useState } from 'react';

export type TColors = string;
export type TFonts = 'sans' | 'serif' | 'mono';
export type TTimer = 'pomodoro' | 'shortBreak' | 'longBreak';

type TSettingsState = {
  timers: {
    pomodoro: number;
    shortBreak: number;
    longBreak: number;
  };
  themeFont: TFonts;
  themeColor: TColors;
};

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
  setThemeColor(color: TColors): void;
  setThemeFont(fontName: TFonts): void;
  setTimerDuration(timer: TTimer, duration: number): void;
};

const SettingsContext = createContext<TSettingsContext | null>(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) throw new Error('Settings context is not defined.');
  return context;
}

export function SettingsContextProvider({ children }: { children: React.ReactNode }) {
  const [settingsState, setSettingsState] = useState<TSettingsState>(initialState);

  function setThemeColor(color: TColors) {
    setSettingsState(prev => ({ ...prev, selectedColor: color }));
  }

  function setThemeFont(fontName: TFonts) {
    setSettingsState(prev => ({ ...prev, selectedFont: fontName }));
  }

  function setTimerDuration(timer: TTimer, duration: number) {
    setSettingsState(prev => ({ ...prev, timers: { ...prev.timers, [timer]: duration } }));
  }

  return (
    <SettingsContext.Provider
      value={{
        ...settingsState,
        setThemeColor,
        setThemeFont,
        setTimerDuration,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
