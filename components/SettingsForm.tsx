import { useSettings } from '@/context/SettingsContext';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import SettingsFormTimeinput from './SettingsFormInput';
import RadioItem from './RadioItem';
import { GlobalStyles } from '@/constants/GlobalStyles';

export default function SettingsForm() {
  const { timers, themeFont, themeColor } = useSettings()!;

  const [pomodoro, setPomodoro] = useState(timers.pomodoro);
  const [shortBreak, setShortBreak] = useState(timers.shortBreak);
  const [longBreak, setLongBreak] = useState(timers.longBreak);
  const [selectedThemeFont, setSelectedThemeFont] = useState(themeFont);
  const [selectedThemeColor, setSelectedThemeColor] = useState(themeColor);

  return (
    <View style={styles.formContainer}>
      <View style={styles.formCategoryContainer}>
        <Text style={styles.titleText}>Time (Minutes)</Text>
        <View style={styles.inputContainer}>
          <SettingsFormTimeinput label="pomodoro" value={pomodoro.toString()} onChange={() => {}} />
          <SettingsFormTimeinput label="short break" value={shortBreak.toString()} onChange={() => {}} />
          <SettingsFormTimeinput label="long break" value={longBreak.toString()} onChange={() => {}} />
        </View>
      </View>

      <View style={styles.formCategoryContainer}>
        <Text style={styles.titleText}>Font</Text>
        <View style={styles.radioGroup}>
          <RadioItem
            value="sans"
            onPress={() => setSelectedThemeFont('sans')}
            selected={selectedThemeFont === 'sans'}
            style={{ backgroundColor: '#EFF1FA' }}
            selectedStyle={{ backgroundColor: '#161932' }}
          />
          <RadioItem
            value="serif"
            onPress={() => setSelectedThemeFont('serif')}
            selected={selectedThemeFont === 'serif'}
            style={{ backgroundColor: '#EFF1FA' }}
            selectedStyle={{ backgroundColor: '#161932' }}
          />
          <RadioItem
            value="mono"
            onPress={() => setSelectedThemeFont('mono')}
            selected={selectedThemeFont === 'mono'}
            style={{ backgroundColor: '#EFF1FA' }}
            selectedStyle={{ backgroundColor: '#161932' }}
          />
        </View>
      </View>

      <View style={[styles.formCategoryContainer, { borderBottomWidth: 0 }]}>
        <Text style={styles.titleText}>Color</Text>
        <View style={styles.radioGroup}>
          <RadioItem
            value="themeColor1"
            onPress={() => setSelectedThemeColor(GlobalStyles.themeColor1)}
            selected={selectedThemeColor === GlobalStyles.themeColor1}
            style={{ backgroundColor: GlobalStyles.themeColor1 }}
          />
          <RadioItem
            value="themeColor2"
            onPress={() => setSelectedThemeColor(GlobalStyles.themeColor2)}
            selected={selectedThemeColor === GlobalStyles.themeColor2}
            style={{ backgroundColor: GlobalStyles.themeColor2 }}
          />
          <RadioItem
            value="themeColor3"
            onPress={() => setSelectedThemeColor(GlobalStyles.themeColor3)}
            selected={selectedThemeColor === GlobalStyles.themeColor3}
            style={{ backgroundColor: GlobalStyles.themeColor3 }}
          />
        </View>
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
