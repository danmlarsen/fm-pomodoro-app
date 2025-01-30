import { TSettingsState, useSettings } from '@/context/SettingsContext';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SettingsFormTimeinput from './SettingsFormInput';
import SettingsFormFontRadioGroup from './SettingsFormFontRadioGroup';
import SettingsFormColorRadioGroup from './SettingsFormColorRadioGroup';
import Button from './ui/Button';
import React from 'react';
import SettingsFormCategoryTitle from './SettingsFormCategoryTitle';

export default function SettingsForm({ onSubmit }: { onSubmit: () => void }) {
  const { timers, themeFont, themeColor, setSettings } = useSettings();

  const [pomodoro, setPomodoro] = useState(timers.pomodoro.toString());
  const [shortBreak, setShortBreak] = useState(timers.shortBreak.toString());
  const [longBreak, setLongBreak] = useState(timers.longBreak.toString());
  const [selectedThemeFont, setSelectedThemeFont] = useState(themeFont);
  const [selectedThemeColor, setSelectedThemeColor] = useState(themeColor);

  function handleSubmit() {
    const newSettings: TSettingsState = {
      timers: {
        pomodoro: Math.max(Math.trunc(+pomodoro), 1),
        shortBreak: Math.max(Math.trunc(+shortBreak), 1),
        longBreak: Math.max(Math.trunc(+longBreak), 1),
      },
      themeFont: selectedThemeFont,
      themeColor: selectedThemeColor,
    };

    setSettings(newSettings);
    onSubmit();
  }

  return (
    <>
      <ScrollView style={styles.formContainer}>
        <View style={styles.formCategoryContainer}>
          <SettingsFormCategoryTitle>Time (Minutes)</SettingsFormCategoryTitle>
          <View style={styles.inputContainer}>
            <SettingsFormTimeinput label="pomodoro" value={pomodoro.toString()} onChange={setPomodoro} />
            <SettingsFormTimeinput label="short break" value={shortBreak.toString()} onChange={setShortBreak} />
            <SettingsFormTimeinput label="long break" value={longBreak.toString()} onChange={setLongBreak} />
          </View>
        </View>

        <View style={styles.formCategoryContainer}>
          <SettingsFormCategoryTitle>Font</SettingsFormCategoryTitle>
          <SettingsFormFontRadioGroup selectedThemeFont={selectedThemeFont} setSelectedThemeFont={setSelectedThemeFont} />
        </View>

        <View style={[styles.formCategoryContainer, { borderBottomWidth: 0 }]}>
          <SettingsFormCategoryTitle>Color</SettingsFormCategoryTitle>
          <SettingsFormColorRadioGroup selectedThemeColor={selectedThemeColor} setSelectedThemeColor={setSelectedThemeColor} />
        </View>
      </ScrollView>

      <View style={styles.submitContainer}>
        <Button onPress={handleSubmit}>Apply</Button>
      </View>
    </>
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
  submitContainer: {
    position: 'absolute',
    alignItems: 'center',
    left: 0,
    right: 0,
    bottom: 0,
    transform: [{ translateY: '50%' }],
  },
});
