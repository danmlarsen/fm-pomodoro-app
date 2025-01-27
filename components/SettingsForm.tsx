import { TSettingsState, useSettings } from '@/context/SettingsContext';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SettingsFormTimeinput from './SettingsFormInput';
import RadioItem from './RadioItem';
import { GlobalFontStyles, GlobalStyles } from '@/constants/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';
import SettingsFormFontRadioGroup from './SettingsFormFontRadioGroup';
import SettingsFormColorRadioGroup from './SettingsFormColorRadioGroup';
import Button from './ui/Button';

export default function SettingsForm({ onSubmit }: { onSubmit: () => void }) {
  const { timers, themeFont, themeColor, setSettingsState } = useSettings()!;

  const [pomodoro, setPomodoro] = useState(timers.pomodoro.toString());
  const [shortBreak, setShortBreak] = useState(timers.shortBreak.toString());
  const [longBreak, setLongBreak] = useState(timers.longBreak.toString());
  const [selectedThemeFont, setSelectedThemeFont] = useState(themeFont);
  const [selectedThemeColor, setSelectedThemeColor] = useState(themeColor);

  function handleSubmit() {
    const newSettings: TSettingsState = {
      timers: {
        pomodoro: +pomodoro,
        shortBreak: +shortBreak,
        longBreak: +longBreak,
      },
      themeFont: selectedThemeFont,
      themeColor: selectedThemeColor,
    };

    setSettingsState(newSettings);
    onSubmit();
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.formCategoryContainer}>
        <Text style={styles.titleText}>Time (Minutes)</Text>
        <View style={styles.inputContainer}>
          <SettingsFormTimeinput label="pomodoro" value={pomodoro.toString()} onChange={setPomodoro} />
          <SettingsFormTimeinput label="short break" value={shortBreak.toString()} onChange={setShortBreak} />
          <SettingsFormTimeinput label="long break" value={longBreak.toString()} onChange={setLongBreak} />
        </View>
      </View>

      <View style={styles.formCategoryContainer}>
        <Text style={styles.titleText}>Font</Text>
        <SettingsFormFontRadioGroup selectedThemeFont={selectedThemeFont} setSelectedThemeFont={setSelectedThemeFont} />
      </View>

      <View style={[styles.formCategoryContainer, { borderBottomWidth: 0 }]}>
        <Text style={styles.titleText}>Color</Text>
        <SettingsFormColorRadioGroup selectedThemeColor={selectedThemeColor} setSelectedThemeColor={setSelectedThemeColor} />
      </View>

      <View style={styles.submitContainer}>
        <Button onPress={handleSubmit}>Apply</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },
  formCategoryContainer: {
    borderBottomColor: '#E3E1E1',
    borderBottomWidth: 1,
    paddingVertical: 24,
  },
  inputContainer: {
    gap: 8,
  },
  titleText: {
    textAlign: 'center',
    color: '#161932',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 4.23,
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  submitContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{ translateY: '50%' }],
  },
});
