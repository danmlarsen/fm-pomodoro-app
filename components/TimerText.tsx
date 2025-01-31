import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '@/constants/GlobalStyles';
import { useSettings } from '@/context/SettingsContext';

export default function TimerText({ children }: { children: React.ReactNode }) {
  const { themeFont } = useSettings();

  return (
    <View style={styles.timerTextContainer}>
      <Text style={[styles.timerText, { fontFamily: GlobalStyles.fonts[themeFont] }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  timerTextContainer: {
    position: 'absolute',
    bottom: 82,
    left: 0,
    right: 0,
    transform: [{ translateY: '50%' }],
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  timerText: {
    color: '#D7E0FF',
    textTransform: 'uppercase',
    textAlign: 'center',
    letterSpacing: 13.13,
  },
});
