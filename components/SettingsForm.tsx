import { TSettingsState, useSettings } from '@/context/SettingsContext';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import SettingsFormTimeinput from './SettingsFormInput';
import RadioItem from './RadioItem';
import { GlobalFontStyles, GlobalStyles } from '@/constants/GlobalStyles';
import { Ionicons } from '@expo/vector-icons';

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
        <View style={styles.radioGroup}>
          <RadioItem
            onPress={() => setSelectedThemeFont('sans')}
            selected={selectedThemeFont === 'sans'}
            style={{ backgroundColor: '#EFF1FA' }}
            selectedStyle={{ backgroundColor: '#161932' }}
          >
            <Text style={[GlobalFontStyles['sans'], selectedThemeFont === 'sans' && { color: 'white' }]}>Aa</Text>
          </RadioItem>
          <RadioItem
            onPress={() => setSelectedThemeFont('serif')}
            selected={selectedThemeFont === 'serif'}
            style={{ backgroundColor: '#EFF1FA' }}
            selectedStyle={{ backgroundColor: '#161932' }}
          >
            <Text style={[GlobalFontStyles['serif'], selectedThemeFont === 'serif' && { color: 'white' }]}>Aa</Text>
          </RadioItem>
          <RadioItem
            onPress={() => setSelectedThemeFont('mono')}
            selected={selectedThemeFont === 'mono'}
            style={{ backgroundColor: '#EFF1FA' }}
            selectedStyle={{ backgroundColor: '#161932' }}
          >
            <Text style={[GlobalFontStyles['mono'], selectedThemeFont === 'mono' && { color: 'white' }]}>Aa</Text>
          </RadioItem>
        </View>
      </View>

      <View style={[styles.formCategoryContainer, { borderBottomWidth: 0 }]}>
        <Text style={styles.titleText}>Color</Text>
        <View style={styles.radioGroup}>
          <RadioItem
            onPress={() => setSelectedThemeColor(GlobalStyles.themeColor1)}
            selected={selectedThemeColor === GlobalStyles.themeColor1}
            style={{ backgroundColor: GlobalStyles.themeColor1 }}
            selectedContent={<Ionicons name="checkmark" size={20} />}
          />
          <RadioItem
            onPress={() => setSelectedThemeColor(GlobalStyles.themeColor2)}
            selected={selectedThemeColor === GlobalStyles.themeColor2}
            style={{ backgroundColor: GlobalStyles.themeColor2 }}
            selectedContent={<Ionicons name="checkmark" size={20} />}
          />
          <RadioItem
            onPress={() => setSelectedThemeColor(GlobalStyles.themeColor3)}
            selected={selectedThemeColor === GlobalStyles.themeColor3}
            style={{ backgroundColor: GlobalStyles.themeColor3 }}
            selectedContent={<Ionicons name="checkmark" size={20} />}
          />
        </View>
      </View>

      <View>
        <Button title="Apply" onPress={handleSubmit} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
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
});
