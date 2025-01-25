import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TimerSelectButton } from './TimerSelectButton';

export default function TimerSelect({
  selectedTimer,
  setSelectedTimer,
}: {
  selectedTimer: 'pomodoro' | 'shortBreak' | 'longBreak';
  setSelectedTimer: (selectedTimer: 'pomodoro' | 'shortBreak' | 'longBreak') => void;
}) {
  return (
    <View style={styles.container}>
      <TimerSelectButton onPress={() => setSelectedTimer('pomodoro')} isSelected={selectedTimer === 'pomodoro'}>
        pomodoro
      </TimerSelectButton>
      <TimerSelectButton onPress={() => setSelectedTimer('shortBreak')} isSelected={selectedTimer === 'shortBreak'}>
        short break
      </TimerSelectButton>
      <TimerSelectButton onPress={() => setSelectedTimer('longBreak')} isSelected={selectedTimer === 'longBreak'}>
        long break
      </TimerSelectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 327,
    height: 63,
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 32,
    backgroundColor: '#161932',
  },
});
