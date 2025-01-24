import { createContext, useContext, useState } from 'react';

type TColors = '#F87070' | '#70F3F8' | '#D881F8';
type TFonts = 'sans' | 'serif' | 'mono';

type TSettingsState = {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  selectedFont: TFonts;
  selectedColor: TColors;
};

const initialState: TSettingsState = {
  pomodoroTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  selectedFont: 'sans',
  selectedColor: '#F87070',
};

type TSettingsContext = TSettingsState & {
  setColor(color: TColors): void;
  setFont(fontName: TFonts): void;
};

const SettingsContext = createContext<TSettingsContext | null>(null);

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) throw new Error('Settings context is not defined.');
  return context;
}

export function SettingsContextProvider({ children }: { children: React.ReactNode }) {
  const [settingsState, setSettingsState] = useState<TSettingsState>(initialState);

  function setColor(color: TColors) {
    setSettingsState(prev => ({ ...prev, selectedColor: color }));
  }

  function setFont(fontName: TFonts) {
    setSettingsState(prev => ({ ...prev, selectedFont: fontName }));
  }

  return (
    <SettingsContext.Provider
      value={{
        ...settingsState,
        setColor,
        setFont,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
